import type { Localized } from './types';

export interface AiToolItem {
  mark: string;
  markBg: string;
  title: string;
  desc: string;
}

export const siteCopy: Localized<{
  nav: { work: string; ai: string; about: string; contact: string };
  hero: {
    eyebrow: string;
    headlinePre: string;
    headlineAccent: string;
    headlinePost: string;
    sub: string;
    chips: string[];
    ctaWork: string;
    ctaContact: string;
  };
  work: { title: string };
  moreWork: { title: string; badge: string; desc: string };
  aiToolkit: { title: string; sub: string; items: AiToolItem[] };
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
    nav: { work: 'Work', ai: 'AI Toolkit', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'UX DESIGNER — SEOUL / GLOBAL',
      headlinePre: '사람이 무엇을 보는지가 아니라, 어떻게 ',
      headlineAccent: '경험하는지',
      headlinePost: '를 설계합니다.',
      sub: '화면이든 공간이든 XR이든, 그 안에서 사람이 어떻게 느끼고 움직이는지를 리서치로 이해하고 설계합니다. UX 디자이너로서 무게중심은 언제나 매체가 아니라 사람입니다.',
      chips: ['APP', 'SPATIAL / XR', 'AI'],
      ctaWork: 'VIEW SELECTED WORK →',
      ctaContact: 'GET IN TOUCH',
    },
    work: { title: 'Selected Work' },
    moreWork: {
      title: 'More Work',
      badge: 'SOON',
      desc: '더 많은 프로젝트를 준비하고 있어요. 조만간 이 자리에 추가됩니다.',
    },
    aiToolkit: {
      title: 'AI Toolkit',
      sub: 'HOW I WORK WITH AI',
      items: [
        { mark: 'Fi', markBg: '#1A1A1A', title: 'Figma AI', desc: '와이어프레임 초안과 배리에이션을 빠르게 생성해 탐색 속도를 높입니다.' },
        { mark: 'Cl', markBg: '#C1571F', title: 'Claude / ChatGPT', desc: '리서치 종합, 인터뷰 스크립트 분석, 카피 초안 작성에 활용합니다.' },
        { mark: 'Mj', markBg: '#1A1A1A', title: 'Midjourney', desc: '전시·공간 컨셉의 무드보드와 초기 비주얼 레퍼런스를 만듭니다.' },
        { mark: 'Cu', markBg: '#1A1A1A', title: 'Cursor / AI 코딩', desc: '디자인을 직접 동작하는 프로토타입으로 빠르게 구현합니다.' },
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
      footerRight: 'SEOUL, KOREA',
    },
  },
  en: {
    nav: { work: 'Work', ai: 'AI Toolkit', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'UX DESIGNER — SEOUL / GLOBAL',
      headlinePre: 'Designing how people ',
      headlineAccent: 'experience',
      headlinePost: ' — not just what they see.',
      sub: "Whether it's a screen, a space, or XR, I research how people feel and move within it, then design for that. As a UX designer, the center of gravity is always the person — not the medium.",
      chips: ['APP', 'SPATIAL / XR', 'AI'],
      ctaWork: 'VIEW SELECTED WORK →',
      ctaContact: 'GET IN TOUCH',
    },
    work: { title: 'Selected Work' },
    moreWork: {
      title: 'More Work',
      badge: 'SOON',
      desc: 'More projects are on the way — this spot will fill in soon.',
    },
    aiToolkit: {
      title: 'AI Toolkit',
      sub: 'HOW I WORK WITH AI',
      items: [
        { mark: 'Fi', markBg: '#1A1A1A', title: 'Figma AI', desc: 'Speeds up exploration by rapidly generating wireframe drafts and variations.' },
        { mark: 'Cl', markBg: '#C1571F', title: 'Claude / ChatGPT', desc: 'Used for research synthesis, interview transcript analysis, and copy drafting.' },
        { mark: 'Mj', markBg: '#1A1A1A', title: 'Midjourney', desc: 'Builds mood boards and early visual references for exhibition and spatial concepts.' },
        { mark: 'Cu', markBg: '#1A1A1A', title: 'Cursor / AI Coding', desc: 'Turns designs into working prototypes quickly.' },
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
      footerRight: 'SEOUL, KOREA',
    },
  },
};
