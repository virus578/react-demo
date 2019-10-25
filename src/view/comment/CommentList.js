import React, {Component} from 'react'
import Comment from './Comment'
export default class CommenentList extends Component {
  render() {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]
    return(
      <div>
        {/* 新建comment描述每条评论的内容 */}
        {/* {comments.map((comment, i) => {
          return (
            <div key={i}>
              {comment.username}{comment.content}
            </div>
          )
        })} */}
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
    )
  }
}