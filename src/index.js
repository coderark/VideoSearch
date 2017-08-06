import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyAFQTBwhRIqp2FmPOf7xA0l97tiFG_S2q4'

const App=()=>{
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));