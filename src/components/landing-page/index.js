import React, { Component } from "react";

import '../../styles/styles.less';
import RandomSearch from '../random-search/index';
import SearchEnquiry from '../search-enquiry/index';

class App extends Component {
    render() {
        return (
            <div className="mywojtek">
            <div className="mywojtek__header"> My Wojtek Beer Factory<span className="wojtek-icon"></span></div>
             <RandomSearch />
             <SearchEnquiry />
            </div>
        );
    }
}

export default App;
