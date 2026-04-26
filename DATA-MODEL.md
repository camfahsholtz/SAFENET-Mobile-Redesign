# SAFENET Data Model

This document defines the complete data schema for the SAFENET mobile redesign. Every field matches the existing SAFENET form at https://safenet.nifc.gov/safenet.cfm exactly — no fields are added, removed, or renamed. The interface is a new front door to the same pipeline.

Use this document as context in every design and code prompt. Screens must reference these field names and enum values verbatim.

---

## Overview

A SAFENET report has six sections:

1. Event Information
2. Contributing Factors
3. Narrative
4. Immediate Action Taken
5. Reported By
6. Attachments

The reporting flow in this redesign is a single-session, scrollable form. No drafts, no save-and-resume, no login. Anonymous submission is the default. Target completion time: under three minutes on mobile.

---

## Field Legend

- `★` = Required by SAFENET (must be filled to submit)
- `○` = Optional
- `▸` = Conditionally required (requirement depends on another field's value)
- `[enum]` = Fixed set of values (use tappable chips or selector)
- `[text]` = Free text input
- `[date]` / `[time]` = Formatted input
- `[file]` = File upload

---

## Section 1: Event Information

| Field | Req | Type | Notes |
|---|---|---|---|
| Event Start Date | ★ | `[date]` | Format `mm/dd/yyyy`. Default to today's date on form load. |
| Event Start Time | ★ | `[time]` | Format `hhmm` military time. Default to current time on form load. |
| Event Stop Date | ○ | `[date]` | Format `mm/dd/yyyy`. |
| Event Stop Time | ○ | `[time]` | Format `hhmm` military time. |
| Incident Name | ★ | `[text]` | Free text. |
| Fire Number | ○ | `[text]` | P-Code or 4-digit Fire Code. |
| State | ★ | `[enum]` | All 50 U.S. states + District of Columbia. Pre-fill from device location if user grants permission. |
| Jurisdiction | ★ | `[enum]` | `BIA`, `BLM`, `FWS`, `NPS`, `USFS`, `State`, `Other`, `Unknown` |
| Local Unit | ○ | `[text]` | Administrative unit (district, park, reserve, etc.) where the event occurred. |
| Incident Type | ★ | `[enum]` | `Wildland`, `Prescribed/Fuels Treatment`, `All Hazard`, `Training`, `Work Capacity Test` |
| Incident Activity | ★ | `[enum]` | `Line`, `Support`, `Transport to/from`, `Readiness/Preparedness` |
| Stage of Incident | ★ | `[enum]` | `Initial Attack`, `Extended Attack`, `Transfer of Command`, `Mop Up`, `Demobe`, `Non-incident`, `Other` |
| Position Title | ○ | `[text]` | e.g. "Firefighter", "Division Supervisor", "Facilities Unit Lead". |
| Task | ○ | `[text]` | e.g. "Line Construction", "Structure Protection", "Camp Activities". |
| Management Level | ★ | `[enum]` | `1`, `2`, `3`, `4`, `5`, `N/A` (Incident Types 1–5). |
| Resources Involved | ○ | `[text]` | e.g. "Crew", "Equipment", "Overhead". |

---

## Section 2: Contributing Factors

| Field | Req | Type | Notes |
|---|---|---|---|
| Contributing Factors | ★ | `[enum, multi]` | `Fire Behavior`, `Communications`, `Equipment`, `Environmental`, `Human Factors`, `Other`. Multiple values allowed. |
| Human Factors | ▸ | `[enum, multi]` | `Decision Making`, `Leadership`, `Risk Assessment`, `Fatigue`, `Performance`, `Situational Awareness`. **Required if** Contributing Factors includes `Human Factors`. Multiple values allowed. |
| Other Factors | ▸ | `[text]` | Free text. **Required if** Contributing Factors includes `Other`. |

---

## Section 3: Narrative

| Field | Req | Type | Notes |
|---|---|---|---|
| Narrative | ★ | `[text, long]` | "Describe in detail what happened including the concern or potential issue, the environment (weather, terrain, fire behavior, etc), and the resulting safety issue." |

---

## Section 4: Immediate Action Taken

| Field | Req | Type | Notes |
|---|---|---|---|
| Immediate Action Taken | ★ | `[text, long]` | "Please describe actions you took to correct or mitigate the unsafe event." |

---

## Section 5: Reported By

SAFENET explicitly allows anonymous reporting under 29 CFR 1960. In this redesign, the Agency field (SAFENET-required) sits inline on the form. The optional identity fields (Name, Phone, Email) are collapsed behind a disclosure labeled **"Add contact info (optional)"**. The disclosure is closed by default so the anonymous path is the default path.

| Field | Req | Type | Notes |
|---|---|---|---|
| Agency | ★ | `[enum]` | `BIA`, `BLM`, `FWS`, `NPS`, `USFS`, `State`, `Other`. Visible inline on the form. |
| State Agency | ▸ | `[enum]` | All 50 U.S. states + DC. **Required if** Agency = `State`. Visible inline when triggered. |
| Other Agency | ▸ | `[text]` | **Required if** Agency = `Other`. Visible inline when triggered. |
| Name | ○ | `[text]` | Inside collapsed "Add contact info (optional)" disclosure. |
| Phone | ○ | `[text]` | Inside collapsed "Add contact info (optional)" disclosure. |
| Email | ○ | `[text]` | Inside collapsed "Add contact info (optional)" disclosure. |

---

## Section 6: Attachments

| Field | Req | Type | Notes |
|---|---|---|---|
| File #1–#5 | ○ | `[file]` | Up to 5 files. Allowed types: `JPG`, `GIF`, `PNG`, `PDF`, `DOC`, `DOCX`, `TXT`. SAFENET guidance: compress photos for smallest file size. Files subject to same sanitization as SAFENETs. |

---

## Field Visibility Map

Which fields appear on which screen. If a field is not listed for a screen, it does not appear on that screen.

### Report Form (screen 1 of reporting flow)

All fields in all six sections, grouped by section heading. The user fills this out once and submits.

- Event Information: all 16 fields
- Contributing Factors: all 3 fields (Human Factors + Other Factors shown conditionally based on Contributing Factors selection)
- Narrative: 1 field
- Immediate Action Taken: 1 field
- Reported By: Agency inline; State Agency / Other Agency shown inline when triggered; Name/Phone/Email inside collapsed disclosure
- Attachments: 5 file slots

### Review & Submit (screen 2 of reporting flow)

Read-only display of every field the user has filled in, organized by section, so the user can verify before submission. Empty optional fields are hidden (not shown as "not provided"). Anonymization behavior is described in plain language above the submit button.

### Confirmation (screen 3 of reporting flow)

No SAFENET fields shown. Displays the report ID (if issued by SAFENET), submission timestamp, and a plain-language explanation of the two-business-day review window. Offers to print or download a copy (per SAFENET's existing behavior).

### Reports List Card (reading flow, home screen)

Only these fields appear on each card in the list, in this order top to bottom:

1. **Header row** (single line, space-between):
   - Left: Event Start Date + Event Start Time — composite, formatted `MM/DD/YYYY HH:MM` — `text-caption text-text-secondary`
   - Right: "View Report →" affordance — `text-body-sm text-action-primary` — visible destination cue, not a separate interactive element; the entire card surface is the tap target
2. **Incident Name** — `text-heading-lg text-text-primary` — primary visual hierarchy
3. **Location composite line** — `State · Fire Number · Jurisdiction` — `text-body text-text-primary` — middle-dot separated; Fire Number segment omitted (with its separator) when absent
4. **Narrative summary** — `text-body-sm text-text-secondary` — truncated to 2 lines with ellipsis
5. **Contributing Factors tags** — up to 2 tags inline with `gap-space-2`; if more than 2 factors, show first 2 plus a `+N more` overflow indicator in the de-emphasised style

### Report Detail View (reading flow, tapping a card)

Every field from the submitted report that survived SAFENET's sanitization pipeline. Organized by the same six sections. Displays read-only. Empty fields hidden (not labeled "not provided").

---

## Anonymization Notes

SAFENET publishes reports publicly within two business days and sanitizes submissions before publication. Based on review of published reports, the following fields are typically stripped or redacted before publication:

- Name
- Phone
- Email
- Position Title (when it could identify the reporter on a small crew)

The detail view must never display identity fields even if a user submitted them — the read-side view should mirror what SAFENET publishes, not what was submitted. **Confirm this against published reports before finalizing the detail view spec.**

The Review & Submit screen must include a plain-language note above the submit button explaining that identifying information will be removed before publication, consistent with Design Principle #7 ("Earn trust through transparency").

---

## Conditional Logic Summary

The form has four conditional rules. These must be enforced in the UI — not only at submission — so the user sees the conditional fields the moment they become required.

1. **If Contributing Factors includes `Human Factors`** → show Human Factors sub-list field, make required.
2. **If Contributing Factors includes `Other`** → show Other Factors text field, make required.
3. **If Agency = `State`** → show State Agency dropdown, make required.
4. **If Agency = `Other`** → show Other Agency text field, make required.

---

## Required Field Count

The minimum number of fields a user must fill to submit a valid report: **13 base required fields + 0–2 conditional required fields** depending on their answers.

Base (always required):

1. Event Start Date
2. Event Start Time
3. Incident Name
4. State
5. Jurisdiction
6. Incident Type
7. Incident Activity
8. Stage of Incident
9. Management Level
10. Contributing Factors
11. Narrative
12. Immediate Action Taken
13. Agency

Possibly also required depending on answers:

- Human Factors (if Contributing Factors includes Human Factors)
- Other Factors (if Contributing Factors includes Other)
- State Agency (if Agency = State)
- Other Agency (if Agency = Other)

---

## Source

All field names, required/optional status, and enum values verified against the live SAFENET form at https://safenet.nifc.gov/safenet.cfm as of April 2026. If SAFENET's form changes, this document must be updated before any design or implementation work continues.
