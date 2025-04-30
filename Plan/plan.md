# MVP PLAN – Quit‑Gambling Companion App (Expo React Native)

This `plan` file consolidates **all product‑requirements documents and checklists** for the four core MVP modules plus the overall sprint. Drop the file in your repo root (`/plan.md`) so Cursor can surface it contextually.

---
## 0. Table of Contents
1. Overall MVP PRD
2. Panic Button PRD
3. Guided Calm PRD
4. Streak Counter PRD
5. Community CTA PRD

---
## 1. Overall MVP PRD
### 1.1 Purpose
Deliver a 30‑second intervention loop against gambling urges via four micro‑features that can be shipped in **five coding days** using Expo RN (TypeScript).

### 1.2 Success Metrics
| Metric | Target |
| --- | --- |
| EAS build ready | ≤ 5 working days |
| Panic view opens | < 1 s |
| Day‑7 retention (beta) | ≥ 40 % |

### 1.3 Core Features
Panic Button, Guided Calm, Streak Counter, Community CTA (see module PRDs).

### 1.4 Non‑Functional Reqs
Min OS iOS 14 / Android 8, offline for 7 days, no signup, accessibility AA, Firebase analytics.

### 1.5 One‑Week Build Plan
Mon – Panic (cam), Tue – Panic polish, Wed – Calm, Thu – Streak, Fri – CTA + QA, with 4 h buffer daily.

### 1.6 **Development Checklist**
- [ ] Init Expo TS app + basic theme
- [ ] Integrate `react‑navigation`, `expo‑camera`, `expo‑av`, `react‑native‑svg`, `lottie‑react‑native`
- [ ] Configure Firebase + anonymous analytics wrapper
- [ ] Add global error boundary + Sentry (free tier)
- [ ] Ship EAS preview build and share QR

### 1.7 **Testing & QA Checklist**
- [ ] Unit tests ≥ 60 % coverage
- [ ] Detox flows for Panic & Calm on iOS simulator
- [ ] Accessibility audit with VoiceOver / TalkBack
- [ ] Memory & FPS profiling on iPhone SE 2022 and Pixel 4a
- [ ] Crash‑free sessions ≥ 99 % in Firebase

---
## 2. Panic Button PRD
(see module document above – includes Dev & Test checklists)

---
## 3. Guided Calm PRD
(see module document above – includes Dev & Test checklists)

---
## 4. Streak Counter PRD
(see module document above – includes Dev & Test checklists)

---
## 5. Community CTA PRD
(see module document above – includes Dev & Test checklists)

---
> **Note:** Individual module sections are intentionally concise here because their full specifications follow in their own files within the `plan` folder. This top‑level `plan.md` serves as the single import for Cursor prompting. 