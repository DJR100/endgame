# Product Requirements Document – Panic Button Module (Expo React Native)

---
## 1. Purpose
Deliver a **single‑tap, 30‑second intervention** that instantly grounds a user during a gambling urge by showing their own reflection and a motivational quote.

## 2. User Story
> *As a recovering gambler who feels an urge, I want to tap one button and immediately see myself with an encouraging quote so that the impulse weakens before I can place a bet.*

## 3. Success Metrics
| Metric | Target |
| ------ | ------ |
| Camera launch latency (mid‑range device) | < **1 s** |
| Panic sessions completed | ≥ **80 %** of launches last ≥ 15 s |
| Repeat usage | ≥ **2** Panic launches per WAU |

## 4. Functional Requirements
| # | Requirement | Notes |
| - | ----------- | ----- |
| F‑1 | A **Panic Button** component is always visible on Home; long‑press turns it into a homescreen widget in a later release. | `<PanicButton />` |
| F‑2 | On press, app navigates to `<PanicModal />` using `react-navigation` `ModalPresentationIOS`. | Disable gesture‑dismiss. |
| F‑3 | Modal starts a **selfie camera preview** using `expo-camera`, aspect 4 : 5, portrait‑locked. | If front cam unavailable, fall back to rear + mirror transform. |
| F‑4 | Overlay a **motivational quote** randomly chosen from a local JSON file (`assets/quotes_en.json`). | Show quote in large bold text, centre‑aligned. |
| F‑5 | **Back gesture and dismiss button** disabled for first **5 s**; after that, "Close" icon appears top‑right. | Implement with custom `useBackHandler`. |
| F‑6 | Haptic feedback (`expo-haptics`) on open and close. | Light impact. |
| F‑7 | Emit analytics: `panic_start` on modal appear, `panic_complete` when user closes after ≥5 s. | Use `expo-firebase-analytics`. |
| F‑8 | If camera permission previously denied, show rationale screen with link to system settings. | Permission status polled on each open. |

## 5. Non‑Functional Requirements
* **Offline:** Works 100 % offline (quotes & camera local).
* **Performance:** JS frame‑rate ≥ 50 fps; memory delta ≤ 20 MB.
* **Accessibility:** Large Dynamic Type support, VoiceOver label "Live self‑view; motivational message overlay".

## 6. Edge‑Cases & Error Handling
* Camera unavailable → fallback screen: "Camera not accessible – close eyes, breathe, read quote."
* Quote file missing → display default hard‑coded quote.
* App in background during Panic → auto‑close modal on resume.

## 7. Assumptions & Dependencies
* Expo SDK 51, React Navigation v7, Reanimated v3.
* Quotes delivered by Content team (≥30 lines, UTF‑8) before dev day‑2.

## 8. Open Questions
1. Minimum modal duration – stick with 5 s or make user‑configurable later?
2. Should quote language follow device locale in v 1?

---
*End of Panic Button PRD* 