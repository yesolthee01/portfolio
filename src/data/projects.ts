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
        prevLabel: '← PREVIOUS',
        nextLabel: 'NEXT — DESIGNING EMPATHY THROUGH SPACE →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'XR Gaming Without a Headset',
        title: 'Midnight Carnival',
        summary: 'A five-wall spatial XR co-op game played entirely through body movement — no wearables required.',
        subtitle:
          "'Midnight Carnival' is an experiential e-sports piece built on a five-wall spatial XR platform. It connects physical movement with digital interaction, letting multiple users play together with their whole bodies in a cooperative experience.",
        period: 'Aug 2024 – Dec 2024',
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
            title: 'FEEDBACK',
            subtitle: 'Interaction understood through response, not instruction',
            desc: "With no controller in hand, designed visual and sound feedback so users could immediately connect their movement to the system's response. User testing surfaced moments where players missed cues to change direction or look elsewhere, so guiding UI and feedback were added to make the game's flow more intuitive.",
          },
          {
            title: 'INTUITION',
            subtitle: 'An intuitive way to play',
            desc: 'Built play around actions everyone already knows — jumping, stomping the floor, touching a wall — so anyone can understand it and start playing right away. Each of the five maps calls for a different action, keeping the experience varied without ever feeling repetitive.',
          },
          {
            title: 'IMMERSION',
            subtitle: 'Making the whole space part of the experience',
            desc: "Connected the walls and floor into a single play space where visuals, sound, and body movement respond together. Designed the experience so users feel like they've stepped inside the space, not just watching a screen.",
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
              "The initial selection screen showed only game names as text, making it hard for first-time users to intuitively grasp what each game was about. With a wide range of user ages in mind, relying less on text also mattered.",
            fix: '→ Added a symbolic graphic for each game, reducing dependence on language or prior knowledge and making selection more intuitive.',
            image: '/images/work/midnight-carnival/finding-1.jpg',
            imageLabel: 'GAME SELECTION ICONS — MIDNIGHT CARNIVAL UI',
          },
          {
            title: 'How to play was hard to grasp from text alone',
            issue:
              "In a spatial interaction most users were encountering for the first time, short text alone made it hard to quickly understand where to look and how to move.",
            fix: '→ Paired the tutorial with graphics visualizing the actual gameplay screen and required actions, so players could understand how to play more quickly.',
            image: '/images/work/midnight-carnival/finding-2.jpg',
            imageLabel: 'TUTORIAL VISUALIZATION — MIDNIGHT CARNIVAL UI',
          },
          {
            title: 'Missed direction changes during play',
            issue:
              "Some users didn't notice when the rotating floor's direction changed and kept moving in the old direction.",
            fix: '→ Added directional guiding UI on the walls so players could immediately register the next move.',
            image: '/images/work/midnight-carnival/finding-3.jpg',
            imageLabel: 'DIRECTIONAL GUIDE — MIDNIGHT CARNIVAL',
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
    order: 4,
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
        prevLabel: '← PREVIOUS — MIDNIGHT CARNIVAL',
        nextLabel: 'NEXT — TALKABLE →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'Outdoor Dome Exhibition',
        title: 'Designing Empathy Through Space',
        summary: "A spatial storytelling exhibition where visitors follow a footprint path to linger in someone else's story.",
        subtitle:
          "Bringing together photos, writing, and voice recordings that students collected from people they met while traveling, the space and circulation were designed so visitors could do more than simply view a stranger's story — they could pause and stay within that person's perspective for a moment.",
        period: 'May 2026',
        heroLabel: 'HERO IMAGE — OUTDOOR DOME EXHIBITION, DENMARK',
        principleLabel: 'DESIGN PRINCIPLE',
        principle:
          "The central principle was creating an environment that naturally slowed visitors down and let them stay with each story. A footprint path paced how visitors moved through the space, the space itself was built not to compete with the surrounding nature, and photos, text, and voice were used together so that the time visitors lingered turned into an emotional connection with each person.",
        roleLabel: 'MY ROLE',
        role:
          'Took part as exhibition director overseeing space and visuals, designing everything from the exhibition concept and spatial layout to poster/print design and on-site installation. Completed the exhibition in collaboration with a supervising teacher and the students responsible for photography and audio recording.',
        problemLabel: 'THE CHALLENGE',
        problem:
          'The fully open, transparent dome made it easy for visitors to scan the exhibition at a glance and walk past. Being outdoors also meant light and weather kept changing. The core challenge was slowing visitors down and helping them stay emotionally present with strangers’ stories, without competing against the surrounding natural environment.',
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'PACING',
            subtitle: 'A path that slows the walk',
            desc: "A path marked by footprints on the ground guided visitors to move slowly through the stories instead of scanning the exhibition at a glance — turning the exhibition's metaphor of 'walking in someone else's shoes' into an actual physical movement.",
          },
          {
            title: 'ENVIRONMENT',
            subtitle: "A space that doesn't compete with nature",
            desc: 'A low-saturation palette with soft pink as an accent color, and plants placed inside the dome, connected the interior space naturally with the landscape outside. Rather than controlling the shifting light and surrounding nature, the design chose to absorb them as part of the exhibition experience.',
          },
          {
            title: 'STORYTELLING',
            subtitle: 'Stories met by seeing and hearing',
            desc: 'A visual track built from portraits and writing was paired with an audio track of voice recordings made by the students and ambient natural sound. The experience was designed so visitors could connect with each person emotionally through seeing and hearing, not just reading.',
          },
        ],
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          'Over roughly a week, the exhibition welcomed around 130 students along with parents and nearby residents. On site, visitors could be seen following the footprint path, pausing naturally as they read individual portraits and stories or listened to the audio.',
        prevLabel: '← PREVIOUS — MIDNIGHT CARNIVAL',
        nextLabel: 'NEXT — TALKABLE →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'talkable',
    order: 2,
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
        prevLabel: '← PREVIOUS — DESIGNING EMPATHY THROUGH SPACE',
        nextLabel: 'NEXT — SEOUL CITY-FUNDED XR RESEARCH →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'A Personalized English App With an AI Teacher',
        title: 'Talkable',
        summary: "A personalized English conversation app that turns weaknesses found in real conversation into the next lesson.",
        subtitle:
          "This was a university graduation capstone project. Users practice through real-time conversation with AI, and each conversation is analyzed for pronunciation, grammar, fluency, and vocabulary — feeding into a continuous Learning Loop of Conversation → Feedback → Review → Challenge.",
        period: 'Mar 2024 – Nov 2024',
        heroLabel: 'HERO IMAGE — TALKABLE APP SCREENS',
        roleLabel: 'MY ROLE',
        role:
          'Joined as UX/UI Designer, covering the full design process from user research through service structure, UI design, prototyping, and user testing. During development, worked out the features and interactions that turned AI-driven conversation and personalized feedback into an actual product experience, testing and refining the prototype through repeated iteration.',
        problemLabel: 'THE CHALLENGE',
        problem:
          "English speaking ability improves through actual practice, but it's hard for learners to keep practicing on their own and get specific feedback suited to their level. User research identified a lack of personalization, limited feedback, and low motivation to keep learning as the core problems. The challenge went beyond simply building a conversation with AI — it was building an experience where weaknesses found in conversation actually led to learning and growth.",
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'PERSONALIZATION',
            subtitle: 'Learning that starts from your own conversation',
            desc: "Instead of delivering fixed learning content one-way, made the user's own conversations the starting point for learning. Analyzed pronunciation, grammar, fluency, and vocabulary from conversations with AI, designing feedback tailored to each user's level and weaknesses.",
          },
          {
            title: 'FEEDBACK',
            subtitle: 'Turning mistakes into the next lesson',
            desc: "Feedback didn't stop at a results screen judging right and wrong. Expressions and feedback surfaced during conversation were saved for review, so learning flowed naturally through Conversation → Feedback → Review.",
          },
          {
            title: 'MOTIVATION',
            subtitle: 'Making invisible growth visible',
            desc: 'Focused on the fact that language learning is hard to feel progress in over a short time. Visualized learning status on a dashboard and combined it with Daily Challenges and growth elements, so small repeated learning and small wins stayed visible over time.',
          },
        ],
        loopLabel: 'LEARNING LOOP',
        loopIntro:
          "Learning started from the user's own conversations, connecting each one to the next round of learning through feedback and review matched to their level and weaknesses. Repeating this cycle created a loop where weaknesses found in real conversation fed directly into the next round of learning.",
        loopSteps: [
          {
            title: 'CONVERSATION',
            desc: 'Has a real English conversation with AI on a topic suited to their level.',
            image: '/images/work/talkable/loop-conversation.png',
            imageLabel: 'CONVERSATION — TALKABLE UI',
          },
          {
            title: 'FEEDBACK',
            desc: 'Reviews personalized feedback on pronunciation, grammar, fluency, and vocabulary based on the conversation.',
            image: '/images/work/talkable/loop-feedback.png',
            imageLabel: 'FEEDBACK — TALKABLE UI',
          },
          {
            title: 'REVIEW',
            desc: 'Revisits saved words and feedback from the conversation through different review formats.',
            image: '/images/work/talkable/loop-review.png',
            imageLabel: 'REVIEW — TALKABLE UI',
          },
          {
            title: 'CHALLENGE',
            desc: 'Confirms progress by completing small learning goals, then starts a new conversation.',
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
        resultLabel: 'RESULT / IMPACT',
        result:
          "Talkable didn't stop at an idea and UI design — it was built into a prototype where AI-driven real-time conversation and personalized feedback could actually be experienced, and demonstrated live at the graduation exhibition. Through user testing and expert feedback, the discoverability, information structure, and navigation of the core Learning Loop were repeatedly improved, and the project's research and development process was written up into a paper and presented at an academic conference.",
        prevLabel: '← PREVIOUS — DESIGNING EMPATHY THROUGH SPACE',
        nextLabel: 'NEXT — SEOUL CITY-FUNDED XR RESEARCH →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'seoul-xr-research',
    order: 5,
    tier: 'short',
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
        prevLabel: '← PREVIOUS — TALKABLE',
        nextLabel: 'NEXT — SKOLEPLAN →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'Seoul City-Funded XR Industry-Academia Project',
        title: 'Age-Tailored XR Content',
        summary: "Five XR experiences that translate each age group's physical and cognitive development traits into distinct movement and interaction.",
        subtitle:
          'This project was carried out as a Seoul City-funded R&D industry-academia initiative, [Development of Headset-Free XR Content Technology Using Generative AI]. Grounded in developmental psychology and motor/cognitive development theory across five age groups — early childhood, children, teenagers, adults, and older adults — the project designed age-tailored content within a single five-wall spatial XR platform.',
        period: 'Jan 2025 – Jul 2025',
        heroLabel: 'HERO IMAGE — SEOUL CITY-FUNDED XR RESEARCH',
        roleLabel: 'MY ROLE',
        role:
          "Joined as PM and UX Designer, leading the research into developmental traits across age groups and turning those insights into game concepts and physical interactions. Wrote up the findings into a paper that carried through to academic presentations, and also took part in producing the actual XR content and running the exhibition.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "The same interaction doesn't deliver the same experience to users of every age. Physical ability, cognitive style, reaction speed, and motivation to participate all shift with age, so the core challenge wasn't simply tuning difficulty — it was deciding what movement and game mechanic each age group's traits should be translated into.",
        researchLabel: 'RESEARCH → DESIGN TRANSLATION',
        researchIntro:
          'Based on research in developmental psychology, motor development, and cognitive development, the key traits of each age group were organized and translated into behaviors and interactions that could actually be performed in an XR space.',
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
            insight: 'A stage where quickness, judgment, and spatial awareness develop, and a sense of achievement comes from solving tasks.',
            translation: 'Connected this to an experience of directly exploring the space and quickly finding and solving a goal.',
            interaction: '→ Find the target in the space',
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
          "To ground the age-specific Experience Design, prior research and theory in developmental psychology, motor development, and cognitive development were reviewed. Research Insights were drawn from Gallahue's motor development theory, Piaget's theory of cognitive development, and Erikson's psychosocial development theory, alongside research on Kolb's experiential learning and neuroplasticity. Rather than simply presenting the theory itself, the focus stayed on how each insight could be reflected in actual user behavior and interaction.",
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          'The age-specific design principles drawn from the research were built into five XR experiences, and the research did not stop at a prototype — it carried through into an actual exhibition experience. The project was carried out as a Seoul-funded industry-academia research collaboration, and was later exhibited to the public at the Hyundai Department Store Culture Hall. The research process and findings were written up into a paper and extended into domestic and international academic presentations.',
        prevLabel: '← PREVIOUS — TALKABLE',
        nextLabel: 'NEXT — SKOLEPLAN →',
        backToWorkLabel: '← ALL WORK',
      },
    },
  },
  {
    slug: 'skoleplan',
    order: 1,
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
        prevLabel: '← PREVIOUS — SEOUL CITY-FUNDED XR RESEARCH',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'Danish School Staff Application Redesign',
        title: 'SkolePlan (DK) Redesign',
        summary: "A school staff system redesigned so each role's core tasks surface first, based on the different information priorities uncovered by role.",
        subtitle:
          "SkolePlan is the internal system staff at a Danish Efterskole use for everyday school operations — attendance, scheduling, and student status. The redesign began with on-site observation and interviews with teachers, kitchen staff, and dormitory staff to define the problem.",
        period: 'March 2026',
        heroLabel: 'HERO IMAGE — SKOLEPLAN',
        roleLabel: 'MY ROLE',
        role:
          "As UX Designer, I led the process end to end — from on-site observation and user research through interviews and surveys, to UX strategy, information architecture, user flow, and UI redesign. The focus was on identifying the gap between actual workflows and the existing system, and restructuring it so each role could reach the information and tasks it needed faster.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "Everyone used the same system, but not everyone needed the same information. The existing system's deep navigation structure meant several steps were needed just to find what mattered, and key information wasn't surfaced immediately. On-site research showed that teachers, kitchen staff, and dormitory staff each checked different information and prioritized different tasks.",
        principleLabel: 'SOLUTION DIRECTION',
        principle:
          "Compared the workflows of teachers, kitchen staff, and dormitory staff to define the information each role needed most and the priority of their core tasks, then redesigned the home screen's information layout and navigation around those priorities.",
        rolesIntro:
          "Based on the role-specific differences uncovered in research, the interface was redesigned — not by adding features, but by restructuring the information architecture around what each role needed to check first.",
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
        resultLabel: 'RESULT / IMPACT',
        result:
          'Rebuilt the single shared interface into role-based dashboards, completing a prototype that gives each staff member direct access to their own core tasks and information. Staff feedback on the prototype was positive: teachers found checking schedules and attendance clearer, kitchen staff found grasping meal counts and dietary needs clearer, and dormitory staff found checking student attendance and status clearer.',
        prevLabel: '← PREVIOUS — SEOUL CITY-FUNDED XR RESEARCH',
        nextLabel: 'BACK TO ALL WORK →',
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
 * compact-card project (like Seoul XR Research) still slots into the
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
