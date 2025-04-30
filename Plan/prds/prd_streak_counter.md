# Product Requirements Document – Streak Counter Module (Expo React Native)

---
## 1. Purpose
Reinforce abstinence by visibly tracking **consecutive bet‑free days**, celebrating milestones, and allowing honest relapse resets without shame.

## 2. User Story
> *As a recovering gambler, I want to see my streak of days without gambling so that I stay motivated, and if I relapse I can reset it and keep trying.*

## 3. Success Metrics
| Metric | Target |
| ------ | ------ |
| Streak data accuracy | 100 % (no skipped increments) |
| Relapse reset used | ≤ **20 %** of users within first 7 days (baseline reference) |
| Milestone celebration tap‑through | ≥ **60 %** users open Calm or Panic from milestone dialog |

## 4. Functional Requirements
| # | Requirement | Notes |
| - | ----------- | ----- |
| F‑1 | Display current streak (#days) on Home inside `<StreakCard />`. | Large digits, accessible. |
| F‑2 | **Initial value** set by user on first app open: "When was your last bet?" date picker. | Optional; default to today − 0. |
| F‑3 | Persist `lastBetDate` in `MMKV` (fast) or fallback `AsyncStorage`. | ISO‑8601. |
| F‑4 | **Midnight rollover** job updates streak if app closed, using `expo-background-fetch` (min interval). | Also updates on app foreground.
| F‑5 | **"I slipped" button** triggers confirmation modal with optional reflection textarea. | Saves reflection locally for future iterations.
| F‑6 | On milestone days 7, 30, 90 ⇒ show full‑screen confetti (Lottie) + congrats modal. | Haptic success vibration.
| F‑7 | Analytics: `streak_increment`, `streak_milestone`, `relapse`. | Includes current length.

## 5. Non‑Functional Requirements
* **Offline:** Must continue counting for ≥ 7 days offline.
* **Integrity:** Tamper‑proofing not needed for MVP but counter stored in secure storage for later.
* **Accessibility:** Announce updated streak via `AccessibilityInfo.announceForAccessibility`.

## 6. Edge‑Cases & Error Handling
* Device timezone change → compute based on UTC midnight to avoid double increments.
* User sets future date for last bet → warn & prevent save.

## 7. Assumptions & Dependencies
* Depend on Expo Task Manager; iOS background fetch timing not deterministic—acceptable ±15 min drift.

## 8. Open Questions
1. Allow manual edit of last bet after onboarding?
2. Should we back up streak to cloud later?

---
*End of Streak Counter PRD* 