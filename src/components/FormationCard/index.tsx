import React from 'react';

interface Formation {
  title: string;
  institution: string;
  period: string;
  description: string;
}

interface Props {
  formation: Formation;
}

const FormationCard: React.FC<Props> = ({ formation }) => {
  return (
    <div>
      <h4>
        {formation.title} - {formation.period}
      </h4>
      <p>
        <strong>{formation.institution}</strong>
      </p>
      <p>{formation.description}</p>
    </div>
  );
};

export default FormationCard;
