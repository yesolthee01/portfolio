import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { useInView } from '../hooks/useInView';

export function ContactSection() {
  const { lang } = useLanguage();
  const contact = siteCopy[lang].contact;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div id="contact" className={`contact-section section${inView ? ' in-view' : ''}`} ref={ref}>
      <h2 className="contact-title">
        {contact.line1}
        <br />
        {contact.line2part1} <span className="accent">{contact.line2accent}</span>
        {contact.line2part2}
      </h2>
      <div className="contact-cta">
        <a href={`mailto:${contact.email}`} className="btn btn-primary press-bounce">
          {contact.email}
        </a>
        <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="btn btn-outline press-bounce">
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
