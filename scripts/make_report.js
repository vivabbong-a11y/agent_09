const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, PageBreak, TableOfContents, Footer, PageNumber,
} = require('docx');

const OUT = path.join(__dirname, '..', 'report', 'AI_발전_보고서_20261004.docx');
const FONT = 'Malgun Gothic';

const p = (text, opts = {}) => new Paragraph({
  spacing: { after: 160, line: 360 },
  alignment: AlignmentType.JUSTIFIED,
  ...opts,
  children: Array.isArray(text) ? text : [new TextRun(text)],
});
const h1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const h2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const bullet = (t, boldLead) => new Paragraph({
  numbering: { reference: 'bullets', level: 0 },
  spacing: { after: 100, line: 340 },
  children: boldLead ? [new TextRun({ text: boldLead, bold: true }), new TextRun(t)] : [new TextRun(t)],
});

const border = { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' };
const borders = { top: border, bottom: border, left: border, right: border };
function table(widths, rows) {
  const total = widths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: rows.map((r, i) => new TableRow({
      tableHeader: i === 0,
      children: r.map((c, j) => new TableCell({
        width: { size: widths[j], type: WidthType.DXA },
        borders,
        shading: i === 0 ? { type: ShadingType.CLEAR, fill: '1F3864', color: 'auto' } : undefined,
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: c, bold: i === 0, color: i === 0 ? 'FFFFFF' : undefined, size: 20 })] })],
      })),
    })),
  });
}
const caption = (t) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 240 }, children: [new TextRun({ text: t, italics: true, size: 18, color: '595959' })] });

const W = 9026; // A4 text width with 1" margins

