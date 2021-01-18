import React from 'react';

function FormationCard({ formation }) {
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
}

export default FormationCard;
