import React, {Component} from 'react';

class HouseSelector extends Component {

    constructor(props) {
        super(props);
        this.houses = ["Hufflepuff", "Gryffindor", "Slytherin", "Ravenclaw"]
        this.state = {
            selectedHouse: undefined
        }
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({selectedHouse: e.target.value});
       
    }

    render() {
        const options = this.houses.map ((house,index)=>{
            return <option value={house} key={index} > {house} </option>
        })

        return <select id="houses" value={this.state.seletedHouse} onChange={this.handleChange.bind(this)} >
        {options}
        </select>
    }

}

export default HouseSelector;