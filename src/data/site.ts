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
  work: { title: string };
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
      eyebrow: 'USER EXPERIENCE DESIGNER — BASED IN COPENHAGEN, FROM SEOUL',
      headline: '좋은 디자인은\n올바른 **질문**에서 시작됩니다.',
      subLine1: '디지털 제품부터 XR과 공간 경험까지,',
      subLine2: '사용자의 행동을 관찰하여, 최고의 경험을 디자인하는 UX Designer입니다.',
      chips: ['DIGITAL PRODUCT', 'SPATIAL / XR', 'EXPERIENCE'],
      ctaWork: 'VIEW SELECTED WORK →',
      ctaAbout: 'ABOUT ME',
    },
    work: { title: 'Selected Work' },
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
          label: 'GENERATIVE AI',
          items: [
            { mark: 'Ai', markBg: '#333f43', title: 'ChatGPT / Claude', desc: '리서치 종합, 인터뷰 스크립트 분석, 카피 초안 작성 등 다양한 작업에 생성형 AI를 활용합니다.' },
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
          label: 'REALTIME & DEVELOPMENT',
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
      body: '**사용자가 무엇을 필요로 하고, 어떤 맥락에서 어려움을 겪는지 이해**하는 것에서 디자인을 시작합니다. 디지털 프로덕트부터 XR과 공간 경험까지 다양한 매체를 다루며, 사람의 행동을 중심으로 경험을 설계합니다.\n리서치와 기획을 통해 문제를 정의하고, 복잡한 정보와 요구를 명확한 사용자 흐름과 인터랙션으로 구조화하는 데 강점이 있습니다. 아이디어가 실제로 작동하는 형태가 될 때까지 다양한 역할의 팀원들과 함께 구체화해 나가는 과정을 좋아합니다.',
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
        '모바일·웹 UX/UI 디자인부터 XR 인터랙티브 콘텐츠와 디지털 콘텐츠 디자인까지, 다양한 형태의 프로젝트를 경험해왔습니다. 사람의 행동과 사용 맥락을 이해하고, 복잡한 정보를 더 명확한 경험으로 구조화하는 과정에 꾸준히 관심을 가져왔습니다.\n현재는 코펜하겐 베이스의 스타트업에서 SNS 마케팅 인턴으로 디지털 콘텐츠 제작과 커뮤니케이션을 담당하고 있으며, 프리랜서로서는 XR 게임 UX/UI 디자인도 진행하고 있습니다. 또한 유럽 진출을 준비하는 한국 기업들의 현지 박람회에 참여해 통역과 비즈니스 미팅을 지원하는 등, 디자인 밖의 다양한 실무 환경에서도 사람과 비즈니스를 연결하는 경험을 쌓고 있습니다.\n한 가지 역할이나 매체에 스스로를 한정하기보다, 다양한 환경에서 사람을 이해하고 문제를 풀어가는 경험을 쌓으며 UX/UI 디자이너로서의 방향을 만들어가고 있습니다.',
      strengthsLabel: 'STRENGTHS',
      strengths: [
        { title: '사람의 행동에서 시작합니다', desc: '실제 행동과 맥락을 관찰합니다.' },
        { title: '복잡한 문제를 구조화합니다', desc: '흩어진 정보와 요구사항에서 핵심 문제와 흐름을 찾아냅니다.' },
        { title: '아이디어를 빠르게 현실로 만듭니다', desc: '프로토타입과 AI 도구를 활용해 생각을 빠르게 만들고 검증합니다.' },
      ],
      experienceLabel: 'EXPERIENCE',
      experience: [
        {
          role: 'International Volunteer',
          org: 'Odsherreds Efterskole',
          location: 'Odsherreds, Denmark',
          period: '2025.09 – 2026.06',
          highlights: [
            '150명 이상의 학생을 대상으로 한식 문화 세션 등 문화 프로그램과 주간 활동 기획·운영',
            '글로벌 데이에 투명 돔 내부 사이트 특정형 전시를 기획·실행, 공간 구성과 설치를 총괄해 300명 이상 방문',
            '다큐멘터리 수업을 공동 지도하며 기획·촬영·편집 전 과정과 스토리텔링 의사결정 지원',
          ],
        },
        {
          role: 'Researcher (Part-time)',
          org: 'Seoul Women’s University',
          location: 'Seoul, Korea',
          period: '2025.01 – 2025.07',
          highlights: [
            'XR 전시 프로젝트를 기획부터 실제 설치까지 리드, 상업 전시 환경을 위한 몰입형 관람 경험 설계',
            '디자인·기술·현장 운영을 아우르는 크로스펑셔널 제작 워크플로우와 온사이트 시스템 통합 조율',
          ],
        },
        {
          role: 'Product Designer (Part-time)',
          org: 'SpeakontheRock Co.',
          location: 'Seoul, Korea',
          period: '2024.09 – 2024.12',
          highlights: [
            'AI 기반 한국어 학습 플랫폼의 UX/UI를 설계, Figma로 사용자 플로우와 인터랙션 패턴 구조화',
            '피치 자료와 데모를 제작해 Asia Demo Day(하노이) 선정에 기여 — 대상 수상',
          ],
        },
        {
          role: 'Product Design Intern (Full-time)',
          org: 'Newjak Co.',
          location: 'Seoul, Korea',
          period: '2024.07 – 2024.08',
          highlights: [
            '룸 스케일 XR e스포츠 전시를 위한 몰입형 게임플레이·인터랙션 경험 설계, 스크린을 넘어선 관람 경험에 집중',
            '다수의 공개 전시 현장 설치를 지원하며 다학제 팀과 협업, 크리에이티브 콘셉트를 인터랙티브 공간 경험으로 구현',
          ],
        },
        {
          role: 'MD (Part-time)',
          org: 'Treepicker Co.',
          location: 'Seoul, Korea',
          period: '2023.11 – 2024.02',
          highlights: [
            '브랜드 인스타그램을 위한 모듈형 비주얼 시스템 구축, 일관된 콘텐츠 제작 체계 마련',
            '호스피탈리티 마케팅 플랫폼을 단독 디자이너로 엔드투엔드 설계 — IA, 사용자 플로우, 인터랙션 시스템 정의',
          ],
        },
      ],
      intlLabel: 'INTERNATIONAL EXPOSURE',
      intlExposure: [
        {
          role: 'MWC (Mobile World Congress)',
          org: 'Newjak Co.',
          location: 'Barcelona, Spain',
          period: '2026.03',
          highlights: [
            'Newjak의 XR 콘텐츠 솔루션을 대표해 참가, 해외 업계 관계자와 잠재 파트너에게 제품을 소개',
            '제품 역량과 활용 사례를 발표하고, XR 응용과 협업 기회에 대한 논의를 진행',
          ],
        },
        {
          role: 'SIGGRAPH Asia',
          org: 'Newjak Co.',
          location: 'Tokyo, Japan',
          period: '2024.12',
          highlights: [
            '컴퓨터 그래픽스·인터랙티브 기술 분야의 국제 컨퍼런스에서 인터랙티브 XR 플랫폼 시연',
            '전 세계 연구자·아티스트·업계 관계자에게 콘셉트와 인터랙션 디자인, 크리에이티브 비전을 소개',
          ],
        },
      ],
      educationLabel: 'EDUCATION',
      educationOrg: 'Seoul Women’s University',
      educationDept: '디지털미디어학과',
      activitiesLabel: 'ACTIVITIES',
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
    work: { title: 'Selected Work' },
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
        "I've worked across a range of project formats — from mobile/web UX/UI design to XR interactive content and digital content design. I've stayed consistently interested in understanding human behavior and usage context, and structuring complex information into clearer experiences.\nI'm currently a social media marketing intern at a Copenhagen-based startup, handling digital content production and communication, and I also work freelance on XR game UX/UI design. I've also supported Korean companies expanding into Europe at trade fairs there — interpreting and joining business meetings — building experience connecting people and business outside of design work as well.\nRather than limiting myself to one role or medium, I'm shaping my direction as a UX/UI designer by gaining experience understanding people and solving problems across different environments.",
      strengthsLabel: 'STRENGTHS',
      strengths: [
        { title: 'I start with behavior', desc: 'I observe what people actually do.' },
        { title: 'I structure complexity', desc: 'I find the core problem and flow inside scattered information and requirements.' },
        { title: 'I turn ideas into reality fast', desc: 'I use prototypes and AI tools to build and test ideas quickly.' },
      ],
      experienceLabel: 'EXPERIENCE',
      experience: [
        {
          role: 'International Volunteer',
          org: 'Odsherreds Efterskole',
          location: 'Odsherreds, Denmark',
          period: '09.2025 – 06.2026',
          highlights: [
            'Delivered cultural programs and events for 150+ students, including Korean street food sessions and weekly activities',
            'Planned and executed a site-specific exhibition inside a transparent dome for Global Day, designing the spatial setup and coordinating installation — attracted 300+ visitors',
            'Co-directed a documentary class, guiding students through planning, filming, and editing, and supporting decision-making in storytelling and production',
          ],
        },
        {
          role: 'Researcher (Part-time)',
          org: 'Seoul Women’s University',
          location: 'Seoul, Korea',
          period: '01.2025 – 07.2025',
          highlights: [
            'Led XR exhibition projects from concept to public installation, creating immersive audience experiences for commercial exhibition environments',
            'Coordinated cross-functional production workflows and on-site system integration, aligning design, technology, and live visitor engagement',
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
            'Designed immersive gameplay and interaction experiences for a room-scale XR esports exhibition, focusing on audience engagement beyond screen-based interaction',
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
