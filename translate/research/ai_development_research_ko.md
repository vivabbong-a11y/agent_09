# 자료조사 정리: AI의 발전 (2026년 10월 기준)

- 주제: AI 발전
- 작성일: 2026-10-04
- 방법: 2025~2026년에 발표된 보고서, 정책 문서, 업계 분석 자료 웹 검색
- 주의: 일부 수치는 원 보고서를 요약한 2차 자료(블로그, 뉴스)에서 가져왔습니다. *(2차 자료)* 표시가 있는 수치는 공식 인용 전에 원문과 대조해야 합니다.

---

## 1. 기술 역량

### 1.1 벤치마크 성능 (Stanford AI Index 2026)
- 코딩 벤치마크인 SWE-bench Verified의 최고 성능이 1년 만에 약 60%에서 100%에 가까운 수준으로 올랐습니다.
- 프런티어 모델은 박사 수준 과학 문항에서 인간 전문가 기준과 같거나 그 이상입니다(GPQA 약 93%).
- 미국과 중국 모델 간 성능 격차는 사실상 사라졌으며, 2025년 초 이후 여러 차례 선두가 바뀌었습니다. 2026년 3월 기준 1위 모델(Anthropic)의 우위는 2.7%에 불과했습니다.

### 1.2 "들쭉날쭉한 프런티어(jagged frontier)"
- 국제수학올림피아드에서 금메달 수준에 도달한 같은 모델이 아날로그 시계를 정확히 읽는 비율은 약 50.1%에 그칩니다(AI Index 2026).
- 국제 AI 안전 보고서 2026은 시스템이 어려운 올림피아드 문제를 풀면서도 기본적인 물체 세기나 긴 다단계 작업에서의 일관성 유지에는 실패할 수 있다고 지적합니다.
- 시사점: 대표 벤치마크 점수는 실제 업무에서의 신뢰성을 잘 대변하지 못합니다.

### 1.3 발전의 동력 (국제 AI 안전 보고서 2026)
- 성능 향상은 학습 규모 확대뿐 아니라 사후 학습(post-training) 개선과 추론 시점 확장(모델이 더 많은 연산을 들여 추론하는 방식)에서 점점 더 많이 나옵니다.
- 알고리즘 효율은 매년 약 2~6배 개선되고 있습니다.

### 1.4 출시 속도와 시장 *(2차 자료)*
- 2026년 1분기 주요 프런티어 모델 출시는 약 12건 이상으로, 2025년 4분기 약 6건의 두 배 수준입니다(Frontier Model Release Velocity Index).
- 2026년 9월 한 달에만 OpenAI, Anthropic, Google, Meta, DeepSeek 등이 약 열흘 사이에 여러 프런티어 모델을 출시했습니다.
- 250억~340억 파라미터급 오픈 웨이트 모델이 700억 이상 모델 대비 일부 비용으로 프런티어에 근접한 성능을 냅니다.

---

## 2. 도입과 활용

- 세계 인구의 53%가 생성형 AI를 사용하며, 이 수준에 도달하는 데 약 3년이 걸렸습니다. 조직의 AI 도입률은 88%입니다(AI Index 2026).
- 최소 7억 명이 주요 AI 시스템을 매주 사용하지만, 아프리카·아시아·중남미 다수 지역의 도입률은 10% 미만으로 불균등합니다(국제 AI 안전 보고서 2026).

### 2.1 기업의 AI 에이전트
- Zapier 조사: 기업의 72%가 AI 에이전트를 사용하며, 84%가 2026년에 에이전트 투자를 늘릴 계획입니다.
- Writer 조사: 경영진의 97%가 지난 1년간 에이전트를 배포했다고 답했지만, 79%는 도입에 어려움을 겪고 있습니다(2025년 대비 두 자릿수 증가).
- Gartner: AI 에이전트를 배포한 조직은 17%에 불과하지만, 60% 이상이 2년 안에 배포할 것으로 예상합니다.
- 파일럿-운영 격차 *(2차 자료)*: 에이전트 파일럿의 약 88%가 실제 운영 단계에 이르지 못하며, 주요 장애 요인은 평가 체계 부족(64%), 거버넌스 마찰(57%), 모델 신뢰성(51%)입니다.

---

## 3. 투자와 인프라

### 3.1 투자
- 전 세계 기업 AI 투자: 5,817억 달러로 전년 대비 130% 증가. 생성형 AI 투자만 약 1,709억 달러로 거의 5배 증가했습니다(AI Index 2026).

### 3.2 하이퍼스케일러 설비투자 *(2차 자료)*
- 4대 하이퍼스케일러는 2026년에 최대 약 6,300억 달러의 설비투자를 계획하며, 이는 2025년 사상 최대치(약 3,880억 달러)보다 약 62% 많습니다.
- 기업별 가이던스: Microsoft 1,100억~1,200억 달러, Meta 1,150억~1,350억 달러, Amazon 약 2,000억 달러.
- 약 75%(약 4,500억 달러)가 AI 인프라(가속기, 데이터센터 건설, 네트워킹, 메모리, 냉각, 전력)에 투입됩니다.

