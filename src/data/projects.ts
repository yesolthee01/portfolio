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
    order: 3,
    tier: 'full',
    medium: 'spatial',
    tags: ['사용자 테스트', '인터랙션 설계', '개발 협업', '반복 개선'],
    images: {
      thumb: '/images/work/midnight-carnival/thumb.jpg',
      hero: 'https://img.youtube.com/vi/sJRy-V2xb8I/hqdefault.jpg',
    },
    heroVideo: 'sJRy-V2xb8I',
    process: {
      kr: [
        {
          title: '경험 방향 설정',
          desc: "'밤의 놀이공원'을 콘셉트로, 점프·이동·바닥 밟기·벽면 터치 등 서로 다른 신체 동작을 활용하는 다섯 가지 게임을 기획했다. 5면 프로젝션 공간의 특성과 사용자의 시선·이동 범위를 고려해 게임별 인터랙션 방향을 설정했다.",
        },
        {
          title: '프로토타입 제작',
          desc: '사용자의 신체 움직임이 실제 게임 입력으로 작동하는 프로토타입을 제작했다. 실제 공간에서 동작 인식 범위와 반응 방식을 확인하며 인터랙션을 구체화했다.',
        },
        {
          title: '인터랙션 정교화',
          desc: '충돌 판정, 센서 인식, 시각·음향 피드백의 타이밍을 반복적으로 점검했다. 사용자의 동작과 시스템 반응 사이의 간격이 플레이 이해에 영향을 주는 부분을 확인하고 개발팀과 함께 조정했다.',
        },
        {
          title: '사용자 테스트 및 개선',
          desc: 'SIGGRAPH Asia와 현대백화점 전시에 앞서 교내 테스트 전시를 운영했다. 처음 게임을 접하는 사용자가 어디에서 망설이고 어떤 안내를 놓치는지 관찰하고, 발견한 문제를 튜토리얼과 안내 UI에 반영했다.',
        },
      ],
      en: [
        {
          title: 'Ideation',
          desc: "Planned five maps with distinct interactions — jumping, floor-stomping, wall-touching — under the 'Night Carnival' concept. Set the direction of the experience by weighing the five-wall platform's spatial characteristics, the projector-based projection environment, and light/dark contrast together.",
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
        imgLabel: 'HMD 착용 없이 즐기는 XR 게임',
        title: 'Midnight Carnival',
        desc: '물리적 공간과 디지털 인터랙션이 결합된 XR 경험을 설계하고, 실제 사용자의 행동을 관찰하며 인터랙션을 반복 개선했습니다. SIGGRAPH Asia 2024 도쿄에 선정되었습니다.',
      },
      en: {
        imgLabel: 'XR Gaming Without a Headset',
        title: 'Midnight Carnival',
        desc: 'Selected for SIGGRAPH Asia 2024 (Tokyo). A spatial XR experience that turns physical space into an interactive playground — no headset required.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: 'HMD 착용 없이 즐기는 XR 게임',
        title: 'Midnight Carnival',
        summary: 'HMD 착용 없이 몸의 움직임만으로 즐기는 5면 공간형 XR 협동 게임',
        subtitle:
          '미드나잇 카니발은 바닥과 벽면을 활용하는 5면 공간에서 여러 사용자가 몸을 움직이며 즐기는 체험형 게임이다. 호쿠요 레이저 센서로 사용자의 움직임을 감지하고, 점프·이동·터치와 같은 신체 동작을 게임의 입력 방식으로 연결했다.\n\n별도의 컨트롤러나 HMD 없이도 사용자가 공간 안에서 자연스럽게 게임의 규칙을 이해하고 참여할 수 있는 경험을 만드는 데 집중했다.',
        period: '2024.08 – 2024.12',
        heroLabel: 'HERO IMAGE — MIDNIGHT CARNIVAL, SIGGRAPH ASIA 2024',
        roleLabel: '나의 역할',
        roleTags: ['콘텐츠 기획', '인터랙션 설계', '사용자 흐름', 'UI 설계', '사용자 테스트', '전시 운영'],
        role:
          'PM과 UX/UI 디자이너로 참여해 콘텐츠 기획, 인터랙션 구조 설계, 사용자 테스트와 전시 운영까지 프로젝트 전 과정에 참여했다. 개발자·디자이너와 게임별 동작 방식과 피드백 구조를 조율하고, 사용자 행동을 관찰해 튜토리얼과 안내 UI를 반복 개선했다.\n\nUI와 공간 비주얼 제작에도 참여했으며, 교내 테스트 전시를 직접 기획·운영하고 프로젝트의 연구 과정을 바탕으로 논문을 공동 저술했다.',
        problemLabel: '문제 정의',
        problem:
          '익숙한 컨트롤러가 없는 공간에서, 사용자가 무엇을 해야 하는지 어떻게 직관적으로 알 수 있을까? Midnight Carnival은 컨트롤러나 HMD 없이 몸의 움직임만으로 플레이하는 방식이기 때문에, 사용자가 처음 공간에 들어왔을 때 어디를 보고 어떻게 움직여야 하는지 별도의 학습 없이 이해할 수 있어야 했다.\n\n동시에 Hokuyo 센서의 제한된 인식 범위 안에서 사용자의 움직임을 안정적으로 감지해야 했고, 시스템의 반응이 늦거나 불명확하면 사용자는 자신의 행동이 제대로 인식됐는지 판단하기 어려웠다. 따라서 핵심 과제를 직관적인 행동 유도, 명확한 시스템 피드백, 공간 전체의 몰입 유지로 정의했다.',
        solutionLabel: '해결 방향',
        solution: [
          {
            title: '즉각적인 피드백',
            subtitle: '내 움직임이 인식됐음을 바로 알 수 있도록',
            desc: '별도의 컨트롤러가 없는 만큼 사용자가 자신의 행동과 시스템의 반응을 즉시 연결할 수 있어야 했다. 움직임이 감지되거나 게임 상태가 변화할 때 시각·음향 피드백을 함께 제공해 현재 상태와 행동의 결과를 바로 이해하도록 설계했다.',
          },
          {
            title: '익숙한 신체 동작',
            subtitle: '설명보다 몸으로 이해하는 플레이',
            desc: '점프하기, 이동하기, 바닥 밟기, 벽면 터치처럼 누구나 이미 알고 있는 동작을 게임의 입력 방식으로 활용했다. 각 게임마다 서로 다른 동작을 사용하되, 복잡한 조작 방법을 새롭게 학습하지 않고 바로 참여할 수 있도록 구성했다.',
          },
          {
            title: '공간 전체를 활용한 몰입',
            subtitle: '화면을 보는 것을 넘어 공간 안에서 플레이하도록',
            desc: '바닥과 벽면을 하나의 플레이 공간으로 연결하고, 시각·음향·신체 움직임이 함께 반응하도록 구성했다. 사용자가 한 방향의 화면만 바라보는 것이 아니라 주변 공간을 탐색하고 이동하도록 게임 흐름을 설계했다.',
          },
        ],
        processLabel: 'PROCESS',
        researchBasisLabel: '인터랙션 설계',
        researchBasis:
          '사용자의 신체 움직임이 실제 게임 입력으로 작동하는 프로토타입을 제작하고, 실제 공간에서 동작 인식 범위와 반응 방식을 확인하며 인터랙션을 구체화했다. 충돌 판정, 센서 인식, 시각·음향 피드백의 타이밍을 반복적으로 점검하며 사용자의 동작과 시스템 반응이 자연스럽게 연결되도록 개발팀과 함께 조정했다.',
        findingsLabel: '사용자 테스트 및 개선',
        findingsImageLayout: 'banner',
        findings: [
          {
            title: '게임 간 차이를 한눈에 알기 어려움',
            issue:
              '초기 선택 화면은 게임명을 텍스트로만 제공해, 처음 접하는 사용자가 각 게임의 특징을 예상하기 어려웠다.',
            fix: '→ 각 게임을 상징하는 그래픽을 추가해 게임의 특징과 플레이 방식을 선택 전에 직관적으로 예상할 수 있도록 개선했다.',
            image: '/images/work/midnight-carnival/finding-1.jpg',
            imageLabel: '게임 선택 아이콘 추가 — MIDNIGHT CARNIVAL UI',
          },
          {
            title: '플레이 방법을 텍스트만으로 이해하기 어려움',
            issue:
              '공간형 인터랙션이 익숙하지 않은 사용자에게 짧은 문장만으로는 어디를 보고 어떤 동작을 해야 하는지 전달하기 어려웠다.',
            fix: '→ 실제 게임 화면과 신체 동작을 함께 보여주는 튜토리얼로 변경해, 플레이 전에 필요한 행동을 시각적으로 이해하도록 개선했다.',
            image: '/images/work/midnight-carnival/finding-2.jpg',
            imageLabel: '튜토리얼 시각화 — MIDNIGHT CARNIVAL UI',
          },
          {
            title: '플레이 중 방향 전환을 놓침',
            issue: '게임 도중 바닥의 진행 방향이 바뀌어도 일부 사용자는 변화를 알아차리지 못하고 기존 방향으로 계속 이동했다.',
            fix: '→ 벽면에 방향 안내를 추가해 시선을 자연스럽게 다음 플레이 영역으로 유도하고, 다음 행동을 즉시 인지하도록 개선했다.',
            image: '/images/work/midnight-carnival/finding-3.jpg',
            imageLabel: '방향 안내 인터랙션 — MIDNIGHT CARNIVAL',
          },
        ],
        resultLabel: '결과 및 검증',
        result:
          '교내 사용자 테스트에서 발견한 문제를 반영해 게임 선택, 튜토리얼, 플레이 중 방향 안내를 개선하고, 처음 참여하는 사용자도 별도의 설명 없이 게임 흐름을 이해할 수 있도록 경험을 구체화했다.\n\nSIGGRAPH Asia 2024 Tokyo 한국 공동관에 선정되어 전시하였다. 이후 현대백화점 문화홀에서도 전시되어 수백 명의 관람객이 실제로 체험했다. 프로젝트의 기획·개발 및 사용자 경험 연구 과정은 이후 관련 논문 공동 저술로 이어졌다.',
        resultTakeaway:
          '낯선 인터랙션, 낯선 경험을 주는 프로덕트일수록 더 많은 설명을 더하기보다, 사용자의 행동과 시스템의 반응이 자연스럽게 연결되도록 설계하는 것이 최고의 경험을 설계하는 것에 있어 아주 중요했다.',
        prevLabel: '← PREVIOUS — SKOLEPLAN',
        nextLabel: 'NEXT — SEOUL CITY-FUNDED XR RESEARCH →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'XR Gaming Without a Headset',
        title: 'Midnight Carnival',
        summary: 'A five-wall spatial XR co-op game played entirely through body movement — no wearables required.',
        subtitle:
          "Midnight Carnival is an experiential game where multiple users move their bodies together in a five-wall space that uses the floor and walls. Hokuyo laser sensors detect user movement, connecting physical actions — jumping, moving, touching — directly to the game's input.\n\nThe focus was on creating an experience where users could naturally understand the game's rules and join in within the space, without a separate controller or HMD.",
        period: 'Aug 2024 – Dec 2024',
        heroLabel: 'HERO IMAGE — MIDNIGHT CARNIVAL, SIGGRAPH ASIA 2024',
        roleLabel: 'MY ROLE',
        roleTags: ['Content Planning', 'Interaction Design', 'User Flow', 'UI Design', 'User Testing', 'Exhibition Operations'],
        role:
          "Joined as PM and UX/UI Designer, taking part in the project's full process — from content planning and interaction structure design through user testing and exhibition operations. Coordinated with developers and designers on each game's mechanics and feedback structure, and observed user behavior to repeatedly improve the tutorial and guiding UI.\n\nAlso took part in producing UI and spatial visuals, personally planned and ran the in-school test exhibition, and co-authored a paper based on the project's research process.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "In a space with no familiar controller, how could users intuitively know what to do? Because Midnight Carnival is played through body movement alone, without a controller or HMD, users needed to understand where to look and how to move the moment they entered the space, with no separate instruction.\n\nAt the same time, user movement had to be reliably detected within the limited recognition range of the Hokuyo sensors, and if the system's response was slow or unclear, users found it hard to tell whether their action had registered at all. The core challenge was defined as guiding intuitive action, delivering clear system feedback, and keeping the whole space immersive.",
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'IMMEDIATE FEEDBACK',
            subtitle: 'So you instantly know your movement was recognized',
            desc: "With no separate controller, users needed to be able to immediately connect their own actions with the system's response. Whenever movement was detected or the game state changed, visual and sound feedback were provided together, so the current state and the result of an action could be understood right away.",
          },
          {
            title: 'FAMILIAR BODY MOVEMENT',
            subtitle: 'Play understood through the body, not instructions',
            desc: "Used actions everyone already knows — jumping, moving, stepping on the floor, touching a wall — as the game's input method. Each game used a different action, but was built so players could jump straight in without learning any complex new controls.",
          },
          {
            title: 'IMMERSION ACROSS THE WHOLE SPACE',
            subtitle: 'Playing inside the space, not just watching a screen',
            desc: 'Connected the floor and walls into a single play space where visuals, sound, and body movement respond together. Designed the game flow so users explore and move through the surrounding space, rather than facing one direction and one screen.',
          },
        ],
        processLabel: 'PROCESS',
        researchBasisLabel: 'INTERACTION DESIGN',
        researchBasis:
          "Built a prototype where physical movement worked as direct game input, validating recognition range and response in the actual space. Repeatedly tested and adjusted collision detection, audio-visual feedback sync, and the timing between user movement and system response, working with the development team so a player's action and the system's response felt naturally connected.",
        findingsLabel: 'FROM USER TESTING',
        findingsImageLayout: 'banner',
        findings: [
          {
            title: 'Games were hard to tell apart from text alone',
            issue:
              "The initial selection screen offered only game titles as text, making it hard for first-time users to anticipate each game's distinct feel.",
            fix: "→ Added a symbolic graphic for each game so its character and way of playing could be grasped intuitively before selecting it.",
            image: '/images/work/midnight-carnival/finding-1.jpg',
            imageLabel: 'GAME SELECTION ICONS — MIDNIGHT CARNIVAL UI',
          },
          {
            title: 'How to play was hard to grasp from text alone',
            issue:
              'For users unfamiliar with spatial interaction, short text alone made it hard to convey where to look and what action to take.',
            fix: '→ Changed the tutorial to show the actual gameplay screen together with the required body movement, so players could visually understand what to do before playing.',
            image: '/images/work/midnight-carnival/finding-2.jpg',
            imageLabel: 'TUTORIAL VISUALIZATION — MIDNIGHT CARNIVAL UI',
          },
          {
            title: 'Missed direction changes during play',
            issue:
              "Even when the floor's direction of travel changed mid-game, some users didn't notice and kept moving in the old direction.",
            fix: '→ Added directional guides on the walls to naturally draw the eye toward the next play area, so the next move could be recognized immediately.',
            image: '/images/work/midnight-carnival/finding-3.jpg',
            imageLabel: 'DIRECTIONAL GUIDE — MIDNIGHT CARNIVAL',
          },
        ],
        resultLabel: 'RESULT / IMPACT',
        result:
          "Reflecting the problems found in the in-school user test, improved game selection, the tutorial, and in-game directional guidance, shaping the experience so first-time players could understand the game's flow without any separate explanation.\n\nSelected for and exhibited at the Korea joint pavilion at SIGGRAPH Asia 2024 Tokyo. Later exhibited at the Hyundai Department Store Culture Hall as well, where hundreds of visitors experienced it directly. The project's planning, development, and user experience research process went on to become a co-authored research paper.",
        resultTakeaway:
          "The more unfamiliar the interaction or experience a product offers, the more important it was to design so a user's action and the system's response connect naturally — rather than simply adding more explanation — in creating the best possible experience.",
        prevLabel: '← PREVIOUS — SKOLEPLAN',
        nextLabel: 'NEXT — SEOUL CITY-FUNDED XR RESEARCH →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'outdoor-dome',
    order: 5,
    tier: 'short',
    medium: 'spatial',
    tags: ['공간 경험 설계', '전시 기획', '사용자 경험'],
    images: {
      thumb: '/images/work/outdoor-dome/thumb.jpg',
      hero: '/images/work/outdoor-dome/hero-1.jpg',
    },
    heroImages: [
      '/images/work/outdoor-dome/hero-1.jpg',
      '/images/work/outdoor-dome/hero-2.jpg',
      '/images/work/outdoor-dome/hero-3.jpg',
      '/images/work/outdoor-dome/hero-4.jpg',
      '/images/work/outdoor-dome/hero-5.jpg',
      '/images/work/outdoor-dome/hero-6.jpg',
    ],
    process: {
      kr: [
        {
          title: '소재 발견',
          desc: '활용되지 않던 투명 돔과 학생들이 여행 중 기록한 사진·글·목소리를 하나의 전시 경험으로 연결할 가능성을 탐색했다.',
        },
        {
          title: '경험 콘셉트 설정',
          desc: "'타인의 신발을 신고 걸어본다(Walking in Others' Shoes)'는 메타포를 바탕으로, 관람객이 다른 사람의 흔적을 따라 걷고 이야기에 머무는 경험을 구상했다.",
        },
        {
          title: '공간과 동선 설계',
          desc: '발자국을 따라 이동하는 관람 동선을 중심으로 사진, 텍스트, 오디오, 식물의 위치를 구성했다. 투명 돔의 자연광과 외부 풍경도 전시 경험의 일부로 활용했다.',
        },
        {
          title: '설치 및 운영',
          desc: '제한된 준비 기간 안에 전시물을 제작·설치하고 약 일주일간 현장을 운영했다. 관람객이 공간을 이동하고 기록 앞에서 머무는 방식을 관찰하며 실제 경험을 확인했다.',
        },
      ],
      en: [
        {
          title: 'DISCOVERY',
          desc: 'Connected an unused transparent dome at school with the photos, writing, and voice recordings students had collected from the people they met on a school trip, exploring how these different kinds of records could come together into a single experience.',
        },
        {
          title: 'CONCEPT',
          desc: "Defined the experience of understanding someone else's life through the metaphor of 'walking in others' shoes,' and built the experience around two tracks — visual and audio — so visitors could walk, see, and listen along the way.",
        },
        {
          title: 'SPACE DESIGN',
          desc: "Translated the concept into a physical space by designing the color palette, plant placement, exhibit layout, and footprint path — considering visitors' order of movement and sightlines alongside the surrounding natural environment.",
        },
        {
          title: 'ON-SITE BUILD & RUN',
          desc: 'Installed the exhibits inside the dome and completed the space within a short preparation window, then ran the exhibition for about a week, observing how visitors moved through the space and experienced the stories.',
        },
      ],
    },
    card: {
      kr: {
        imgLabel: '야외 돔 전시',
        title: 'Designing Empathy Through Space',
        desc: '덴마크에서 진행한 야외 돔 몰입 전시. 공간과 관람 흐름을 설계해 낯선 이야기에 자연스럽게 몰입하는 경험을 기획했습니다.',
      },
      en: {
        imgLabel: 'Outdoor Dome Exhibition',
        title: 'Designing Empathy Through Space',
        desc: 'An outdoor dome exhibition in Denmark. Directed a spatial experience that builds emotional immersion in an unfamiliar story through space alone.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: '야외 돔 전시',
        title: 'Designing Empathy Through Space',
        summary: '발자국을 따라 걸으며 낯선 사람의 이야기에 잠시 머무는 공간형 스토리텔링 전시',
        subtitle:
          '봉사활동을 하던 덴마크 학교에서 학생들이 여행에서 만난 사람들의 사진, 글, 목소리를 하나의 공간 경험으로 연결한 전시다. 관람객이 기록을 단순히 읽고 지나가는 대신, 발자국을 따라 천천히 이동하며 한 사람의 이야기에 머물 수 있도록 공간과 동선을 설계했다.',
        period: '2026.05',
        heroLabel: 'HERO IMAGE — OUTDOOR DOME EXHIBITION, DENMARK',
        principleLabel: '해결 방향',
        principle:
          '자연스럽게 걸음을 늦추고 이야기에 머물 수 있는 환경을 만드는 것을 중심 원칙으로 삼았다. 발자국을 따라 이어지는 동선으로 관람 속도를 조절하고, 주변 자연과 경쟁하지 않는 공간을 구성했으며, 사진·텍스트·목소리를 함께 사용해 머무는 시간이 인물에 대한 정서적 연결로 이어지도록 설계했다.',
        roleLabel: '나의 역할',
        roleTags: ['전시 기획', '공간 구성', '관람 동선', '시각 디자인', '현장 운영'],
        role:
          '전시 디렉터로 참여해 전체 콘셉트와 공간 구성, 관람 동선, 그래픽 및 인쇄물 디자인, 현장 설치를 총괄했다. 담당 교사와 사진·글·오디오 콘텐츠를 제작한 학생들과 협업하며 서로 다른 기록이 하나의 전시 경험으로 이어지도록 구성했다.',
        problemLabel: '문제 정의',
        problem:
          '지나치기 쉬운 공간에서, 어떻게 관람객의 걸음을 늦출 수 있을까?\n\n전시 공간은 사방이 투명한 야외 돔으로, 내부가 한눈에 보여 관람객이 내용을 충분히 경험하지 않고 지나가기 쉬웠다. 또한 시간과 날씨에 따라 빛과 주변 풍경이 계속 달라지는 환경이었다.\n\n따라서 공간을 과하게 채우기보다 관람객의 이동 속도를 자연스럽게 늦추고, 낯선 사람의 이야기에 시선과 시간을 머물게 하는 것을 핵심 과제로 삼았다.',
        solutionLabel: '공간 경험 설계',
        solution: [
          {
            title: '걸음을 늦추는 동선',
            desc: "바닥의 발자국을 따라 이동하도록 동선을 구성해 공간을 한눈에 훑고 지나가기보다 이야기를 따라 천천히 걷도록 유도했다. '타인의 신발을 신고 걸어본다'는 전시의 메타포를 관람객의 실제 움직임으로 연결했다.",
          },
          {
            title: '주변 환경을 받아들이는 공간',
            desc: '낮은 채도의 색을 중심으로 구성하고 식물을 배치해 투명 돔 밖의 자연 풍경과 전시가 자연스럽게 이어지도록 했다. 변화하는 빛과 날씨를 통제하기보다 전시 경험의 일부로 받아들였다.',
          },
          {
            title: '보고 듣는 이야기',
            desc: '인물의 사진과 글뿐 아니라 학생들이 직접 녹음한 목소리와 현장의 소리를 함께 구성했다. 한 사람의 이야기를 읽는 데서 끝나지 않고, 보고 들으며 조금 더 오래 머물 수 있도록 했다.',
          },
        ],
        processLabel: 'PROCESS',
        resultLabel: '결과 및 관찰',
        result:
          '약 일주일간 운영된 전시에 학생 약 130명을 비롯해 학부모와 지역 주민이 방문했다. 현장에서는 관람객들이 발자국을 따라 이동하다 특정 인물의 사진과 글 앞에서 걸음을 멈추거나, 오디오를 들으며 머무는 모습을 확인할 수 있었다.\n\n공간을 더 많이 채우는 것보다 사람이 어디에서 속도를 늦추고 무엇에 머물게 할지를 설계하는 것이 경험을 만드는 중요한 요소라는 점을 배웠다.',
        prevLabel: '← PREVIOUS — SEOUL CITY-FUNDED XR RESEARCH',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'Outdoor Dome Exhibition',
        title: 'Designing Empathy Through Space',
        summary: "A spatial storytelling exhibition where visitors follow a footprint path to linger in someone else's story.",
        subtitle:
          "At a Danish school where I was volunteering, this exhibition connected photos, writing, and voice recordings that students collected from people they met while traveling into a single spatial experience. Instead of simply reading through the records and moving on, the space and circulation were designed so visitors could follow a footprint path and slowly linger within one person's story.",
        period: 'May 2026',
        heroLabel: 'HERO IMAGE — OUTDOOR DOME EXHIBITION, DENMARK',
        principleLabel: 'SOLUTION DIRECTION',
        principle:
          "The central principle was creating an environment that naturally slowed visitors down and let them stay with each story. A footprint path paced how visitors moved through the space, the space itself was built not to compete with the surrounding nature, and photos, text, and voice were used together so that the time visitors lingered turned into an emotional connection with each person.",
        roleLabel: 'MY ROLE',
        roleTags: ['Exhibition Planning', 'Spatial Composition', 'Visitor Flow', 'Visual Design', 'On-site Operations'],
        role:
          "Took part as exhibition director, overseeing the overall concept, spatial composition, visitor flow, graphic and print design, and on-site installation. Worked with the supervising teacher and the students who produced the photo, writing, and audio content, shaping how these different records came together into a single exhibition experience.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "In a space that's easy to walk past, how could visitors' pace be slowed down?\n\nThe exhibition space was an outdoor dome, transparent on every side, so the whole interior was visible at a glance — making it easy for visitors to pass through without fully experiencing the content. It was also an environment where light and the surrounding scenery kept changing with time and weather.\n\nSo rather than filling the space more densely, the core challenge was set as naturally slowing visitors' pace and letting their eyes and time linger on a stranger's story.",
        solutionLabel: 'SPATIAL EXPERIENCE DESIGN',
        solution: [
          {
            title: 'A PATH THAT SLOWS THE WALK',
            desc: "Laid out the circulation so visitors moved along footprints on the floor, encouraging them to walk slowly through the stories rather than scanning the space at a glance. Turned the exhibition's metaphor of 'walking in someone else's shoes' into visitors' actual movement.",
          },
          {
            title: 'A SPACE THAT TAKES IN ITS SURROUNDINGS',
            desc: 'Built primarily around low-saturation colors and placed plants so the exhibition connected naturally with the natural landscape outside the transparent dome. Rather than controlling the shifting light and weather, treated them as part of the exhibition experience.',
          },
          {
            title: 'STORIES SEEN AND HEARD',
            desc: "Paired each person's photo and writing with voice recordings the students made themselves and the sounds of the site. Designed so visitors wouldn't just read a person's story, but could see and hear it, and stay with it a little longer.",
          },
        ],
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / OBSERVATION',
        result:
          "Over roughly a week, the exhibition welcomed around 130 students along with parents and local residents. On site, visitors could be seen following the footprint path and pausing in front of a particular person's photo and writing, or lingering as they listened to the audio.\n\nThe project confirmed that designing where people slow down and what they stay with matters more to the experience than simply filling the space with more content.",
        prevLabel: '← PREVIOUS — SEOUL CITY-FUNDED XR RESEARCH',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'talkable',
    order: 1,
    tier: 'full',
    medium: 'ai',
    tags: ['모바일 서비스 기획', '사용성 테스트', 'UX 설계', '개발 협업'],
    images: {
      thumb: '/images/work/talkable/thumb.jpg',
      hero: '/images/work/talkable/hero-1.jpg',
    },
    heroImages: ['/images/work/talkable/hero-1.jpg', '/images/work/talkable/hero-2.jpg'],
    process: {
      kr: [
        {
          title: 'DISCOVERY & RESEARCH',
          desc: '영어 학습 경험과 기존 서비스의 한계를 조사하고 사용자 리서치를 진행했다. 개인화 부족, 제한적인 피드백, 낮은 학습 동기를 주요 문제로 발견했다.',
        },
        {
          title: 'DEFINE',
          desc: '리서치 결과를 바탕으로 핵심 경험을 말하기 → 피드백 → 복습 → 다시 말하기로 정의했다. 실제 대화가 일회성 경험으로 끝나지 않고 다음 학습으로 이어지는 Learning Loop와 서비스 구조를 설계했다.',
        },
        {
          title: 'DESIGN & PROTOTYPE',
          desc: 'Conversation, Feedback, Review, Challenge의 흐름을 중심으로 User Flow와 주요 화면을 설계하고, 핵심 경험을 검증할 수 있는 프로토타입을 제작했다.',
        },
        {
          title: 'USER TEST & ITERATION',
          desc: '사용자 테스트와 전문가 피드백을 통해 기능의 발견성, 정보 구조, Navigation의 문제를 확인하고 반복적으로 개선했다.',
        },
      ],
      en: [
        {
          title: 'DISCOVERY & RESEARCH',
          desc: "Investigated existing English-learning experiences and the limitations of current services through user research. Defined lack of personalization, limited feedback, and low learning motivation as the core pain points, and built personas and user journeys around learners with different goals and behaviors.",
        },
        {
          title: 'DEFINE',
          desc: "Based on the research, defined Talkable's core experience as 'speak → feedback → review → speak again.' Rather than a simple AI conversation service, designed the service structure and information architecture around a Learning Loop that turns real conversations into personalized learning.",
        },
        {
          title: 'DESIGN & PROTOTYPE',
          desc: 'Designed the user flow and UI for core features — AI Conversation, Feedback, Review, Dashboard, and Challenge — and built a prototype. Beyond checking each feature individually, reviewed whether the full loop of checking feedback, reviewing, and returning to a new conversation connected naturally.',
        },
        {
          title: 'USER TEST & ITERATION',
          desc: "Ran user testing and expert review on the prototype. Focused on whether users could discover, understand, and naturally move on to the next action — surfacing problems and iterating on the design accordingly.",
        },
      ],
    },
    card: {
      kr: {
        imgLabel: 'AI 선생님과 함께하는 맞춤형 영어학습 앱',
        title: 'Talkable',
        desc: 'AI 회화 피드백을 활용한 모바일 학습 서비스의 사용자 흐름과 주요 기능을 설계하고, 개발 과정에서 반복적으로 프로토타입을 검증했습니다.',
      },
      en: {
        imgLabel: 'A Personalized English App With an AI Teacher',
        title: 'Talkable',
        desc: 'End-to-end UX design for an app teaching practical English through AI-driven speaking feedback.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: 'AI 선생님과 함께하는 맞춤형 영어학습 앱',
        title: 'Talkable',
        summary: 'AI와의 대화에서 발견한 약점을 다음 학습으로 연결하는 개인 맞춤형 영어 회화 학습 서비스',
        subtitle:
          'Talkable은 AI와 실시간 영어 대화를 나누고, 대화에서 발견된 개인의 약점을 피드백·복습·챌린지로 연결하는 영어 회화 학습 서비스다.\n\n단순히 AI와 대화하는 경험에 그치지 않고, 사용자의 실제 대화 데이터를 다음 학습 행동으로 전환하는 구조에 집중했다. 이를 위해 대화 → 피드백 → 복습 → 챌린지가 반복되는 학습 루프를 설계했다.',
        period: '2024.03 – 2024.11',
        heroLabel: 'HERO IMAGE — TALKABLE APP SCREENS',
        roleLabel: '나의 역할',
        role:
          '사용자 리서치와 문제 정의부터 서비스 구조 및 User Flow 설계, UI 디자인, 프로토타이핑, 사용자 테스트까지 전 과정을 담당했다.\n\n특히 AI 대화에서 생성된 피드백이 일회성 결과로 끝나지 않고 복습과 다음 학습 행동으로 이어지도록 기능과 정보 구조를 설계했다. 사용자 테스트와 전문가 피드백을 바탕으로 핵심 기능의 발견성, Navigation, 정보 구조를 반복 개선했다.',
        problemLabel: '문제 정의',
        problem:
          '대화 경험을 실제 학습 경험으로 어떻게 연결할 수 있을까? 영어 회화 서비스의 문제는 단순히 대화 기회가 부족한 것만이 아니었다. 혼자 연습할 때는 자신의 수준에 맞는 구체적인 피드백을 받기 어렵고, 대화를 마친 뒤 무엇을 다시 학습해야 하는지도 명확하지 않았다.\n\n사용자 리서치에서 개인화 부족, 제한적인 피드백, 낮은 학습 동기를 주요 문제로 정의했다. 이에 Talkable의 핵심 과제를 단순한 AI 대화 기능을 제공하는 것이 아니라, 실제 대화에서 발견된 약점을 사용자가 이해하고 복습·재도전까지 이어갈 수 있는 학습 구조를 만드는 것으로 설정했다.',
        solutionLabel: '해결 방향',
        solution: [
          {
            title: 'PERSONALIZATION',
            subtitle: '내 대화에서 시작되는 학습',
            desc: '사용자의 실제 대화를 분석해 발음·문법·유창성·어휘에서 개인별 약점을 발견하고, 이를 바탕으로 맞춤형 피드백을 제공하도록 설계했다. 정해진 커리큘럼이 아니라 사용자의 실제 대화가 다음 학습의 출발점이 되도록 했다.',
          },
          {
            title: 'FEEDBACK',
            subtitle: '피드백을 다음 학습으로 연결',
            desc: '대화에서 발견된 약점과 개선이 필요한 표현을 피드백으로 제공하고, 필요한 내용은 저장해 이후 복습할 수 있도록 연결했다. 피드백이 확인에서 끝나지 않고 실제 반복 학습으로 이어지도록 학습 흐름을 구성했다.',
          },
          {
            title: 'MOTIVATION',
            subtitle: '작은 성장을 계속 확인하도록',
            desc: '학습 현황과 Challenge를 통해 사용자가 자신의 반복 학습 과정과 성취를 확인할 수 있도록 설계했다. 작은 학습 목표를 제시해 복습 이후 다시 대화로 돌아갈 수 있는 동기를 만들고자 했다.',
          },
        ],
        loopLabel: '학습 흐름',
        loopIntro:
          '대화를 일회성 연습으로 끝내지 않고, 피드백 → 복습 → 재도전으로 이어지는 반복 학습 구조를 설계했다.',
        loopSteps: [
          {
            title: 'CONVERSATION',
            desc: 'AI와 실시간 영어 대화를 나누며 사용자의 실제 발화 데이터를 만든다.',
            image: '/images/work/talkable/loop-conversation.png',
            imageLabel: 'CONVERSATION — TALKABLE UI',
          },
          {
            title: 'FEEDBACK',
            desc: '대화 내용을 분석해 사용자의 약점과 개선이 필요한 표현을 구체적인 피드백으로 제공한다.',
            image: '/images/work/talkable/loop-feedback.png',
            imageLabel: 'FEEDBACK — TALKABLE UI',
          },
          {
            title: 'REVIEW',
            desc: '대화에서 발견된 단어와 표현, 피드백을 저장하고 다양한 방식으로 반복 학습한다.',
            image: '/images/work/talkable/loop-review.png',
            imageLabel: 'REVIEW — TALKABLE UI',
          },
          {
            title: 'CHALLENGE',
            desc: '작은 학습 목표를 수행하며 성취를 확인하고, 다시 새로운 대화로 이어간다.',
            image: '/images/work/talkable/loop-challenge.png',
            imageLabel: 'CHALLENGE — TALKABLE UI',
          },
        ],
        processLabel: 'PROCESS',
        findingsLabel: '사용자 테스트 및 개선',
        findings: [
          {
            title: '중요한 피드백 기능을 더 쉽게 찾도록',
            issue:
              '대화 후 피드백을 확인할 수 있었지만, 테스트 참가자의 15%가 피드백 버튼을 바로 발견하지 못했다. 핵심 학습 기능임에도 다른 UI 요소에 묻혀 시각적 우선순위가 낮다는 문제를 확인했다.',
            fix: '→ 피드백 아이콘의 형태와 크기를 조정해 시각적 위계를 높이고, 대화가 끝난 뒤 자연스럽게 피드백 확인으로 이어지도록 개선했다.',
            image: '/images/work/talkable/finding-1.png',
            imageLabel: '피드백 발견성 개선 — TALKABLE UI',
          },
          {
            title: '피드백 유형 간 이동을 더 쉽게',
            issue:
              '서로 다른 두 가지 피드백 유형을 제공했지만, 바텀시트 방식으로 구성되어 테스트 참가자의 30%가 다른 피드백의 존재와 이동 방법을 인지하지 못했다. 전문가 피드백에서도 기존 정보 구조가 학습 흐름을 끊을 수 있다는 문제를 확인했다.',
            fix: '→ 피드백 내용을 하나의 페이지 안에서 스크롤로 탐색하도록 재구성하고, 두 피드백 유형은 상단 탭으로 전환해 유형 간 이동을 직관적으로 개선했다.',
            image: '/images/work/talkable/finding-2.png',
            imageLabel: '피드백 구조 개편 — TALKABLE UI',
          },
          {
            title: '복습 기능을 독립적인 학습 영역으로',
            issue:
              '복습 기능이 기존 저장목록 내부에 포함되어 있어 테스트 참가자의 40%가 단어 시험과 복습 기능을 쉽게 발견하지 못했다.',
            fix: "→ 하단 네비게이션에 '리뷰'를 독립적인 학습 영역으로 분리하고, 저장한 단어와 피드백을 한곳에서 확인하도록 정보 구조를 재설계했다. 또한 다양한 복습 방식을 상단에 배치해 원하는 학습 방식에 바로 접근할 수 있도록 개선했다.",
            image: '/images/work/talkable/finding-3.png',
            imageLabel: '리뷰 독립 탭 — TALKABLE UI',
          },
          {
            title: '목표와 보상을 더 명확하게',
            issue:
              "테스트 참가자의 40%가 '챌린지'의 목적과 아이템 획득 방식을 바로 이해하지 못했다. 목표와 보상 사이의 관계가 충분히 설명되지 않아 다음 행동을 예측하기 어려웠다.",
            fix: "→ '챌린지'에 학습 목표와 보상 조건을 명확히 제시하고, 목표 달성 후에는 획득 결과가 즉시 전달되도록 피드백을 보완했다. 이를 통해 사용자가 현재 목표와 다음 행동을 쉽게 이해하도록 개선했다.",
            image: '/images/work/talkable/finding-4.png',
            imageLabel: 'Challenge 목표/보상 개선 — TALKABLE UI',
          },
        ],
        resultLabel: '결과 및 검증',
        result:
          '사용자 테스트와 전문가 피드백을 바탕으로 정보 구조를 개선하고, 대화 → 피드백 → 복습 → 챌린지로 이어지는 학습 루프를 실제 사용 흐름에 맞게 구체화했다.\n\n이를 통해 톡커블의 핵심 가설이었던 “AI와의 대화에서 얻은 피드백이 복습과 재도전으로 이어지며 학습 효과를 극대화할 수 있는가”를 프로토타입 수준에서 검증했다. 최종 프로토타입은 졸업전시에서 선보였으며, 프로젝트의 연구·개발 과정은 이후 논문과 학술 발표로 확장됐다.',
        prevLabel: '← PREVIOUS',
        nextLabel: 'NEXT — SKOLEPLAN →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'A Personalized English App With an AI Teacher',
        title: 'Talkable',
        summary: "A personalized English conversation app that turns weaknesses found in real conversation into the next lesson.",
        subtitle:
          "Talkable is an English speaking practice service where users have real-time conversations with AI, and personal weaknesses found in those conversations connect into feedback, review, and challenges.\n\nRather than stopping at the experience of simply talking with AI, the focus was on a structure that turns a user's actual conversation data into the next learning action. To do this, a repeating Learning Loop of Conversation → Feedback → Review → Challenge was designed.",
        period: 'Mar 2024 – Nov 2024',
        heroLabel: 'HERO IMAGE — TALKABLE APP SCREENS',
        roleLabel: 'MY ROLE',
        role:
          "Owned the full process — from user research and problem definition through service structure and user flow design, UI design, prototyping, and user testing.\n\nIn particular, designed the features and information structure so feedback generated from AI conversations didn't end as a one-off result, but carried through into review and the next learning action. Based on user testing and expert feedback, repeatedly improved the discoverability of core features, navigation, and information structure.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "How could the experience of having a conversation be connected to an actual learning experience? The problem with English conversation services wasn't simply a lack of chances to talk. Practicing alone made it hard to get specific feedback suited to one's own level, and it wasn't clear what to study again after a conversation ended.\n\nUser research identified a lack of personalization, limited feedback, and low learning motivation as the core problems. Talkable's core challenge was set not as simply offering an AI conversation feature, but as building a learning structure where users could understand the weaknesses found in real conversation and carry them through to review and another attempt.",
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'PERSONALIZATION',
            subtitle: 'Learning that starts from your own conversation',
            desc: "Instead of delivering fixed learning content one-way, made the user's own conversations the starting point for learning. Analyzed pronunciation, grammar, fluency, and vocabulary from conversations with AI, designing feedback tailored to each user's level and weaknesses.",
          },
          {
            title: 'FEEDBACK',
            subtitle: 'Connecting feedback to the next lesson',
            desc: "Provided weaknesses and expressions that needed improvement, found in conversation, as feedback, and saved what was needed so it could be reviewed later. Built the learning flow so feedback didn't stop at simply being checked, but carried through into actual repeated practice.",
          },
          {
            title: 'MOTIVATION',
            subtitle: 'So small growth keeps being visible',
            desc: "Designed learning status and Challenges so users could see their own repeated learning process and achievements. Presented small learning goals to create the motivation to return to another conversation after review.",
          },
        ],
        loopLabel: 'LEARNING LOOP',
        loopIntro:
          "Rather than letting a conversation end as a one-off practice, designed a repeating learning structure that flows from feedback to review to another attempt.",
        loopSteps: [
          {
            title: 'CONVERSATION',
            desc: "Has a real-time English conversation with AI, generating the user's own actual speech data.",
            image: '/images/work/talkable/loop-conversation.png',
            imageLabel: 'CONVERSATION — TALKABLE UI',
          },
          {
            title: 'FEEDBACK',
            desc: "Analyzes the conversation and provides specific feedback on the user's weaknesses and expressions that need improvement.",
            image: '/images/work/talkable/loop-feedback.png',
            imageLabel: 'FEEDBACK — TALKABLE UI',
          },
          {
            title: 'REVIEW',
            desc: 'Saves the words, expressions, and feedback found in conversation, and reviews them repeatedly in different formats.',
            image: '/images/work/talkable/loop-review.png',
            imageLabel: 'REVIEW — TALKABLE UI',
          },
          {
            title: 'CHALLENGE',
            desc: 'Completes small learning goals to confirm progress, then moves into a new conversation.',
            image: '/images/work/talkable/loop-challenge.png',
            imageLabel: 'CHALLENGE — TALKABLE UI',
          },
        ],
        processLabel: 'PROCESS',
        findingsLabel: 'FROM USER TESTING',
        findings: [
          {
            title: 'Making a key feedback feature easier to find',
            issue:
              "There was a way to check feedback after a conversation ended, but 15% of test participants didn't notice the button right away. Despite being a core learning feature, it was buried among other interface elements without enough visual priority.",
            fix: '→ Changed the feedback icon to a more intuitive form and enlarged it to strengthen visual hierarchy, so users would naturally recognize that feedback was the next thing to check after a conversation.',
            image: '/images/work/talkable/finding-1.png',
            imageLabel: 'FEEDBACK DISCOVERABILITY — TALKABLE UI',
          },
          {
            title: 'Making it easier to move between feedback types',
            issue:
              "The feedback screen had two distinct feedback types, but they were presented inside a bottom sheet that slid up from the bottom of the screen, and 30% of test participants didn't notice it or find how to move to the other type. Expert feedback also confirmed that the existing information structure and navigation could interrupt the learning flow.",
            fix: '→ Replaced the bottom sheet by placing all the feedback content directly in the page as a scrollable layout, and changed the two feedback types from an icon-based switch to a top tab structure, so users could move between them intuitively.',
            image: '/images/work/talkable/finding-2.png',
            imageLabel: 'FEEDBACK RESTRUCTURE — TALKABLE UI',
          },
          {
            title: 'Making review its own dedicated space',
            issue:
              'The feature for reviewing saved words lived inside the existing saved-items list, and 40% of test participants had trouble discovering the vocabulary quiz and review features.',
            fix: '→ Added Review as its own area in the bottom navigation and restructured the information architecture so saved words and feedback could be checked in one place. Also placed the different review formats up top so users could jump straight to the one they wanted.',
            image: '/images/work/talkable/finding-3.png',
            imageLabel: 'REVIEW TAB — TALKABLE UI',
          },
          {
            title: 'Making goals and rewards clearer',
            issue: "40% of test participants didn't immediately understand what a Challenge item meant or how to earn it.",
            fix: "→ Added explanations of the learning goal and the item to each Challenge, and improved the feedback shown after completing a goal so the reward was clearly communicated — helping users understand the purpose of each Challenge and what to do next.",
            image: '/images/work/talkable/finding-4.png',
            imageLabel: 'CHALLENGE GOALS & REWARDS — TALKABLE UI',
          },
        ],
        resultLabel: 'RESULT / VALIDATION',
        result:
          'Based on user testing and expert feedback, improved the information structure and shaped the Learning Loop — Conversation → Feedback → Review → Challenge — to fit how it would actually be used.\n\nThrough this, validated Talkable\'s core hypothesis — "can feedback from a conversation with AI lead to review and another attempt, maximizing the learning effect?" — at the prototype level. The final prototype was shown at the graduation exhibition, and the project\'s research and development process later extended into a paper and academic presentation.',
        prevLabel: '← PREVIOUS',
        nextLabel: 'NEXT — SKOLEPLAN →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'seoul-xr-research',
    order: 4,
    tier: 'full',
    medium: 'spatial',
    tags: ['사용자 리서치', '콘텐츠 기획', '산학협력'],
    images: {
      thumb: 'https://img.youtube.com/vi/IvBbAEDmrlk/hqdefault.jpg',
      hero: 'https://img.youtube.com/vi/IvBbAEDmrlk/hqdefault.jpg',
    },
    heroVideo: 'IvBbAEDmrlk',
    process: {
      kr: [
        {
          title: '조사',
          desc: '발달심리, 운동발달, 인지발달 관련 선행 연구와 이론을 조사하고 유아부터 고령자까지 연령별 신체·인지 특성을 정리했다.',
        },
        {
          title: '설계 기준 정의',
          desc: '각 연령대에서 중요하게 작용하는 움직임, 인지 능력, 참여 동기를 추출하고 이를 콘텐츠 설계 기준으로 정리했다.',
        },
        {
          title: '인터랙션으로 구체화',
          desc: '연구에서 얻은 특성을 밟기·탐색하기·던지기·피하기·걷고 기억하기와 같은 구체적인 신체 행동과 게임 방식으로 변환했다.',
        },
        {
          title: '구현 및 전시',
          desc: '다섯 가지 콘셉트를 5면 공간형 XR 플랫폼에서 실제로 플레이할 수 있는 콘텐츠로 구현하고, 실제 관람객이 체험할 수 있는 형태로 전시했다.',
        },
      ],
      en: [
        {
          title: 'RESEARCH',
          desc: 'Reviewed prior research in developmental psychology, motor development, and cognitive development, and organized the physical and cognitive traits of each age group from early childhood to older adults.',
        },
        {
          title: 'DEFINE',
          desc: 'Extracted the movement, cognitive ability, and motivation to participate that mattered most at each age, and defined these as the criteria for Experience Design.',
        },
        {
          title: 'TRANSLATE',
          desc: 'Translated the scholarly insights drawn from research into concrete physical actions and game mechanics — stepping, finding, throwing, dodging, walking and remembering.',
        },
        {
          title: 'PROTOTYPE & EXHIBITION',
          desc: 'Built each age-specific concept into content playable on the five-wall spatial XR platform, and exhibited it in a physical space where it could actually be experienced.',
        },
      ],
    },
    card: {
      kr: {
        imgLabel: '서울시 지원 XR 산학협력 프로젝트',
        title: '연령 맞춤형 XR 콘텐츠',
        desc: '유아부터 고령자까지 5개 연령대의 특성과 발달 이론을 조사하고, 사용자 특성에 맞춘 XR 콘텐츠를 설계한 산학협력 프로젝트입니다.',
      },
      en: {
        imgLabel: 'Seoul City-Funded XR Industry-Academia Project',
        title: 'Age-Tailored XR Content',
        desc: 'An industry-academia project designing age-tailored XR content for five age groups — from early childhood to older adults — grounded in developmental theory.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: '서울시 지원 XR 산학협력 프로젝트',
        title: '연령 맞춤형 XR 콘텐츠',
        summary: '연령별 신체·인지 발달 특성을 반영한 공간 몰입형 인터랙티브 XR 콘텐츠',
        subtitle:
          '서울시 지원 산학협력 R&D 과제로 진행한 헤드셋 프리 XR 콘텐츠 연구·개발 프로젝트다. 유아부터 고령자까지 다섯 연령대의 신체·인지 발달 특성을 조사하고, 이를 반영하여 서로 다른 움직임과 게임 방식으로 구현했다.\n\n연령별 신체·인지 발달 이론을 바탕으로 각 연령대의 주요 특성과 필요한 경험을 정리하고, 이를 실제 XR 공간에서 수행할 수 있는 움직임과 인터랙션으로 설계했다.',
        period: '2025.01 – 2025.07',
        heroLabel: 'HERO IMAGE — SEOUL CITY-FUNDED XR RESEARCH',
        roleLabel: '나의 역할',
        role:
          'PM과 UX 디자이너로 참여해 연령별 발달 특성을 조사하고, 연구에서 얻은 인사이트를 게임 콘셉트와 신체 인터랙션으로 구체화하는 과정을 담당했다. 개발자·디자이너와 각 콘텐츠의 핵심 행동과 플레이 방식을 조율하고, 실제 XR 콘텐츠 제작과 전시까지 참여했다. 연구 과정과 결과는 논문으로 정리해 국내·외 학술 발표로 확장했다.',
        roleTags: ['리서치', '경험 기획', '인터랙션 설계', '콘텐츠 기획', '개발 협업', '연구 및 검증'],
        problemLabel: '문제 정의',
        problem:
          '같은 게임에 난이도만 바꾸는 것으로 ‘연령 맞춤’이라 할 수 있을까?\n\n같은 인터랙션이 모든 연령대에 동일한 경험을 제공하지는 않는다. 연령에 따라 신체 능력, 인지 방식, 반응 속도, 참여 동기가 달라지기 때문이다.\n\n따라서 이 프로젝트에서는 연령별 난이도를 조절하는 것을 넘어, 각 연령대의 발달 특성을 어떤 행동과 게임 방식으로 연결할 것인지를 핵심 과제로 정의했다.',
        researchLabel: '리서치에서 설계로',
        researchIntro:
          '연령별 발달 특성을 정리한 뒤, 이를 실제 XR 공간에서 수행할 수 있는 행동과 게임 방식으로 변환했다.',
        ageCards: [
          {
            ageGroup: '유아',
            tagline: '움직이며 발견하기',
            insight: '감각·운동 경험과 대근육 움직임을 통해 신체 조절 능력을 익혀가는 시기다.',
            translation: '복잡한 규칙이나 판단보다 몸을 직접 움직이고 그 결과를 즉시 확인하는 경험에 집중했다.',
            interaction: '→ 바닥의 물고기를 밟으며 수집하기',
            image: '/images/work/seoul-xr-research/age-card-1.jpg',
            imageLabel: '수족관 물고기 잡기 — SEOUL XR RESEARCH',
          },
          {
            ageGroup: '아동',
            tagline: '찾고 해결하기',
            insight: '판단력과 공간 인지가 발달하며, 과제를 탐색하고 해결하는 과정에서 성취감을 경험하는 시기다.',
            translation: '공간을 직접 탐색하고 목표를 발견한 뒤 해결하는 흐름으로 연결했다.',
            interaction: '→ 공간 속 목표물을 찾아 해결하기',
            image: '/images/work/seoul-xr-research/age-card-2.jpg',
            imageLabel: '벽면 쥐 잡기 — SEOUL XR RESEARCH',
          },
          {
            ageGroup: '청소년',
            tagline: '판단하고 반응하기',
            insight: '정확성·전략성·민첩성과 함께 자기조절과 전략적 판단 능력이 발달하는 시기다.',
            translation: '단순 반응보다 목표와 타이밍을 판단해야 하는 경쟁적 플레이로 구성했다.',
            interaction: '→ 정확한 위치와 타이밍에 피구공 던지기',
            image: '/images/work/seoul-xr-research/age-card-3.jpg',
            imageLabel: '피구 게임 — SEOUL XR RESEARCH',
          },
          {
            ageGroup: '성인',
            tagline: '움직이며 몰입하기',
            insight: '신체 활동을 통한 스트레스 해소와 몰입 경험에 주목했다.',
            translation: '복잡한 과제 설명보다 온몸을 빠르게 움직이며 즉각적으로 몰입할 수 있는 경험을 설계했다.',
            interaction: '→ 날아오는 화살을 온몸으로 피하기',
            image: '/images/work/seoul-xr-research/age-card-4.jpg',
            imageLabel: '화살 피하기 — SEOUL XR RESEARCH',
          },
          {
            ageGroup: '고령자',
            tagline: '걷고 기억하기',
            insight:
              '인지 자극과 신체 활동을 함께 수행하며, 반복적인 자극을 통해 기억과 인지 기능을 사용하는 경험에 주목했다.',
            translation: '빠른 반응보다 걷기와 기억, 간단한 인지 과제를 결합해 부담 없이 참여하도록 구성했다.',
            interaction: '→ 공간을 걷고 기억하며 농작물 수확하기',
            image: '/images/work/seoul-xr-research/age-card-5.jpg',
            imageLabel: '농장 걷기와 수확 — SEOUL XR RESEARCH',
          },
        ],
        researchBasisLabel: '연구 근거',
        researchBasis:
          '연령별 경험 설계의 근거를 마련하기 위해 운동발달, 인지발달, 심리사회적 발달 관련 선행 연구를 조사했다. Gallahue의 운동발달 이론, Piaget의 인지발달 이론, Erikson의 심리사회적 발달 이론 등을 참고하되, 이론 자체를 정리하는 데 그치지 않고 각 특성이 실제 사용자의 행동과 인터랙션에 어떻게 반영될 수 있는지를 중심으로 분석했다.',
        processLabel: 'PROCESS',
        resultLabel: '결과 및 검증',
        result:
          '연구에서 도출한 연령별 설계 원칙을 다섯 가지 XR 콘텐츠로 구현해, 연구 결과가 문서나 프로토타입에 머물지 않고 실제 공간에서 경험할 수 있는 형태로 연결했다.\n\n완성된 콘텐츠는 서울시 지원 산학협력 연구 결과물로 제작됐으며, 이후 현대백화점 문화홀에서 실제 관람객을 대상으로 전시됐다. 연구 과정과 결과는 논문으로 정리해 국내·외 학술 발표로 확장했다.',
        resultTakeaway:
          '사용자 특성을 이해한다는 것은 화면의 크기나 난이도를 바꾸는 것이 아니라, 그 사람이 자연스럽게 할 수 있는 행동부터 다시 설계하는 일이었다.',
        prevLabel: '← PREVIOUS — MIDNIGHT CARNIVAL',
        nextLabel: 'NEXT — DESIGNING EMPATHY THROUGH SPACE →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'Seoul City-Funded XR Industry-Academia Project',
        title: 'Age-Tailored XR Content',
        summary: "A spatially immersive, interactive XR experience shaped by each age group's physical and cognitive development traits.",
        subtitle:
          "A headset-free XR content research and development project carried out as a Seoul City-funded industry-academia R&D initiative. Investigated the physical and cognitive development traits of five age groups, from early childhood to older adults, and implemented them as distinct movements and game mechanics.\n\nBased on theories of physical and cognitive development by age, organized the key traits and needed experience for each age group, and designed them into movements and interactions that could actually be performed in an XR space.",
        period: 'Jan 2025 – Jul 2025',
        heroLabel: 'HERO IMAGE — SEOUL CITY-FUNDED XR RESEARCH',
        roleLabel: 'MY ROLE',
        roleTags: ['Research', 'Experience Planning', 'Interaction Design', 'Content Planning', 'Development Collaboration', 'Research & Validation'],
        role:
          "Joined as PM and UX Designer, researching developmental traits by age group and turning the resulting insights into game concepts and physical interactions. Coordinated with developers and designers on the core action and play style for each piece of content, and took part in producing the actual XR content and running the exhibition. Wrote up the research process and findings into a paper that extended into domestic and international academic presentations.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "Can simply changing a game's difficulty really be called 'tailored to age'? The same interaction doesn't deliver the same experience to users of every age, because physical ability, cognitive style, reaction speed, and motivation to participate all shift with age.\n\nSo this project defined its core challenge as going beyond adjusting difficulty by age — deciding what movement and game mechanic each age group's development traits should be translated into.",
        researchLabel: 'RESEARCH → DESIGN TRANSLATION',
        researchIntro:
          'After organizing each age group\'s developmental traits, translated them into behaviors and game mechanics that could actually be performed in an XR space.',
        ageCards: [
          {
            ageGroup: 'EARLY YEARS',
            tagline: 'Move & Discover',
            insight: 'A stage where sensory-motor experience and gross motor movement develop the ability to control the body.',
            translation: 'Focused on activities built around moving the body directly and experiencing immediate results, rather than complex rules.',
            interaction: '→ Step on and collect the fish on the floor',
            image: '/images/work/seoul-xr-research/age-card-1.jpg',
            imageLabel: 'CATCH THE FISH — SEOUL XR RESEARCH',
          },
          {
            ageGroup: 'SCHOOL AGE',
            tagline: 'Find & Solve',
            insight: 'A stage where judgment and spatial awareness develop, and a sense of achievement comes from exploring and solving tasks.',
            translation: 'Connected this to an experience of directly exploring the space, finding a goal, and solving it.',
            interaction: '→ Find and solve the target in the space',
            image: '/images/work/seoul-xr-research/age-card-2.jpg',
            imageLabel: 'CATCH THE MOUSE — SEOUL XR RESEARCH',
          },
          {
            ageGroup: 'TEEN',
            tagline: 'Aim & React',
            insight: 'A stage where accuracy, strategy, and agility develop alongside self-regulation and strategic judgment.',
            translation: 'Built as competitive play that requires judging a target and deciding timing, rather than simple reaction.',
            interaction: '→ Throw the dodgeball at a precise point and timing',
            image: '/images/work/seoul-xr-research/age-card-3.jpg',
            imageLabel: 'DODGEBALL — SEOUL XR RESEARCH',
          },
          {
            ageGroup: 'ADULT',
            tagline: 'Move & Release',
            insight: 'Focused on stress relief and immersive experience through physical activity.',
            translation: 'Designed an experience that lets the whole body move quickly for immediate immersion, rather than instructions or complex tasks.',
            interaction: '→ Dodge incoming arrows with the whole body',
            image: '/images/work/seoul-xr-research/age-card-4.jpg',
            imageLabel: 'DODGE THE ARROWS — SEOUL XR RESEARCH',
          },
          {
            ageGroup: 'OLDER ADULT',
            tagline: 'Walk & Remember',
            insight:
              'Focused on combining cognitive stimulation with physical activity, maintaining memory and cognitive function through repeated stimulation.',
            translation: 'Built around walking, memory, and simple cognitive tasks, rather than demanding fast reactions.',
            interaction: '→ Walk the space, remember, and harvest the crops',
            image: '/images/work/seoul-xr-research/age-card-5.jpg',
            imageLabel: 'WALK & HARVEST — SEOUL XR RESEARCH',
          },
        ],
        researchBasisLabel: 'RESEARCH BASIS',
        researchBasis:
          "To ground the age-specific experience design, reviewed prior research in motor development, cognitive development, and psychosocial development. Drew on Gallahue's motor development theory, Piaget's theory of cognitive development, and Erikson's theory of psychosocial development, but rather than simply presenting the theories themselves, focused the analysis on how each trait could be reflected in actual user behavior and interaction.",
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / VALIDATION',
        result:
          "The age-specific design principles drawn from the research were built into five XR pieces of content, connecting the research so it didn't stay in documents or a prototype, but could be experienced in an actual space.\n\nThe finished content was produced as the output of a Seoul City-funded industry-academia research collaboration, and was later exhibited to the public at the Hyundai Department Store Culture Hall. The research process and findings were written up into a paper and extended into domestic and international academic presentations.",
        resultTakeaway:
          "Understanding a user's traits wasn't about changing the size of the screen or the difficulty level — it meant redesigning starting from the actions a person could do naturally.",
        prevLabel: '← PREVIOUS — MIDNIGHT CARNIVAL',
        nextLabel: 'NEXT — DESIGNING EMPATHY THROUGH SPACE →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'skoleplan',
    order: 2,
    tier: 'full',
    medium: 'app',
    tags: ['사용자 조사', '정보 구조', '서비스 개선', '사용성 검증'],
    images: {
      thumb: '/images/work/skoleplan/thumb.jpg',
      hero: '/images/work/skoleplan/hero-1.jpg',
    },
    heroImages: ['/images/work/skoleplan/hero-1.jpg', '/images/work/skoleplan/hero-2.jpg'],
    process: {
      kr: [
        {
          title: '사용자 조사',
          desc: '학교 현장에서 교직원의 실제 업무를 관찰하고 인터뷰와 설문을 진행했다. 어떤 정보를 반복적으로 확인하는지, 기존 시스템을 사용할 때 어디에서 탐색이 길어지는지를 확인했다.',
        },
        {
          title: '문제 정의',
          desc: '조사 결과를 바탕으로 깊은 정보 탐색, 낮은 정보 가시성, 역할별 업무와 화면 구조의 불일치를 주요 문제로 정의했다. 또한 교사·주방·기숙사 담당자별 핵심 업무와 정보 우선순위를 정리했다.',
        },
        {
          title: '설계 및 프로토타입',
          desc: '역할별 우선순위를 기준으로 홈 화면의 정보 구성과 탐색 구조를 다시 설계했다. 가장 자주 확인하는 정보는 홈에서 바로 확인하고, 필요한 업무로 빠르게 이동할 수 있도록 주요 사용자 흐름을 구성했다.',
        },
        {
          title: '사용자 검증',
          desc: '역할별 프로토타입을 실제 교직원에게 공유하고, 화면에 제시된 정보가 실제 업무 흐름과 맞는지 확인했다. 피드백을 바탕으로 정보의 위치와 표현 방식을 조정했다.',
        },
      ],
      en: [
        {
          title: 'OBSERVE',
          desc: "Observed how staff actually used the system and carried out their work in a real Efterskole setting, and investigated the existing system's problems through interviews and surveys. This surfaced deep navigation, low information visibility, and workflow misalignment as the core issues.",
        },
        {
          title: 'PRIORITIZE',
          desc: "Compared the workflows of teachers, kitchen staff, and dormitory staff to define the information each role checked most often and the priority of their core tasks. This became the basis for a UX strategy where information priority shifts by role, rather than showing everyone the same content.",
        },
        {
          title: 'REDESIGN',
          desc: "Redesigned the home dashboard and navigation around each role's information priorities. Reduced the navigation steps needed to reach core tasks, and improved the information hierarchy so each user sees what matters most immediately after logging in.",
        },
      ],
    },
    card: {
      kr: {
        imgLabel: '덴마크 학교 교직원 업무 시스템 개선',
        title: 'SkolePlan 리디자인',
        desc: '실제 교직원의 업무와 사용상의 불편을 조사하고, 역할별 정보 우선순위를 기반으로 내부 업무 시스템의 구조와 화면을 개선했습니다.',
      },
      en: {
        imgLabel: 'Danish School Staff Application Redesign',
        title: 'SkolePlan (DK) Redesign',
        desc: 'A UX project researching real staff workflows and redesigning an internal school system around role-based information priorities.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: '덴마크 학교 교직원 업무 시스템 개선',
        title: 'SkolePlan 리디자인',
        summary: '역할마다 다른 정보 우선순위를 반영해, 핵심 업무에 더 빠르게 접근하도록 재설계한 학교 업무 시스템',
        subtitle:
          'SkolePlan은 덴마크 Efterskole 교직원이 출석, 일정, 학생 현황 등 일상적인 학교 업무에 사용하는 내부 시스템이다.\n\n현장 관찰과 인터뷰·설문을 통해 교사, 주방 담당자, 기숙사 담당자는 자주 확인하는 정보와 업무 흐름은 서로 다르다는 점을 발견했다. 이를 바탕으로 역할별 정보 우선순위를 다시 정의하고 홈 화면과 탐색 구조를 재설계했다.',
        period: '2026.03',
        heroLabel: 'HERO IMAGE — SKOLEPLAN',
        roleLabel: '나의 역할',
        roleTags: ['사용자 조사', '문제 정의', '정보 구조 설계', '사용자 흐름', '화면 설계', '프로토타입 검증'],
        role:
          '현장 관찰과 인터뷰·설문을 통해 교직원의 실제 업무 흐름과 반복 업무를 파악하고, 역할별로 가장 먼저 필요한 정보의 우선순위를 정의했다. 이를 바탕으로 정보 구조와 사용자 흐름, 주요 화면을 재설계하고 프로토타입을 제작해 실제 교직원에게 방향성을 검증했다.',
        problemLabel: '문제 정의',
        problem:
          '기존 SkolePlan은 모든 교직원에게 동일한 정보 구조를 제공하고 있었다. 그 결과 사용자는 자주 확인하는 정보에 도달하기 위해 여러 화면을 거쳐야 했고, 업무 중 바로 확인해야 하는 정보도 한눈에 파악하기 어려웠다.\n\n현장 조사 결과, 문제는 기능의 부족보다 각 역할의 업무 우선순위가 화면 구조에 반영되지 않은 것에 가까웠다. 교사, 주방 담당자, 기숙사 담당자는 반복적으로 수행하는 업무와 가장 먼저 확인해야 하는 정보가 서로 달랐다.',
        researchFindings: {
          commonTitle: '공통 업무',
          commonItems: ['출석 확인', '당일 일정', '학생 현황'],
          headline: '같은 시스템을 사용하지만,\n역할마다 **업무의 우선순위**는 달랐다.',
          roleTitle: '역할 별 필요로하는 핵심 정보',
          roleItems: [
            { role: '교사', info: '오늘의 일정 · 학생 출석' },
            { role: '주방 담당자', info: '식사 인원 · 식이 요구사항' },
            { role: '기숙사 담당자', info: '학생 출결 · 현재 상태' },
          ],
        },
        principleLabel: '해결 방향',
        principle:
          '교사·주방·기숙사 담당자별 핵심 업무와 정보 우선순위를 정리하고, 이를 기준으로 홈 화면의 정보 구성과 탐색 구조를 다시 설계했다.',
        rolesLabel: '역할별 화면 설계',
        rolesIntro:
          '리서치에서 발견한 역할별 업무 차이를 바탕으로, 각 역할이 먼저 확인해야 하는 정보를 중심으로 UX를 재설계했다.',
        roleCards: [
          {
            role: '교사',
            focus: '일정과 출석을 한눈에',
            desc: '교사가 가장 자주 확인하는 것은 오늘의 수업 일정과 학생 출석 현황이었다. 여러 메뉴를 탐색하지 않고도 홈 화면에서 당일 일정과 출석 상태를 확인하고, 필요한 업무로 바로 이동할 수 있도록 구성했다.',
            image: '/images/work/skoleplan/role-card-1.png',
            imageLabel: '교사 홈 화면 — SKOLEPLAN UI',
          },
          {
            role: '주방 담당자',
            focus: '식사 준비 정보를 한눈에',
            desc: '주방 담당자에게는 개별 학생의 상세 정보보다 당일 식사 인원과 식이 요구사항을 빠르게 파악하는 것이 중요했다. 전체 식사 인원과 Vegan·Vegetarian·Gluten-free·Halal 등의 정보를 홈에서 바로 확인할 수 있도록 구성했다.',
            image: '/images/work/skoleplan/role-card-2.png',
            imageLabel: '주방 담당자 홈 화면 — SKOLEPLAN UI',
          },
          {
            role: '기숙사 담당자',
            focus: '학생 현황을 빠르게 확인',
            desc: '기숙사 담당자는 학생의 출결과 현재 상태를 반복적으로 확인해야 했다. 등교 여부와 외부 활동 등 필요한 학생 현황을 홈에서 바로 파악할 수 있도록 해 반복적인 정보 탐색을 줄였다.',
            image: '/images/work/skoleplan/role-card-3.png',
            imageLabel: '기숙사 담당자 홈 화면 — SKOLEPLAN UI',
          },
        ],
        processLabel: 'PROCESS',
        resultLabel: '결과 및 검증',
        result:
          '역할별 Dashboard 프로토타입을 교직원에게 공유해 실제 업무 흐름과 정보 구성의 적합성을 확인했다. 교사는 일정과 출석, 주방 담당자는 식사 인원과 식이 요구사항, 기숙사 담당자는 학생 출결과 현황을 한 화면에서 확인할 수 있다는 점에서 긍정적인 피드백을 얻었다.\n\n이를 통해 기능을 늘리는 것보다 사용자의 업무 맥락에 맞춰 정보의 우선순위를 재구성하는 것이 업무 효율과 정보 접근성을 높이는 데 중요하다는 점을 확인했다.',
        resultHeadline: '역할에 맞는 정보 구조로,\n핵심 업무에 더 빠르게 접근할 수 있도록 했다.',
        resultHighlights: [],
        resultVerification:
          '역할별 정보 우선순위를 반영해 홈 화면과 탐색 구조를 재구성하고, 주요 업무에 필요한 정보를 여러 메뉴를 거치지 않고 바로 확인할 수 있도록 했다.\n\n완성한 역할별 프로토타입을 실제 교직원에게 공유해 정보 구성과 업무 흐름의 적합성을 확인했다. 특히 각 역할에 필요한 정보를 한 화면에서 바로 확인할 수 있다는 점에서 긍정적인 피드백을 얻었다.',
        resultTakeaway:
          '이번 리디자인에서 가장 중요한 변화는 기능을 더하는 것이 아니라, 실제 업무 흐름에 맞춰 정보의 우선순위를 다시 정한 것이었다.',
        prevLabel: '← PREVIOUS — TALKABLE',
        nextLabel: 'NEXT — MIDNIGHT CARNIVAL →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'Danish School Staff Application Redesign',
        title: 'SkolePlan (DK) Redesign',
        summary: "A school staff system redesigned so each role's core tasks surface first, based on the different information priorities uncovered by role.",
        subtitle:
          "SkolePlan is the internal system staff at a Danish Efterskole use for everyday school operations — attendance, scheduling, and student status.\n\nThrough on-site observation and interviews and surveys, found that teachers, kitchen staff, and dormitory staff each check different information and follow different workflows. Based on this, redefined the information priorities for each role and redesigned the home screen and navigation structure.",
        period: 'March 2026',
        heroLabel: 'HERO IMAGE — SKOLEPLAN',
        roleLabel: 'MY ROLE',
        roleTags: ['User Research', 'Problem Definition', 'Information Architecture', 'User Flow', 'UI Design', 'Prototype Validation'],
        role:
          "Through on-site observation and interviews and surveys, identified staff's actual workflows and recurring tasks, and defined the information priorities each role needed first. Based on this, redesigned the information architecture, user flow, and core screens, then built a prototype and validated the direction with actual staff.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "The existing SkolePlan gave every staff member the same information structure. As a result, users had to pass through multiple screens to reach information they checked often, and information they needed to check immediately during work wasn't easy to grasp at a glance.\n\nOn-site research showed the problem was less a lack of features than the fact that each role's task priorities weren't reflected in the screen structure. Teachers, kitchen staff, and dormitory staff each had different recurring tasks and different information they needed to check first.",
        researchFindings: {
          commonTitle: 'Shared Tasks',
          commonItems: ['Attendance Check', "Today's Schedule", 'Student Status'],
          headline: "Everyone used the same system,\nbut each role's **task priorities** differed.",
          roleTitle: 'Core Information Each Role Needs',
          roleItems: [
            { role: 'Teacher', info: "Today's Schedule · Student Attendance" },
            { role: 'Kitchen Staff', info: 'Meal Count · Dietary Requirements' },
            { role: 'Dormitory Staff', info: 'Student Attendance · Current Status' },
          ],
        },
        principleLabel: 'SOLUTION DIRECTION',
        principle:
          "Compared the workflows of teachers, kitchen staff, and dormitory staff to define the information each role needed most and the priority of their core tasks, then redesigned the home screen's information layout and navigation around those priorities.",
        rolesLabel: 'ROLE-BASED SCREEN DESIGN',
        rolesIntro:
          "Based on the role-specific workflow differences uncovered in research, redesigned the UX around the information each role needed to check first.",
        roleCards: [
          {
            role: 'TEACHER',
            focus: 'Schedule & Attendance',
            desc: "For teachers, what mattered most was quickly checking and handling today's schedule and student attendance. Instead of navigating multiple pages, the home screen was built to show the day's classes and attendance status immediately, with a direct path to the task at hand.",
            image: '/images/work/skoleplan/role-card-1.png',
            imageLabel: 'TEACHER HOME — SKOLEPLAN UI',
          },
          {
            role: 'KITCHEN STAFF',
            focus: 'Meal Planning at a Glance',
            desc: 'For kitchen staff, quickly grasping meal counts and dietary requirements mattered more than individual student detail. The home screen was built to show the total meal count and dietary information — vegan, vegetarian, gluten-free, halal — at a glance.',
            image: '/images/work/skoleplan/role-card-2.png',
            imageLabel: 'KITCHEN STAFF HOME — SKOLEPLAN UI',
          },
          {
            role: 'DORMITORY STAFF',
            focus: 'Student Status & Presence',
            desc: "For dormitory staff, quickly grasping students' attendance and current status mattered most. Presence, absence, and off-site activity could now be checked directly from the home screen, cutting down on repetitive searching.",
            image: '/images/work/skoleplan/role-card-3.png',
            imageLabel: 'DORMITORY STAFF HOME — SKOLEPLAN UI',
          },
        ],
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / VALIDATION',
        result:
          "Shared role-based dashboard prototypes with staff to check how well the workflow and information layout matched their actual work. Feedback was positive: teachers could check schedule and attendance, kitchen staff meal counts and dietary needs, and dormitory staff student attendance and status, all on a single screen.\n\nThis confirmed that restructuring information priorities around users' actual work context — rather than simply adding features — was what mattered most for improving task efficiency and information access.",
        resultHeadline: 'With an information structure built for each role,\ncore tasks became faster to reach.',
        resultHighlights: [],
        resultVerification:
          "Restructured the home screen and navigation to reflect each role's information priorities, so the information needed for core tasks could be checked directly without going through multiple menus.\n\nShared the finished role-based prototypes with actual staff to check how well the information layout matched their workflow, and received positive feedback — especially on being able to check each role's needed information directly on a single screen.",
        resultTakeaway:
          "The most important change in this redesign wasn't adding features — it was reprioritizing information to match actual workflows.",
        prevLabel: '← PREVIOUS — TALKABLE',
        nextLabel: 'NEXT — MIDNIGHT CARNIVAL →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
];

export const fullProjects = projects.filter((p) => p.tier === 'full').sort((a, b) => a.order - b.order);
export const shortProjects = projects.filter((p) => p.tier === 'short').sort((a, b) => a.order - b.order);
export const projectsByOrder = [...projects].sort((a, b) => a.order - b.order);

/** Every project with its own /work/:slug case study page, regardless of
 * card tier/size — powers page lookup and the prev/next footer nav so a
 * compact-card project (like Designing Empathy Through Space) still slots into the
 * click-through chain between full-card case studies. Only `caseStudy`
 * is required — `process` is no longer rendered on the page (kept in
 * the data only for reference), so a project doesn't need it to have a
 * case study page. */
export const caseStudyProjects = projectsByOrder.filter((p) => p.caseStudy);

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return caseStudyProjects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = caseStudyProjects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? caseStudyProjects[idx - 1] : undefined,
    next: idx >= 0 && idx < caseStudyProjects.length - 1 ? caseStudyProjects[idx + 1] : undefined,
  };
}
