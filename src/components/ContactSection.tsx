import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { useInView } from '../hooks/useInView';

export function ContactSection() {
  const { lang } = useLanguage();
  const contact = siteCopy[lang].contact;
  const { ref, inView } = useInView<HTMLDivElement>();
  // Each CTA button watches its own scroll position — see the SCROLL
  // REVEAL block in global.css. Only two, fixed in number, so calling
  // the hook twice directly here (rather than mapping) keeps this a
  // plain top-level hook call.
  const { ref: emailRef, inView: emailInView } = useInView<HTMLAnchorElement>(0.4);
  const { ref: linkedinRef, inView: linkedinInView } = useInView<HTMLAnchorElement>(0.4);

  return (
    <div id="contact" className={`contact-section section${inView ? ' in-view' : ''}`} ref={ref}>
      <h2 className="contact-title">
        {contact.line1}
        <br />
        {contact.line2part1} <span className="accent">{contact.line2accent}</span>
        {contact.line2part2}
      </h2>
      <div className="contact-cta">
        <a
          href={`mailto:${contact.email}`}
          className={`btn btn-primary press-bounce${emailInView ? ' in-view' : ''}`}
          ref={emailRef}
        >
          {contact.email}
        </a>
        <a
          href={contact.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className={`btn btn-outline press-bounce${linkedinInView ? ' in-view' : ''}`}
          ref={linkedinRef}
        >
          {contact.linkedin}
        </a>
      </div>
      <div className="footer">
        <span>{contact.footerLeft}</span>
        <span>{contact.footerRight}</span>
      </div>
    </div>
  );
}
