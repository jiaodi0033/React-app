import React,{Component} from 'react';

export default class ComponentItem extends Component{
    render() {
        return(
            <li>
                <div>userName说：</div>
                <p>React 是一个很好的js库</p>
                <button>删除</button>
            </li>
        )
    }
}
