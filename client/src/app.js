import React from 'react';
import ReactDOM from 'react-dom';
import WizardsContainer from './containers/WizardsContainer.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    <WizardsContainer />,
    document.getElementById('app')
  );
});
