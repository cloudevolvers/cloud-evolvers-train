# Sample Microsoft Cloud Readiness Report

This sample shows the shape of the report produced after the readiness scan. It is intentionally generic and does not include customer data.

## Readiness Summary

Overall state: good base, uneven proof.

The environment has several controls in place, but the evidence trail is not yet strong enough for a DORA, NIS2, NIST CSF, CIS Controls, or internal audit discussion. The first sprint should focus on identity, logging, recovery evidence, and third-party dependency inventory.

## Priority Findings

### 1. Privileged Access

Observation: privileged Azure and Microsoft 365 roles exist, but approval, expiration, and review evidence is incomplete.

Recommended action: enable Microsoft Entra Privileged Identity Management for high-impact roles and schedule recurring access reviews.

Mapped themes: NIST PR.AA, CIS Control 6, DORA access governance.

### 2. Secure Score and Defender for Cloud

Observation: recommendations exist across Microsoft Secure Score and Defender for Cloud, but ownership and risk ranking are unclear.

Recommended action: pick the top ten recommendations by blast radius, assign owners, and convert them into one remediation sprint.

Mapped themes: CIS Controls, NIST CSF protect and detect functions.

### 3. Audit Logging

Observation: logs are available in several systems but not consistently retained, routed, or queried from one operational view.

Recommended action: connect Entra ID, Azure Activity, Microsoft 365 audit, Defender, and endpoint logs to Sentinel or Log Analytics.

Mapped themes: NIST DE.CM, CIS logging controls, DORA incident evidence.

### 4. Recovery Evidence

Observation: backups exist, but recent restore tests are not documented for every critical system.

Recommended action: run restore tests for critical systems and store the result, date, owner, and recovery notes as audit evidence.

Mapped themes: DORA operational resilience, NIST recover function.

## Suggested Sprint Plan

Week 1:

- Confirm tenant and subscription scope.
- Export current Secure Score, Defender for Cloud, and privileged-role state.
- Create evidence folder structure and owners.

Week 2:

- Enable or tighten PIM, break-glass monitoring, and Conditional Access exclusions.
- Route critical logs to a searchable workspace.
- Define alert rules for privileged access and critical security events.

Week 3:

- Run restore tests and document outcomes.
- Build supplier and SaaS dependency register.
- Review open findings with IT, security, and compliance owners.

## Notes

This report is a technical readiness artifact. It does not certify compliance and does not replace legal, audit, or regulatory advice.
