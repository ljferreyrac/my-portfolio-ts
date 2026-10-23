# Leonardo Ferreyra · Portfolio

Personal site: https://leojfc-portfolio.netlify.app/

Single-page portfolio in English and Spanish, with a case study of a multi-agent AI pipeline (CrewAI, LangGraph, LLM proxy, Phoenix observability), work experience and side projects.

## Stack

- React 19, TypeScript, Vite
- Tailwind CSS v4
- Framer Motion (respects `prefers-reduced-motion`)
- i18next for EN/ES content (`src/i18n`)
- EmailJS for the contact form

## Run locally

```bash
npm install
npm run dev
```

The contact form needs `VITE_EMAIL_SERVICE_ID`, `VITE_EMAIL_TEMPLATE_ID` and `VITE_EMAIL_PUBLIC_KEY` in a `.env` file.
