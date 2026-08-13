import type { Project } from './types';

/**
 * Add or edit case studies here.
 *
 * tier: 'full' projects get a complete /work/:slug case study page
 * (problem/process/result). 'short' projects only render as a compact
 * summary card in the Work section — no case study page, no `process`
 * needed, just a one-line `resultLine`.
 *
 * images.thumb / images.hero point into /public/images/work/<slug>/ —
 * drop real files there and they'll render automatically. Until then a
 * soft placeholder card renders instead.
 *
 * NOTE for Yesol: the copy below (problem/process/result) is a first
 * draft based on what you've told Claude so far — swap in your real
 * specifics (exact research methods, numbers, quotes) before this goes
 * live.
 */
export const projects: Project[] = [
  {
    slug: 'midnight-carnival',
    order: 1,
    tier: 'full',
    medium: 'spatial',
    tags: ['SPATIAL UX', 'XR', 'SIGGRAPH ASIA 2024'],
    images: {
      thumb: '/images/work/midnight-carnival/thumb.jpg',
      hero: '/images/work/midnight-carnival/hero.jpg',
    },
    process: {
      kr: [
        {
          title: 'Ideation',
          desc: "'축제 같은 놀이공원'이라는 컨셉 아래 리듬·회피·슈팅 등 서로 다른 5개 맵(롤러코스터, 드롭타워, 서커스 무대, 벌룬 배틀, 포토존)을 기획. 5면 플랫폼의 이점과 프로젝터 투사 하드웨어 제약, 빛과 어둠의 대비를 함께 고려.",
        },
        {
          title: 'Prototype',
          desc: 'Unity와 프로젝션 매핑, Hokuyo 레이저 센서를 결합해 웨어러블 없이 신체 움직임을 인식하는 시스템을 구축. Blender·Maya로 3D 에셋과 인터랙티브 이펙트를 제작해 Unity에 통합.',
        },
        {
          title: 'Internal Test',
          desc: '충돌 판정, 오디오-비주얼 피드백 동기화, 신체 움직임과 반응 사이의 리듬감을 팀 내에서 반복 점검.',
        },
        {
          title: 'User Test',
          desc: 'SIGGRAPH Asia·현대백화점 전시에 앞서 교내에서 학우들을 대상으로 시연 전시를 열고 유저 테스트를 진행, 그 결과를 다시 아이데이션에 반영하며 전체 과정을 반복.',
        },
      ],
      en: [
        {
          title: 'Ideation',
          desc: 'Planned five distinct maps — Roller Coaster, Drop Tower, Circus Stage, Balloon Battle, Photo Zone — spanning rhythm, dodging, and shooting mechanics under a festival concept, while weighing the five-wall platform’s strengths against the hardware constraints of projector-based wall projection and strong light/dark contrast.',
        },
        {
          title: 'Prototype',
          desc: 'Built a wearable-free motion tracking system combining Unity, projection mapping, and Hokuyo laser sensors. Produced 3D assets and interactive effects in Blender and Maya, then integrated them into Unity.',
        },
        {
          title: 'Internal Test',
          desc: 'Repeatedly checked collision detection, audio-visual feedback sync, and the rhythm between body movement and response within the team.',
        },
        {
          title: 'User Test',
          desc: 'Ran an in-school demo exhibition and user testing with fellow students ahead of the SIGGRAPH Asia and Hyundai Department Store exhibitions, feeding results back into ideation and repeating the cycle.',
        },
      ],
    },
    card: {
      kr: {
        imgLabel: 'MIDNIGHT CARNIVAL — SIGGRAPH ASIA 2024',
        title: 'Midnight Carnival — 헤드셋 없는 XR e스포츠',
        desc: 'SIGGRAPH Asia 2024(도쿄) 선정 전시. 헤드셋 없이 물리적 공간을 인터랙티브 놀이터로 바꾸는 공간 기반 XR 경험.',
      },
      en: {
        imgLabel: 'MIDNIGHT CARNIVAL — SIGGRAPH ASIA 2024',
        title: 'Midnight Carnival — Headset-Free Spatial XR E-sport',
        desc: 'Selected for SIGGRAPH Asia 2024 (Tokyo). A spatial XR experience that turns physical space into an interactive playground — no headset required.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: 'CASE STUDY 01 — SPATIAL UX / XR',
        title: 'Midnight Carnival — 헤드셋 없는 XR e스포츠',
        subtitle: 'SIGGRAPH Asia 2024(도쿄) 선정 전시. 헤드셋 없이 물리적 공간을 인터랙티브 놀이터로 바꾸는 공간 기반 XR 경험을 설계했습니다.',
        heroLabel: 'HERO IMAGE — MIDNIGHT CARNIVAL, SIGGRAPH ASIA 2024',
        roleLabel: 'MY ROLE',
        role:
          '크리에이티브·경험 디자인을 맡아 5면 공간형 플랫폼의 핵심 컨셉과 전시 레이아웃을 설계하고, 모션·배경 비주얼 제작의 약 25%를 담당했다. 동시에 프로젝트 총괄로서 SIGGRAPH Asia·대학·현대백화점 문화홀과의 파트너십을 조율하고 게임 개발자·디자이너로 구성된 팀을 이끌었으며, 관련 리서치 논문을 공동 저술했다.',
        problemLabel: 'THE CHALLENGE',
        problem:
          "경쟁적인 게임을 몸으로 즐기는 놀이터로 다시 설계하는 프로젝트였다. '벽면·바닥면 5면 공간형 플랫폼'에 콘텐츠를 올리는 것도, 게임 개발자·디자이너로 구성된 팀에서의 협업도 모두 처음이었다. Hokuyo 레이저 센서로 신체 움직임을 인식하는 방식이라, 버튼 없이도 제한된 센서 인식 범위 안에서 직관적으로 반응하는 인터랙션을 설계해야 했다.",
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          'SIGGRAPH Asia 2024(도쿄) 한국 공동관에서 데뷔한 뒤 현대백화점 문화홀에서도 전시되며 수백 명의 관람객을 만났다.',
        prevLabel: '← PREVIOUS',
        nextLabel: 'NEXT — DESIGNING EMPATHY THROUGH SPACE →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 01 — SPATIAL UX / XR',
        title: 'Midnight Carnival — Headset-Free Spatial XR E-sport',
        subtitle:
          'Selected for SIGGRAPH Asia 2024 (Tokyo). Designed a spatial XR experience that turns physical space into an interactive playground — no headset required.',
        heroLabel: 'HERO IMAGE — MIDNIGHT CARNIVAL, SIGGRAPH ASIA 2024',
        roleLabel: 'MY ROLE',
        role:
          'Led creative and experience design — developing the core concept and exhibition layout for the five-wall spatial platform, and producing roughly 25% of the motion and background visuals. Also managed the project end-to-end, coordinating the team of game developers and designers and the partnerships with SIGGRAPH Asia, the university, and the Hyundai Department Store Culture Hall, and co-authored a related research paper.',
        problemLabel: 'THE CHALLENGE',
        problem:
          'The project reimagined competitive gaming as a full-body playground. Both building content for a five-wall/floor spatial platform and collaborating with a team of game developers and designers were new to me. Since movement was tracked through Hokuyo laser sensors, I needed to design interactions that felt intuitive — without buttons — within the sensor’s limited recognition range.',
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          'The installation debuted at the Korea joint pavilion at SIGGRAPH Asia 2024 in Tokyo, and was later shown at the Hyundai Department Store Culture Hall, reaching hundreds of visitors.',
        prevLabel: '← PREVIOUS',
        nextLabel: 'NEXT — DESIGNING EMPATHY THROUGH SPACE →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'outdoor-dome',
    order: 2,
    tier: 'full',
    medium: 'spatial',
    tags: ['SPATIAL UX', 'EXHIBITION', 'DENMARK'],
    images: {
      thumb: '/images/work/outdoor-dome/thumb.jpg',
      hero: '/images/work/outdoor-dome/hero.jpg',
    },
    process: {
      kr: [
        { title: 'Research', desc: '돔 부지 답사 및 유사 실외 이머시브 전시 벤치마킹.' },
        { title: 'Ideation', desc: '빛·사운드·동선을 활용한 감정 곡선(emotional arc) 설계.' },
        { title: 'Prototype', desc: '돔 내부 목업과 조명·사운드 큐 테스트.' },
        { title: 'Test', desc: '현지 리허설 및 관람객 정서 반응 관찰.' },
      ],
      en: [
        { title: 'Research', desc: 'Surveyed the dome site and benchmarked comparable outdoor immersive exhibitions.' },
        { title: 'Ideation', desc: 'Designed an emotional arc using light, sound, and circulation.' },
        { title: 'Prototype', desc: 'Tested lighting and sound cues with an in-dome mockup.' },
        { title: 'Test', desc: 'Ran on-site rehearsals and observed visitors’ emotional response.' },
      ],
    },
    card: {
      kr: {
        imgLabel: 'DESIGNING EMPATHY THROUGH SPACE — OUTDOOR DOME, DENMARK',
        title: 'Designing Empathy Through Space — 야외 돔 몰입 전시',
        desc: '덴마크에서 진행한 야외 돔 몰입 전시. 공간 연출만으로 낯선 이야기에 정서적으로 몰입하게 만드는 경험을 디렉팅했습니다.',
      },
      en: {
        imgLabel: 'DESIGNING EMPATHY THROUGH SPACE — OUTDOOR DOME, DENMARK',
        title: 'Designing Empathy Through Space — Outdoor Dome Exhibition',
        desc: 'An outdoor dome exhibition in Denmark. Directed a spatial experience that builds emotional immersion in an unfamiliar story through space alone.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: 'CASE STUDY 02 — SPATIAL UX / EXHIBITION',
        title: 'Designing Empathy Through Space — 야외 돔 몰입 전시',
        subtitle: '덴마크에서 진행한 야외 돔 몰입 전시. 공간 연출만으로 낯선 이야기에 정서적으로 몰입하게 만드는 경험을 디렉팅했습니다.',
        heroLabel: 'HERO IMAGE — OUTDOOR DOME EXHIBITION, DENMARK',
        problemLabel: 'THE CHALLENGE',
        problem:
          '임시로 설치되는 야외 돔이라는 제한된 구조물 안에서, 관람객이 짧은 시간 안에 낯선 사람의 이야기에 감정적으로 몰입하게 만들어야 했다. 날씨와 야외 환경이라는 물리적 제약 속에서, 오직 공간 연출만으로 몰입을 끌어내는 것이 과제였다.',
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          '관람객들이 낯선 이야기에도 짧은 체류 시간 안에 정서적으로 몰입했다는 반응을 얻었고, 야외라는 제약을 오히려 연출 요소로 활용한 사례로 남았다.',
        prevLabel: '← PREVIOUS — MIDNIGHT CARNIVAL',
        nextLabel: 'NEXT — TALKABLE →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 02 — SPATIAL UX / EXHIBITION',
        title: 'Designing Empathy Through Space — Outdoor Dome Exhibition',
        subtitle:
          'An outdoor dome exhibition in Denmark. Directed a spatial experience that builds emotional immersion in an unfamiliar story through space alone.',
        heroLabel: 'HERO IMAGE — OUTDOOR DOME EXHIBITION, DENMARK',
        problemLabel: 'THE CHALLENGE',
        problem:
          'Inside a temporary outdoor dome structure, visitors needed to become emotionally immersed in an unfamiliar story within a short amount of time. Working within the physical constraints of weather and an outdoor setting, the challenge was to build that immersion through spatial direction alone.',
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          'Visitors reported becoming emotionally immersed in the unfamiliar story even within a short visit, and the outdoor constraint itself became a directorial asset rather than a limitation.',
        prevLabel: '← PREVIOUS — MIDNIGHT CARNIVAL',
        nextLabel: 'NEXT — TALKABLE →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'talkable',
    order: 3,
    tier: 'full',
    medium: 'ai',
    tags: ['AI PRODUCT', 'MOBILE APP', 'EDTECH'],
    images: {
      thumb: '/images/work/talkable/thumb.jpg',
      hero: '/images/work/talkable/hero.jpg',
    },
    process: {
      kr: [
        { title: 'Research', desc: '학습자 인터뷰와 경쟁 앱 분석.' },
        { title: 'Ideation', desc: 'AI 피드백 루프와 온보딩 플로우 설계.' },
        { title: 'Prototype', desc: '대화형 UI 프로토타입 제작.' },
        { title: 'Test', desc: '사용성 테스트 및 반복 개선.' },
      ],
      en: [
        { title: 'Research', desc: 'Interviewed learners and analyzed competitor apps.' },
        { title: 'Ideation', desc: 'Designed the AI feedback loop and onboarding flow.' },
        { title: 'Prototype', desc: 'Built a conversational UI prototype.' },
        { title: 'Test', desc: 'Ran usability testing and iterated.' },
      ],
    },
    card: {
      kr: {
        imgLabel: 'TALKABLE APP SCREENS',
        title: 'Talkable — AI 영어 학습 앱',
        desc: 'AI 기반 회화 피드백으로 실전 영어를 학습하는 앱의 전반적인 UX 설계.',
      },
      en: {
        imgLabel: 'TALKABLE APP SCREENS',
        title: 'Talkable — AI English Learning App',
        desc: 'End-to-end UX design for an app teaching practical English through AI-driven speaking feedback.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: 'CASE STUDY 03 — AI PRODUCT / MOBILE',
        title: 'Talkable — AI 영어 학습 앱',
        subtitle: 'AI 기반 회화 피드백으로 실전 영어를 학습하는 앱의 전반적인 UX 설계.',
        heroLabel: 'HERO IMAGE — TALKABLE APP SCREENS',
        problemLabel: 'THE CHALLENGE',
        problem:
          '기존 영어 학습 앱은 발화 피드백이 느리고 정형화되어 있어, 학습자가 실전 회화 자신감을 기르기 어려웠다. 반복 학습을 이어가게 하는 즉각적이고 개인화된 피드백 루프가 필요했다.',
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          '즉각적인 AI 피드백 루프 도입 이후 학습 지속 사용률이 개선되었고, 사용자들이 발화 피드백을 더 명확하게 이해한다는 반응을 얻었다.',
        prevLabel: '← PREVIOUS — DESIGNING EMPATHY THROUGH SPACE',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 03 — AI PRODUCT / MOBILE',
        title: 'Talkable — AI English Learning App',
        subtitle:
          'End-to-end UX design for an app teaching practical English through AI-driven speaking feedback.',
        heroLabel: 'HERO IMAGE — TALKABLE APP SCREENS',
        problemLabel: 'THE CHALLENGE',
        problem:
          'Existing English learning apps gave slow, formulaic speaking feedback, making it hard for learners to build real conversational confidence. We needed an immediate, personalized feedback loop that kept learners coming back.',
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          'After introducing the instant AI feedback loop, retention improved and users reported understanding their speaking feedback far more clearly.',
        prevLabel: '← PREVIOUS — DESIGNING EMPATHY THROUGH SPACE',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'seoul-xr-research',
    order: 4,
    tier: 'short',
    medium: 'spatial',
    tags: ['XR RESEARCH', 'SEOUL CITY-FUNDED', 'EXHIBITION'],
    images: {
      thumb: '/images/work/seoul-xr-research/thumb.jpg',
      hero: '/images/work/seoul-xr-research/hero.jpg',
    },
    card: {
      kr: {
        imgLabel: 'SEOUL CITY-FUNDED XR RESEARCH',
        title: '서울시 지원 산학 XR 리서치',
        desc: '5개 연령대별 맞춤 콘텐츠를 설계한 산학협력 XR 리서치. 결과물이 실제 상업 전시로 이어졌습니다.',
      },
      en: {
        imgLabel: 'SEOUL CITY-FUNDED XR RESEARCH',
        title: 'Seoul City-Funded XR Research',
        desc: 'Industry-academia XR research designing age-tailored content across 5 age groups. The output went on to a real commercial exhibition.',
      },
    },
    resultLine: {
      kr: '연령별 맞춤 콘텐츠 설계 → 실제 상업 전시로 이어짐.',
      en: 'Age-tailored content design → led to a real commercial exhibition.',
    },
  },
  {
    slug: 'skoleplan',
    order: 5,
    tier: 'short',
    medium: 'app',
    tags: ['EDU TECH', 'DENMARK', 'B2B'],
    images: {
      thumb: '/images/work/skoleplan/thumb.jpg',
      hero: '/images/work/skoleplan/hero.jpg',
    },
    card: {
      kr: {
        imgLabel: 'SKOLEPLAN APP SCREENS',
        title: 'SkolePlan — 덴마크 학습 관리 앱',
        desc: '덴마크 Skole IT 학습 관리 시스템의 학생·학부모·교사 경험을 재설계.',
      },
      en: {
        imgLabel: 'SKOLEPLAN APP SCREENS',
        title: 'SkolePlan — Danish School Management App',
        desc: 'Redesigned student, parent, and teacher experience for a Danish school-IT management system.',
      },
    },
    resultLine: {
      kr: '역할별 정보 구조 재설계로 교사 만족도 개선.',
      en: 'Role-based information redesign improved teacher satisfaction.',
    },
  },
];

export const fullProjects = projects.filter((p) => p.tier === 'full').sort((a, b) => a.order - b.order);
export const shortProjects = projects.filter((p) => p.tier === 'short').sort((a, b) => a.order - b.order);
export const projectsByOrder = [...projects].sort((a, b) => a.order - b.order);

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug && p.tier === 'full');
}

export function getAdjacentProjects(slug: string) {
  const idx = fullProjects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? fullProjects[idx - 1] : undefined,
    next: idx >= 0 && idx < fullProjects.length - 1 ? fullProjects[idx + 1] : undefined,
  };
}
