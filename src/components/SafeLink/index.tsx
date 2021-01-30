import React from 'react';

interface Props {
  href: string;
}

const SafeLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default SafeLink;
