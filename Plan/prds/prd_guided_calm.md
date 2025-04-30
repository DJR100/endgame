# Product Requirements Document – Guided Calm Module (Expo React Native)

---
## 1. Purpose
Provide two short, offline‑capable calming routines—**30‑second breathing** and **10‑minute hypnosis audio**—to help users regulate emotion after pressing Panic or proactively from Home.

## 2. User Story
> *As a user who feels anxious about gambling, I want an immediate guided exercise so I can regain self‑control and let the urge pass.*

## 3. Success Metrics
| Metric | Target |
| ------ | ------ |
| Session completion rate | ≥ **70 %** of starts reach end |
| Avg. breathing routine re‑use | ≥ **1.5** per WAU |
| Audio playback failure rate | < **1 %** |

## 4. Functional Requirements
| # | Requirement | Notes |
| - | ----------- | ----- |
| F‑1 | Entry points: a) Button on Home; b) CTA on Panic completion screen. | Component `<GuidedCalmEntry />`. |
| F‑2 | **Breathing Screen**: visual ring showing 4‑4‑4‑4 box‑breathing. | Built with `react-native-svg` + Reanimated loop. |
| F‑3 | **Hypnosis Screen**: plays local MP3 (≤5 MB) using `expo-av`. | Show progress bar + "Pause/Resume". |
| F‑4 | Provide **skip intro** button on hypnosis after 10 s. | |
| F‑5 | Auto‑log `calm_complete` event when user finishes routine. | Separate event names `calm_breathing_complete` & `calm_hypnosis_complete`. |
| F‑6 | If audio interruption occurs (phone call), pause and resume automatically. | Use `Audio.setAudioModeAsync` with interruption handling. |

## 5. Non‑Functional Requirements
* **Offline:** All audio bundled with app; no streaming.
* **Performance:** CPU usage < 20 % on breathing animation (profiling on iPhone SE 2022).
* **Accessibility:** Provide text captions of hypnosis script; breathing ring labelled for VoiceOver ("Inhale… Hold… Exhale…").

## 6. Edge‑Cases & Error Handling
* Audio permissions denied → fallback to on‑screen transcript only.
* App backgrounded → continue audio for hypnosis; pause breathing animation.

## 7. Assumptions & Dependencies
* Final MP3 & transcript delivered by Content team before dev day‑3.
* Breathing timing validated by clinical advisor (optional).

## 8. Open Questions
1. Should we offer 5‑minute audio variant in v 1?
2. Haptic guidance for breathing—include or postpone?

---
*End of Guided Calm PRD* 