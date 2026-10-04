# AI Development Research (as of 2026-10-04)

Research notes on the state of artificial intelligence development, compiled as the basis for the report `report/AI_발전_보고서_20261004.docx`.

> Note on sources: figures are taken from the sources listed at the end. Where a number comes from a secondary summary rather than the primary publisher, it is marked *(secondary)*.

## 1. Historical Background

| Period | Milestone |
|---|---|
| 1956 | Dartmouth workshop coins the term "artificial intelligence" |
| 1970s–1990s | Symbolic AI and expert systems; two "AI winters" of reduced funding |
| 2012 | AlexNet wins ImageNet, starting the deep learning era |
| 2016 | AlphaGo defeats Lee Sedol |
| 2017 | The Transformer architecture ("Attention Is All You Need") is published |
| 2022 | ChatGPT launches; generative AI enters mass use |
| 2024–2025 | Reasoning models, multimodal models, and early AI agents |
| 2026 | Agents move into production; the frontier release cycle is the fastest yet |

## 2. Technology Trends in 2026

### 2.1 Frontier models
- Industry produced over 90% of notable frontier models in 2025 (Stanford AI Index 2026).
- 2026 saw the most compressed release cycle on record, with roughly eleven frontier models shipped between February and July. April 2026 was the densest window, with OpenAI, Anthropic, and Google DeepMind each releasing or confirming major models *(secondary)*.
- Capability is accelerating rather than plateauing. SWE-bench Verified coding scores rose from about 60% to nearly 100% in one year. Several models match or exceed human baselines on PhD-level science questions, multimodal reasoning, and competition mathematics (AI Index 2026).
- **The "jagged frontier":** models that win gold at the International Mathematical Olympiad read analog clocks correctly only about 50.1% of the time. Benchmarks are a weak proxy for real-world reliability (AI Index 2026, *secondary*).

### 2.2 Agentic AI
- Agentic AI has moved from pilots into production workflows. Examples include insurance claim routing with retrieval-augmented generation (RAG) and agents that replace manual literature searches *(secondary)*.
- The dominant architecture pattern is **model routing**: a cheap, fast model handles most agent steps and escalates to a frontier model for hard reasoning *(secondary)*.

### 2.3 Transparency
- The Foundation Model Transparency Index fell from 58 to 40 points. Major labs no longer disclose dataset sizes or training durations for their latest models (AI Index 2026, *secondary*).

## 3. Investment and Infrastructure

- Global corporate AI investment reached about **$581.7B**, up 130% year over year. Generative AI investment grew nearly fivefold to **$170.9B** (AI Index 2026, *secondary*).
- U.S. private AI investment was **$285.9B** in 2025, more than 23 times China's $12.4B. The U.S. had 1,953 newly funded AI companies (AI Index 2026).
- The U.S. hosts 5,427 data centers, more than 10 times any other country. TSMC fabricates almost every leading AI chip (AI Index 2026).
- In 2026, five hyperscalers plan to spend roughly **$660–690B** in capex, mostly on AI compute. J.P. Morgan estimates **$697B** (Futurum).
- AI data center construction costs **$25–40M per MW** of IT load, up from $8–12M in 2020. Power infrastructure now makes up 30–35% of data center capex *(secondary)*.
- **Energy is the binding constraint.** The IEA projects global data center electricity use to double between 2022 and 2026. Goldman Sachs forecasts a 165% rise in data center power demand by 2030 compared with 2023. U.S. investor-owned utilities plan $1.4T of capex through 2030.

## 4. Adoption and Social Impact

### 4.1 Adoption
- Organizational AI adoption reached **88%**. Generative AI reached **53%** population adoption within three years, faster than the PC or the internet (AI Index 2026).
- Estimated consumer value is about $172B per year by early 2026. Over 80% of U.S. high school and college students use AI for schoolwork (AI Index 2026).

### 4.2 Labor market
- **HBR (2026):** after ChatGPT's release, postings for routine, automation-prone roles fell 13%, while analytical, technical, and creative roles grew 20%.
- **Goldman Sachs (Aug 2026):** sectors more exposed to AI saw slower growth in job openings. Employment in call centers, software publishing, consulting, and advertising fell below trend.
- **S&P Global PMI survey:** the global net employment effect was −5 percentage points over the past 12 months.
- **PwC 2026 AI Jobs Barometer:** the labor market is splitting into two tracks. Jobs requiring AI skills are growing almost 8 times faster than the overall market.
- **Overall:** the unemployment gap between AI-exposed and insulated workers remains small so far. The main effect is slower hiring rather than mass layoffs.