const children = [
  // 표지
  new Paragraph({ spacing: { before: 3600 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'AI 발전 보고서', bold: true, size: 56, color: '1F3864' })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 240 }, children: [new TextRun({ text: '2026년 인공지능 기술·산업·사회·규제 동향 분석', size: 28, color: '404040' })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2400 }, children: [new TextRun({ text: '작성일: 2026년 10월 4일', size: 22 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '작성: 최운겸', size: 22 })] }),
  new Paragraph({ children: [new PageBreak()] }),

  new Paragraph({ children: [new TextRun({ text: '목차', bold: true, size: 32 })] }),
  new TableOfContents('목차', { hyperlink: true, headingStyleRange: '1-2' }),
  new Paragraph({ children: [new PageBreak()] }),

  // 서론
  h1('Ⅰ. 서론'),
  h2('1. 작성 배경'),
  p('2022년 ChatGPT가 나온 뒤 생성형 AI는 일반 대중이 쓰는 기술이 되었고, 2026년에는 가정·기업·공공 부문 모두에 깊이 들어왔습니다. Stanford HAI의 「2026 AI Index」에 따르면 조직의 AI 도입률은 88%입니다. 생성형 AI는 3년 만에 인구의 53%가 쓰게 되어 PC나 인터넷보다 빠르게 퍼졌습니다. 같은 해 EU AI Act가 전면 적용되었고 한국에서도 AI 기본법이 시행되었습니다. 2026년은 기술 발전과 제도 정비가 함께 이루어진 해입니다.'),
  h2('2. 목적 및 범위'),
  p('이 보고서는 2026년 10월 기준 AI 발전 현황을 네 가지 측면에서 정리합니다. 이를 바탕으로 핵심 쟁점과 앞으로의 대응 방향을 제시합니다.'),
  bullet(' 프런티어 모델과 에이전트형 AI', '기술:'),
  bullet(' 투자와 인프라', '산업:'),
  bullet(' 도입, 노동, 과학', '사회:'),
  bullet(' 안전과 법제도', '규제:'),
  h2('3. 조사 방법'),
  p('Stanford HAI AI Index 2026, Goldman Sachs, PwC, S&P Global, Harvard Business Review 등 공개 보고서와 언론·법률 자료를 웹으로 조사했습니다. 상세 조사 노트와 출처는 research/ai_development_research_20261004.md에 정리되어 있습니다.'),

  // 본론
  new Paragraph({ children: [new PageBreak()] }),
  h1('Ⅱ. 본론'),
  h2('1. AI 발전의 역사적 흐름'),
  p('AI는 기호주의 시대와 두 차례의 침체기를 거쳤습니다. 이후 딥러닝, Transformer, 생성형 AI가 차례로 등장하면서 빠르게 발전했습니다.'),
  table([1800, W - 1800], [
    ['시기', '주요 사건'],
    ['1956', '다트머스 워크숍에서 "인공지능"이라는 용어가 처음 쓰임'],
    ['1970~1990년대', '기호주의 AI와 전문가 시스템의 시대. 두 차례의 "AI 겨울"'],
    ['2012', 'AlexNet이 ImageNet 대회에서 우승하며 딥러닝 시대 개막'],
    ['2016', 'AlphaGo가 이세돌 9단에게 승리'],
    ['2017', 'Transformer 아키텍처 발표'],
    ['2022', 'ChatGPT 출시로 생성형 AI 대중화'],
    ['2024~2025', '추론 모델, 멀티모달 모델, 초기 AI 에이전트 등장'],
    ['2026', '에이전트의 실제 업무 투입, 역대 가장 빠른 프런티어 모델 출시 주기'],
  ]),
  caption('표 1. AI 발전의 주요 이정표'),

  h2('2. 기술 동향: 프런티어 모델과 에이전트'),
  p('2026년은 프런티어 모델 출시 주기가 역대 가장 짧았던 해입니다. 2월부터 7월까지 약 11종이 나왔고, 4월에는 OpenAI, Anthropic, Google DeepMind의 주요 모델 발표가 몰렸습니다. 2025년 주목할 만한 모델의 90% 이상은 산업계가 만들었습니다. AI 연구의 중심이 학계에서 기업으로 확실히 옮겨간 것입니다.'),
  p('성능은 정체되지 않고 오히려 빨라지고 있습니다. 코딩 벤치마크인 SWE-bench Verified 점수는 1년 만에 약 60%에서 100% 가까이로 올랐습니다. 박사 수준 과학 문제와 수학 경시 문제에서는 여러 모델이 사람 기준치를 넘어섰습니다. 하지만 국제수학올림피아드 금메달 수준의 모델도 아날로그 시계는 약 50%만 제대로 읽습니다. 이렇게 잘하는 일과 못하는 일의 차이가 큰 현상을 "들쭉날쭉한 프런티어(jagged frontier)"라고 부릅니다. 벤치마크 점수만으로는 실제 업무에서의 신뢰성을 판단하기 어렵다는 점을 보여줍니다.'),
  p('에이전트형 AI는 시범 사업을 넘어 실제 업무 흐름에 들어갔습니다. 보험 청구 처리, 문헌 조사 자동화 등이 예입니다. 가장 널리 쓰이는 구조는 "모델 라우팅"입니다. 저렴한 모델이 대부분의 단계를 처리하고, 어려운 추론만 고성능 모델에 넘깁니다. 한편 파운데이션 모델 투명성 지수는 58점에서 40점으로 떨어졌습니다. 주요 연구소들이 학습 데이터 규모와 학습 기간을 공개하지 않게 되어 투명성은 오히려 낮아졌습니다.'),

  h2('3. 산업 동향: 투자와 인프라'),
  p('AI 투자는 역대 최대 규모입니다. 전 세계 기업의 AI 투자는 약 5,817억 달러로 1년 전보다 130% 늘었습니다. 2025년 미국의 민간 AI 투자는 2,859억 달러로 중국의 23배가 넘습니다. 2026년 주요 하이퍼스케일러는 약 6,600억~6,900억 달러를 설비에 투자할 계획입니다.'),
  table([4200, 2400, 2426], [
    ['지표', '수치', '출처'],
    ['전 세계 기업 AI 투자', '약 5,817억 달러 (+130%)', 'AI Index 2026'],
    ['생성형 AI 투자', '약 1,709억 달러 (약 5배)', 'AI Index 2026'],
    ['미국 민간 AI 투자 (2025)', '2,859억 달러', 'AI Index 2026'],
    ['중국 민간 AI 투자 (2025)', '124억 달러', 'AI Index 2026'],
    ['하이퍼스케일러 설비투자 (2026)', '6,600억~6,970억 달러', 'Futurum / J.P. Morgan'],
    ['AI 데이터센터 건설비', 'MW당 2,500만~4,000만 달러', '업계 분석'],
  ]),
  caption('표 2. AI 투자 및 인프라 주요 지표'),
  p('가장 큰 제약은 에너지입니다. 국제에너지기구(IEA)는 전 세계 데이터센터 전력 소비가 2022년에서 2026년 사이 두 배로 늘 것으로 전망합니다. Goldman Sachs는 2030년 데이터센터 전력 수요가 2023년보다 165% 늘 것으로 예상합니다. 데이터센터 설비투자에서 전력 인프라가 차지하는 비중도 30~35%로 커졌습니다. 이제는 칩만큼 전력 공급이 AI 확장 속도를 좌우합니다.'),

  h2('4. 사회적 영향: 도입, 노동, 과학'),
  p('AI는 일상 곳곳에 퍼졌습니다. 미국 고등학생과 대학생의 80% 이상이 과제에 AI를 쓰고, 소비자가 얻는 가치는 연간 약 1,720억 달러로 추정됩니다.'),
  p('노동시장에서는 대규모 실업보다 "채용 둔화"와 "직무 재편"이 먼저 나타나고 있습니다. 주요 조사 결과는 다음과 같습니다.'),
  bullet(' ChatGPT 출시 후 반복 업무 직종의 채용 공고는 13% 줄고, 분석·기술·창의 직종 공고는 20% 늘었습니다.', 'HBR:'),
  bullet(' AI에 많이 노출된 콜센터, 소프트웨어 출판, 컨설팅, 광고 분야의 고용이 추세보다 낮아졌습니다.', 'Goldman Sachs:'),
  bullet(' 지난 12개월 동안 AI가 전 세계 고용에 미친 순효과는 -5%p였습니다.', 'S&P Global:'),
  bullet(' AI 역량이 필요한 일자리는 전체 시장보다 8배 가까이 빠르게 늘고 있습니다.', 'PwC:'),
  p('과학 분야에서는 AlphaFold 3가 단백질과 분자의 상호작용을 기존보다 약 50% 더 정확하게 예측합니다. Isomorphic Labs는 AI로 설계한 항암 후보물질의 인체 임상시험을 준비하고 있습니다. AI가 과학적 발견의 속도를 높이는 단계에 들어선 것입니다.'),

  h2('5. 안전과 규제'),
  p('기술이 빨라지는 만큼 위험도 커지고 있습니다. 공식 기록된 AI 사고는 1년 사이 233건에서 362건으로 늘었습니다. "AI가 업무에 도움이 될까"라는 질문에서 전문가와 대중의 인식은 약 50%p 차이가 납니다.'),
  p('제도 측면에서 2026년은 AI 규제가 실제로 집행되기 시작한 첫해입니다.'),
  table([1800, 2200, W - 4000], [
    ['구분', '시행 시점', '주요 내용'],
    ['EU AI Act', '2026년 8월 2일 전면 적용', '범용 AI(GPAI) 기술 문서 의무, 시스템적 위험 모델의 평가·사고 보고·사이버보안 의무, 제50조 투명성 의무. 기존 GPAI 모델은 2027년 8월까지 유예'],
    ['한국 AI 기본법', '2026년 1월 22일 시행', '고영향 AI의 사전 검토·안전성 확보·영향 평가, 생성형 AI 결과물 표시(워터마크) 의무, 최소 1년의 과태료 계도 기간'],
  ]),
  caption('표 3. 주요 AI 법제 비교'),

  // 결론
  new Paragraph({ children: [new PageBreak()] }),
  h1('Ⅲ. 결론'),
  h2('1. 요약'),
  p('2026년 AI는 성능, 도입, 투자 모든 면에서 역대 가장 빠르게 발전했습니다. 에이전트형 AI가 실제 업무에 들어가면서 AI는 "대화하는 도구"에서 "일을 수행하는 시스템"으로 바뀌고 있습니다. 반면 신뢰성, 투명성, 안전, 교육은 이 속도를 따라가지 못하고 있습니다. 앞으로는 이 차이를 줄이는 일이 가장 중요한 과제가 될 것입니다.'),
  h2('2. 핵심 시사점'),
  bullet(' 벤치마크 점수가 아니라 실제 업무 기준으로 평가하고 검증하는 체계가 필요합니다.', '성능보다 신뢰성:'),
  bullet(' 경쟁력의 중심이 모델 자체에서 시스템 통합, 라우팅, 거버넌스로 옮겨가고 있습니다.', '에이전트 시대의 경쟁력:'),
  bullet(' AI를 확산하려면 전력망 확충과 에너지 정책을 함께 세워야 합니다.', '에너지가 새로운 병목:'),
  bullet(' EU와 한국의 AI 법이 집행 단계에 들어섰으므로, 기업은 고영향 AI 분류와 생성물 표시 체계를 갖춰야 합니다.', '규제 대응은 필수:'),
  bullet(' 반복 업무는 줄고 AI 역량에 대한 수요는 늘고 있으므로, 재교육과 교육 정책이 필요합니다.', '노동 전환 대비:'),
  h2('3. 제언'),
  p('개인은 AI를 다루는 역량을 기본 소양으로 갖춰야 합니다. 기업은 AI 도입과 함께 거버넌스, 보안, 규제 대응 체계를 마련해야 합니다. 정부는 산업 진흥과 안전 확보의 균형을 맞추면서 전력 인프라와 인재 양성에 투자해야 합니다. AI 발전의 혜택을 사회 전체가 누리려면 기술의 속도에 맞춰 제도와 사람도 함께 준비해야 합니다.'),

  // 참고문헌
  new Paragraph({ children: [new PageBreak()] }),
  h1('참고문헌'),
  ...[
    'Stanford HAI, The 2026 AI Index Report. https://hai.stanford.edu/ai-index/2026-ai-index-report',
    'Futurum Group, AI Capex 2026: The $690B Infrastructure Sprint.',
    'Goldman Sachs, Tracking Trillions: The Assumptions Shaping the Scale of the AI Build-Out.',
    'BNEF, AI Data Center Build Advances at Full Speed: Five Things to Know.',
    'Harvard Business Review, Research: How AI Is Changing the Labor Market (2026.03).',
    'CNBC, Goldman studied where AI is squeezing labor markets (2026.08.19).',
    'S&P Global, AI impact on employment 2026.',
    'PwC, 2026 Global AI Jobs Barometer.',
    'IntuitionLabs, Isomorphic Labs & AlphaFold: AI Drug Discovery in Trials.',
    'Orrick, The EU AI Act: 6 Steps to Take Before 2 August 2026.',
    'Software Improvement Group, EU AI Act Summary (August 2026 update).',
    '법무법인 세종, AI 기본법 시행과 그 시사점.',
    'Netguru, Latest AI developments 2026.',
  ].map((t) => new Paragraph({ numbering: { reference: 'refs', level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: t, size: 20 })] })),
];

const doc = new Document({
  creator: '최운겸',
  title: 'AI 발전 보고서',
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 34, bold: true, color: '1F3864', font: FONT },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: '1F3864', space: 4 } } } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, color: '2E5597', font: FONT },
        paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [
      { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'refs', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '[%1]', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 540 } } } }] },
    ],
  },
  features: { updateFields: true },
  sections: [{
    properties: { page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: [PageNumber.CURRENT], size: 18 })] })] }) },
    children,
  }],
});

fs.mkdirSync(path.dirname(OUT), { recursive: true });
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(OUT, buf); console.log('written', OUT, buf.length); });
