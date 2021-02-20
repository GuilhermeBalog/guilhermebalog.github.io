import React from 'react';

interface Work {
  job: string;
  institution: string;
  period: string;
  description: string;
}

interface Props {
  work: Work;
}

const WorkElement: React.FC<Props> = ({ work }) => {
  return (
    <div>
      <h4>
        {work.job} - {work.institution}
      </h4>
      <p>
        <strong>{work.period}</strong>
      </p>
      <p>{work.description}</p>
    </div>
  );
};

export default WorkElement;