### 4.3 Science and medicine
- AlphaFold 3 improves protein–molecule interaction prediction accuracy by about 50% over prior methods.
- Isomorphic Labs (a Google DeepMind spin-off) is moving AlphaFold-designed oncology candidates toward first-in-human trials.

## 5. Safety, Regulation, and Ethics

- Documented AI incidents rose from **233 to 362** year over year (AI Index 2026).
- Experts and the public disagree by about 50 points on whether AI will help people do their jobs (AI Index 2026, *secondary*).
- **EU AI Act:** reached general application on **2 August 2026**. The obligations now enforced are:
  - general-purpose AI (GPAI) model duties, such as technical documentation;
  - systemic-risk model duties: adversarial evaluation, risk mitigation, incident reporting, and cybersecurity;
  - Article 50 transparency duties.

  GPAI models placed on the market before August 2025 have until 2 August 2027 to comply.
- **Korea's AI Basic Act** (인공지능 발전과 신뢰 기반 조성 등에 관한 기본법) took effect on **22 January 2026**. It combines industrial promotion with regulation:
  - **High-impact AI** (autonomous driving, medical diagnosis, credit scoring) requires prior review, safety measures, and impact assessment.
  - **Generative AI** must give prior notice and label its outputs, for example with watermarks.
  - Fines come with a grace period of at least one year.

## 6. Outlook and Key Issues

1. **Capability vs. reliability:** benchmark gains outpace real-world dependability, which is the "jagged frontier."
2. **Agents in production:** the competitive edge is shifting from model quality to integration, routing, and governance.
3. **Infrastructure and energy:** power supply, not chips alone, now limits how fast AI can scale.
4. **Geopolitics:** the U.S.–China performance gap has effectively closed, while investment and infrastructure remain concentrated in the U.S.
5. **Governance gap:** safety, transparency, and education are lagging behind capability. 2026 is the first year of real enforcement under the EU and Korean laws.
6. **Labor transition:** hiring is slowing in exposed roles, and demand for AI skills is rising quickly.

## Sources

- Stanford HAI, *The 2026 AI Index Report*: https://hai.stanford.edu/ai-index/2026-ai-index-report
- Stark Insider, *Stanford's 2026 AI Index*: https://www.starkinsider.com/2026/04/stanford-2026-ai-index-report.html
- Pebblous, *Stanford AI Index 2026 Decoded*: https://blog.pebblous.ai/report/hai-ai-index-2026-part1/en/
- Netguru, *Latest AI developments 2026*: https://www.netguru.com/blog/latest-ai-developments-2026
- Jobsecuritymeter, *Frontier AI Models 2026*: https://jobsecuritymeter.com/guides/frontier-ai-models-2026
- Futurum, *AI Capex 2026: The $690B Infrastructure Sprint*: https://futurumgroup.com/insights/ai-capex-2026-the-690b-infrastructure-sprint/
- Goldman Sachs, *Tracking Trillions*: https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out
- BNEF, *AI Data Center Build Advances at Full Speed*: https://about.bnef.com/insights/data-centers/ai-data-center-build-advances-at-full-speed-five-things-to-know/
- Clusterbid, *AI Data Center Construction CAPEX 2026*: https://clusterbid.com/blog/ai-data-center-building-capex-2026-analysis
- Tech Insider, *US Utilities Plan $1.4T for AI Data Centers*: https://tech-insider.org/us-utility-1-4-trillion-ai-data-center-energy-2026/
- HBR, *How AI Is Changing the Labor Market* (2026-03): https://hbr.org/2026/03/research-how-ai-is-changing-the-labor-market
- CNBC, *Goldman studied where AI is squeezing labor markets* (2026-08-19): https://www.cnbc.com/2026/08/19/goldman-ai-impact-employment-jobs.html
- S&P Global, *AI impact on employment 2026*: https://www.spglobal.com/en/research-insights/special-reports/ai-impact-on-employment-2026
- PwC, *2026 Global AI Jobs Barometer*: https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html
- IntuitionLabs, *Isomorphic Labs & AlphaFold*: https://intuitionlabs.ai/articles/isomorphic-labs-alphafold-ai-drug-discovery-trials
- Orrick, *The EU AI Act: 6 Steps to Take Before 2 August 2026*: https://www.orrick.com/en/Insights/2025/11/The-EU-AI-Act-6-Steps-to-Take-Before-2-August-2026
- Software Improvement Group, *EU AI Act Summary*: https://www.softwareimprovementgroup.com/blog/eu-ai-act-summary/
- Shin & Kim, *AI 기본법 시행과 그 시사점*: https://www.shinkim.com/kor/media/newsletter/3114
- AI Citizen Lab, *AI기본법 시행*: https://aicitizenlab.com/entry/korea-ai-regulations-grace-period-2026
