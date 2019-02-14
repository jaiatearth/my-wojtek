import React, { Component } from "react";

import '../../styles/styles.less';
import RandomSearch from '../random-search/index';
import SearchEnquiry from '../search-enquiry/index';
import label from "../configs/label.config";

class App extends Component {
    render() {
        return (
            <div className="mywojtek">
            <div className="mywojtek__header"> {label.appHeader}<span className="wojtek-icon"></span></div>
             <RandomSearch />
             <SearchEnquiry />
            </div>
        );
    }
}

export default App;
