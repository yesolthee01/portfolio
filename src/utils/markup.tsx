import { Fragment } from 'react';

/** Parses inline '**phrase**' markup into a <strong> tag, leaving everything
 * else as plain text. One shared convention for flagging "this part of the
 * copy should stand out" — each caller's CSS decides what that means in
 * context (accent color in the hero headline, bold weight in body copy,
 * etc.), so the copy in `site.ts` stays plain, readable text with an
 * explicit, deliberate emphasis point instead of scattered one-off markup. */
export function renderInlineMarkup(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
