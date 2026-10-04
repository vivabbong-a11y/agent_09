# AI 발전 자료조사 (2026-10-04 기준)

인공지능 발전 현황에 관한 조사 노트입니다. 보고서 `report/AI_발전_보고서_20261004.docx`의 기초 자료로 정리했습니다.

> 출처 안내: 수치는 문서 끝에 정리한 출처에서 가져왔습니다. 1차 발행처가 아니라 2차 요약에서 가져온 수치에는 *(2차 출처)*라고 표시했습니다.

## 1. 역사적 배경

| 시기 | 주요 사건 |
|---|---|
| 1956 | 다트머스 워크숍에서 "인공지능"이라는 용어가 처음 쓰임 |
| 1970~1990년대 | 기호주의 AI와 전문가 시스템의 시대. 연구 자금이 줄어든 두 차례의 "AI 겨울" |
| 2012 | AlexNet이 ImageNet 대회에서 우승하며 딥러닝 시대가 열림 |
| 2016 | AlphaGo가 이세돌 9단에게 승리 |
| 2017 | Transformer 아키텍처 논문("Attention Is All You Need") 발표 |
| 2022 | ChatGPT 출시로 생성형 AI가 대중화됨 |
| 2024~2025 | 추론 모델, 멀티모달 모델, 초기 AI 에이전트 등장 |
| 2026 | 에이전트가 실제 업무에 투입되고, 프런티어 모델 출시 주기가 역대 가장 빨라짐 |

## 2. 2026년 기술 동향

### 2.1 프런티어 모델
- 2025년 주목할 만한 프런티어 모델의 90% 이상을 산업계가 만들었습니다(Stanford AI Index 2026).
- 2026년은 출시 주기가 역대 가장 짧았던 해입니다. 2월부터 7월까지 프런티어 모델 약 11종이 나왔습니다. 특히 2026년 4월에는 OpenAI, Anthropic, Google DeepMind가 모두 주요 모델을 출시하거나 공개해 출시가 가장 몰렸습니다 *(2차 출처)*.
- AI 성능은 정체되지 않고 오히려 빨라지고 있습니다. 코딩 벤치마크인 SWE-bench Verified 점수는 1년 만에 약 60%에서 100% 가까이로 올랐습니다. 박사 수준 과학 문제, 멀티모달 추론, 수학 경시 문제에서는 여러 모델이 사람 기준치와 같거나 넘어섰습니다(AI Index 2026).
- **"들쭉날쭉한 프런티어(jagged frontier)":** 국제수학올림피아드에서 금메달 수준 성적을 낸 모델도 아날로그 시계는 약 50.1%만 제대로 읽습니다. 벤치마크 점수만으로는 실제 업무에서 얼마나 믿을 만한지 알기 어렵다는 뜻입니다(AI Index 2026, *2차 출처*).

### 2.2 에이전트형 AI
- 에이전트형 AI는 시범 사업 단계를 지나 실제 업무 흐름에 들어갔습니다. 검색 증강 생성(RAG)으로 보험 청구를 분류·처리하는 파이프라인, 사람이 하던 문헌 검색을 대신하는 에이전트 등이 예입니다 *(2차 출처)*.
- 가장 널리 쓰이는 구조는 **모델 라우팅**입니다. 에이전트 작업의 대부분은 저렴하고 빠른 모델이 처리하고, 어려운 추론만 프런티어 모델에 넘깁니다 *(2차 출처)*.

### 2.3 투명성
- 파운데이션 모델 투명성 지수(Foundation Model Transparency Index)는 58점에서 40점으로 떨어졌습니다. 주요 연구소들은 최신 모델의 데이터셋 규모와 학습 기간을 더 이상 공개하지 않습니다(AI Index 2026, *2차 출처*).

## 3. 투자와 인프라

- 전 세계 기업의 AI 투자는 약 **5,817억 달러**로 1년 전보다 130% 늘었습니다. 이 중 생성형 AI 투자는 5배 가까이 늘어 **1,709억 달러**에 이르렀습니다(AI Index 2026, *2차 출처*).
- 2025년 미국의 민간 AI 투자는 **2,859억 달러**로, 중국(124억 달러)의 23배가 넘습니다. 같은 해 미국에서 새로 투자를 받은 AI 기업은 1,953개입니다(AI Index 2026).
- 미국에는 데이터센터가 5,427개 있습니다. 2위 국가보다 10배 이상 많습니다. 최첨단 AI 칩은 대부분 TSMC가 생산합니다(AI Index 2026).
- 2026년 5대 하이퍼스케일러는 약 **6,600억~6,900억 달러**를 설비에 투자할 계획이며, 대부분이 AI 컴퓨팅용입니다. J.P. Morgan은 이 금액을 **6,970억 달러**로 추정합니다(Futurum).
- AI 데이터센터 건설비는 IT 부하 1MW당 **2,500만~4,000만 달러**로, 2020년(800만~1,200만 달러)보다 크게 올랐습니다. 전력 인프라가 데이터센터 설비투자에서 차지하는 비중도 30~35%로 커졌습니다 *(2차 출처)*.
- **AI 확산의 가장 큰 제약은 에너지입니다.** IEA는 전 세계 데이터센터 전력 소비가 2022년에서 2026년 사이 두 배로 늘 것으로 전망합니다. Goldman Sachs는 2030년 데이터센터 전력 수요가 2023년보다 165% 늘 것으로 예상합니다. 미국 민간 전력회사들은 2030년까지 1.4조 달러를 설비에 투자할 계획입니다.