### 3.3 에너지 (IEA)
- 2025년 데이터센터 전력 수요는 17% 증가했고, AI 중심 데이터센터 수요는 약 50% 증가했습니다. 같은 기간 전 세계 전력 수요 증가율은 약 3%였습니다.
- 데이터센터 전력 소비는 약 485TWh(2025년)에서 약 950TWh(2030년)로 대략 두 배가 되어 세계 전력 수요의 약 3%를 차지할 전망이며, AI 중심 데이터센터 소비는 약 세 배로 늘어납니다.
- 5대 기술·데이터센터 기업의 설비투자는 2025년 4,000억 달러를 넘었고, 2026년에는 약 75% 더 늘어날 예정입니다.

---

## 4. 일자리와 경제에 미치는 영향

- S&P Global PMI 조사: 지난 12개월 AI의 고용 순영향은 -5%p이며, 향후 -2%p가 추가로 예상됩니다. 이전 보고서에서는 중립~소폭 긍정이었습니다.
- Harvard Business Review(2026): ChatGPT 출시 이후 미국의 반복적·자동화 취약 직무 채용공고는 13% 감소했고, 분석·기술·창의 직무는 20% 증가했습니다.
- PwC 2026 글로벌 AI 일자리 바로미터: "투 트랙" 노동시장. AI 활용 역량이 가장 높은 기업은 가장 낮은 기업보다 인원 증가율(52% 대 36%)과 임금 상승률(24% 대 17%)이 더 높았습니다.
- Anthropic 연구(2026년 3월): AI 노출도가 높은 노동자의 전체 실업률 증가는 확인되지 않았지만, AI 노출 직무에 진입하는 22~25세 노동자의 구직 성공률은 약 14% 감소했습니다.
- 국제 AI 안전 보고서 2026: 일부 분야(예: 글쓰기)에서 초년생 수요가 줄고 있다는 초기적이지만 불확실한 증거가 있으며, AI에 장기간 의존하면 오류를 찾아내는 능력이 떨어질 수 있습니다.

---

## 5. 위험과 안전

- 기록된 AI 사고는 전년 233건에서 362건으로 증가했습니다(AI Index 2026).
- 사이버보안: DARPA AI 사이버 챌린지에서 한 AI 시스템이 실제 소프트웨어의 알려진 취약점 77%를 자율적으로 찾아냈으며, 공격자들이 일부 침투 작업의 80~90%를 AI로 자동화한 것으로 보고되었습니다.
- 딥페이크가 사기·스캠에 점점 더 많이 쓰이고, 동의 없는 성적 이미지도 흔해졌습니다.
- 인식 격차: AI 전문가의 73%가 AI에 낙관적인 반면 일반 대중은 23%에 그칩니다(AI Index 2026).
- 위험 관리: 안전 보고서는 "심층 방어(defence-in-depth)"(모델 안전장치 + 모니터링, 접근 통제, 사고 대응)를 권고합니다. 2025년에 12개 기업이 프런티어 AI 안전 프레임워크를 발표하거나 갱신했습니다.

---

## 6. 거버넌스와 정책

### 6.1 유럽연합 – AI Act
- 범용 AI(GPAI) 제공자는 기술 문서를 유지하고, 하위 배포자에게 정보를 제공하며, EU 저작권법을 준수하고, 학습 데이터 요약을 공개해야 합니다.
- 2026년 8월 2일부터: 투명성 규정과 부속서 III 고위험 의무가 적용되고, EU AI 사무국과 회원국 당국이 감독·집행하며, GPAI 제공자에 대한 EU 차원의 과징금(제101조)이 적용됩니다.
- 규정 이전에 출시된 GPAI 모델은 2027년 8월 2일까지 전환 기간이 있습니다.

### 6.2 대한민국 – AI 기본법
- 「인공지능 발전과 신뢰 기반 조성 등에 관한 기본법」과 시행령이 2026년 1월 22일 시행되었습니다.
- 한국은 EU에 이어 두 번째로 포괄적 AI 법을 제정했으며, 이를 전면 시행한 첫 국가 중 하나입니다.
- 주요 내용: AI 산업 지원 체계, 고영향 AI 안전 의무, 생성형 AI 결과물 표시 등 투명성 의무, 해외 사업자의 국내 대리인 지정.
- 과태료 부과 전 최소 1년의 계도기간을 두고, 기업 대응을 돕는 지원센터를 운영합니다.

