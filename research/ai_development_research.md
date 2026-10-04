# Research Notes: The Development of AI (as of October 2026)

- Topic: AI development
- Compiled: 2026-10-04
- Method: Web search of reports, policy documents, and industry analyses published 2025–2026
- Caution: Some figures come from secondary summaries (blogs, news) of primary reports. Numbers marked *(secondary)* should be checked against the original before being cited formally.

---

## 1. Technical Capabilities

### 1.1 Benchmark performance (Stanford AI Index 2026)
- On SWE-bench Verified (a coding benchmark), top performance rose from about 60% to near 100% within one year.
- Frontier models meet or exceed human expert baselines on PhD-level science questions (about 93% on GPQA).
- The capability gap between U.S. and Chinese models has effectively closed; they traded the lead several times after early 2025. As of March 2026 the top model (Anthropic) led by only 2.7%.

### 1.2 The "jagged frontier"
- The same models that reach gold-medal level at the International Mathematical Olympiad read analog clocks correctly only about 50.1% of the time (AI Index 2026).
- The International AI Safety Report 2026 notes that a system may solve hard olympiad problems yet fail at basic object counting or keep consistency across a long multi-step workflow.
- Implication: headline benchmark scores are a weak proxy for real-world task reliability.

### 1.3 Drivers of progress (International AI Safety Report 2026)
- Gains come not only from larger training runs, but increasingly from post-training refinement and inference-time scaling (models spending more compute to reason).
- Algorithmic efficiency improves by roughly 2–6× per year.

### 1.4 Release pace and market *(secondary)*
- About 12+ substantive frontier releases in Q1 2026 versus about 6 in Q4 2025 (Frontier Model Release Velocity Index).
- September 2026 alone saw several frontier launches from OpenAI, Anthropic, Google, Meta and DeepSeek within about ten days.
- Open-weight models in the 25–34B parameter range now deliver near-frontier capability at a fraction of the cost of 70B+ models.

---

## 2. Adoption and Use

- 53% of the global population uses generative AI, reached in about three years; organizational AI adoption is 88% (AI Index 2026).
- At least 700 million people use leading AI systems weekly, but adoption is uneven: below 10% in much of Africa, Asia and Latin America (International AI Safety Report 2026).

### 2.1 AI agents in enterprises
- Zapier survey: 72% of enterprises use AI agents; 84% plan to increase agent investment in 2026.
- Writer survey: 97% of executives say their company deployed agents in the past year, yet 79% report adoption challenges (up by double digits from 2025).
- Gartner: only 17% of organizations had deployed AI agents, while over 60% expect to within two years.
- Pilot-to-production gap *(secondary)*: about 88% of agent pilots do not reach production; top blockers are evaluation gaps (64%), governance friction (57%) and model reliability (51%).

---

## 3. Investment and Infrastructure

### 3.1 Investment
- Global corporate AI investment: $581.7B, up 130% year over year; generative AI investment alone about $170.9B, nearly 5× (AI Index 2026).

### 3.2 Hyperscaler capital expenditure *(secondary)*
- The four largest hyperscalers plan up to about $630B of capex in 2026, around 62% above 2025's record of about $388B.
- Company guidance: Microsoft $110–120B, Meta $115–135B, Amazon about $200B.
- About 75% (~$450B) targets AI infrastructure: accelerators, data center construction, networking, memory, cooling and power.

### 3.3 Energy (IEA)
- Data center electricity demand grew 17% in 2025; demand from AI-focused data centers grew about 50%, versus about 3% growth in total global electricity demand.
- Data center consumption is projected to roughly double from about 485 TWh (2025) to about 950 TWh (2030), around 3% of global electricity demand; AI-focused data center consumption roughly triples.
- Capex of the five largest tech/data center companies exceeded $400B in 2025 and is set to rise a further ~75% in 2026.

---

## 4. Impact on Work and the Economy

- S&P Global PMI survey: net employment impact of AI of −5 percentage points over the past 12 months, with a further −2 points expected; earlier reports were neutral to slightly positive.
- Harvard Business Review (2026): after ChatGPT's launch, U.S. postings for routine, automation-prone roles fell 13%, while analytical, technical and creative roles grew 20%.
- PwC 2026 Global AI Jobs Barometer: a "two-track" labor market. Companies most able to use AI saw faster headcount growth (52% vs 36%) and wage growth (24% vs 17%) than the least exposed.
- Anthropic study (March 2026): no detectable rise in aggregate unemployment among highly exposed workers, but workers aged 22–25 entering exposed roles saw about a 14% decline in job-finding rates.
- International AI Safety Report 2026: emerging but uncertain evidence of weaker demand for early-career workers in some fields (e.g., writing); prolonged reliance on AI may reduce users' ability to catch errors.

---

## 5. Risks and Safety

- Documented AI incidents rose from 233 to 362 year over year (AI Index 2026).
- Cybersecurity: in the DARPA AI Cyber Challenge an AI system autonomously found 77% of known vulnerabilities in real software; threat actors reportedly automated 80–90% of some intrusion workflows with AI.
- Deepfakes are increasingly used for fraud and scams, and non-consensual intimate imagery has become common.
- Perception gap: 73% of AI experts are optimistic about AI versus 23% of the public (AI Index 2026).
- Risk management: the safety report recommends "defence-in-depth" (model safeguards plus monitoring, access control and incident response). Twelve companies published or updated frontier AI safety frameworks in 2025.

