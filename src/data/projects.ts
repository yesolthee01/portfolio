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
      hero: 'https://img.youtube.com/vi/sJRy-V2xb8I/hqdefault.jpg',
    },
    heroVideo: 'sJRy-V2xb8I',
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
        nextLabel: 'NEXT — SEOUL CITY-FUNDED XR RESEARCH →',
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
        nextLabel: 'NEXT — SEOUL CITY-FUNDED XR RESEARCH →',
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
      thumb: 'https://img.youtube.com/vi/IvBbAEDmrlk/hqdefault.jpg',
      hero: 'https://img.youtube.com/vi/IvBbAEDmrlk/hqdefault.jpg',
    },
    heroVideo: 'IvBbAEDmrlk',
    process: {
      kr: [
        {
          title: 'RESEARCH',
          desc: '발달심리·운동발달·인지발달 관련 선행 연구를 조사하고, 아동부터 고령자까지 연령별 신체·인지적 특성을 정리했다.',
        },
        {
          title: 'DEFINE',
          desc: '각 연령대에서 중요하게 작용하는 움직임, 인지 능력, 참여 동기를 추출하고 이를 Experience Design의 기준으로 정의했다.',
        },
        {
          title: 'TRANSLATE',
          desc: '연구에서 도출한 추상적인 인사이트를 밟기·찾기·던지기·피하기·걷고 기억하기와 같은 구체적인 신체 행동과 게임 메커니즘으로 변환했다.',
        },
        {
          title: 'PROTOTYPE & EXHIBITION',
          desc: '연령별 컨셉을 5면 공간형 XR 플랫폼에서 실제 플레이할 수 있는 콘텐츠로 구현하고, 실제 공간에서 경험할 수 있는 형태로 전시했다.',
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
          desc: 'Translated the abstract insights drawn from research into concrete physical actions and game mechanics — stepping, finding, throwing, dodging, walking and remembering.',
        },
        {
          title: 'PROTOTYPE & EXHIBITION',
          desc: 'Built each age-specific concept into content playable on the five-wall spatial XR platform, and exhibited it in a physical space where it could actually be experienced.',
        },
      ],
    },
    card: {
      kr: {
        imgLabel: 'SEOUL CITY-FUNDED XR RESEARCH',
        title: '서울시 지원 산학 XR 리서치',
        desc: '발달심리 연구를 바탕으로 아동부터 고령자까지, 5개 연령대의 신체·인지 특성을 XR 인터랙션으로 설계한 산학협력 프로젝트.',
      },
      en: {
        imgLabel: 'SEOUL CITY-FUNDED XR RESEARCH',
        title: 'Seoul City-Funded XR Research',
        desc: 'An industry-academia project translating the physical and cognitive traits of five age groups — from children to older adults — into XR interaction, grounded in developmental psychology research.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: 'CASE STUDY 04 — SPATIAL UX / RESEARCH',
        title: '서울시 지원 산학 XR 리서치',
        subtitle:
          '발달심리와 운동·인지 발달 연구를 바탕으로, 아동부터 고령자까지 5개 연령대의 특성을 XR 인터랙션으로 번역한 산학협력 연구 프로젝트다. 하나의 5면 공간형 XR 플랫폼 안에서 각 연령대가 자신의 신체·인지 특성에 맞는 방식으로 움직이고 참여할 수 있도록 서로 다른 5개의 경험을 설계했다.',
        heroLabel: 'HERO IMAGE — SEOUL CITY-FUNDED XR RESEARCH',
        roleLabel: 'MY ROLE',
        role:
          'Research와 UX Concept을 중심으로 연령별 발달 특성을 조사하고, 연구에서 도출한 인사이트를 게임 컨셉과 신체 인터랙션으로 구체화하는 과정에 참여했다. 프로젝트의 연구 결과를 논문으로 정리하고 학술 발표까지 연결했으며, 실제 XR 콘텐츠 제작과 전시 과정에도 참여했다.',
        problemLabel: 'THE CHALLENGE',
        problem:
          '같은 인터랙션이 모든 연령의 사용자에게 같은 경험을 제공하지 않는다. 연령에 따라 신체 능력과 인지 방식, 반응 속도와 참여 동기가 달라지는 만큼, 단순히 게임의 난이도를 조절하는 것이 아니라 각 연령의 특성을 어떤 움직임과 게임 메커니즘으로 변환할 것인가가 핵심 과제였다.',
        researchLabel: 'RESEARCH → DESIGN TRANSLATION',
        researchIntro:
          '발달심리학·운동발달·인지발달 관련 연구를 바탕으로 연령별 주요 특성을 정리하고, 이를 실제 XR 공간에서 수행할 수 있는 행동과 인터랙션으로 변환했다.',
        ageCards: [
          {
            ageGroup: 'EARLY YEARS',
            tagline: 'Move & Discover',
            insight: '감각·운동 경험과 대근육 움직임을 통한 신체 조절 능력이 발달하는 시기.',
            translation: '복잡한 규칙보다 몸을 직접 움직이고 즉각적인 결과를 경험하는 활동에 집중했다.',
            interaction: '→ 바닥의 물고기를 밟으며 수집하기',
          },
          {
            ageGroup: 'SCHOOL AGE',
            tagline: 'Find & Solve',
            insight: '순발력과 판단력, 공간 인지가 발달하며 과제를 해결하는 과정에서 성취감을 경험하는 시기.',
            translation: '공간을 직접 탐색하고 빠르게 목표를 발견해 해결하는 경험으로 연결했다.',
            interaction: '→ 공간 속 목표물을 찾고 제거하기',
          },
          {
            ageGroup: 'TEEN',
            tagline: 'Aim & React',
            insight: '정확성·전략성·민첩성과 함께 자기조절 및 전략적 판단 능력이 발달하는 시기.',
            translation: '단순한 반응보다 목표를 판단하고 타이밍을 결정해야 하는 경쟁적 플레이로 구성했다.',
            interaction: '→ 목표를 판단하고 피구공을 던지기',
          },
          {
            ageGroup: 'ADULT',
            tagline: 'Move & Release',
            insight: '신체활동을 통한 스트레스 해소와 몰입 경험에 주목했다.',
            translation: '설명이나 복잡한 과제보다 온몸을 빠르게 움직이며 즉각적으로 몰입할 수 있는 경험을 설계했다.',
            interaction: '→ 날아오는 화살을 온몸으로 회피하기',
          },
          {
            ageGroup: 'OLDER ADULT',
            tagline: 'Walk & Remember',
            insight:
              '인지 자극과 신체활동을 함께 수행하고, 반복적인 자극을 통해 기억과 인지 기능을 유지하는 경험에 주목했다.',
            translation: '빠른 반응을 요구하기보다 걷기와 기억, 간단한 인지 과제를 결합한 경험으로 구성했다.',
            interaction: '→ 공간을 걷고, 기억하고, 농작물을 수확하기',
          },
        ],
        principleLabel: 'DESIGN PRINCIPLE',
        principle:
          '연령에 따라 난이도만 조절한 것이 아니라, 인터랙션 자체를 다르게 설계했다. 아동은 밟고, 초등학생은 찾고 해결하며, 청소년은 판단하고 던진다. 성인은 빠르게 피하고, 고령자는 걷고 기억한다. 같은 XR 플랫폼을 사용하면서도 사용자의 신체·인지적 특성에 따라 플레이의 핵심 행동 자체를 다르게 설계하는 것을 프로젝트의 중심 원칙으로 삼았다.',
        researchBasisLabel: 'RESEARCH BASIS',
        researchBasis:
          '연령별 Experience Design의 근거를 마련하기 위해 발달심리학, 운동발달, 인지발달 관련 선행 연구와 이론을 조사했다. Gallahue의 운동발달 이론, Piaget의 인지발달 이론, Erikson의 심리사회적 발달 이론을 비롯해 Kolb의 경험학습과 신경가소성 관련 연구 등을 참고해 Research Insight를 도출했다. 연구 이론 자체를 보여주는 데 그치지 않고, 각 인사이트가 실제 사용자의 행동과 인터랙션에 어떻게 반영될 수 있는지에 초점을 맞췄다.',
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          '연구에서 도출한 연령별 디자인 원칙을 5개의 XR Experience로 구현했으며, 연구 결과가 프로토타입에 머물지 않고 실제 전시 경험으로 이어졌다. 프로젝트는 서울시 지원 산학협력 연구로 진행되었으며, 이후 현대백화점 문화홀에서 실제 관람객을 대상으로 전시됐다. 연구 과정과 결과는 논문으로 정리해 국내·국제 학술 발표로 확장했다.',
        prevLabel: '← PREVIOUS — TALKABLE',
        nextLabel: 'NEXT — SKOLEPLAN →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 04 — SPATIAL UX / RESEARCH',
        title: 'Seoul City-Funded XR Research',
        subtitle:
          'A research collaboration project that translates the traits of five age groups — from early childhood to older adults — into XR interactions, grounded in developmental psychology and motor/cognitive development research. Within a single five-wall spatial XR platform, five distinct experiences were designed so each age group could move and participate in ways suited to their own physical and cognitive traits.',
        heroLabel: 'HERO IMAGE — SEOUL CITY-FUNDED XR RESEARCH',
        roleLabel: 'MY ROLE',
        role:
          "Centered on research and UX concept work, investigated developmental traits across age groups and took part in translating the resulting insights into game concepts and physical interactions. Wrote up the project's research findings into a paper and carried it through to academic presentations, while also taking part in producing the actual XR content and the exhibition.",
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
          },
          {
            ageGroup: 'SCHOOL AGE',
            tagline: 'Find & Solve',
            insight: 'A stage where quickness, judgment, and spatial awareness develop, and a sense of achievement comes from solving tasks.',
            translation: 'Connected this to an experience of directly exploring the space and quickly finding and solving a goal.',
            interaction: '→ Find and remove the target in the space',
          },
          {
            ageGroup: 'TEEN',
            tagline: 'Aim & React',
            insight: 'A stage where accuracy, strategy, and agility develop alongside self-regulation and strategic judgment.',
            translation: 'Built as competitive play that requires judging a target and deciding timing, rather than simple reaction.',
            interaction: '→ Judge the target and throw the dodgeball',
          },
          {
            ageGroup: 'ADULT',
            tagline: 'Move & Release',
            insight: 'Focused on stress relief and immersive experience through physical activity.',
            translation: 'Designed an experience that lets the whole body move quickly for immediate immersion, rather than instructions or complex tasks.',
            interaction: '→ Dodge incoming arrows with the whole body',
          },
          {
            ageGroup: 'OLDER ADULT',
            tagline: 'Walk & Remember',
            insight:
              'Focused on combining cognitive stimulation with physical activity, maintaining memory and cognitive function through repeated stimulation.',
            translation: 'Built around walking, memory, and simple cognitive tasks, rather than demanding fast reactions.',
            interaction: '→ Walk the space, remember, and harvest the crops',
          },
        ],
        principleLabel: 'DESIGN PRINCIPLE',
        principle:
          "Difficulty wasn't the only thing adjusted by age — the interaction itself was designed differently. Children step, schoolchildren find and solve, teens judge and throw. Adults dodge quickly, older adults walk and remember. Designing the core action of play itself differently based on users' physical and cognitive traits, while using the same XR platform, was the project's central principle.",
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
    resultLine: {
      kr: 'Research Insight → 연령별 Experience Design → 실제 전시',
      en: 'Research Insight → Age-Specific Experience Design → Live Exhibition',
    },
  },
  {
    slug: 'skoleplan',
    order: 5,
    tier: 'short',
    medium: 'app',
    tags: ['EDTECH', 'ROLE-BASED UX', 'DENMARK'],
    images: {
      thumb: '/images/work/skoleplan/thumb.jpg',
      hero: '/images/work/skoleplan/hero.jpg',
    },
    process: {
      kr: [
        {
          title: 'OBSERVE',
          desc: '실제 Efterskole 환경에서 교직원들의 시스템 사용 방식과 업무를 관찰하고, 인터뷰와 설문을 통해 기존 시스템의 문제를 조사했다. 그 결과, Deep Navigation · Low Information Visibility · Workflow Misalignment를 주요 문제로 정의했다.',
        },
        {
          title: 'PRIORITIZE',
          desc: '교사·주방·기숙사 담당자의 업무를 비교해 각 역할이 가장 자주 확인하는 정보와 핵심 Task의 우선순위를 정의했다. 이를 바탕으로 모든 사용자에게 동일한 정보를 제공하는 대신, 역할에 따라 정보의 우선순위가 달라지는 UX 전략을 수립했다.',
        },
        {
          title: 'REDESIGN',
          desc: '역할별 정보 우선순위를 바탕으로 Home Dashboard와 Navigation을 재설계했다. 핵심 업무까지 필요한 탐색 단계를 줄이고, 로그인 후 각 사용자에게 가장 중요한 정보를 바로 확인할 수 있도록 Information Hierarchy를 개선했다.',
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
        imgLabel: 'SKOLEPLAN APP SCREENS',
        title: 'SkolePlan — 덴마크 학교 내부 시스템',
        desc: '실제 교직원의 업무를 리서치하고, 역할별 정보 우선순위에 맞게 내부 시스템을 재설계한 UX 프로젝트.',
      },
      en: {
        imgLabel: 'SKOLEPLAN APP SCREENS',
        title: 'SkolePlan — Danish School Internal System',
        desc: 'A UX project researching real staff workflows and redesigning an internal school system around role-based information priorities.',
      },
    },
    caseStudy: {
      kr: {
        eyebrow: 'CASE STUDY 05 — DIGITAL PRODUCT / ROLE-BASED UX',
        title: 'SkolePlan — 덴마크 학교 내부 시스템 UX Redesign',
        subtitle:
          'SkolePlan은 덴마크 Efterskole 교직원들이 출석, 일정, 학생 현황 등 일상적인 학교 업무에 사용하는 내부 시스템을 재설계한 UX 프로젝트다. 실제 학교 현장에서 교사·주방·기숙사 담당자의 업무를 관찰하고, 하나의 동일한 인터페이스 대신 각 역할의 업무와 정보 우선순위에 맞는 Role-based System으로 재구성했다.',
        heroLabel: 'HERO IMAGE — SKOLEPLAN',
        roleLabel: 'MY ROLE',
        role:
          'UX Designer로서 현장 관찰과 인터뷰·설문을 통한 사용자 리서치부터 UX 전략, Information Architecture, User Flow와 UI 재설계까지 전반을 담당했다. 특히 실제 업무 흐름과 기존 시스템 사이의 차이를 파악하고, 각 역할이 필요한 정보와 핵심 업무에 더 빠르게 접근할 수 있도록 구조를 재설계하는 데 집중했다.',
        problemLabel: 'THE CHALLENGE',
        problem:
          '같은 시스템을 사용하지만, 모든 교직원이 같은 정보를 필요로 하지는 않았다. 기존 시스템은 복잡한 Navigation 구조로 인해 필요한 정보를 찾기까지 여러 단계를 거쳐야 했고, 중요한 정보가 즉시 드러나지 않았다. 현장 리서치를 통해 교사·주방·기숙사 담당자마다 확인해야 할 정보와 수행하는 업무의 우선순위가 다르다는 점을 발견했다. 따라서 핵심 질문을 다음과 같이 정의했다 — 하나의 시스템이 서로 다른 역할의 실제 업무 방식에 어떻게 맞춰질 수 있을까?',
        rolesLabel: 'ROLE-BASED UX',
        rolesIntro:
          '리서치에서 발견한 역할별 업무 차이를 바탕으로, 동일했던 기존 인터페이스를 각 사용자의 핵심 업무와 정보가 먼저 보이는 구조로 재설계했다.',
        roleCards: [
          {
            role: 'TEACHER',
            focus: 'Schedule & Attendance',
            desc: '교사에게 가장 중요한 것은 오늘의 일정과 학생 출석 현황을 빠르게 확인하고 처리하는 것이었다. 여러 페이지를 탐색하는 대신 홈 화면에서 당일 수업과 출석 상태를 바로 확인하고 필요한 업무로 이동할 수 있도록 구성했다.',
            priorityLabel: 'Priority',
            priority: ['Schedule', 'Attendance', 'Upcoming Activities'],
          },
          {
            role: 'KITCHEN STAFF',
            focus: 'Meal Planning at a Glance',
            desc: '주방 담당자는 개별 학생의 상세 정보보다 식사 인원과 식이 요구사항을 빠르게 파악하는 것이 중요했다. 홈 화면에서 전체 식사 인원과 Vegan · Vegetarian · Gluten-free · Halal 등의 정보를 한눈에 확인할 수 있도록 구성했다.',
            priorityLabel: 'Priority',
            priority: ['Student Count', 'Dietary Needs', 'Meal Planning'],
          },
          {
            role: 'DORMITORY STAFF',
            focus: 'Student Status & Presence',
            desc: '기숙사 담당자에게는 학생들의 출결과 현재 상태를 빠르게 파악하는 것이 중요했다. 등교 여부와 외부 활동 등 학생 현황을 홈 화면에서 바로 확인할 수 있도록 해 반복적인 정보 탐색을 줄였다.',
            priorityLabel: 'Priority',
            priority: ['Presence', 'Absence', 'Student Status'],
          },
        ],
        principleLabel: 'DESIGN PRINCIPLE',
        principleIntro:
          '모든 사용자에게 같은 정보를 보여주는 대신, 역할에 따라 정보의 우선순위를 다르게 설계했다. 같은 시스템을 사용하더라도 각 역할이 가장 먼저 알고 싶은 것은 달랐다.',
        principleQA: [
          { role: 'TEACHER', question: 'What do I need to do today?', answer: '오늘의 일정과 출석' },
          {
            role: 'KITCHEN STAFF',
            question: 'How many students should I prepare for?',
            answer: '식사 인원과 식이 요구사항',
          },
          { role: 'DORMITORY STAFF', question: 'What is the current student status?', answer: '학생 출결과 현황' },
        ],
        principleClosing:
          '따라서 새로운 기능을 추가하는 것보다 실제 업무의 우선순위를 기준으로 Information Architecture와 Home Dashboard를 재구성하는 것을 핵심 디자인 원칙으로 삼았다.',
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          '하나의 동일한 인터페이스를 역할별 Dashboard로 재구성해, 각 교직원이 자신의 핵심 업무와 정보에 바로 접근할 수 있는 프로토타입을 완성했다. 프로토타입에 대한 교직원 피드백에서 교사는 일정과 출석 확인, 주방 담당자는 식사 인원과 식이 요구사항 파악, 기숙사 담당자는 학생 출결과 현황 확인이 보다 명확해졌다는 긍정적인 반응을 확인했다.',
        prevLabel: '← PREVIOUS — SEOUL CITY-FUNDED XR RESEARCH',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
      en: {
        eyebrow: 'CASE STUDY 05 — DIGITAL PRODUCT / ROLE-BASED UX',
        title: 'SkolePlan — Danish School Internal System UX Redesign',
        subtitle:
          "SkolePlan redesigns the internal system staff at a Danish Efterskole use for everyday school operations — attendance, scheduling, and student status. After observing how teachers, kitchen staff, and dormitory staff actually worked on site, the single shared interface was rebuilt into a role-based system matched to each role's tasks and information priorities.",
        heroLabel: 'HERO IMAGE — SKOLEPLAN',
        roleLabel: 'MY ROLE',
        role:
          "As UX Designer, I led the process end to end — from on-site observation and user research through interviews and surveys, to UX strategy, information architecture, user flow, and UI redesign. The focus was on identifying the gap between actual workflows and the existing system, and restructuring it so each role could reach the information and tasks it needed faster.",
        problemLabel: 'THE CHALLENGE',
        problem:
          "Everyone used the same system, but not everyone needed the same information. The existing system's deep navigation structure meant several steps were needed just to find what mattered, and key information wasn't surfaced immediately. On-site research showed that teachers, kitchen staff, and dormitory staff each checked different information and prioritized different tasks. This led to the core question: how can a single system adapt to the actual working styles of different roles?",
        rolesLabel: 'ROLE-BASED UX',
        rolesIntro:
          "Based on the role-specific differences uncovered in research, the previously identical interface was redesigned so each user's core tasks and information surface first.",
        roleCards: [
          {
            role: 'TEACHER',
            focus: 'Schedule & Attendance',
            desc: "For teachers, what mattered most was quickly checking and handling today's schedule and student attendance. Instead of navigating multiple pages, the home screen was built to show the day's classes and attendance status immediately, with a direct path to the task at hand.",
            priorityLabel: 'Priority',
            priority: ['Schedule', 'Attendance', 'Upcoming Activities'],
          },
          {
            role: 'KITCHEN STAFF',
            focus: 'Meal Planning at a Glance',
            desc: 'For kitchen staff, quickly grasping meal counts and dietary requirements mattered more than individual student detail. The home screen was built to show the total meal count and dietary information — vegan, vegetarian, gluten-free, halal — at a glance.',
            priorityLabel: 'Priority',
            priority: ['Student Count', 'Dietary Needs', 'Meal Planning'],
          },
          {
            role: 'DORMITORY STAFF',
            focus: 'Student Status & Presence',
            desc: "For dormitory staff, quickly grasping students' attendance and current status mattered most. Presence, absence, and off-site activity could now be checked directly from the home screen, cutting down on repetitive searching.",
            priorityLabel: 'Priority',
            priority: ['Presence', 'Absence', 'Student Status'],
          },
        ],
        principleLabel: 'DESIGN PRINCIPLE',
        principleIntro:
          'Instead of showing every user the same information, information priority was designed differently by role. Even on the same system, what each role wanted to know first was different.',
        principleQA: [
          { role: 'TEACHER', question: 'What do I need to do today?', answer: "Today's schedule and attendance" },
          {
            role: 'KITCHEN STAFF',
            question: 'How many students should I prepare for?',
            answer: 'Meal count and dietary needs',
          },
          { role: 'DORMITORY STAFF', question: 'What is the current student status?', answer: 'Student attendance and status' },
        ],
        principleClosing:
          "Rather than adding new features, the core design principle was to restructure the information architecture and home dashboard around the real priorities of each role's work.",
        processLabel: 'PROCESS',
        resultLabel: 'RESULT / IMPACT',
        result:
          'Rebuilt the single shared interface into role-based dashboards, completing a prototype that gives each staff member direct access to their own core tasks and information. Staff feedback on the prototype was positive: teachers found checking schedules and attendance clearer, kitchen staff found grasping meal counts and dietary needs clearer, and dormitory staff found checking student attendance and status clearer.',
        prevLabel: '← PREVIOUS — SEOUL CITY-FUNDED XR RESEARCH',
        nextLabel: 'BACK TO ALL WORK →',
        backToWorkLabel: '← ALL WORK',
      },
    },
    resultLine: {
      kr: '→ Real Workflow → Role-based UX → Clearer Information',
      en: '→ Real Workflow → Role-based UX → Clearer Information',
    },
  },
];

export const fullProjects = projects.filter((p) => p.tier === 'full').sort((a, b) => a.order - b.order);
export const shortProjects = projects.filter((p) => p.tier === 'short').sort((a, b) => a.order - b.order);
export const projectsByOrder = [...projects].sort((a, b) => a.order - b.order);

/** Every project with its own /work/:slug case study page, regardless of
 * card tier/size — powers page lookup and the prev/next footer nav so a
 * compact-card project (like Seoul XR Research) still slots into the
 * click-through chain between full-card case studies. */
export const caseStudyProjects = projectsByOrder.filter((p) => p.process && p.caseStudy);

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
