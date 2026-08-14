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
 * get squeezed into a process-step card. */
export interface Finding {
  title: string;
  issue: string;
  fix: string;
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
  /** 'full' = gets a full case study page (problem/process/result).
   *  'short' = single-screen summary card only, no case study page. */
  tier: 'full' | 'short';
  medium: Medium;
  tags: string[];
  images: {
    thumb: string;
    hero: string;
  };
  card: Localized<WorkCardContent>;
  /** Full-tier only: powers the /work/:slug case study page. */
  process?: Localized<ProcessStep[]>;
  caseStudy?: Localized<CaseStudyContent>;
  /** Short-tier only: one-line result shown directly on the compact card. */
  resultLine?: Localized<string>;
}
