import React from 'react';

const WizardDetail = ({wizard}) => {
    if(!wizard) {
        return null;
    }

    return (
      <div>
        <h3>
        Wizard Detail here
        </h3>
        <p>{wizard.name}</p>
        <p>{wizard.ancestry}</p>
      </div>
    );
} 

export default WizardDetail;