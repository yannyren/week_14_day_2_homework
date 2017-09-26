import React, {Component} from 'react';
import WizardDetail from '../components/WizardDetails.jsx';
import WizardSelector from '../components/WizardSelector.jsx';
import HouseSelector from '../components/HouseSelector.jsx';

class WizardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wizards: [],
            selectedWizard: null
        };

    }

    componentDidMount() {
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then((res)=> res.json())
    .then((res)=> this.setState({wizards: res, selectedWizard:res[0]}));
  }

  onChangeWizard(wizard) {
      this.setState({selectedWizard: wizard})
  }

    render() {
       
        return (
            <div>
            <h2>Wizard Sorting Hat</h2>
            <WizardSelector wizards={this.state.wizards} onChangeWizard={this.onChangeWizard.bind(this)}/>
            <WizardDetail wizard={this.state.selectedWizard}/>
            <HouseSelector />
            </div>  
        )
    }

}

export default WizardContainer;