---

## 6. Governance and Policy

### 6.1 European Union – AI Act
- GPAI providers must keep technical documentation, inform downstream deployers, comply with EU copyright law, and publish a training-data summary.
- From 2 August 2026: transparency rules and Annex III high-risk obligations apply; the EU AI Office and national authorities supervise and enforce; EU-level fines for GPAI providers (Art. 101) become applicable.
- GPAI models already on the market before the rules have a transition period until 2 August 2027.

### 6.2 South Korea – AI Basic Act
- The "Framework Act on the Development of AI and Establishment of a Foundation of Trust" and its enforcement decree took effect on 22 January 2026.
- Korea is the second jurisdiction after the EU to adopt a comprehensive AI law, and among the first to bring one fully into force.
- Main content: government support system for AI industry; safety duties for high-impact AI; transparency duties including labeling of generative AI output; domestic representative for foreign providers.
- At least a one-year grace period before fines, with a support center to help companies comply.

### 6.3 South Korea – Sovereign AI foundation model project
- The Ministry of Science and ICT selects up to five elite teams to build domestic foundation models, aiming for 95%+ of the performance of leading global models.
- GPU support: leased private GPUs through H1 2026, then government-purchased GPUs (10,000 advanced GPUs from the supplementary budget); support starts around 500 GPUs per team and scales to 1,000+ after stage evaluations.
- About KRW 1.46 trillion to secure 10,000 GPUs, and a national supercomputer No. 6 with about 8,500 GPUs planned for H1 2026.

---

## 7. Key Takeaways for the Report

1. Capability keeps accelerating, but unevenly ("jagged frontier"); reliability, not peak score, is the real bottleneck.
2. Adoption is mass-scale for individuals, while enterprise value is limited by the pilot-to-production gap in agents.
3. Investment and energy demand are growing at historic rates, raising questions about returns and power grids.
4. Labor effects are showing first in hiring of young/entry-level workers rather than in mass unemployment.
5. Risks (incidents, cyber misuse, deepfakes) grow alongside capability; regulation (EU AI Act, Korea AI Basic Act) moved into the enforcement phase in 2026.

---

## Sources

- Stanford HAI, The 2026 AI Index Report — https://hai.stanford.edu/ai-index/2026-ai-index-report
- Stark Insider, Stanford's 2026 AI Index summary — https://www.starkinsider.com/2026/04/stanford-2026-ai-index-report.html
- International AI Safety Report 2026 — https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026
- Inside Global Tech, International AI Safety Report 2026 overview — https://www.insideglobaltech.com/2026/02/10/international-ai-safety-report-2026-examines-ai-capabilities-risks-and-safeguards/
- Digital Applied, Frontier Model Release Velocity Index Q2 2026 — https://www.digitalapplied.com/blog/frontier-model-release-velocity-index-q2-2026
- Rost Glukhov, Efficient Frontier of Open Models 2026 — https://www.glukhov.org/llm-performance/benchmarks/efficient-frontier-of-open-models-2026/
- Zapier, State of agentic AI adoption survey 2026 — https://zapier.com/blog/ai-agents-survey/
- Writer, Enterprise AI adoption in 2026 — https://writer.com/blog/enterprise-ai-adoption-2026/
- Gartner, 2026 Hype Cycle for Agentic AI — https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai
- Digital Applied, AI Agent Adoption 2026 — https://www.digitalapplied.com/blog/ai-agent-adoption-2026-enterprise-data-points
- Data Center Richness, Hyperscalers Plan $630 Billion in 2026 CapEx — https://datacenterrichness.substack.com/p/hyperscalers-plan-630-billion-in
- Introl, Hyperscaler CapEx Hits $600B in 2026 — https://introl.com/blog/hyperscaler-capex-600b-2026-ai-infrastructure-debt-january-2026
- IEA, Electricity 2026 — https://www.iea.org/reports/electricity-2026
- E&T, IEA warns AI data centre electricity use will triple by 2030 — https://eandt.theiet.org/2026/04/22/iea-warns-ai-data-centre-electricity-use-will-triple-2030
- S&P Global, AI impact on employment 2026 — https://www.spglobal.com/en/research-insights/special-reports/ai-impact-on-employment-2026
- Harvard Business Review, How AI Is Changing the Labor Market — https://hbr.org/2026/03/research-how-ai-is-changing-the-labor-market
- PwC, 2026 Global AI Jobs Barometer — https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html
- CNBC, Goldman study on AI and labor markets — https://www.cnbc.com/2026/08/19/goldman-ai-impact-employment-jobs.html
- European Commission, AI Act — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- SIG, EU AI Act Summary (August 2026 update) — https://www.softwareimprovementgroup.com/blog/eu-ai-act-summary/
- Shin & Kim, AI 기본법 시행과 그 시사점 — https://www.shinkim.com/kor/media/newsletter/3114
- Law.asia, Key features of Korea's AI Basic Act — https://law.asia/ko/korea-ai-basic-act-characteristics-significance/
- Korea.kr, 독자 AI 파운데이션 모델 정예팀 공모 — https://www.korea.kr/news/policyNewsView.do?newsId=148944741
- Korea.kr, 데이터센터 지원 및 GPU 확보 — https://www.korea.kr/news/policyNewsView.do?newsId=148945875
