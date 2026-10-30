# Mental Edge: launch and measurement plan

Vanderhall Ventures is the parent brand. Mental Edge is the training and accountability experience. Mind Over Muscle is the existing eight-week program. The book and custom blueprint are optional resources, not required intermediate purchases.

## What this release implements

- One clear free-reset starting point and a direct paid-program route.
- Realistic four-day, 60-75 minute program expectations and existing purchase links.
- Existing community, contact, member app and policy links.
- Mobile navigation, keyboard focus, reduced-motion support, and readable FAQs.
- An optional five-day progress companion. It stores five browser-local checkmarks only. It is not an account, signup, central check-in system, or coach-verified completion.
- Existing Vercel analytics intent events. Confirm custom-event support in the actual provider plan.

## Public product checks on October 29, 2026

The free Gumroad guide supports a zero-price order. The paid product lists four days per week, 60-75 minutes per session, eight weeks, warm-up/cool-down protocols, substitutions, weekly check-in worksheets, execution bridge, and a separate certificate download. Paid access and delivered files were not tested. Prices shown on the website are $27/$15/$65 USD; Gumroad can localize currency. Confirm final amounts and terms at checkout.

The reset's Gumroad description currently recommends the Custom Training Blueprint after Day 5. The new main path recommends the eight-week program first. The Gumroad description and guide should be aligned with that choice. Those private-account edits are not part of this code release.

Suggested replacement for the reset product page's closing section:

> WHAT HAPPENS AFTER DAY 5?
>
> Keep building with Mind Over Muscle: an eight-week strength and conditioning program with four weekly sessions of 60-75 minutes, a substitution guide, and weekly training and mindset check-ins. Review the full program and current price here: https://vanderhallventures.gumroad.com/l/jgsaj
>
> If that schedule does not fit your needs, explore the Custom Training Blueprint or contact Joseph for help choosing your next step.
>
> Reset your routine. Follow a plan. Stay connected.

Before publishing that copy, confirm it matches the actual delivered guide and paid materials. Do not promise email coaching or automated app access unless those are implemented and tested.

## Stage 1 / foundation: week 1

Review the homepage and companion, test checkout/access in the provider's supported test flow, confirm the product descriptions and guide ending, and choose the first audience: adults rebuilding training consistency. Speak with five likely participants about obstacles, usable routines and support needs. Prepare all reset lessons and check-in instructions before inviting a cohort.

## Stage 2 / reset pilot: weeks 2-3

Invite ten willing adults. Use confirmed free Gumroad orders as enrollments; record actual dates and a cohort. A newsletter subscription and an outbound click are separate actions. Begin with a private owner register and private check-in form. Collect action evidence, not diagnoses or private journal content. Keep marketing consent separate from access.

Suggested register fields: participant ID, name/email, source, signup date, cohort, Day 1-5 check-in dates, reset completion date, paid order ID, purchase date, product, amount collected, refund amount, program start, sessions completed, weekly check-ins, final-plan date, paid completion date, and support minutes. Maintain separate order records for repeat purchases. Never put this information in this public repository.

Proposed reset completion: all five actual guide actions submitted within 10 days of enrollment. Map form prompts to the delivered guide first. Browser-local companion marks do not establish central completion. Track late and partial completion separately.

Suggested learning gate: six of ten complete on time and major access/usability problems are resolved. This is an internal planning target, not an industry benchmark. Interview finishers and nonfinishers and repeat the pilot if needed.

## Stage 3 / paid pilot: weeks 4-13

Offer the existing digital product to interested participants. The $27 offer is the digital product, not unlimited individual coaching. Track 3-5 paying participants through the full eight weeks and time your support work.

Proposed paid completion: at least 24 of 32 planned sessions, six of eight weekly check-ins, and a final continuation plan within ten weeks of starting. This is an internal engagement rule, not a guaranteed fitness result or an existing certificate policy. Confirm it fits the delivered program before using it for certificate decisions.

Suggested gate before expansion: at least three buyers, two documented completions, positive contribution, and manageable support time. Small pilots identify problems; their conversion percentages are not reliable forecasts.

## Measurement / compare the same cohorts

Wait for each window to mature; don't divide unrelated same-week results.

| Metric | Calculation |
| --- | --- |
| Reset signup rate | Unique confirmed enrollments / unique landing visitors for the same intake period |
| Reset activation | Day 1 submitted within 48 hours / enrollments with elapsed 48-hour windows |
| Reset completion | Five actions submitted within ten days / enrollments with elapsed ten-day windows |
| Signup to paid | Unique enrollees buying within 30 days of signup / enrollments with elapsed 30-day windows |
| Completer to paid | Completers buying within 30 days of completion / completers with elapsed 30-day windows |
| Paid activation | First session within seven days of start / buyers with elapsed seven-day windows |
| Paid completion | Completion rule met within ten weeks of start / buyers with elapsed ten-week windows |

Show refunds separately; do not remove nonfinishers to improve rates. Count people once for conversion and orders separately for revenue. Current website click events (`discipline_reset_click`, `mind_over_muscle_click`, `member_app_click`) measure intent only. `reset_details_click` measures opening the reset section. None proves a signup, payment or completion. Cross-domain attribution is not implemented in this release.

## Stage 4 / repeatability: months 4-6

After manual records are reliable, automate enrollment confirmation, daily lesson delivery, private check-ins, and payment reconciliation. Only record purchases after trusted payment-provider confirmation; verify webhook signatures, deduplicate order IDs, reconcile refunds, and test retries/failures. Never attach names, emails, reflections, or medical details to analytics. A dashboard showing member records requires owner authentication and authorization.

Weekly rhythm: Monday choose one bottleneck; midweek observe one participant; Friday reconcile orders, check-ins, costs and support time. Contribution = collected revenue - refunds - fees - variable delivery costs. Separately estimate support hours times your chosen hourly value. Monthly result = total contribution - fixed costs - owner time cost.

## Stage 5 / wider vision: month 6 onward

Repeat successful cohorts before adding scope. Build a member dashboard, then consider an installable web app. Test a guided tier or recurring Brotherhood offer only after defining recurring benefits, support limits, pricing and cancellation. Keep individual customization separately scoped. Add partnerships or facilitators after documenting delivery standards and capacity.
