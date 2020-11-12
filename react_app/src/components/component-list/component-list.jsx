import React,{Component} from 'react';
import ComponentItem from "../component-item/component-item";

export default class ComponentList extends Component{
    render() {
        return(
            <div>
                <h3>评论回复：</h3>
                <h2 style={{dispaly:"none"}}>暂无评论，点击左侧添加评论!!!</h2>
                <ul>
                    <ComponentItem/>
                </ul>

            </div>
        )
    }
}
