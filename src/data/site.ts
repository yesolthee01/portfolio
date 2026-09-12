import type { Localized, AboutPageContent } from './types';

export interface AiToolItem {
  mark: string;
  markBg: string;
  title: string;
  desc: string;
}

/** One group within the Toolkit section (e.g. Generative AI, Design &
 * Motion). `note` is optional small print under the category's card row —
 * used to signal the list isn't exhaustive without cluttering the cards
 * themselves. */
export interface ToolkitCategory {
  label: string;
  items: AiToolItem[];
  note?: string;
}

export const siteCopy: Localized<{
  nav: { work: string; ai: string; about: string; contact: string };
  hero: {
    eyebrow: string;
    /** Headline markup: '\n' forces a line break, '**word**' colors that
     * word with the accent color. Kept as explicit markup (rather than a
     * plain auto-wrapping string) because at the hero's large clamp()
     * font size, natural reflow inside a fixed-width column doesn't land
     * in the same place the copy was written for — short, deliberately
     * placed lines avoid that. When editing, keep each line short enough
     * to render on one line at the hero title's largest font size (rough
     * budget: ~16 Korean characters or ~28 Latin characters per line). */
    headline: string;
    subLine1: string;
    subLine2: string;
    chips: string[];
    ctaWork: string;
    ctaAbout: string;
  };
  work: { title: string; meta: string };
  moreWork: { title: string; badge: string; desc: string };
  aiToolkit: { title: string; sub: string; categories: ToolkitCategory[] };
  about: {
    title: string;
    body: string;
    kw1: string;
    kw2: string;
    kw3: string;
    kw4: string;
    moreAboutLabel: string;
  };
  aboutPage: AboutPageContent;
  contact: {
    line1: string;
    line2part1: string;
    line2accent: string;
    line2part2: string;
    email: string;
    linkedin: string;
    linkedinUrl: string;
    footerLeft: string;
    footerRight: string;
  };
}> = {
  kr: {
    nav: { work: 'Work', ai: 'Toolkit', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'UX DESIGNER · SERVICE IMPROVEMENT',
      headline: '사용자의 불편을 발견하고,\n서비스의 개선으로 연결합니다.',
      subLine1: '사용자와 서비스가 만나는 과정에서 문제를 발견하고,',
      subLine2: '리서치와 기획, 협업과 검증을 통해 더 나은 경험을 만들어갑니다.',
      chips: ['서비스 기획', 'UX 디자인', '사용자 문제 분석', '사용성 검증'],
      ctaWork: '프로젝트 보기',
      ctaAbout: '소개 보기',
    },
    work: { title: '주요 프로젝트', meta: '주요 프로젝트 3개 · 전체 5개' },
    moreWork: {
      title: 'More Work',
      badge: 'SOON',
      desc: '더 많은 프로젝트를 준비하고 있어요.',
    },
    aiToolkit: {
      title: 'Toolkit',
      sub: 'TOOLS & TECHNOLOGIES I WORK WITH',
      categories: [
        {
          label: '생성형 AI 활용',
          items: [
            { mark: 'Ai', markBg: '#333f43', title: 'ChatGPT / Claude', desc: '리서치 내용 정리, 인터뷰 데이터 분석, 아이디어 구조화와 카피 초안 등 반복적인 작업의 효율을 높이는 데 활용합니다.' },
            { mark: 'Cu', markBg: '#333f43', title: 'Cursor / AI 코딩', desc: '디자인을 직접 동작하는 프로토타입으로 빠르게 구현합니다.' },
          ],
          note: '이 외에도 필요에 따라 새로운 AI 툴을 자유롭게 찾아 활용합니다.',
        },
        {
          label: 'DESIGN & EDIT',
          items: [
            { mark: 'Fi', markBg: '#333f43', title: 'Figma', desc: 'UI 디자인과 컴포넌트 시스템 구축에 사용합니다.' },
            { mark: 'Il', markBg: '#333f43', title: 'Illustrator', desc: '벡터 일러스트와 아이콘, 인쇄용 그래픽 작업에 사용합니다.' },
            { mark: 'Ps', markBg: '#333f43', title: 'Photoshop', desc: '이미지 리터칭과 합성, 무드보드 제작에 사용합니다.' },
            { mark: 'Ae', markBg: '#333f43', title: 'After Effects', desc: '인터랙션 모션 목업과 전시 영상 콘텐츠 제작에 사용합니다.' },
          ],
        },
        {
          label: '프로토타이핑 & 개발 이해',
          items: [
            { mark: 'Ue', markBg: '#333f43', title: 'Unreal Engine', desc: '공간형 XR 콘텐츠와 인터랙티브 전시를 실시간 엔진으로 구현합니다.' },
            {
              mark: 'Js',
              markBg: '#333f43',
              title: '웹 개발 (JavaScript 등)',
              desc: '프로토타입을 실제 동작하는 웹으로 직접 구현할 수 있습니다.',
            },
            { mark: 'Un', markBg: '#333f43', title: 'Unity (C++ / C#)', desc: '인터랙티브 콘텐츠와 게임 메커니즘을 코드로 직접 구현합니다.' },
          ],
        },
      ],
    },
    about: {
      title: 'About',
      body: '**사용자가 무엇을 필요로 하고, 어떤 맥락에서 어려움을 겪는지 이해하는 것에서 시작합니다.** 사용자 조사와 실제 사용 흐름을 바탕으로 문제를 구조화하고, 기능과 화면의 개선 방향을 구체화합니다.\n\n리서치와 기획부터 프로토타이핑, 개발 협업, 사용성 검증까지 제품이 만들어지고 개선되는 전 과정을 경험했습니다. 복잡한 요구사항을 명확한 사용자 흐름으로 정리하고, 실제로 작동하는 결과물까지 연결하는 데 강점이 있습니다.',
      kw1: '문제의 핵심을 찾습니다',
      kw2: '다양한 직무와 협업합니다',
      kw3: '복잡한 정보를 구조화합니다',
      kw4: '빠르게 배우고 시도합니다',
      moreAboutLabel: 'More about me →',
    },
    aboutPage: {
      eyebrow: 'ABOUT',
      title: 'Yesol Kim',
      intro:
        '사람의 행동과 사용 맥락을 이해하고, 복잡한 문제를 명확한 경험과 구조로 풀어갑니다. 모바일·웹 서비스부터 XR 인터랙티브 콘텐츠까지 서로 다른 환경에서 사용자 조사, 문제 정의, 정보 구조와 사용자 흐름 설계, 프로토타이핑과 검증합니다. 새로운 분야를 빠르게 이해하고 필요한 정보를 정리해 실제 경험으로 구체화하는 과정에 강점이 있습니다.',
      strengthsLabel: '강점',
      strengths: [
        { title: '사용자 맥락에서 문제를 발견합니다', desc: '인터뷰와 사용자 조사, 현장 관찰을 통해 실제 행동과 사용 맥락을 살피고 문제의 원인을 찾습니다.' },
        {
          title: '복잡한 정보를 구조화합니다',
          desc: '흩어진 정보와 요구사항을 정리해 핵심 문제를 정의하고, 정보 구조와 사용자 흐름으로 구체화합니다.',
        },
        { title: '아이디어를 빠르게 검증합니다', desc: '아이디어를 프로토타입으로 빠르게 구체화하고, 실제 사용자의 반응을 확인하며 반복적으로 개선합니다.' },
      ],
      experienceLabel: '경험',
      experience: [
        {
          role: 'SNS 마케팅 인턴',
          org: '코펜하겐 소재 스타트업',
          location: 'Copenhagen, Denmark',
          period: '2026.08 – 현재',
          highlights: [
            '제품과 사업 내용을 외부 고객이 이해하기 쉽도록 디지털 콘텐츠와 소개 자료로 구조화',
            'SNS 콘텐츠와 웹 콘텐츠를 제작하며 제품 메시지와 커뮤니케이션 방식 개선',
          ],
        },
        {
          role: '연구원 · 파트타임',
          org: '서울여자대학교',
          location: 'Seoul, Korea',
          period: '2025.01 – 2025.07',
          highlights: [
            '연령별 신체·인지 발달 연구를 바탕으로 XR 콘텐츠의 경험 구조와 인터랙션을 기획',
            '개발·디자인팀과 협업해 프로토타입을 구현하고, 전시 환경에 맞춰 콘텐츠와 사용자 경험을 조정',
          ],
        },
        {
          role: '프로덕트 디자이너 · 파트타임',
          org: 'SpeakontheRock Co.',
          location: 'Seoul, Korea',
          period: '2024.09 – 2024.12',
          highlights: [
            'AI 기반 한국어 학습 서비스의 사용자 흐름과 주요 기능을 설계하고 UX/UI 프로토타입 제작',
            '제품 흐름을 설명하는 피치 자료와 데모를 제작해 Asia Demo Day 참가 및 대상 수상에 기여',
          ],
        },
        {
          role: '프로덕트 디자인 인턴 · 풀타임',
          org: 'Newjak Co.',
          location: 'Seoul, Korea',
          period: '2024.07 – 2024.08',
          highlights: [
            '대형 공간형 XR e-sports 콘텐츠의 게임플레이, 인터랙션, UX/UI 설계',
            '개발자·디자이너와 협업하며 프로토타입 테스트부터 공개 전시 구현까지 참여',
          ],
        },
        {
          role: 'MD · 파트타임',
          org: 'Treepicker Co.',
          location: 'Seoul, Korea',
          period: '2023.11 – 2024.02',
          highlights: [
            '브랜드 SNS를 위한 모듈형 비주얼 시스템을 설계해 콘텐츠 제작 방식과 시각적 일관성 정리',
            '호스피탈리티 마케팅 플랫폼의 정보 구조, 사용자 흐름, 주요 인터랙션 설계',
          ],
        },
      ],
      intlLabel: '글로벌 경험',
      intlExposure: [
        {
          role: '국제 자원봉사 활동',
          org: 'Odsherreds Efterskole',
          location: 'Odsherreds, Denmark',
          period: '2025.09 – 2026.06',
          highlights: [
            '다큐멘터리·디지털 스토리텔링 수업과 문화 프로그램 기획·운영',
            '학생·교직원과 협업해 전시와 공간 프로젝트를 기획하고 현장 운영까지 진행',
          ],
        },
        {
          role: 'Viva Technology',
          org: 'Newjak Co.',
          location: 'Paris, France',
          period: '2026.06',
          highlights: [
            'XR 콘텐츠 솔루션과 활용 사례를 해외 업계 관계자 및 잠재 파트너에게 소개',
            '현장 비즈니스 미팅과 제품 시연 지원',
          ],
        },
        {
          role: 'K-EXPO',
          org: 'Newjak Co.',
          location: 'Paris, France',
          period: '2026.06',
          highlights: ['XR 콘텐츠 전시 운영 및 하드웨어·센서 세팅', '관람객 플레이 안내와 현장 콘텐츠 운영'],
        },
        {
          role: 'MWC (Mobile World Congress)',
          org: 'Newjak Co.',
          location: 'Barcelona, Spain',
          period: '2026.03',
          highlights: [
            'XR 콘텐츠 솔루션과 활용 사례를 해외 업계 관계자에게 소개',
            '잠재 파트너 대상 제품 시연과 비즈니스 커뮤니케이션 지원',
          ],
        },
        {
          role: 'SIGGRAPH Asia',
          org: 'Newjak Co.',
          location: 'Tokyo, Japan',
          period: '2024.12',
          highlights: [
            '공간형 XR 콘텐츠를 국제 관람객에게 시연하고 인터랙션 방식을 소개',
            '연구자·아티스트·업계 관계자와 프로젝트 기획 및 사용자 경험 공유',
          ],
        },
      ],
      educationLabel: '학력',
      educationOrg: 'Seoul Women’s University',
      educationDept: '디지털미디어학과',
      activitiesLabel: '활동',
      uxActivitiesLabel: 'UX / 디자인 관련',
      uxActivities: [
        { org: 'Shutabus', role: '창업 동아리', note: '서울시 주관 빅데이터 활용 해커톤 최우수상 수상' },
        { org: 'GDSC SWU (Google Developer Student Clubs)', role: 'Core Member, UX/UI Team' },
        { org: 'UMC 6th Generation', role: 'PLAN' },
      ],
      extraActivitiesLabel: 'EXTRA-CURRICULAR',
      extraActivities: [
        { org: '서울여자대학교 디지털미디어학과 학생회', role: '홍보국원', note: '과 SNS 콘텐츠 기획 및 디자인' },
        { org: 'KUSA (한국UNESCO학생회)', role: '서울여대지부' },
        { org: '대학생 IT 연합동아리 "It’s time"', role: '1기 팀장, 2기 전체 동아리 부회장' },
      ],
      backLabel: '← BACK',
    },
    contact: {
      line1: '더 나은 경험을',
      line2part1: '고민하고,',
      line2accent: '만들어갑니다',
      line2part2: '.',
      email: 'sjjyysye@gmail.com',
      linkedin: 'LINKEDIN ↗',
      linkedinUrl: 'https://www.linkedin.com/in/yesolkim01',
      footerLeft: '© 2026 YESOL KIM',
      footerRight: 'COPENHAGEN, DENMARK',
    },
  },
  en: {
    nav: { work: 'Work', ai: 'Toolkit', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'USER EXPERIENCE DESIGNER — BASED IN COPENHAGEN, FROM SEOUL',
      headline: 'Good Design Starts\nwith the **Right Questions**.',
      subLine1: 'From digital products to XR and spatial experiences,',
      subLine2: 'I observe user behavior to design the best possible experience.',
      chips: ['DIGITAL PRODUCT', 'SPATIAL / XR', 'EXPERIENCE'],
      ctaWork: 'VIEW SELECTED WORK →',
      ctaAbout: 'ABOUT ME',
    },
    work: { title: 'Selected Work', meta: '3 PROJECTS · 2 MORE' },
    moreWork: {
      title: 'More Work',
      badge: 'SOON',
      desc: 'More projects are on the way.',
    },
    aiToolkit: {
      title: 'Toolkit',
      sub: 'TOOLS & TECHNOLOGIES I WORK WITH',
      categories: [
        {
          label: 'GENERATIVE AI',
          items: [
            { mark: 'Ai', markBg: '#333f43', title: 'ChatGPT / Claude', desc: 'Applies generative AI across research synthesis, interview transcript analysis, and copy drafting.' },
            { mark: 'Cu', markBg: '#333f43', title: 'Cursor / AI Coding', desc: 'Turns designs into working prototypes quickly.' },
          ],
          note: "I also freely explore and pick up new AI tools whenever a project calls for them.",
        },
        {
          label: 'DESIGN & EDIT',
          items: [
            { mark: 'Fi', markBg: '#333f43', title: 'Figma', desc: 'Used for UI design and building component systems.' },
            { mark: 'Il', markBg: '#333f43', title: 'Illustrator', desc: 'Used for vector illustration, iconography, and print-ready graphics.' },
            { mark: 'Ps', markBg: '#333f43', title: 'Photoshop', desc: 'Used for image retouching, compositing, and mood board production.' },
            { mark: 'Ae', markBg: '#333f43', title: 'After Effects', desc: 'Used for interaction motion mockups and exhibition video content.' },
          ],
        },
        {
          label: 'REALTIME & DEVELOPMENT',
          items: [
            { mark: 'Ue', markBg: '#333f43', title: 'Unreal Engine', desc: 'Builds spatial XR content and interactive exhibitions in a realtime engine.' },
            {
              mark: 'Js',
              markBg: '#333f43',
              title: 'Web Development (JavaScript, etc.)',
              desc: 'Able to build prototypes into fully working web experiences directly.',
            },
            { mark: 'Un', markBg: '#333f43', title: 'Unity (C++ / C#)', desc: 'Implements interactive content and game mechanics directly in code.' },
          ],
        },
      ],
    },
    about: {
      title: 'About',
      body: "I start designing from **understanding what users need, and in what context they struggle**. Across digital products, XR, and spatial experiences, I design experiences centered on human behavior.\nI define problems through research and planning, and I'm strongest at structuring complex information and requirements into clear user flows and interactions. I enjoy the process of building ideas into working form together with teammates across different roles.",
      kw1: 'I find the core of the problem',
      kw2: 'I collaborate across disciplines',
      kw3: 'I structure complex information',
      kw4: 'I learn and try quickly',
      moreAboutLabel: 'More about me →',
    },
    aboutPage: {
      eyebrow: 'ABOUT',
      title: 'Yesol Kim',
      intro:
        "I work across a range of project formats — from mobile/web UX/UI design to XR interactive content and digital content design. I've stayed consistently interested in understanding human behavior and usage context, and structuring complex information into clearer experiences.\nI'm currently a social media marketing intern at a Copenhagen-based startup, handling digital content production and communication, and I also work freelance on XR game UX/UI design. I've also supported Korean companies expanding into Europe at trade fairs there — interpreting and joining business meetings — building experience connecting people and business outside of design work as well.\nRather than limiting myself to one role or medium, I'm shaping my direction as a UX/UI designer by gaining experience understanding people and solving problems across different environments.",
      strengthsLabel: 'STRENGTHS',
      strengths: [
        { title: 'I start with behavior', desc: 'I observe real behavior and context through user/desk research and interviews.' },
        {
          title: 'I structure complexity',
          desc: 'Using information architecture and user flow mapping, I find the core problem and flow inside scattered information and requirements.',
        },
        { title: 'I turn ideas into reality fast', desc: 'I use prototypes and AI tools to quickly shape and validate ideas.' },
      ],
      experienceLabel: 'EXPERIENCE',
      experience: [
        {
          role: 'International Volunteer',
          org: 'Odsherreds Efterskole',
          location: 'Odsherreds, Denmark',
          period: '09.2025 – 06.2026',
          highlights: [
            'Co-directed a documentary class, guiding students through the full planning, filming, and editing process and mentoring their digital storytelling work',
            'Planned and executed a site-specific exhibition inside a transparent dome for Global Day, designing the spatial setup and coordinating installation — attracted 300+ visitors',
            'Delivered cultural programs and events for 150+ students, including Korean street food sessions and weekly activities',
          ],
        },
        {
          role: 'Researcher (Part-time)',
          org: 'Seoul Women’s University',
          location: 'Seoul, Korea',
          period: '01.2025 – 07.2025',
          highlights: [
            'Planned XR content and led UX/UI design work',
            'Handled practical, on-the-ground work for commercial exhibition environments — coordinating internal and external stakeholders, hardware optimization, and more',
          ],
        },
        {
          role: 'Product Designer (Part-time)',
          org: 'SpeakontheRock Co.',
          location: 'Seoul, Korea',
          period: '09.2024 – 12.2024',
          highlights: [
            'Designed UX/UI for an AI-based Korean speech learning platform, structuring user flows and interaction patterns in Figma',
            'Developed pitch materials and demo assets, contributing to selection for Asia Demo Day (Hanoi) — Grand Prize winner',
          ],
        },
        {
          role: 'Product Design Intern (Full-time)',
          org: 'Newjak Co.',
          location: 'Seoul, Korea',
          period: '07.2024 – 08.2024',
          highlights: [
            'Designed immersive gameplay and interaction experiences for a room-scale XR esports exhibition',
            'Supported live exhibition installations across multiple public showcases, collaborating with multidisciplinary teams to translate creative concepts into interactive spatial experiences',
          ],
        },
        {
          role: 'MD (Part-time)',
          org: 'Treepicker Co.',
          location: 'Seoul, Korea',
          period: '11.2023 – 02.2024',
          highlights: [
            'Built a modular visual system for the brand’s Instagram, enabling consistent content production',
            'Designed a hospitality marketing platform end-to-end as the sole designer, defining IA, user flows, and interaction systems',
          ],
        },
      ],
      intlLabel: 'INTERNATIONAL EXPOSURE',
      intlExposure: [
        {
          role: 'Viva Tech',
          org: 'Newjak Co.',
          location: 'Paris, France',
          period: '06.2026',
          highlights: [
            'Represented Newjak’s XR content solutions at Viva Tech, presenting products to international industry professionals and potential partners',
            'Presented product capabilities and use cases, and engaged with potential partners on XR applications and collaboration opportunities',
          ],
        },
        {
          role: 'K-EXPO',
          org: 'Newjak Co.',
          location: 'Paris, France',
          period: '06.2026',
          highlights: [
            'Ran Newjak’s XR content exhibition',
            'Handled hardware installation, sensor calibration, and guided visitor gameplay',
          ],
        },
        {
          role: 'MWC (Mobile World Congress)',
          org: 'Newjak Co.',
          location: 'Barcelona, Spain',
          period: '03.2026',
          highlights: [
            'Represented Newjak’s XR content solutions at Mobile World Congress, presenting products to international industry professionals and potential partners',
            'Presented product capabilities and use cases, and engaged with potential partners on XR applications and collaboration opportunities',
          ],
        },
        {
          role: 'SIGGRAPH Asia',
          org: 'Newjak Co.',
          location: 'Tokyo, Japan',
          period: '12.2024',
          highlights: [
            'Selected to present an interactive XR platform at SIGGRAPH Asia, an international conference and exhibition for computer graphics and interactive technologies',
            'Demonstrated the experience to a global audience of researchers, artists, and industry professionals, communicating the concept, interaction design, and creative vision behind the project',
          ],
        },
      ],
      educationLabel: 'EDUCATION',
      educationOrg: 'Seoul Women’s University',
      educationDept: 'Department of Digital Media',
      activitiesLabel: 'ACTIVITIES',
      uxActivitiesLabel: 'UX / DESIGN-RELATED',
      uxActivities: [
        { org: 'Shutabus', role: 'Startup Club', note: 'Grand Prize, Seoul City big-data hackathon' },
        { org: 'GDSC SWU (Google Developer Student Clubs)', role: 'Core Member, UX/UI Team' },
        { org: 'UMC 6th Generation', role: 'PLAN' },
      ],
      extraActivitiesLabel: 'EXTRA-CURRICULAR',
      extraActivities: [
        {
          org: 'Student Council, Dept. of Digital Media, Seoul Women’s University',
          role: 'Public Relations Officer',
          note: 'Planned and designed SNS content for the department',
        },
        { org: 'KUSA (Korea UNESCO Student Association)', role: 'SWU Chapter' },
        { org: 'University IT Consortium Club "It’s time"', role: '1st Team Leader, 2nd Vice President (club-wide)' },
      ],
      backLabel: '← BACK',
    },
    contact: {
      line1: "Let's build",
      line2part1: 'something',
      line2accent: 'real',
      line2part2: '.',
      email: 'sjjyysye@gmail.com',
      linkedin: 'LINKEDIN ↗',
      linkedinUrl: 'https://www.linkedin.com/in/yesolkim01',
      footerLeft: '© 2026 YESOL KIM',
      footerRight: 'COPENHAGEN, DENMARK',
    },
  },
};
