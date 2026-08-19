import type { Lang } from '../i18n/LanguageContext';

export type Localized<T> = Record<Lang, T>;

export interface ProcessStep {
  title: string;
  desc: string;
}

/** One of 2-3 design principles shown between THE CHALLENGE and PROCESS —
 * a scannable bridge from "what was hard" to "how it was solved". */
export interface SolutionPillar {
  title: string;
  subtitle: string;
  desc: string;
}

/** A concrete usability issue surfaced in testing, paired with the fix
 * that shipped. Rendered as its own section after PROCESS so it doesn't
 * get squeezed into a process-step card.
 * `featured` — when at least one finding in the array is featured, the
 * section splits into a large "featured" row and a smaller "compact"
 * row below it, in array order. If no finding sets `featured`, all
 * findings render in the original single grid (unchanged behavior). */
export interface Finding {
  title: string;
  issue: string;
  fix: string;
  featured?: boolean;
}

/** One step in a repeating product loop (e.g. Conversation → Feedback →
 * Review → Challenge). Rendered as its own scroll-revealed block with an
 * optional UI screenshot; `image` omitted falls back to a placeholder. */
export interface LoopStep {
  title: string;
  desc: string;
  image?: string;
  imageLabel?: string;
}

/** One segment (e.g. an age group) whose research insight is translated
 * into a concrete design decision and interaction. Rendered as a
 * full-width stacked row — used when a project's "solution" is really a
 * research → design mapping across several segments rather than 2-3
 * general pillars (see SolutionPillar). */
export interface AgeCard {
  /** e.g. 'EARLY YEARS' */
  ageGroup: string;
  /** e.g. 'Move & Discover' */
  tagline: string;
  insight: string;
  translation: string;
  interaction: string;
}

/** One role's focused view within a role-based redesign (e.g. Teacher,
 * Kitchen Staff, Dormitory Staff). Rendered as a full-width stacked card
 * with a priority tag list — used instead of AgeCard when a project's
 * segments are user roles rather than age groups. */
export interface RoleCard {
  /** e.g. 'TEACHER' */
  role: string;
  /** e.g. 'Schedule & Attendance' */
  focus: string;
  desc: string;
  priorityLabel: string;
  priority: string[];
}

/** One role's "what do I need first" question paired with the design
 * answer. Rendered as a small card in a 3-up grid under DESIGN
 * PRINCIPLE — used instead of the plain `principle` paragraph when a
 * project's principle is best framed as a concrete per-role Q&A. */
export interface PrincipleQA {
  role: string;
  question: string;
  answer: string;
}

export interface CaseStudyContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroLabel: string;
  /** Optional — leads the page with an ownership statement before the
   * challenge/process/result. Omit until written for a given project. */
  roleLabel?: string;
  role?: string;
  problemLabel: string;
  problem: string;
  /** Optional — design principles bridging challenge and process. */
  solutionLabel?: string;
  solution?: SolutionPillar[];
  /** Optional — a repeating loop (e.g. product usage cycle) shown as a
   * flow diagram followed by scroll-revealed step-by-step detail. */
  loopLabel?: string;
  loopIntro?: string;
  loopSteps?: LoopStep[];
  /** Optional — a research → design translation section, shown as
   * stacked full-width segment cards (see AgeCard). Alternative to
   * `solution` for research-driven projects. */
  researchLabel?: string;
  researchIntro?: string;
  ageCards?: AgeCard[];
  /** Optional — a role-based UX section, shown as stacked full-width
   * role cards (see RoleCard). Alternative to `solution`/`ageCards` for
   * projects whose redesign is organized around distinct user roles. */
  rolesLabel?: string;
  rolesIntro?: string;
  roleCards?: RoleCard[];
  /** Optional — a single emphasized callout paragraph, typically a
   * closing design principle. */
  principleLabel?: string;
  principle?: string;
  /** Optional — when set, DESIGN PRINCIPLE renders as an intro
   * paragraph + a 3-up Q&A grid (one card per role) + a closing
   * paragraph, instead of the plain `principle` paragraph above. */
  principleIntro?: string;
  principleQA?: PrincipleQA[];
  principleClosing?: string;
  /** Optional — a plain paragraph section, e.g. citing the research or
   * theory a project's design decisions were grounded in. */
  researchBasisLabel?: string;
  researchBasis?: string;
  processLabel: string;
  /** Optional — specific usability findings + fixes from testing. */
  findingsLabel?: string;
  findingsIntro?: string;
  findings?: Finding[];
  resultLabel: string;
  result: string;
  prevLabel: string;
  nextLabel: string;
  backToWorkLabel: string;
}

export interface WorkCardContent {
  imgLabel: string;
  title: string;
  desc: string;
}

/** Medium tag — used for the small pill on each card so the range across
 * digital product / spatial / XR reads clearly at a glance. */
export type Medium = 'app' | 'spatial' | 'ai';

export interface Project {
  slug: string;
  order: number;
  /** Controls card SIZE/layout on the homepage only: 'full' = large card
   * in the vertical Work list, 'short' = compact card in the 2-col grid.
   * Whether a project has its own /work/:slug case study page is decided
   * separately, by whether `process` + `caseStudy` are both set below —
   * a 'short'-tier project can still link to a full case study page
   * while keeping the compact card size (see ShortWorkCard). */
  tier: 'full' | 'short';
  medium: Medium;
  tags: string[];
  images: {
    thumb: string;
    hero: string;
  };
  card: Localized<WorkCardContent>;
  /** Powers the /work/:slug case study page when set alongside
   * `caseStudy`, regardless of `tier`. */
  process?: Localized<ProcessStep[]>;
  caseStudy?: Localized<CaseStudyContent>;
  /** One-line teaser shown directly on the compact ('short'-tier) card —
   * the case study's own result/flow line when it has a full page, or a
   * plain result summary when it doesn't. */
  resultLine?: Localized<string>;
}
