import React,{Component} from 'react';

import logo from '../../logo.svg'
import Header from "../header/header";
import Footer from "../footer/footer";
import Content from "../content/content";

import './appStyle.css';
export default class App extends Component{
    render() {
        return(
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

