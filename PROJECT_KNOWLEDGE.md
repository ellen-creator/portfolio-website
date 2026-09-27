# Portfolio Website - 시스템 지식

## Architecture Overview

### 기술 스택
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **빌드 도구**: Vite
- **배포**: Vercel / Netlify

### 주요 모듈 및 역할

```
src/
├── pages/             # 페이지 컴포넌트
│   ├── Home.tsx       # 메인 랜딩 페이지
│   ├── ProjectDetail.tsx
│   └── About.tsx
├── components/        # 재사용 컴포넌트
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── Footer.tsx
│   └── sections/
├── design-system/     # 디자인 시스템
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
├── utils/            # 유틸리티
│   ├── animations.ts # Framer Motion 설정
│   └── constants.ts
└── data/             # 정적 데이터
    └── projects.ts   # 포트폴리오 프로젝트 데이터
```

## Data Flow

### 홈페이지 렌더링 흐름
1. `Home.tsx` 로드
2. `/data/projects.ts` 에서 프로젝트 데이터 가져오기
3. 각 프로젝트마다 `ProjectCard.tsx` 렌더링
4. 사용자 인터랙션 시 Framer Motion 애니메이션 트리거

### 프로젝트 상세 페이지
1. URL 파라미터에서 프로젝트 ID 추출
2. `/data/projects.ts` 에서 해당 프로젝트 데이터 조회
3. `ProjectDetail.tsx` 에서 마크다운 또는 컴포넌트로 렌더링

## Design System

### 색상 팔레트
- Primary: 브랜드 컬러
- Secondary: 액센트 컬러
- Neutral: 텍스트, 배경
- Status: 성공, 경고, 에러

### 애니메이션 원칙 (kinfork style)
- 부드러운 easing (ease-in-out)
- 느린 duration (300-500ms)
- 마이크로인터랙션 강조
- 스크롤 트리거 애니메이션

### 반응형 디자인
- Mobile First 접근
- Tailwind breakpoints: sm, md, lg, xl
- 다크 모드 지원

## Key Design Decisions

### 1. React + TypeScript 선택
**이유**: 타입 안정성, 큰 규모에서의 확장성
**트레이드오프**: 초기 설정이 복잡함

### 2. Framer Motion 선택
**이유**: kinfork 스타일의 매끄러운 애니메이션
**트레이드오프**: 번들 크기 증가

### 3. Tailwind CSS
**이유**: 빠른 개발, 일관된 디자인
**트레이드오프**: 커스텀 스타일링 제약

### 4. 정적 데이터 (JSON/TS)
**이유**: 간단함, 빠른 로딩
**트레이드오프**: 동적 업데이트를 위해 나중에 CMS로 전환 필요

## Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Bundle Size**: < 300KB (gzipped)

## Related Documentation
- `/docs/design-system/` - 상세 디자인 가이드
- `/docs/components/` - 컴포넌트별 상세 문서
- `/docs/animation-guidelines.md` - 애니메이션 가이드