## 4. 도입 현황과 사회적 영향

### 4.1 도입 현황
- 조직의 AI 도입률은 **88%**입니다. 생성형 AI는 3년 만에 인구의 **53%**가 쓰게 되어, PC나 인터넷보다 빠르게 퍼졌습니다(AI Index 2026).
- 소비자가 얻는 가치는 2026년 초 기준 연간 약 1,720억 달러로 추정됩니다. 미국 고등학생과 대학생의 80% 이상이 과제에 AI를 씁니다(AI Index 2026).

### 4.2 노동시장
- **HBR(2026):** ChatGPT 출시 후 자동화되기 쉬운 반복 업무 직종의 채용 공고는 13% 줄었습니다. 반면 분석·기술·창의 직종 공고는 20% 늘었습니다.
- **Goldman Sachs(2026년 8월):** AI에 많이 노출된 산업일수록 채용 공고가 느리게 늘었습니다. 콜센터, 소프트웨어 출판, 컨설팅, 광고 분야의 고용은 추세보다 낮아졌습니다.
- **S&P Global PMI 조사:** 지난 12개월 동안 AI가 전 세계 고용에 미친 순효과는 -5%p였습니다.
- **PwC 2026 AI 일자리 지표:** 노동시장이 두 갈래로 나뉘고 있습니다. AI 역량이 필요한 일자리는 전체 시장보다 8배 가까이 빠르게 늘고 있습니다.
- **종합:** 지금까지 AI에 노출된 노동자와 그렇지 않은 노동자의 실업률 차이는 작습니다. 대규모 해고보다는 신규 채용이 둔화되는 형태로 영향이 나타나고 있습니다.

### 4.3 과학과 의학
- AlphaFold 3는 단백질과 분자의 상호작용을 기존 방법보다 약 50% 더 정확하게 예측합니다.
- Google DeepMind에서 분사한 Isomorphic Labs는 AlphaFold로 설계한 항암 후보물질의 첫 인체 임상시험을 준비하고 있습니다.

## 5. 안전, 규제, 윤리

- 공식 기록된 AI 사고는 1년 사이 **233건에서 362건**으로 늘었습니다(AI Index 2026).
- "AI가 업무에 도움이 될까"라는 질문에서 전문가와 일반 대중의 인식은 약 50%p 차이가 납니다(AI Index 2026, *2차 출처*).
- **EU AI Act:** **2026년 8월 2일** 전면 적용 단계에 들어갔습니다. 지금 집행되고 있는 의무는 다음과 같습니다.
  - 범용 AI(GPAI) 모델 의무: 기술 문서 작성 등
  - 시스템적 위험이 있는 모델의 의무: 적대적 평가, 위험 완화, 사고 보고, 사이버보안
  - 제50조 투명성 의무

  2025년 8월 이전에 출시된 GPAI 모델은 2027년 8월 2일까지 규정을 따르면 됩니다.
- **한국 AI 기본법**(인공지능 발전과 신뢰 기반 조성 등에 관한 기본법)은 **2026년 1월 22일** 시행되었습니다. 산업 진흥과 규제를 함께 담은 법입니다.
  - **고영향 AI**(자율주행, 의료 진단, 신용평가 등)는 사전 검토, 안전성 확보, 영향 평가를 거쳐야 합니다.
  - **생성형 AI**는 이용자에게 미리 알리고, 워터마크 등으로 결과물을 표시해야 합니다.
  - 과태료는 최소 1년의 계도 기간을 둔 뒤 부과됩니다.

## 6. 전망과 핵심 쟁점

1. **성능과 신뢰성의 차이:** 벤치마크 성적은 빠르게 오르지만 실제 업무에서의 신뢰성은 그만큼 따라가지 못합니다("들쭉날쭉한 프런티어").
2. **에이전트의 실제 투입:** 경쟁력의 중심이 모델 품질에서 시스템 통합, 라우팅, 거버넌스로 옮겨가고 있습니다.
3. **인프라와 에너지:** 이제는 칩뿐 아니라 전력 공급이 AI 확장 속도를 결정합니다.
4. **지정학:** 미국과 중국의 모델 성능 차이는 사실상 사라졌습니다. 다만 투자와 인프라는 여전히 미국에 몰려 있습니다.
5. **거버넌스 공백:** 안전, 투명성, 교육이 성능 발전을 따라가지 못하고 있습니다. 2026년은 EU와 한국의 AI 법이 실제로 집행되기 시작한 첫해입니다.
6. **노동 전환:** AI에 노출된 직무의 채용은 줄고, AI 역량에 대한 수요는 빠르게 늘고 있습니다.

## 출처

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
- 법무법인 세종(Shin & Kim), *AI 기본법 시행과 그 시사점*: https://www.shinkim.com/kor/media/newsletter/3114
- AI Citizen Lab, *AI기본법 시행*: https://aicitizenlab.com/entry/korea-ai-regulations-grace-period-2026
