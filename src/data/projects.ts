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
        {
          title: 'DISCOVERY',
          desc: '학교에 활용되지 않고 있던 투명 돔과 학생들이 스쿨트립에서 기록해 온 사람들의 사진·글·목소리를 전시로 연결했다. 서로 다른 기록을 하나의 경험으로 전달할 수 있는 방법을 탐색했다.',
        },
        {
          title: 'CONCEPT',
          desc: "서로 다른 사람의 삶을 이해해보는 경험을 '타인의 신발을 신고 걸어본다(Walking in Others' Shoes)'는 메타포로 정의했다. 이를 바탕으로 관람객이 이야기를 따라 걷고, 보고, 들을 수 있도록 비주얼과 오디오 두 개의 트랙으로 경험을 구성했다.",
        },
        {
          title: 'SPACE DESIGN',
          desc: '컨셉을 실제 공간 경험으로 옮기기 위해 컬러 팔레트, 식물, 전시물 배치와 발자국 동선을 설계했다. 관람객의 이동 순서와 시선, 주변 자연환경과의 관계를 함께 고려해 공간을 구성했다.',
        },
        {
          title: 'ON-SITE BUILD & RUN',
          desc: '짧은 준비 기간 안에 돔 내부의 전시물을 직접 설치하고 공간을 완성했다. 이후 약 일주일간 전시를 운영하며 관람객이 공간을 이동하고 이야기를 경험하는 방식을 관찰했다.',
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
        subtitle:
          "'Everyone Has a Story to Tell — Walking in Others Shoes'는 타인의 삶과 관점을 직접 보고, 듣고, 따라 걸으며 경험하도록 설계한 공간형 스토리텔링 전시다. 학생들이 여행에서 만난 사람들의 사진과 글, 목소리를 하나의 경험으로 연결해, 관람객이 낯선 사람의 이야기를 단순히 감상하는 것을 넘어 그들의 관점에 잠시 머물 수 있도록 공간과 동선을 설계했다.",
        heroLabel: 'HERO IMAGE — OUTDOOR DOME EXHIBITION, DENMARK',
        roleLabel: 'MY ROLE',
        role:
          '공간과 비주얼을 총괄하는 전시 디렉터로 참여해 전시 컨셉부터 공간 구성, 포스터/인쇄물 디자인, 현장 설치까지 전반을 설계했다. 담당 교사와 사진·오디오 제작을 맡은 학생들과 협업해 전시를 완성했다.',
        problemLabel: 'THE CHALLENGE',
        problem:
          '사방이 트인 투명 돔은 관람객이 전시를 한눈에 훑고 지나가기 쉬운 공간이었다. 또한 실외에 위치해 빛과 날씨가 계속 변화했다. 자연환경과 경쟁하지 않으면서도 관람객의 속도를 늦추고, 낯선 사람들의 이야기에 정서적으로 머무르게 만드는 것이 핵심 과제였다.',
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'PACING',
            subtitle: '걸음을 늦추는 동선',
            desc: "바닥에 발자국으로 이어지는 동선을 만들어 관람객이 전시를 한눈에 훑는 대신, 이야기를 따라 천천히 이동하도록 유도했다. '타인의 신발을 신고 걸어본다'는 전시의 메타포를 실제 관람객의 움직임으로 연결했다.",
          },
          {
            title: 'ENVIRONMENT',
            subtitle: '자연과 경쟁하지 않는 공간',
            desc: '채도가 낮은 색상들을 중심으로 소프트 핑크를 포인트 컬러로 사용하고, 돔 내부에 식물을 배치해 내부 공간과 외부 풍경을 자연스럽게 연결했다. 변화하는 빛과 주변 자연을 통제하기보다 전시 경험의 일부로 받아들이는 방향을 선택했다.',
          },
          {
            title: 'STORYTELLING',
            subtitle: '보고, 들으며 만나는 이야기',
            desc: '인물 사진과 글로 구성한 비주얼 트랙과, 학생들이 직접 녹음한 목소리와 자연음을 담은 오디오 트랙을 함께 구성했다. 관람객이 이야기를 읽는 것에 그치지 않고 보고 들으며 인물과 정서적으로 연결될 수 있도록 경험을 설계했다.',
          },
        ],
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          '약 일주일간 운영된 전시에 학생 130여 명을 비롯해 학부모와 인근 주민들이 방문했다. 현장에서 관람객들이 발자국 동선을 따라 이동하고, 개별 인물의 사진과 이야기를 읽거나 오디오를 들으며 자연스럽게 걸음을 멈추는 모습을 관찰할 수 있었다.',
        prevLabel: '← PREVIOUS — MIDNIGHT CARNIVAL',
        nextLabel: 'NEXT — TALKABLE →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 02 — SPATIAL UX / EXHIBITION',
        title: 'Designing Empathy Through Space — Outdoor Dome Exhibition',
        subtitle:
          "'Everyone Has a Story to Tell — Walking in Others Shoes' is a spatial storytelling exhibition designed to let visitors see, hear, and walk alongside the lives and perspectives of others. Bringing together photos, writing, and voice recordings that students collected from people they met while traveling, the space and circulation were designed so visitors could do more than simply view a stranger's story — they could pause and stay within that person's perspective for a moment.",
        heroLabel: 'HERO IMAGE — OUTDOOR DOME EXHIBITION, DENMARK',
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
        {
          title: 'DISCOVERY & RESEARCH',
          desc: '영어 학습 경험과 기존 서비스의 한계를 조사하고 사용자 리서치를 진행했다. 이를 통해 개인화 부족, 제한적인 피드백, 낮은 학습 동기를 주요 Pain Point로 정의하고, 서로 다른 학습 목표와 행동을 가진 사용자를 바탕으로 Persona와 User Journey를 구성했다.',
        },
        {
          title: 'DEFINE',
          desc: "리서치 결과를 바탕으로 Talkable의 핵심 경험을 '말하기 → 피드백 → 복습 → 다시 말하기'로 정의했다. 단순한 AI 회화 서비스가 아니라, 사용자의 실제 대화가 개인화된 학습으로 이어지는 Learning Loop를 중심으로 서비스 구조와 Information Architecture를 설계했다.",
        },
        {
          title: 'DESIGN & PROTOTYPE',
          desc: 'AI Conversation, Feedback, Review, Dashboard, Challenge 등 핵심 기능의 User Flow와 UI를 설계하고 프로토타입을 제작했다. 프로토타입을 통해 각 기능을 개별적으로 확인하는 것뿐 아니라, 대화에서 피드백을 확인하고 복습한 뒤 다시 대화로 돌아오는 전체 흐름이 자연스럽게 연결되는지를 검토했다.',
        },
        {
          title: 'USER TEST & ITERATION',
          desc: '프로토타입을 대상으로 사용자 테스트와 전문가 피드백을 진행했다. 기능을 완성하는 것보다 사용자가 핵심 기능을 발견하고, 이해하고, 다음 행동으로 자연스럽게 이동할 수 있는지에 집중해 문제를 발견하고 디자인을 반복적으로 개선했다.',
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
          desc: "Ran user testing and expert review on the prototype. Focused less on finishing features and more on whether users could discover, understand, and naturally move on to the next action — surfacing problems and iterating on the design accordingly.",
        },
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
        subtitle:
          'Talkable은 AI와의 실시간 대화를 통해 영어를 연습하고, 실제 대화에서 발견된 약점을 다음 학습으로 연결하는 개인화 영어 학습 서비스다. 사용자의 대화를 분석해 발음·문법·유창성·어휘에 대한 피드백을 제공하고, 이를 복습과 새로운 대화로 이어지는 지속적인 Learning Loop로 설계했다.',
        heroLabel: 'HERO IMAGE — TALKABLE APP SCREENS',
        roleLabel: 'MY ROLE',
        role:
          '졸업 프로젝트의 UX/UI Designer로 참여해 사용자 리서치부터 서비스 구조 설계, UI 디자인, 프로토타이핑과 사용자 테스트까지 전반적인 UX/UI 디자인을 담당했다. 개발 과정에서는 AI 기반 대화와 개인화 피드백이 실제 서비스 경험으로 연결될 수 있도록 기능과 인터랙션을 구체화하고, 프로토타입을 반복적으로 테스트하며 개선했다.',
        problemLabel: 'THE CHALLENGE',
        problem:
          '영어회화는 실제로 말하며 연습해야 하지만, 학습자가 자신의 수준에 맞는 대화 상대와 지속적으로 연습하고 구체적인 피드백을 받기는 어렵다. 사용자 리서치를 통해 개인화된 학습의 부족, 제한적인 피드백, 지속적인 학습 동기 부족을 주요 문제로 정의했다. 단순히 AI와 대화하는 경험을 만드는 것을 넘어, 대화에서 발견된 약점이 실제 학습과 성장으로 이어지는 경험을 만드는 것이 핵심 과제였다.',
        solutionLabel: 'THE SOLUTION',
        solution: [
          {
            title: 'PERSONALIZATION',
            subtitle: '내 대화에서 시작되는 학습',
            desc: '정해진 학습 콘텐츠를 일방적으로 제공하는 대신, 사용자가 실제로 나눈 대화를 학습의 출발점으로 삼았다. AI와의 대화를 바탕으로 발음·문법·유창성·어휘를 분석하고, 사용자의 수준과 약점에 맞는 피드백을 제공하도록 설계했다.',
          },
          {
            title: 'FEEDBACK',
            subtitle: '실수를 다음 학습으로 연결',
            desc: '피드백을 단순히 잘하고 못한 것을 평가하는 결과 화면으로 끝내지 않았다. 대화 중 발견된 표현과 피드백을 저장하고 다시 확인하거나 복습할 수 있도록 구성해, Conversation → Feedback → Review로 학습이 자연스럽게 이어지도록 했다.',
          },
          {
            title: 'MOTIVATION',
            subtitle: '보이지 않는 성장을 눈에 보이게',
            desc: '언어 학습은 단기간에 성장을 체감하기 어렵다는 점에 주목했다. 학습 현황을 대시보드에서 시각화하고 Daily Challenge와 성장 요소를 결합해, 작은 학습의 반복과 성취를 지속적으로 확인할 수 있도록 설계했다.',
          },
        ],
        loopLabel: 'LEARNING LOOP',
        loopIntro:
          '이 과정을 반복해 실제 대화에서 발견된 약점이 다음 학습으로 이어지는 순환 구조를 만들었다.',
        loopSteps: [
          {
            title: 'CONVERSATION',
            desc: 'AI와 자신의 수준에 맞는 주제로 실제 영어 대화를 나눈다.',
            image: '/images/work/talkable/loop-conversation.jpg',
            imageLabel: 'CONVERSATION — TALKABLE UI',
          },
          {
            title: 'FEEDBACK',
            desc: '대화를 기반으로 발음·문법·유창성·어휘에 대한 개인화 피드백을 확인한다.',
            image: '/images/work/talkable/loop-feedback.jpg',
            imageLabel: 'FEEDBACK — TALKABLE UI',
          },
          {
            title: 'REVIEW',
            desc: '대화에서 저장한 단어와 피드백을 다양한 학습 방식으로 다시 복습한다.',
            image: '/images/work/talkable/loop-review.jpg',
            imageLabel: 'REVIEW — TALKABLE UI',
          },
          {
            title: 'CHALLENGE',
            desc: '작은 학습 목표를 달성하며 성취를 확인하고, 다시 새로운 대화를 시작한다.',
            image: '/images/work/talkable/loop-challenge.jpg',
            imageLabel: 'CHALLENGE — TALKABLE UI',
          },
        ],
        processLabel: 'PROCESS',
        findingsLabel: 'FROM USER TESTING',
        findings: [
          {
            title: '중요한 피드백 기능을 더 쉽게 찾도록',
            issue:
              '대화가 끝난 뒤 받은 피드백을 확인하는 기능이 있었지만, 일부 사용자가 해당 버튼을 바로 발견하지 못했다. 중요한 학습 기능임에도 다른 인터페이스 요소에 묻혀 시각적 우선순위가 충분하지 않다는 문제를 발견했다.',
            fix: "→ 피드백 아이콘을 보다 직관적인 형태로 변경하고 크기를 키워 시각적 위계를 강화했다. 대화가 끝난 뒤 사용자가 자연스럽게 '다음에는 피드백을 확인해야 한다'고 인지할 수 있도록 인터페이스를 개선했다.",
            featured: true,
          },
          {
            title: '피드백에서 다시 대화까지',
            issue:
              '사용자 테스트에서 피드백을 확인한 뒤 다시 대화로 돌아가는 과정에 일부 어려움이 나타났다. 또한 전문가 피드백을 통해 기존 피드백 화면의 정보 구조와 이동 방식이 학습 흐름을 방해할 수 있다는 점을 확인했다.',
            fix: '→ 피드백을 스크롤형 구조로 재구성하고, 피드백 유형을 아이콘 방식에서 탭 구조로 변경했다. 또한 대화로 돌아가는 기능을 하단에서 상단으로 이동시켜, 피드백을 확인한 뒤 다음 행동으로 보다 자연스럽게 이어지도록 개선했다.',
            featured: true,
          },
          {
            title: '복습 기능을 독립적인 학습 영역으로',
            issue:
              '저장한 단어를 복습하는 기능이 기존 저장목록 내부에 위치해 있어 사용자가 단어 시험과 복습 기능을 쉽게 발견하기 어려웠다.',
            fix: '→ 하단 Navigation에 Review 영역을 독립적으로 추가하고, 저장 단어와 피드백을 한곳에서 확인하도록 Information Architecture를 재구성했다. 또한 여러 단어 학습 방식을 상단에 배치해 사용자가 원하는 복습 방식에 바로 접근할 수 있도록 개선했다.',
          },
          {
            title: '목표와 보상을 더 명확하게',
            issue: '일부 사용자가 Challenge 아이템이 무엇을 의미하고 어떻게 획득하는지 바로 이해하지 못했다.',
            fix: '→ Challenge에 학습 목표와 아이템에 대한 설명을 추가하고, 목표 달성 후 획득 결과가 명확하게 전달되도록 피드백을 보완했다. 이를 통해 사용자가 Challenge의 목적과 다음 행동을 보다 직관적으로 이해하도록 했다.',
          },
        ],
        resultLabel: 'RESULT / IMPACT',
        result:
          'Talkable은 아이디어와 UI 디자인에서 끝나지 않고, AI 기반 실시간 대화와 개인화 피드백을 경험할 수 있는 프로토타입으로 구현해 졸업전시에서 직접 선보였다. 사용자 테스트와 전문가 피드백을 통해 핵심 Learning Loop의 발견성·정보 구조·Navigation을 반복적으로 개선했으며, 프로젝트의 연구 및 개발 과정을 바탕으로 관련 논문을 작성하고 학술 발표로 확장했다.',
        prevLabel: '← PREVIOUS — DESIGNING EMPATHY THROUGH SPACE',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 03 — AI PRODUCT / MOBILE',
        title: 'Talkable — AI English Learning App',
        subtitle:
          "Talkable is a personalized English-learning service that lets users practice through real-time conversation with AI and turns weaknesses found in those conversations into the next round of learning. It analyzes each conversation for pronunciation, grammar, fluency, and vocabulary, feeding that feedback into a continuous Learning Loop of review and new conversation.",
        heroLabel: 'HERO IMAGE — TALKABLE APP SCREENS',
        roleLabel: 'MY ROLE',
        role:
          'Joined as UX/UI Designer on a graduation capstone project, covering the full design process from user research through service structure, UI design, prototyping, and user testing. During development, worked out the features and interactions that turned AI-driven conversation and personalized feedback into an actual product experience, testing and refining the prototype through repeated iteration.',
        problemLabel: 'THE CHALLENGE',
        problem:
          "English conversation has to be practiced by actually speaking, but it's hard for learners to keep practicing with a conversation partner suited to their level and get specific feedback. User research identified a lack of personalization, limited feedback, and low motivation to keep learning as the core problems. The challenge went beyond simply building a conversation with AI — it was building an experience where weaknesses found in conversation actually led to learning and growth.",
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
          'Repeating this cycle created a loop where weaknesses found in real conversation fed directly into the next round of learning.',
        loopSteps: [
          {
            title: 'CONVERSATION',
            desc: 'Has a real English conversation with AI on a topic suited to their level.',
            image: '/images/work/talkable/loop-conversation.jpg',
            imageLabel: 'CONVERSATION — TALKABLE UI',
          },
          {
            title: 'FEEDBACK',
            desc: 'Reviews personalized feedback on pronunciation, grammar, fluency, and vocabulary based on the conversation.',
            image: '/images/work/talkable/loop-feedback.jpg',
            imageLabel: 'FEEDBACK — TALKABLE UI',
          },
          {
            title: 'REVIEW',
            desc: 'Revisits saved words and feedback from the conversation through different review formats.',
            image: '/images/work/talkable/loop-review.jpg',
            imageLabel: 'REVIEW — TALKABLE UI',
          },
          {
            title: 'CHALLENGE',
            desc: 'Confirms progress by completing small learning goals, then starts a new conversation.',
            image: '/images/work/talkable/loop-challenge.jpg',
            imageLabel: 'CHALLENGE — TALKABLE UI',
          },
        ],
        processLabel: 'PROCESS',
        findingsLabel: 'FROM USER TESTING',
        findings: [
          {
            title: 'Making a key feedback feature easier to find',
            issue:
              "There was a way to check feedback after a conversation ended, but some users didn't notice the button right away. Despite being a core learning feature, it was buried among other interface elements without enough visual priority.",
            fix: '→ Changed the feedback icon to a more intuitive form and enlarged it to strengthen visual hierarchy, so users would naturally recognize that feedback was the next thing to check after a conversation.',
            featured: true,
          },
          {
            title: 'From feedback back to conversation',
            issue:
              "User testing surfaced some difficulty in the path from checking feedback back to starting a new conversation. Expert feedback also confirmed that the existing feedback screen's information structure and navigation could interrupt the learning flow.",
            fix: '→ Restructured feedback into a scrollable layout and switched feedback types from icons to a tab structure. Also moved the button to return to conversation from the bottom to the top of the screen, so the next action after checking feedback followed more naturally.',
            featured: true,
          },
          {
            title: 'Making review its own dedicated space',
            issue:
              'The feature for reviewing saved words lived inside the existing saved-items list, making it hard for users to discover vocabulary quizzes and review features.',
            fix: '→ Added Review as its own area in the bottom navigation and restructured the information architecture so saved words and feedback could be checked in one place. Also placed the different review formats up top so users could jump straight to the one they wanted.',
          },
          {
            title: 'Making goals and rewards clearer',
            issue: "Some users didn't immediately understand what a Challenge item meant or how to earn it.",
            fix: "→ Added explanations of the learning goal and the item to each Challenge, and improved the feedback shown after completing a goal so the reward was clearly communicated — helping users understand the purpose of each Challenge and what to do next.",
          },
        ],
        resultLabel: 'RESULT / IMPACT',
        result:
          "Talkable didn't stop at an idea and UI design — it was built into a prototype where AI-driven real-time conversation and personalized feedback could actually be experienced, and demonstrated live at the graduation exhibition. Through user testing and expert feedback, the discoverability, information structure, and navigation of the core Learning Loop were repeatedly improved, and the project's research and development process was written up into a paper and presented at an academic conference.",
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
