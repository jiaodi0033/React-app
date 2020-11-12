import React,{Component} from 'react';

export default class ComponentAdd extends Component{
    render() {
        return(
            <div>
                <form>
                    用户名<br/>
                    <input type="text" placeholder="用户名"/><br/>
                    评论内容<br/>
                    <textarea type="textarea" placeholder="请输入评论内容。。。"/><br/>
                    <input type="submit" value="提交"/>

                </form>
            </div>
        )
    }
}