### 6.3 대한민국 – 독자 AI 파운데이션 모델 프로젝트
- 과학기술정보통신부가 최대 5개 정예팀을 선발해 국산 파운데이션 모델을 개발하며, 글로벌 최고 모델 대비 95% 이상 성능을 목표로 합니다.
- GPU 지원: 2026년 상반기까지는 민간 GPU를 임차해 지원하고, 이후에는 정부 구매분(추경 첨단 GPU 1만 장)을 활용합니다. 팀당 약 500장에서 시작해 단계평가 후 1,000장 이상으로 확대합니다.
- 약 1조 4,600억 원으로 GPU 1만 장을 확보하고, 2026년 상반기에 GPU 약 8,500장 규모의 국가 슈퍼컴퓨터 6호기를 구축할 계획입니다.

---

## 7. 보고서를 위한 핵심 시사점

1. 역량은 계속 가속하지만 고르지 않습니다("들쭉날쭉한 프런티어"). 진짜 병목은 최고 점수가 아니라 신뢰성입니다.
2. 개인 차원의 활용은 대중화되었지만, 기업의 가치 창출은 에이전트의 파일럿-운영 격차에 막혀 있습니다.
3. 투자와 에너지 수요가 역사적 속도로 늘어나며, 투자 회수와 전력망 문제가 제기됩니다.
4. 노동 영향은 대량 실업보다 청년·초년생 채용에서 먼저 나타나고 있습니다.
5. 위험(사고, 사이버 악용, 딥페이크)이 역량과 함께 커지고 있으며, 규제(EU AI Act, 한국 AI 기본법)는 2026년에 집행 단계로 들어섰습니다.

---

## 출처

- Stanford HAI, The 2026 AI Index Report — https://hai.stanford.edu/ai-index/2026-ai-index-report
- Stark Insider, Stanford 2026 AI Index 요약 — https://www.starkinsider.com/2026/04/stanford-2026-ai-index-report.html
- International AI Safety Report 2026 — https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026
- Inside Global Tech, 국제 AI 안전 보고서 2026 개요 — https://www.insideglobaltech.com/2026/02/10/international-ai-safety-report-2026-examines-ai-capabilities-risks-and-safeguards/
- Digital Applied, Frontier Model Release Velocity Index Q2 2026 — https://www.digitalapplied.com/blog/frontier-model-release-velocity-index-q2-2026
- Rost Glukhov, Efficient Frontier of Open Models 2026 — https://www.glukhov.org/llm-performance/benchmarks/efficient-frontier-of-open-models-2026/
- Zapier, State of agentic AI adoption survey 2026 — https://zapier.com/blog/ai-agents-survey/
- Writer, Enterprise AI adoption in 2026 — https://writer.com/blog/enterprise-ai-adoption-2026/
- Gartner, 2026 Hype Cycle for Agentic AI — https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai
- Digital Applied, AI Agent Adoption 2026 — https://www.digitalapplied.com/blog/ai-agent-adoption-2026-enterprise-data-points
- Data Center Richness, Hyperscalers Plan $630 Billion in 2026 CapEx — https://datacenterrichness.substack.com/p/hyperscalers-plan-630-billion-in
- Introl, Hyperscaler CapEx Hits $600B in 2026 — https://introl.com/blog/hyperscaler-capex-600b-2026-ai-infrastructure-debt-january-2026
- IEA, Electricity 2026 — https://www.iea.org/reports/electricity-2026
- E&T, IEA: AI 데이터센터 전력 사용 2030년까지 3배 — https://eandt.theiet.org/2026/04/22/iea-warns-ai-data-centre-electricity-use-will-triple-2030
- S&P Global, AI impact on employment 2026 — https://www.spglobal.com/en/research-insights/special-reports/ai-impact-on-employment-2026
- Harvard Business Review, How AI Is Changing the Labor Market — https://hbr.org/2026/03/research-how-ai-is-changing-the-labor-market
- PwC, 2026 Global AI Jobs Barometer — https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html
- CNBC, Goldman의 AI·노동시장 연구 — https://www.cnbc.com/2026/08/19/goldman-ai-impact-employment-jobs.html
- European Commission, AI Act — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- SIG, EU AI Act Summary (2026년 8월 업데이트) — https://www.softwareimprovementgroup.com/blog/eu-ai-act-summary/
- 법무법인 세종, AI 기본법 시행과 그 시사점 — https://www.shinkim.com/kor/media/newsletter/3114
- Law.asia, 한국 AI 기본법의 주요 특징과 의의 — https://law.asia/ko/korea-ai-basic-act-characteristics-significance/
- 정책브리핑, 독자 AI 파운데이션 모델 정예팀 공모 — https://www.korea.kr/news/policyNewsView.do?newsId=148944741
- 정책브리핑, 데이터센터 지원 및 GPU 확보 — https://www.korea.kr/news/policyNewsView.do?newsId=148945875
