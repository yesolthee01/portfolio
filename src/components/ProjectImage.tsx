import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
}

/**
 * Renders a real image from /public/images/... when present.
 * Falls back to a soft glass placeholder (matching the Fluid Glass
 * design system) if the file hasn't been added yet.
 */
export function ProjectImage({ src, alt, label, className }: ProjectImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`img-placeholder ${className ?? ''}`}>
        <span>{label}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setErrored(true)} />;
}
