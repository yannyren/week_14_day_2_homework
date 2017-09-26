import React, {Component} from 'react';


class WizardSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: undefined
        }
    }

    handleChange(e) {
        this.setState({selectedIndex: e.target.value});
        this.props.onChangeWizard(this.props.wizards[e.target.value]);

    }

    render() {

        const options = this.props.wizards.map ((wizard, index) => {
            return <option value={index} key={index} > {wizard.name} </option>
        })

        return (
            <select id="wizards" value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
               {options}
            </select>
        )
    }
}

export default WizardSelector;