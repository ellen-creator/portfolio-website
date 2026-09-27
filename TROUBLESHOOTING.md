# Portfolio Website - 문제 해결 가이드

## 개발 환경 이슈

### 문제: npm install 실패
**증상**: 패키지 설치 중 에러  
**해결책**:
```bash
# 1. 캐시 초기화
rm -rf node_modules package-lock.json
npm cache clean --force

# 2. Node 버전 확인 (18.0.0 이상)
node --version

# 3. 다시 설치
npm install
```

### 문제: Vite 개발 서버 시작 실패
**증상**: `npm run dev` 실행 후 에러  
**해결책**:
1. 포트 충돌 확인: `lsof -i :5173`
2. 포트 변경: `vite --port 3000`
3. Vite 캐시 삭제: `rm -rf .vite`
4. 전체 재빌드: `npm run build`

---

## TypeScript 컴파일 에러

### 문제: Type errors in src/pages
**증상**: `error TS2304: Cannot find name 'Component'`  
**해결책**:
1. import 확인: `import { ReactNode } from 'react'`
2. tsconfig.json 확인
3. `npm run type-check` 실행
4. 필요시 타입 정의 추가

### 문제: Props 타입 정의 오류
**증상**: 컴포넌트에 전달된 Props 타입 불일치  
**해결책**:
1. 컴포넌트 Props 인터페이스 정의:
```typescript
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  // ...
}
```
2. 호출 시 모든 Props 전달 확인

---

## 애니메이션 & Framer Motion

### 문제: 애니메이션이 끊김 또는 지연
**증상**: 부드럽지 않은 애니메이션, 프레임 드롭  
**진단**:
1. Chrome DevTools → Performance 탭
2. 애니메이션 중 `will-change` CSS 사용 확인

**해결책**:
```typescript
// ❌ 나쁜 예
<motion.div animate={{ opacity: 1 }} transition={{ duration: 2 }} />

// ✅ 좋은 예 (GPU 가속)
<motion.div 
  animate={{ opacity: 1, transform: 'translateZ(0)' }} 
  transition={{ duration: 0.3, ease: 'easeInOut' }}
/>
```

### 문제: 스크롤 트리거 애니메이션 작동 안 함
**증상**: `useInView` 또는 `whileInView` 애니메이션이 실행 안 됨  
**해결책**:
1. Framer Motion v11+ 사용 확인
2. `whileInView` 속성이 올바른지 확인
3. viewport 설정 확인: `viewport={{ once: true }}`

---

## Styling 및 Tailwind CSS

### 문제: Tailwind 클래스가 적용 안 됨
**증상**: 스타일이 렌더링되지 않음  
**해결책**:
1. tailwind.config.js 의 content 설정 확인:
```javascript
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
]
```
2. 빌드 시 Tailwind 재생성: `npm run build`
3. 브라우저 캐시 초기화

### 문제: 다크 모드 스타일 안 먹음
**증상**: `dark:` 클래스가 작동 안 함  
**해결책**:
1. tailwind.config.js 에 darkMode 설정:
```javascript
darkMode: 'class', // html에 dark 클래스 추가
```
2. HTML에서 dark 클래스 토글:
```typescript
document.documentElement.classList.toggle('dark');
```

---

## 성능 최적화

### 문제: LCP (Largest Contentful Paint) 느림
**증상**: DevTools Lighthouse 에서 LCP > 4s  
**진단**:
1. Chrome DevTools → Lighthouse 실행
2. 느린 부분 파악 (주로 이미지)

**해결책**:
1. 이미지 최적화:
   - WebP 포맷 사용
   - 적절한 해상도 (1920px 이하)
   - next/image 사용 (Vercel 배포 시)

2. 코드 스플리팅:
```typescript
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
```

3. 불필요한 라이브러리 제거

### 문제: 번들 크기 커짐 (> 300KB)
**증상**: 첫 로드 느림  
**해결책**:
```bash
npm run build
# 결과에서 번들 크기 확인

# 분석 도구 사용
npm install -D rollup-plugin-visualizer
```

---

## 배포 이슈

### 문제: Vercel 배포 실패
**증상**: 빌드 에러 또는 배포 실패  
**해결책**:
1. 로컬에서 먼저 빌드 테스트: `npm run build`
2. Vercel 환경변수 확인
3. 배포 브랜치 확인
4. 빌드 로그 확인 (Vercel Dashboard)

### 문제: 라우팅 작동 안 함
**증상**: 새로고침 시 404 에러  
**해결책**:
1. Vercel 프로젝트 설정 → "Build & Development"
2. "Build Command": `npm run build`
3. "Output Directory": `dist`
4. 재배포

---

## 데이터 관리

### 문제: 프로젝트 데이터 업데이트 반영 안 됨
**증상**: `/data/projects.ts` 수정 후 변화 없음  
**해결책**:
1. 개발 서버 재시작: `npm run dev` (Ctrl+C 후 다시 실행)
2. 브라우저 캐시 초기화

### 문제: 프로젝트 이미지 로드 실패
**증상**: 이미지 깨짐 (broken image)  
**해결책**:
1. 이미지 경로 확인 (public/ 또는 src/assets/)
2. 절대 경로 사용: `/images/project-1.jpg`
3. 웹서버에서 파일 존재 확인
4. 이미지 형식 확인 (JPEG/PNG/WebP)

---

## 모바일 반응형 문제

### 문제: 모바일에서 레이아웃 깨짐
**증상**: 작은 화면에서 오버플로우 또는 텍스트 잘림  
**진단**:
1. Chrome DevTools → Toggle device toolbar
2. 다양한 화면 크기 테스트

**해결책**:
1. Tailwind breakpoints 확인 (sm, md, lg)
2. `max-w-` 클래스 사용으로 최대 폭 제한
3. 이미지에 `max-w-full` 추가

---

## 브라우저 호환성

### 문제: 특정 브라우저에서만 작동 안 함
**증상**: Safari, IE 등에서 기능 오류  
**해결책**:
1. Browserlist 설정 확인 (.browserslistrc)
2. Polyfill 필요시 추가 (@babel/polyfill)
3. CSS 호환성 확인 (autoprefixer)

---

## 성능 모니터링

### 추천: 정기적 Lighthouse 실행
```bash
npm install -g lighthouse
lighthouse https://your-portfolio.com --view
```

### 추천: Bundle 분석
```bash
npm run build -- --analyze
```
