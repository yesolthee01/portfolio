import type { Localized } from './types';

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
  about: { title: string; body: string; kw1: string; kw2: string; kw3: string; kw4: string };
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
      body: '저는 매체로 저를 정의하지 않습니다. 앱이든 공간이든 XR이든, 사람이 그 안에서 어떻게 느끼고 움직이는지를 리서치로 이해하고, 생성형 AI를 도구 삼아 더 빠르고 깊게 설계합니다.',
      kw1: '사람 중심 리서치',
      kw2: '디지털 프로덕트 UX',
      kw3: '공간 · XR 경험 설계',
      kw4: '생성형 AI 협업',
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
      body: "I don't define myself by medium. Whether it's an app, a space, or XR, I research how people feel and move within it, then design faster and deeper with generative AI as my tool.",
      kw1: 'User-Centered Research',
      kw2: 'Digital Product UX',
      kw3: 'Spatial & XR Design',
      kw4: 'Generative AI Collaboration',
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
