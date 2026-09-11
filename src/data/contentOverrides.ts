import { projects } from './projects';

/**
 * In-progress portfolio copy refinements.
 *
 * Keeping these revisions separate from the large projects.ts data file
 * makes them easy to review while the case studies are still being edited.
 * Once the portfolio copy is finalized, these can be folded back into
 * projects.ts during the final cleanup pass.
 */
const talkable = projects.find((project) => project.slug === 'talkable');

if (talkable?.process && talkable.caseStudy) {
  talkable.process.kr = [
    {
      title: 'DISCOVERY & RESEARCH',
      desc: '영어 학습 경험과 기존 서비스의 한계를 조사하고 사용자 리서치를 진행했다. 개인화 부족, 제한적인 피드백, 낮은 학습 동기를 핵심 문제로 정의했다.',
    },
    {
      title: 'DEFINE',
      desc: "리서치 결과를 바탕으로 Talkable의 핵심 경험을 '말하기 → 피드백 → 복습 → 다시 말하기'로 정의하고, 실제 대화가 개인화된 학습으로 이어지는 Learning Loop와 서비스 구조를 설계했다.",
    },
    {
      title: 'DESIGN & PROTOTYPE',
      desc: 'Conversation, Feedback, Review, Challenge 흐름을 중심으로 User Flow와 주요 UI를 설계하고 프로토타입을 제작했다.',
    },
    {
      title: 'USER TEST & ITERATION',
      desc: '사용자 테스트와 전문가 피드백을 통해 핵심 기능의 발견성, 정보 구조, Navigation 문제를 확인하고 디자인을 반복 개선했다.',
    },
  ];

  talkable.process.en = [
    {
      title: 'DISCOVERY & RESEARCH',
      desc: 'Investigated existing English-learning experiences and conducted user research, defining lack of personalization, limited feedback, and low learning motivation as the core problems.',
    },
    {
      title: 'DEFINE',
      desc: "Defined Talkable's core experience as 'speak → feedback → review → speak again,' and designed a Learning Loop and service structure that turn real conversations into personalized learning.",
    },
    {
      title: 'DESIGN & PROTOTYPE',
      desc: 'Designed the user flow and key UI around Conversation, Feedback, Review, and Challenge, then built a working prototype.',
    },
    {
      title: 'USER TEST & ITERATION',
      desc: 'Used user testing and expert feedback to identify discoverability, information-architecture, and navigation issues, then iterated on the design.',
    },
  ];

  const kr = talkable.caseStudy.kr;
  kr.subtitle =
    '대학교 졸업 캡스톤 프로젝트로 진행한 Talkable은 AI와 실시간 영어 대화를 나누고, 대화에서 발견된 약점을 개인화된 피드백·복습·챌린지로 연결하는 모바일 학습 서비스다. 사용자의 실제 대화를 학습 데이터로 활용해 Conversation → Feedback → Review → Challenge가 반복되는 Learning Loop를 설계했다.';
  kr.principle = undefined;
  kr.principleLabel = undefined;
  kr.role =
    'UX/UI Designer로 사용자 리서치, 문제 정의, 서비스 구조와 User Flow 설계, UI 디자인, 프로토타이핑, 사용자 테스트를 담당했다. 개발 과정에서는 AI 대화와 개인화 피드백이 실제 사용 흐름으로 연결되도록 기능과 인터랙션을 구체화하고, 테스트 결과를 바탕으로 정보 구조와 주요 화면을 반복 개선했다.';
  kr.problem =
    '영어 회화는 실제로 말하며 연습해야 하지만, 혼자서는 꾸준히 대화를 이어가거나 자신의 수준에 맞는 구체적인 피드백을 받기 어렵다. 사용자 리서치에서 개인화 부족, 제한적인 피드백, 낮은 학습 동기를 주요 문제로 정의했다. 핵심 과제는 단순한 AI 대화 기능이 아니라, 대화에서 발견된 약점이 다음 학습과 성장으로 이어지게 만드는 것이었다.';
  kr.solution = [
    {
      title: 'PERSONALIZATION',
      subtitle: '내 대화에서 시작되는 학습',
      desc: '실제 대화를 분석해 발음·문법·유창성·어휘에 대한 개인화 피드백을 제공하도록 설계했다.',
    },
    {
      title: 'FEEDBACK',
      subtitle: '실수를 다음 학습으로 연결',
      desc: '대화에서 발견된 약점과 표현을 저장하고, 이후 복습으로 자연스럽게 이어지도록 구성했다.',
    },
    {
      title: 'MOTIVATION',
      subtitle: '작은 성장을 계속 확인하도록',
      desc: '학습 현황과 Challenge를 통해 반복 학습과 성취를 시각적으로 확인할 수 있도록 설계했다.',
    },
  ];
  kr.loopIntro =
    '대화를 한 번의 연습으로 끝내지 않고, 피드백과 복습을 거쳐 다시 대화로 이어지는 학습 구조를 설계했다.';
  kr.loopSteps = [
    {
      title: 'CONVERSATION',
      desc: 'AI와 실제 영어 대화를 나누며 학습 데이터를 만든다.',
      image: '/images/work/talkable/loop-conversation.png',
      imageLabel: 'CONVERSATION — TALKABLE UI',
    },
    {
      title: 'FEEDBACK',
      desc: '대화를 분석해 개인의 약점과 개선할 표현을 확인한다.',
      image: '/images/work/talkable/loop-feedback.png',
      imageLabel: 'FEEDBACK — TALKABLE UI',
    },
    {
      title: 'REVIEW',
      desc: '대화에서 발견된 단어와 피드백을 다양한 방식으로 복습한다.',
      image: '/images/work/talkable/loop-review.png',
      imageLabel: 'REVIEW — TALKABLE UI',
    },
    {
      title: 'CHALLENGE',
      desc: '작은 학습 목표를 수행하고 다시 새로운 대화로 이어간다.',
      image: '/images/work/talkable/loop-challenge.png',
      imageLabel: 'CHALLENGE — TALKABLE UI',
    },
  ];
  kr.findingsLabel = 'USER TESTING & ITERATION';
  kr.resultLabel = 'RESULT / VALIDATION';
  kr.result =
    '사용자 테스트와 전문가 피드백에서 발견된 문제를 핵심 기능의 발견성, 정보 구조, Navigation 개선으로 연결했다. 피드백 버튼의 시각적 위계를 높이고, 피드백 유형을 탭 구조로 재구성했으며, Review를 독립 영역으로 분리하고 Challenge의 목표·보상 정보를 명확히 했다. 이를 통해 Conversation → Feedback → Review → Challenge로 이어지는 Learning Loop를 실제 사용 흐름에 맞게 다듬었다. 최종 프로토타입은 졸업전시에서 직접 선보였고, 프로젝트의 연구·개발 과정을 바탕으로 관련 논문과 학술 발표로 확장했다.';

  const en = talkable.caseStudy.en;
  en.subtitle =
    'Talkable was developed as a university graduation capstone: a mobile English-learning service that turns real-time AI conversation into personalized feedback, review, and challenges. Real conversations become learning data, forming a repeating Conversation → Feedback → Review → Challenge Learning Loop.';
  en.principle = undefined;
  en.principleLabel = undefined;
  en.role =
    'As the UX/UI Designer, I worked across user research, problem definition, service structure and user flows, UI design, prototyping, and user testing. During development, I translated AI conversation and personalized feedback into concrete product interactions, then iterated on the information architecture and key screens based on testing.';
  en.problem =
    'Speaking improves through actual practice, but it is difficult for learners to sustain conversation alone or receive specific feedback matched to their level. User research identified lack of personalization, limited feedback, and low learning motivation as the core problems. The challenge was not simply to add AI conversation, but to make weaknesses found in each conversation lead into the next round of learning and growth.';
  en.solution = [
    {
      title: 'PERSONALIZATION',
      subtitle: 'Learning that starts from your own conversation',
      desc: 'Analyzed real conversations to provide personalized feedback on pronunciation, grammar, fluency, and vocabulary.',
    },
    {
      title: 'FEEDBACK',
      subtitle: 'Turning mistakes into the next lesson',
      desc: 'Saved weaknesses and expressions found in conversation so they could naturally carry into later review.',
    },
    {
      title: 'MOTIVATION',
      subtitle: 'Making small progress visible',
      desc: 'Used learning status and Challenges to make repeated practice and small wins visible over time.',
    },
  ];
  en.loopIntro =
    'Instead of letting each conversation end as a one-off exercise, the experience connects feedback and review back into the next conversation.';
  en.loopSteps = [
    {
      title: 'CONVERSATION',
      desc: 'Have a real English conversation with AI and create learning data.',
      image: '/images/work/talkable/loop-conversation.png',
      imageLabel: 'CONVERSATION — TALKABLE UI',
    },
    {
      title: 'FEEDBACK',
      desc: 'Analyze the conversation to identify personal weaknesses and expressions to improve.',
      image: '/images/work/talkable/loop-feedback.png',
      imageLabel: 'FEEDBACK — TALKABLE UI',
    },
    {
      title: 'REVIEW',
      desc: 'Review words and feedback surfaced in the conversation through different learning formats.',
      image: '/images/work/talkable/loop-review.png',
      imageLabel: 'REVIEW — TALKABLE UI',
    },
    {
      title: 'CHALLENGE',
      desc: 'Complete a small learning goal, then continue into a new conversation.',
      image: '/images/work/talkable/loop-challenge.png',
      imageLabel: 'CHALLENGE — TALKABLE UI',
    },
  ];
  en.findingsLabel = 'USER TESTING & ITERATION';
  en.resultLabel = 'RESULT / VALIDATION';
  en.result =
    'Issues found through user testing and expert feedback were translated into improvements to discoverability, information architecture, and navigation. The feedback button received stronger visual priority, feedback types were reorganized into a tab structure, Review became a dedicated area, and Challenge goals and rewards were clarified. These iterations refined the Conversation → Feedback → Review → Challenge Learning Loop around real user behavior. The final prototype was demonstrated at the graduation exhibition, and the project later expanded into a research paper and academic presentation.';
}
