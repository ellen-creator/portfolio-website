# Here is the entire code

```python
import streamlit as st
import requests
from bs4 import BeautifulSoup
import sqlite3
import pandas as pd
from datetime import datetime
from fpdf import FPDF
import plotly.express as px
import streamlit_authenticator as stauth
import io

# ==========================================
# 1. 초기 설정 및 DB 연동
# ==========================================
st.set_page_config(page_title="Accessibility Master", page_icon="🛡️", layout="wide")

def init_db():
    conn = sqlite3.connect('accessibility.db', check_same_thread=False)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, name TEXT, password TEXT, email TEXT)''')
    c.execute('''CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, url TEXT, score INTEGER, 
                  m_alt INTEGER, h_iss INTEGER, l_iss INTEGER, i_iss INTEGER, lang_iss INTEGER, date TEXT)''')
    conn.commit()
    return conn

conn = init_db()
c = conn.cursor()

# ==========================================
# 2. PDF 생성 클래스 (한글 폰트 대응 및 상세 레이아웃)
# ==========================================
class AccessibilityPDF(FPDF):
    def __init__(self):
        super().__init__(orientation='P', unit='mm', format='A4')
        try:
            # 폰트 등록 (파일명이 NanumGothic.ttf 인지 확인 필수!)
            self.add_font('Nanum', '', 'NanumGothic.ttf', uni=True)
        except:
            pass

    def header(self):
        self.set_fill_color(30, 58, 138) 
        self.rect(0, 0, 210, 30, 'F') 
        self.set_text_color(255, 255, 255)
        self.set_font('Nanum', '', 16)
        self.set_xy(0, 10)
        self.cell(0, 10, '웹 접근성 정밀 진단 보고서 (KWCAG 2.2)', 0, 1, 'C')
        self.ln(20)

    # 섹션 구분용 (파란색 배경)
    def add_section_title(self, title):
        self.set_font('Nanum', '', 14)
        self.set_text_color(30, 58, 138)
        self.set_fill_color(240, 244, 255)
        self.cell(0, 10, f" ■ {title}", 0, 1, 'L', 1)
        self.ln(3)

    # 개별 항목 진단 결과용
    def add_issue_detail(self, category, count, advice):
        self.set_font('Nanum', '', 11)
        self.set_text_color(0, 0, 0)
        status = "⚠️ 미준수" if count > 0 else "✅ 준수"
        self.cell(40, 10, f"[{category}]", 0, 0)
        self.cell(30, 10, f"상태: {status}", 0, 0)
        self.cell(0, 10, f"발견 건수: {count}건", 0, 1)
        self.set_font('Nanum', '', 10)
        self.set_text_color(100, 100, 100)
        self.multi_cell(0, 7, f"💡 조치 가이드: {advice}")
        self.ln(5)
        
    # [수정됨] 챕터 타이틀 (회색 배경 - 일반 텍스트 단락용)
    def chapter_title(self, title):
        self.set_font('Nanum', '', 12) # Arial에서 Nanum으로 변경
        self.set_fill_color(230, 230, 230)
        self.cell(0, 10, title, 0, 1, 'L', 1)
        self.ln(4)

    # [수정됨] 챕터 본문 (일반 텍스트 단락용)
    def chapter_body(self, body):
        self.set_font('Nanum', '', 10) # Arial에서 Nanum으로 변경
        self.multi_cell(0, 7, body)
        self.ln()
        
    # [추가] 푸터 (페이지 번호 표시)
    def footer(self):
        self.set_y(-15)
        self.set_font('Nanum', '', 8)
        self.set_text_color(128)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')
# ==========================================
# 3. 인증 및 세션 관리
# ==========================================
def fetch_creds():
    df = pd.read_sql_query("SELECT * FROM users", conn)
    creds = {"usernames": {}}
    for _, row in df.iterrows():
        creds["usernames"][row['username']] = {"name": row['name'], "password": row['password'], "email": row['email']}
    return creds

if 'credentials' not in st.session_state:
    st.session_state['credentials'] = fetch_creds()

authenticator = stauth.Authenticate(
    credentials=st.session_state['credentials'],
    cookie_name="access_master_v6",
    cookie_key="this_is_a_very_long_secret_signature_key_32_chars", 
    cookie_expiry_days=30
)

# ==========================================
# 4. 분석 엔진
# ==========================================
def analyze_accessibility(url):
    try:
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        imgs = soup.find_all('img')
        bad_images = [img.get('src') for img in imgs if not img.get('alt') or img.get('alt').strip() == ""]
        headings = [int(tag.name[1]) for tag in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])]
        h_iss = sum(1 for i in range(len(headings)-1) if headings[i+1]-headings[i] > 1)
        links = soup.find_all('a')
        l_iss = len([a.text.strip() for a in links if a.text.strip() in ["더보기", "클릭", "more", "detail"]])
        inputs = [i for i in soup.find_all('input') if i.get('type') not in ['hidden', 'submit']]
        i_iss = sum(1 for i in inputs if not i.get('id') or not soup.find('label', attrs={'for': i.get('id')}))
        lang_iss = 1 if not soup.find('html') or not soup.find('html').get('lang') else 0
        score = max(0, 100 - ((len(bad_images)*5) + (h_iss*10) + (l_iss*5) + (i_issues*5 if 'i_issues' in locals() else i_iss*5) + (lang_iss*20)))
        return score, len(bad_images), h_iss, l_iss, i_iss, lang_iss, datetime.now().strftime("%Y-%m-%d %H:%M:%S"), bad_images
    except: return None

# ==========================================
# 5. UI 메인 로직
# ==========================================
# --- 5. 로그인 / 회원가입 UI (에러 방지 강화) ---
if not st.session_state.get("authentication_status"):
    auth_tab1, auth_tab2 = st.tabs(["🔑 로그인", "👤 회원가입"])
    
    with auth_tab2:
        try:
            # 1. 회원가입 폼 호출
            # result는 사용자가 버튼을 누르기 전까지 None이거나 빈 값을 반환할 수 있음
            result = authenticator.register_user(location='main')
            
            # 2. 결과값이 존재하고, 실제 username이 반환되었을 때만 DB 저장 진행
            if result:
                email, username, name = result
                if username:  # 이 구간이 중요합니다 (None 체크)
                    # 세션 스테이트에 저장된 해싱된 비밀번호 추출
                    # 가입 성공 시 라이브러리가 자동으로 st.session_state['credentials']에 추가함
                    new_user_info = st.session_state['credentials']["usernames"].get(username)
                    
                    if i_new_user_info := new_user_info:
                        hashed_pw = i_new_user_info["password"]
                        
                        # DB에 중복 체크 후 저장 (에러 방지)
                        c.execute("INSERT OR IGNORE INTO users (username, name, password, email) VALUES (?, ?, ?, ?)",
                                  (username, name, hashed_pw, email))
                        conn.commit()
                        
                        st.success(f'축하합니다! {name}님, 회원가입이 완료되었습니다.')
                        st.info("로그인 탭으로 이동하여 접속해 주세요.")
                        # 데이터를 새로 고침하여 로그인 창에 반영
                        st.rerun()
        except Exception as e:
            # 초기 로딩 시 발생하는 불필요한 에러 메시지 숨김 처리
            if "None" not in str(e):
                st.error(f"회원가입 처리 중 알림: {e}")

    with auth_tab1:
        # 등록된 유저가 있는지 확인
        current_creds = st.session_state.get('credentials', {'usernames': {}})
        if not current_creds['usernames']:
            st.info("현재 등록된 사용자가 없습니다. 옆의 '회원가입' 탭에서 첫 계정을 만들어주세요.")
        else:
            try:
                # 정상적으로 유저가 있을 때만 로그인 창 표시
                authenticator.login(location="main")
            except Exception as e:
                st.error("로그인 시스템 초기화 중입니다. 잠시만 기다려주세요.")
            
# --- (상단 라이브러리 및 DB 초기화 로직은 기존과 동일) ---

if st.session_state.get("authentication_status"):
    current_user = st.session_state["username"]
    authenticator.logout("Logout", "sidebar")
    
    # 사용자 요청에 따른 메뉴 타이틀 재구성
    menu = st.sidebar.radio("메뉴 선택", ["🎯 실시간 진단", "📄 상세 분석 리포트", "📊 내 히스토리", "📚 KWCAG 가이드라인", "💡 중요성"])

    # 1. [🎯 실시간 진단] - 첫 화면 결과 브리핑
    if menu == "🎯 실시간 진단":
        st.title("🔍 실시간 웹 접근성 진단")
        url = st.text_input("분석할 사이트 URL을 입력하세요", "https://")
        
        if st.button("진단 시작"):
            res = analyze_accessibility(url)
            if res:
                score, m_alt, h_iss, l_iss, i_iss, lang_iss, date, imgs_list = res
                # 데이터 저장
                c.execute("INSERT INTO reports (username, url, score, m_alt, h_iss, l_iss, i_iss, lang_iss, date) VALUES (?,?,?,?,?,?,?,?,?)",
                          (current_user, url, score, m_alt, h_iss, l_iss, i_iss, lang_iss, date))
                conn.commit()
                
                # 결과 브리핑 (첫 화면)
                st.balloons()
                st.header(f"📊 진단 결과: {score}점")
                st.progress(score/100)
                
                col1, col2, col3, col4 = st.columns(4)
                col1.metric("이미지 누락", f"{m_alt}건")
                col2.metric("제목 구조", f"{h_iss}건")
                col3.metric("링크 텍스트", f"{l_iss}건")
                col4.metric("폼 레이블", f"{i_iss}건")
                
                st.success("✅ 진단이 완료되었습니다. '상세 분석 리포트' 메뉴에서 PDF를 다운로드할 수 있습니다.")
                # 최신 진단 결과를 세션에 임시 저장 (상세페이지 연동용)
                st.session_state['latest_res'] = {'url': url, 'score': score, 'm_alt': m_alt, 'h_iss': h_iss, 'l_iss': l_iss, 'i_iss': i_iss, 'date': date}

    # 2. [📄 상세 분석 리포트] - 상세 피드백 및 PDF 다운로드
    elif menu == "📄 상세 분석 리포트":
        st.title("📄 상세 분석 리포트")
        
        if 'latest_res' in st.session_state:
            data = st.session_state['latest_res']
            
            # --- [추가] 화면 출력용 상단 서머리 대시보드 ---
            st.subheader(f"🌐 분석 대상: {data['url']}")
            
            # 3개의 카드로 핵심 지표 요약
            s_col1, s_col2, s_col3 = st.columns(3)
            with s_col1:
                st.metric("종합 점수", f"{data['score']}점")
            with s_col2:
                # 점수에 따른 상태 진단
                status = "우수" if data['score'] >= 90 else "보통" if data['score'] >= 70 else "개선 필요"
                st.metric("진단 상태", status)
            with s_col3:
                # 주요 결함 합계
                total_err = data['m_alt'] + data['h_iss'] + data['l_iss'] + data['i_iss']
                st.metric("발견된 결함", f"{total_err}건")
            
            st.divider() # 화면 구분선

            

            # --- [유지] PDF 생성 시작 (여기서부터는 주신 코드와 100% 동일합니다) ---
            pdf = AccessibilityPDF()
            pdf.add_page()
            
            # 1. 요약 섹션
            pdf.add_section_title("진단 요약")
            pdf.set_font('Nanum', '', 12)
            pdf.set_text_color(0, 0, 0)
            pdf.cell(0, 10, f"종합 점수: {data['score']} / 100점", 0, 1)
            pdf.cell(0, 10, f"진단 일시: {data['date']}", 0, 1)
            pdf.ln(5)

            # 2. 상세 항목별 분석 및 해결책 (KWCAG 2.2 기준)
            pdf.add_section_title("항목별 정밀 분석 및 개선 권고")

            # 대체 텍스트
            pdf.add_issue_detail(
                "대체 텍스트", 
                data['m_alt'], 
                "모든 img 태그에 alt 속성을 추가하십시오. 장식용 이미지는 alt=''로 설정하고, 정보 전달용 이미지는 내용을 설명하는 텍스트를 반드시 기입해야 합니다."
            )

            # 제목 구조
            pdf.add_issue_detail(
                "제목 위계", 
                data['h_iss'], 
                "H1부터 H6까지 순차적으로 사용하십시오. H1 다음 바로 H3로 건너뛰는 등 위계를 무시하면 스크린 리더 사용자가 페이지 구조를 파악하기 어렵습니다."
            )

            # 폼 레이블
            pdf.add_issue_detail(
                "레이블 제공", 
                data['i_iss'], 
                "모든 input 태그에는 연결된 label 태그가 있어야 합니다. <label for='ID'>를 사용하여 명시적으로 연결하거나 title 속성을 활용하십시오."
            )

            # 링크 텍스트
            pdf.add_issue_detail(
                "링크 설명", 
                data['l_iss'], 
                "'더보기', '여기'와 같은 모호한 텍스트 대신 '공지사항 더보기'와 같이 목적지가 명확한 텍스트를 사용하십시오."
            )

            # 3. 법적 준수 안내
            pdf.ln(10)
            pdf.add_section_title("법적 준수 안내")
            pdf.set_font('Nanum', '', 10)
            pdf.set_text_color(50, 50, 50)
            pdf.multi_cell(0, 7, "본 사이트는 '장애인차별금지 및 권리구제 등에 관한 법률' 제21조에 의거하여 웹 접근성을 준수해야 합니다. 위 미준수 사항은 장애인의 정보 접근을 제한할 수 있으므로 조속한 수정을 권고합니다.")

            # --- PDF 다운로드 처리 ---
            pdf_raw = pdf.output(dest='S')
            # Streamlit bytearray 에러 방지 처리
            pdf_output = bytes(pdf_raw) if isinstance(pdf_raw, (bytearray, bytes)) else pdf_raw.encode('latin-1')

            st.download_button(
                label="📥 상세 정밀 리포트(PDF) 다운로드",
                data=pdf_output,
                file_name=f"Detailed_Analysis_{data['date']}.pdf",
                mime="application/pdf"
            )
            
            st.success("위 버튼을 클릭하여 정밀 가이드가 포함된 PDF를 내려받으세요.")
            
        else:
            st.info("실시간 진단을 먼저 수행하면 이곳에서 정밀 리포트를 생성할 수 있습니다.")

    # 3. [📊 내 히스토리] - 추이 그래프 및 과거 기록
    elif menu == "📊 내 히스토리":
        st.title("📊 나의 진단 이력 및 추이 분석")
        
        # 1. 현재 사용자가 진단했던 모든 사이트 목록 가져오기
        distinct_urls_df = pd.read_sql_query(
            "SELECT DISTINCT url FROM reports WHERE username = ?", 
            conn, params=(current_user,)
        )
        
        if not distinct_urls_df.empty:
            # 2. 사이트 선택 토글 (Selectbox)
            urls = distinct_urls_df['url'].tolist()
            selected_url = st.selectbox("📈 분석할 사이트를 선택하세요", urls)
            
            # 3. 선택된 사이트에 대한 데이터만 필터링
            df_filtered = pd.read_sql_query(
                "SELECT * FROM reports WHERE username = ? AND url = ? ORDER BY date ASC", 
                conn, params=(current_user, selected_url)
            )
            
            # 4. 선택된 사이트의 점수 추이 그래프
            st.subheader(f"🔍 '{selected_url}' 점수 변화 추이")
            
            if len(df_filtered) > 1:
                fig = px.line(df_filtered, x='date', y='score', 
                              title=f"시간 흐름에 따른 접근성 점수 변화", 
                              markers=True, line_shape='linear',
                              color_discrete_sequence=['#1E3A8A'])
                
                # 그래프 레이아웃 최적화
                fig.update_layout(xaxis_title="진단 일시", yaxis_title="접근성 점수 (100점 만점)")
                st.plotly_chart(fig, use_container_width=True)
            else:
                st.info("해당 사이트의 진단 기록이 1건입니다. 추이 그래프를 보려면 추가 진단을 진행해 주세요.")
                # 기록이 1건일 때는 지표 카드로 대체
                last_res = df_filtered.iloc[-1]
                st.metric(label="최근 점수", value=f"{last_res['score']}점")

            

            st.divider()
            
            # 5. 선택된 사이트의 상세 로그 표
            st.subheader(f"🗂️ '{selected_url}' 상세 기록")
            display_df = df_filtered[['date', 'score', 'm_alt', 'h_iss', 'l_iss', 'i_iss']].sort_values(by='date', ascending=False)
            st.dataframe(display_df, use_container_width=True)
            
        else:
            st.info("아직 누적된 진단 기록이 없습니다. '실시간 진단' 메뉴에서 첫 분석을 시작해 보세요!")

    # --- (가이드라인 및 중요성 섹션은 이전 보강된 텍스트 유지) ---

    elif menu == "📚 KWCAG 가이드라인":
        st.title("📚 한국형 웹 콘텐츠 접근성 지침 2.2 (KWCAG)")
        st.info("국가 표준(KS X 6113)에 근거한 웹 접근성 준수 설계의 핵심 원칙입니다.")

        # --- 원칙 1. 인식의 용이성 ---
        with st.expander("1. 인식의 용이성 (Perceivable) - 모든 정보는 인식 가능해야 함", expanded=True):
            st.markdown("""
            사용자가 시각, 청각 등 감각의 종류에 상관없이 콘텐츠를 동등하게 인식할 수 있어야 합니다.
            * **적절한 대체 텍스트**: 텍스트가 아닌 이미지, 아이콘 등은 그 의미를 파악할 수 있도록 텍스트(alt)를 제공해야 합니다.
            * **자막 제공**: 동영상, 오디오 등 멀티미디어에는 자막, 대본 또는 수어를 제공해야 합니다.
            * **색에 무관한 콘텐츠 인식**: 정보를 전달할 때 '색상'만으로 구분하지 않고 테두리, 패턴, 레이블을 함께 사용해야 합니다.
            * **명도 대비**: 텍스트와 배경 간의 대비는 **4.5:1 이상**이어야 저시력자나 고령자도 읽을 수 있습니다.
            """)
            st.image("https://www.w3.org/WAI/WCAG21/Working-Group-Notes/images/perceivable.png", caption="인식의 용이성 핵심 개념")

        # --- 원칙 2. 운용의 용이성 ---
        with st.expander("2. 운용의 용이성 (Operable) - 모든 기능은 조작 가능해야 함"):
            st.markdown("""
            사용자가 어떤 입력 장치(마우스, 키보드, 터치 등)를 사용하더라도 웹사이트를 컨트롤할 수 있어야 합니다.
            * **키보드 사용 보장**: 모든 메뉴, 버튼, 링크는 마우스 없이 **Tab키와 Enter키**만으로 이동 및 실행이 가능해야 합니다.
            * **초점(Focus) 이동**: 현재 어디를 클릭하려는지 시각적으로 명확한 테두리(Focus Ring)가 표시되어야 합니다.
            * **충분한 시간 제공**: 로그인 연장, 자동 슬라이드 등은 사용자가 직접 정지하거나 시간을 조절할 수 있어야 합니다.
            * **광과민성 발작 예방**: 초당 3~50회 주기로 번쩍이는 콘텐츠는 뇌전증 발작을 일으킬 수 있으므로 피해야 합니다.
            """)

        # --- 원칙 3. 이해의 용이성 ---
        with st.expander("3. 이해의 용이성 (Understandable) - 정보는 이해하기 쉬워야 함"):
            st.markdown("""
            콘텐츠의 내용이 명확하고, 작동 방식이 예측 가능하며 오류를 방지할 수 있어야 합니다.
            * **기본 언어 표시**: HTML 상단에 `<html lang="ko">`를 명시해야 스크린 리더가 한국어 엔진으로 올바르게 읽어줍니다.
            * **사용자 인터페이스 일관성**: 내비게이션 구조와 메뉴 위치가 페이지마다 동일하게 유지되어 혼란을 방지해야 합니다.
            * **오류 정정**: 입력 폼(회원가입 등)에서 오류가 발생하면 구체적으로 어느 항목이 틀렸는지, 어떻게 고치는지 안내해야 합니다.
            """)

        # --- 원칙 4. 견고성 ---
        with st.expander("4. 견고성 (Robust) - 미래 기술과도 호환되어야 함"):
            st.markdown("""
            다양한 보조 공학 기기(스크린 리더, 점자 단말기 등)와 미래의 브라우저에서도 콘텐츠가 정상 작동해야 합니다.
            * **마크업 오류 방지**: HTML 태그의 열고 닫음이 정확하고, 속성이 중복되지 않아야 보조 기기가 웹페이지를 올바르게 해석합니다.
            * **웹 애플리케이션 접근성**: 자바스크립트로 구현된 동적 요소에도 적절한 이름(Name), 역할(Role), 상태(State) 정보를 제공해야 합니다.
            """)

        st.divider()
        st.subheader("✅ 진단 시 주의사항")
        st.warning("자동 진단 도구는 전체 접근성 항목의 약 30~40%만 검사할 수 있습니다. 나머지 항목(키보드 논리 순서, 자막의 정확성 등)은 반드시 전문가의 수동 점검이 병행되어야 합니다.")

    elif menu == "💡 중요성":
        st.title("💡 왜 웹 접근성을 준수해야 하는가?")
        
        tab_law, tab_biz, tab_maint = st.tabs(["⚖️ 법적 근거", "📈 비즈니스 가치", "⚙️ 운영 및 개선 주기"])
        
        with tab_law:
            st.warning("### ⚖️ 법률적 의무 사항")
            st.markdown("""
            - **장애인차별금지법 (제21조)**: 2013년부터 모든 공공기관 및 법인의 웹사이트는 웹 접근성 준수가 **의무화**되었습니다.
            - **지능정보화 기본법**: 국가기관 등은 정보통신 서비스 이용 시 장애인과 고령자의 접근권을 보장해야 합니다.
            - **미준수 시 리스크**: 국가인권위원회의 시정 권고, 행정처분 및 손해배상 청구의 대상이 될 수 있습니다.
            """)

        with tab_biz:
            st.success("### 📈 브랜드 및 비즈니스 혜택")
            st.markdown("""
            1. **사용자 층 확대**: 국내 250만 명 이상의 장애인과 급격히 늘어나는 고령층 사용자를 고객으로 확보할 수 있습니다.
            2. **SEO(검색 엔진 최적화) 향상**: 대체 텍스트와 논리적 마크업은 구글 등 검색 엔진 로봇이 사이트를 더 잘 이해하게 하여 상위 노출을 돕습니다.
            3. **모바일 편의성**: 접근성 지침은 저사양 기기나 실외 눈부심 환경에서의 가독성을 높여 일반 사용자의 이탈률도 줄여줍니다.
            """)

        with tab_maint:
            st.info("### ⚙️ 개선 주기 및 관리 가이드라인")
            st.markdown("""
            웹 접근성은 한 번 구축하면 끝나는 것이 아니라 **지속적인 유지보수**가 필요합니다.
            
            1. **정기 점검 (분기별 1회)**: 신규 콘텐츠 업로드나 배너 교체 시 대체 텍스트가 누락되는 경우가 많으므로 최소 분기당 1회 자동 진단을 수행합니다.
            2. **정밀 심사 (연 1회)**: 국가 공인 '웹 접근성 품질인증 마크' 갱신 주기에 맞춰 전문가를 통한 수동 진단(사용성 테스트)을 권장합니다.
            3. **주요 개편 시**: 사이트 디자인 변경(GUI), 기능 고도화 시에는 기획 단계부터 접근성 설계가 포함되어야 합니다.
            """)
            
            st.table({
                "점검 유형": ["자동 진단", "전문가 진단", "사용자 테스트"],
                "권장 주기": ["수시/주간", "분기/반기", "연간"],
                "주요 내용": ["이미지 alt, 마크업 문법 체크", "키보드 운용성, 복잡한 기능 점검", "실제 장애인/고령자 사용성 확인"]
            })
```