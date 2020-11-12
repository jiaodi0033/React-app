import React,{Component} from 'react';

import ComponentAdd from "../component-add/component-add";
import ComponentList from "../component-list/component-list";

import './contentStyle.css'

export default class Content extends Component{
    render() {
        return(
            <div className="content-container">
                <ComponentAdd />
                <ComponentList />
            </div>
        )
    }
}
