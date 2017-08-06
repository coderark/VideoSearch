import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(prop){
        super(prop);
        this.state={term: ''};
    }

    render(){
        return <div>
            <input
                value={this.state.term}
                onChange={event=>this.setState({term:event.target.value})}/>
            val: {this.state.term}
        </div>;
    }
}

export default SearchBar;