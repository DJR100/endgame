# Product Requirements Document – Community CTA Module (Expo React Native)

---
## 1. Purpose
Connect users with **immediate support resources** and community help through prominent, contextually-aware calls-to-action that appear at critical moments in their recovery journey.

## 2. User Story
> *As someone struggling with gambling urges, I want easy access to support resources and community help so that I don't feel alone in my recovery journey and can get help when I need it most.*

## 3. Success Metrics
| Metric | Target |
| ------ | ------ |
| Support resource tap-through rate | ≥ **15%** of active users weekly |
| Helpline call initiation | ≥ **5%** of users in crisis moments |
| Community forum engagement | ≥ **30%** of users post/comment monthly |
| Resource availability | **24/7** helpline access verified |

## 4. Functional Requirements
| # | Requirement | Notes |
| - | ----------- | ----- |
| F-1 | Persistent **SOS Button** in app header | Red accent, haptic feedback |
| F-2 | **Smart CTA Card** on Home shows contextual help based on: | `<SmartResourceCard />` component |
|    | - Time since last panic event | Prioritize after detected crisis |
|    | - Current streak status | Extra support near milestones |
|    | - Time of day patterns | Higher visibility during risk hours |
| F-3 | One-tap **crisis helpline** connection via `Linking` | Pre-formatted number ready |
| F-4 | Local **support group finder** with map view | Uses `expo-location` |
| F-5 | **Community Forum** integration (read-only MVP) | Reddit/Discord API embed |
| F-6 | **Resource Directory** with offline caching | MMKV storage |
| F-7 | Analytics: `resource_view`, `helpline_tap`, `forum_open` | Include context_trigger |

## 5. Non-Functional Requirements
* **Privacy:** No PII collected from support resource usage
* **Reliability:** Helpline numbers verified monthly
* **Accessibility:** All CTAs properly labeled for screen readers
* **Performance:** Resource directory loads < 2s offline

## 6. Edge Cases & Error Handling
* No internet → Show cached resources + offline helpline numbers
* Location denied → Default to national/online resources
* API failures → Graceful fallbacks to static content
* After hours → Route to 24/7 crisis text line

## 7. Development Checklist
- [ ] Design & implement `<SOSButton />` component
- [ ] Build smart CTA logic & triggering system
- [ ] Integrate helpline click-to-call functionality
- [ ] Create support group locator service
- [ ] Set up community forum WebView wrapper
- [ ] Implement resource caching system
- [ ] Add analytics tracking
- [ ] Test all edge cases & offline modes

## 8. Testing Checklist
| Layer | Test | Tool |
| ----- | ---- | ---- |
| **Unit** | Smart CTA logic returns correct resource | Jest |
| **Component** | Resource cards render all states | RNTL |
| **Integration** | Helpline calls initiate properly | Manual |
| **Edge-case** | Offline mode shows cached data | Jest + MSW |
| **Analytics** | All events fire with proper context | Jest |

## 9. Open Questions
1. Add peer support matching in V2?
2. Integrate real-time chat support?
3. Allow community content creation/posting in future?

---
*End of Community CTA PRD* 