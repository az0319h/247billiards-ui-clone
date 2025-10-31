# 작업 개요

기본 배포용 프로젝트 구조 세팅 및 전역 스타일 적용

---

## 작업 상세 내용

- [x] 글로벌 CSS 파일 설정 (`:root` 컬러 토큰, 폰트, 기본 레이아웃 유틸)
- [x] 기본 레이아웃 작성 (Header, Footer)
- [x] 기본 메타/문서 구조(HTML lang, viewport 등) 점검
- [x] 빌드/배포 대비 베이스 스타일 최소화 (불필요한 reset 과도 사용 지양)

---

## 수정한 파일

- `src/app/layout.tsx`
- `src/styles/global.css`

## 새로 작성한 파일

- `src/components/Header.tsx`
- `src/components/Footer.tsx`

---

## 스크린샷

> UI 변경 시 스크린샷 첨부 권장  
> ![UI Preview](https://github.com/username/repo/assets/이미지링크)

---

## 기타 참고 사항

- favicon은 임시 파일 사용 중이며, 추후 정식 자산으로 교체 예정
- Prettier + Tailwind 플러그인 적용 시 클래스 정렬 규칙에 맞춰 자동 포맷 권장

---

## 참고 자료 (Docs / Reference)

- Next.js App Router – 레이아웃: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
- Next.js – 전역 CSS: https://nextjs.org/docs/app/building-your-application/styling/css
- Tailwind CSS – 설치/기본 설정: https://tailwindcss.com/docs/installation
- Preflight(브라우저 기본 스타일 리셋): https://tailwindcss.com/docs/preflight
- Prettier Tailwind 플러그인: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
- Favicons(가이드, 사이즈/포맷 개요): https://web.dev/articles/building/anatomy-of-a-modern-web-app#icons
