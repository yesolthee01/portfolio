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
      subLine2: '사용자의 행동을 관찰하고 더 자연스러운 경험으로 바꾸는 UX Designer입니다.',
      chips: ['DIGITAL PRODUCT', 'SPATIAL / XR', 'EXPERIENCE'],
      ctaWork: 'VIEW SELECTED WORK →',
      ctaAbout: 'ABOUT ME',
    },
    work: { title: 'Selected Work' },
    moreWork: {
      title: 'More Work',
      badge: 'SOON',
      desc: '더 많은 프로젝트를 준비하고 있어요. 조만간 이 자리에 추가됩니다.',
    },
    aiToolkit: {
      title: 'Toolkit',
      sub: 'TOOLS & TECHNOLOGIES I WORK WITH',
      categories: [
        {
          label: 'GENERATIVE AI',
          items: [
            { mark: 'Fi', markBg: '#1A1A1A', title: 'Figma AI', desc: '와이어프레임 초안과 배리에이션을 빠르게 생성해 탐색 속도를 높입니다.' },
            { mark: 'Ai', markBg: '#1A1A1A', title: 'ChatGPT / Claude', desc: '리서치 종합, 인터뷰 스크립트 분석, 카피 초안 작성 등에 다양한 AI 챗봇을 활용합니다.' },
            { mark: 'Cu', markBg: '#1A1A1A', title: 'Cursor / AI 코딩', desc: '디자인을 직접 동작하는 프로토타입으로 빠르게 구현합니다.' },
          ],
          note: '이 외에도 필요에 따라 새로운 AI 툴을 자유롭게 찾아 활용합니다.',
        },
        {
          label: 'DESIGN & MOTION',
          items: [
            { mark: 'Il', markBg: '#1A1A1A', title: 'Illustrator', desc: '벡터 일러스트와 아이콘, 인쇄용 그래픽 작업에 사용합니다.' },
            { mark: 'Ps', markBg: '#1A1A1A', title: 'Photoshop', desc: '이미지 리터칭과 합성, 무드보드 제작에 사용합니다.' },
            { mark: 'Ae', markBg: '#1A1A1A', title: 'After Effects', desc: '인터랙션 모션 목업과 전시 영상 콘텐츠 제작에 사용합니다.' },
          ],
        },
        {
          label: 'REALTIME & DEVELOPMENT',
          items: [
            { mark: 'Ue', markBg: '#1A1A1A', title: 'Unreal Engine', desc: '공간형 XR 콘텐츠와 인터랙티브 전시를 실시간 엔진으로 구현합니다.' },
            {
              mark: 'Js',
              markBg: '#1A1A1A',
              title: '웹 개발 (JavaScript 등)',
              desc: '프로토타입을 실제 동작하는 웹으로 직접 구현할 수 있습니다.',
            },
            { mark: 'Un', markBg: '#1A1A1A', title: 'Unity (C++ / C#)', desc: '인터랙티브 콘텐츠와 게임 메커니즘을 코드로 직접 구현합니다.' },
          ],
        },
      ],
    },
    about: {
      title: 'About',
      body: '저는 사람들이 실제로 어떻게 사용하고, 움직이고, 반응하는지에서 디자인을 시작합니다. 디지털 프로덕트부터 XR과 공간 경험까지 다양한 매체를 다뤄오며 제 관심은 늘 복잡한 상황 속에서 사람의 행동을 이해하고 더 자연스러운 경험으로 구조화하는 것에 있습니다. 리서치와 기획을 좋아하고, 아이디어가 실제로 작동하는 형태가 될 때까지 디자이너·개발자·다양한 팀원들과 함께 만들어가는 과정에 강점이 있습니다.',
      kw1: '사람 중심 리서치',
      kw2: '디지털 프로덕트 UX',
      kw3: '공간 · XR 경험 설계',
      kw4: '생성형 AI 협업',
      moreAboutLabel: 'More about me →',
    },
    aboutPage: {
      eyebrow: 'ABOUT',
      title: 'Yesol Kim',
      intro:
        '창작 기획과 미디어 커뮤니케이션을 거쳐, 지금은 사람의 행동과 맥락을 리서치로 이해하고 이를 경험으로 설계하는 UX Designer로 일하고 있습니다. 코펜하겐을 기반으로, 스타트업 인턴과 프리랜서 작업을 병행하며 디지털 프로덕트부터 XR까지 다양한 매체를 오갑니다.',
      strengthsLabel: 'STRENGTHS',
      strengths: [
        { title: '사람의 행동에서 시작합니다', desc: '말뿐인 니즈보다 실제 행동과 맥락을 관찰합니다.' },
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
        { org: 'Shutabus', role: '창업 동아리', note: '서울시 주관 해커톤 최우수상 수상' },
        { org: 'GDSC SWU', role: 'Core Member, UX/UI Team' },
        { org: 'UMC 6th Generation', role: 'PLAN' },
      ],
      extraActivitiesLabel: 'EXTRA-CURRICULAR',
      extraActivities: [
        { org: '학생회', role: '홍보부원' },
        { org: 'KUSA (한국UNESCO학생회)', role: '서울여대지부' },
        { org: 'IT 동아리 "It’s time"', role: '1기 팀장 → 2기 부회장' },
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
      subLine2: 'I observe user behavior and design more natural experiences.',
      chips: ['DIGITAL PRODUCT', 'SPATIAL / XR', 'EXPERIENCE'],
      ctaWork: 'VIEW SELECTED WORK →',
      ctaAbout: 'ABOUT ME',
    },
    work: { title: 'Selected Work' },
    moreWork: {
      title: 'More Work',
      badge: 'SOON',
      desc: 'More projects are on the way — this spot will fill in soon.',
    },
    aiToolkit: {
      title: 'Toolkit',
      sub: 'TOOLS & TECHNOLOGIES I WORK WITH',
      categories: [
        {
          label: 'GENERATIVE AI',
          items: [
            { mark: 'Fi', markBg: '#1A1A1A', title: 'Figma AI', desc: 'Speeds up exploration by rapidly generating wireframe drafts and variations.' },
            { mark: 'Ai', markBg: '#1A1A1A', title: 'ChatGPT / Claude', desc: 'Used across various AI chat tools for research synthesis, interview transcript analysis, and copy drafting.' },
            { mark: 'Cu', markBg: '#1A1A1A', title: 'Cursor / AI Coding', desc: 'Turns designs into working prototypes quickly.' },
          ],
          note: "I also freely explore and pick up new AI tools whenever a project calls for them.",
        },
        {
          label: 'DESIGN & MOTION',
          items: [
            { mark: 'Il', markBg: '#1A1A1A', title: 'Illustrator', desc: 'Used for vector illustration, iconography, and print-ready graphics.' },
            { mark: 'Ps', markBg: '#1A1A1A', title: 'Photoshop', desc: 'Used for image retouching, compositing, and mood board production.' },
            { mark: 'Ae', markBg: '#1A1A1A', title: 'After Effects', desc: 'Used for interaction motion mockups and exhibition video content.' },
          ],
        },
        {
          label: 'REALTIME & DEVELOPMENT',
          items: [
            { mark: 'Ue', markBg: '#1A1A1A', title: 'Unreal Engine', desc: 'Builds spatial XR content and interactive exhibitions in a realtime engine.' },
            {
              mark: 'Js',
              markBg: '#1A1A1A',
              title: 'Web Development (JavaScript, etc.)',
              desc: 'Able to build prototypes into fully working web experiences directly.',
            },
            { mark: 'Un', markBg: '#1A1A1A', title: 'Unity (C++ / C#)', desc: 'Implements interactive content and game mechanics directly in code.' },
          ],
        },
      ],
    },
    about: {
      title: 'About',
      body: "I start designing from how people actually use, move, and react. Across digital products, XR, and spatial experiences, I've stayed focused on understanding human behavior in complex situations and structuring it into more natural experiences. I enjoy research and planning, and I'm strongest in the process of building ideas into working form together with designers, developers, and cross-functional teams.",
      kw1: 'User-Centered Research',
      kw2: 'Digital Product UX',
      kw3: 'Spatial & XR Design',
      kw4: 'Generative AI Collaboration',
      moreAboutLabel: 'More about me →',
    },
    aboutPage: {
      eyebrow: 'ABOUT',
      title: 'Yesol Kim',
      intro:
        'After starting in creative direction and media communication, I now work as a UX Designer — researching how people behave and translating that into experience design. Based in Copenhagen, I split my time between a startup internship and freelance work, moving across digital products and XR.',
      strengthsLabel: 'STRENGTHS',
      strengths: [
        { title: 'I start with behavior', desc: 'I observe what people actually do, not just what they say they need.' },
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
        { org: 'Shutabus', role: 'Startup Club', note: 'Grand Prize, Seoul City–hosted hackathon' },
        { org: 'GDSC SWU', role: 'Core Member, UX/UI Team' },
        { org: 'UMC 6th Generation', role: 'PLAN' },
      ],
      extraActivitiesLabel: 'EXTRA-CURRICULAR',
      extraActivities: [
        { org: 'Student Council', role: 'Public Relations Member' },
        { org: 'KUSA (Korea UNESCO Student Association)', role: 'SWU Chapter' },
        { org: 'IT Association "It’s time"', role: '1st Team Leader → 2nd Vice President' },
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
