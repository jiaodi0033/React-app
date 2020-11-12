import React,{Component} from 'react';

import "./headerStyle.css"

export default class Header extends Component{
    render() {
        return(
            <div className="header-container">
                <h1>请发表对React的评论！</h1>
            </div>
        )
    }
}
