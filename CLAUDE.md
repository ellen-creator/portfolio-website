# Portfolio Website (Interactive, kinfork style) - Claude 가이드

## Quick Commands
- 프로젝트 시작: `npm install && npm run dev`
- 빌드: `npm run build`
- 배포: `npm run deploy`
- 디버깅: `npm run debug`

## 프로젝트 개요
UX Designer 인턴십 지원을 위한 인터랙티브 포트폴리오 웹사이트.
- **스타일**: 에디토리얼 신문 스타일 (흰 종이 + 검정 잉크, 노란 포인트 1색, 얇은 rule, `|` 섹션 내비)
- **목표**: UX/UI 실력 보여주기
- **핵심 섹션**: 프로젝트 사례, 디자인 프로세스, 스킬, 연락처

## Tech Stack
- Frontend: React + TypeScript
- Styling: Tailwind CSS + Framer Motion (애니메이션)
- Build: Vite
- Hosting: Vercel 또는 Netlify

## Service Configuration
- 환경 변수: `.env.local` (배포 URL, API 키 등)
- 디자인 시스템: `/src/design-system/`
- 컴포넌트: `/src/components/`

## Project-Specific Quirks
- 에디토리얼 스타일: 마스트헤드 DM Serif Display, 본문 Source Serif 4, 유틸리티 라벨 Helvetica 볼드 대문자
- Work = 아침판(라이트), Story = 밤판(다크). 마스트헤드: `src/components/Masthead.tsx`
- 모바일 첫 디자인
- 다크 모드 지원 필수
- 성능: LCP < 2.5s, CLS < 0.1

## 핵심 파일 위치
- 프로젝트 섹션 데이터: `/src/data/projects.ts`
- 홈 페이지: `/src/pages/Home.tsx`
- 프로젝트 상세: `/src/pages/ProjectDetail.tsx`
- 애니메이션 유틸: `/src/utils/animations.ts`

## 문서 참고
- → PROJECT_KNOWLEDGE.md (아키텍처)
- → TROUBLESHOOTING.md (문제 해결)
- → /docs/design-system (디자인 시스템)
- → /docs/components (컴포넌트 문서)
