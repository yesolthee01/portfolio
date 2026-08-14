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
          desc: "'밤의 놀이공원(Night Carnival)'을 컨셉으로 리듬·회피·슈팅 등 서로 다른 인터랙션을 가진 5개 맵을 기획했다. 5면 플랫폼의 공간적 특성과 프로젝터 투사 환경, 빛과 어둠의 대비를 함께 고려해 경험의 방향을 설정했다.",
        },
        {
          title: 'Prototype',
          desc: 'Unity·프로젝션 매핑·Hokuyo 레이저 센서를 연결해 웨어러블 없이 신체 움직임으로 참여할 수 있는 프로토타입을 제작했다. 실제 공간에서 인터랙션의 인식 범위와 피드백 방식을 빠르게 검증하고, Blender·Maya로 제작한 3D 에셋과 인터랙티브 이펙트를 Unity에 통합했다.',
        },
        {
          title: 'Internal Test',
          desc: '충돌 판정과 오디오·비주얼 피드백의 동기화, 사용자 움직임과 시스템 반응 사이의 타이밍을 반복적으로 테스트하며 조정했다.',
        },
        {
          title: 'User Test',
          desc: 'SIGGRAPH Asia와 현대백화점 전시에 앞서 교내 테스트 전시를 운영해 실제 사용자의 행동을 관찰했다. 발견한 문제를 디자인에 반영하며 Ideation → Prototype → Test 과정을 반복했다.',
        },
      ],
      en: [
        {
          title: 'Ideation',
          desc: "Planned five maps with distinct interactions — rhythm, dodging, shooting — under the 'Night Carnival' concept. Set the direction of the experience by weighing the five-wall platform's spatial characteristics, the projector-based projection environment, and light/dark contrast together.",
        },
        {
          title: 'Prototype',
          desc: 'Connected Unity, projection mapping, and Hokuyo laser sensors to build a prototype playable through body movement alone, with no wearables. Quickly validated recognition range and feedback in the actual space, and integrated 3D assets and interactive effects made in Blender and Maya into Unity.',
        },
        {
          title: 'Internal Test',
          desc: 'Repeatedly tested and adjusted collision detection, audio-visual feedback sync, and the timing between user movement and system response.',
        },
        {
          title: 'User Test',
          desc: 'Ran an in-school test exhibition ahead of the SIGGRAPH Asia and Hyundai Department Store exhibitions to observe real user behavior, feeding what was found back into the design and repeating the Ideation → Prototype → Test cycle.',
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
        subtitle:
          "'미드나잇 카니발(Midnight Carnival)'은 5면 공간형 XR 플랫폼을 기반으로 한 체험형 e-sports 콘텐츠다. 신체 움직임과 디지털 인터랙션을 연결해, 여러 사용자가 온몸으로 함께 즐기는 협동형 경험을 제공한다.",
        heroLabel: 'HERO IMAGE — MIDNIGHT CARNIVAL, SIGGRAPH ASIA 2024',
        roleLabel: 'MY ROLE',
        role:
          'PM과 UX/UI Designer로 참여해 콘텐츠 기획부터 인터랙션 설계, 사용자 테스트, 전시까지 프로젝트 전 과정을 이끌었다. UI와 배경 비주얼 제작의 약 25%를 담당했으며, 게임 개발자와 디자이너 간 협업을 조율했다. 사용자 반응을 검증하고 경험을 개선하기 위해 교내 테스트 전시를 기획·운영했으며, 프로젝트 기반의 리서치 논문을 공동 저술했다.',
        problemLabel: 'THE CHALLENGE',
        problem:
          '5면으로 둘러싸인 XR 공간에서 사용자가 별도의 학습 없이 몸을 움직여 게임을 이해하고 즐길 수 있어야 했다. 동시에 Hokuyo 레이저 센서의 제한된 인식 범위 안에서 움직임을 정확하게 감지하면서도, 게임의 재미와 몰입감을 유지하는 직관적인 인터랙션을 설계해야 했다.',
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'IMMERSION',
            subtitle: '공간 전체를 경험의 일부로',
            desc: '벽과 바닥을 하나의 플레이 공간으로 연결하고, 시각·사운드·신체 움직임이 함께 반응하도록 구성했다. 사용자가 화면을 바라보는 것을 넘어 공간 안에 직접 들어와 있다고 느낄 수 있는 경험을 설계했다.',
          },
          {
            title: 'FUN',
            subtitle: '서로 다른 플레이 리듬',
            desc: '반복적인 경험을 피하기 위해 리듬·회피·슈팅 등 서로 다른 플레이 방식의 5개 맵을 구성했다. 각 맵마다 움직임과 난이도, 피드백의 리듬을 다르게 설계해 짧은 체험 안에서도 다양한 재미를 경험하도록 했다.',
          },
          {
            title: 'INTUITIVENESS',
            subtitle: '설명보다 반응으로 이해하는 인터랙션',
            desc: '별도의 컨트롤러가 없는 환경에서 사용자가 자신의 움직임과 시스템의 반응을 즉시 연결할 수 있도록 시각·사운드 피드백을 설계했다. 사용자 테스트에서 플레이 방향의 변화나 시선 이동이 필요한 순간을 놓치는 문제를 발견했고, 행동을 유도하는 안내 UI와 피드백을 추가해 게임의 흐름을 보다 직관적으로 이해할 수 있도록 개선했다.',
          },
        ],
        processLabel: 'PROCESS',
        findingsLabel: 'FROM USER TESTING',
        findingsIntro: "특히 '드롭타워' 맵에서 두 가지 문제를 발견했다.",
        findings: [
          {
            title: '방향 전환을 인지하지 못함',
            issue:
              '회전하는 바닥의 방향이 랜덤하게 변경되면 사용자가 달리는 방향도 바꿔야 했지만, 일부 사용자가 변화를 인지하지 못해 플레이 중 혼란을 겪었다.',
            fix: '→ 회전 방향이 변경되는 순간, 벽면에 방향 화살표와 안내 UI를 추가해 다음 행동을 즉시 인지할 수 있도록 개선했다.',
          },
          {
            title: '중요한 클라이맥스를 놓침',
            issue:
              '사용자는 회전하는 바닥의 구멍을 피하기 위해 플레이 중 대부분의 시선을 바닥에 두었다. 그 결과 게임 클리어 후 공간 전체가 급강하하는 핵심 연출이 벽면에서 재생되어도 이를 놓치는 경우가 발생했다.',
            fix: '→ 클라이맥스 직전에 사용자의 시선을 벽면으로 유도하는 안내 UI를 추가해 의도한 공간 연출을 자연스럽게 경험하도록 개선했다.',
          },
        ],
        resultLabel: 'RESULT / IMPACT',
        result:
          'SIGGRAPH Asia 2024 Tokyo 한국 공동관에서 처음 공개된 후 현대백화점 문화홀에서도 전시되며 수백 명의 관람객을 만났다. 프로젝트의 경험과 연구 결과를 바탕으로 관련 리서치 논문을 공동 저술했다.',
        prevLabel: '← PREVIOUS',
        nextLabel: 'NEXT — DESIGNING EMPATHY THROUGH SPACE →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 01 — SPATIAL UX / XR',
        title: 'Midnight Carnival — Headset-Free Spatial XR E-sport',
        subtitle:
          "'Midnight Carnival' is an experiential e-sports piece built on a five-wall spatial XR platform. It connects physical movement with digital interaction, letting multiple users play together with their whole bodies in a cooperative experience.",
        heroLabel: 'HERO IMAGE — MIDNIGHT CARNIVAL, SIGGRAPH ASIA 2024',
        roleLabel: 'MY ROLE',
        role:
          'Joined as PM and UX/UI Designer, leading the project from content planning and interaction design through user testing and exhibition. Handled roughly 25% of UI and background visual production, and coordinated collaboration between game developers and designers. Planned and ran an in-school test exhibition to validate user response and improve the experience, and co-authored a research paper based on the project.',
        problemLabel: 'THE CHALLENGE',
        problem:
          'In a five-wall XR space, users needed to understand and enjoy the game through body movement alone, with no separate instructions. At the same time, movement had to be accurately detected within the limited recognition range of the Hokuyo laser sensors — while designing interactions intuitive enough to keep the game fun and immersive.',
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'IMMERSION',
            subtitle: 'Making the whole space part of the experience',
            desc: "Connected the walls and floor into a single play space where visuals, sound, and body movement respond together. Designed the experience so users feel like they've stepped inside the space, not just watching a screen.",
          },
          {
            title: 'FUN',
            subtitle: 'Five different play rhythms',
            desc: 'To avoid repetition, built five maps with distinct play styles — rhythm, dodging, shooting. Each map varies movement, difficulty, and feedback rhythm, so a short session still delivers a range of fun.',
          },
          {
            title: 'INTUITIVENESS',
            subtitle: 'Interaction understood through response, not instruction',
            desc: "With no controller in hand, designed visual and sound feedback so users could immediately connect their movement to the system's response. User testing surfaced moments where players missed cues to change direction or look elsewhere, so guiding UI and feedback were added to make the game's flow more intuitive.",
          },
        ],
        processLabel: 'PROCESS',
        findingsLabel: 'FROM USER TESTING',
        findingsIntro: "Two issues in particular surfaced on the 'Drop Tower' map.",
        findings: [
          {
            title: 'Missed direction changes',
            issue:
              "When the rotating floor's direction changed randomly, users had to change their running direction too — but some players didn't notice the change and got confused mid-play.",
            fix: '→ Added directional arrows and guiding UI on the walls at the moment the rotation direction changes, so players could immediately register the next move.',
          },
          {
            title: 'Missing the climax moment',
            issue:
              'To dodge the rotating floor’s holes, players kept most of their gaze on the floor throughout play. As a result, some missed the key moment after clearing the game when the whole space appeared to plunge, played out on the walls.',
            fix: '→ Added guiding UI just before the climax to draw players’ gaze up to the walls, so they could naturally experience the intended spatial moment.',
          },
        ],
        resultLabel: 'RESULT / IMPACT',
        result:
          "First unveiled at the Korea joint pavilion at SIGGRAPH Asia 2024 Tokyo, and later exhibited at the Hyundai Department Store Culture Hall, reaching hundreds of visitors. Co-authored a related research paper based on the project's experience and findings.",
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
