import React, {Component} from 'react'
// export default class Comment extends Component {
//   static defaultProps = {
//     comments:[]
//   }
//   render() {
//     return(
//       <div>
//         <div>
//           <span>{this.props.comment.username}:{this.props.comment.content}</span>
//         </div>
//       </div>
//     )
//   }
// }

 const Comment = (props) => {
  return (
    <div>
      <span>{props.comment.username}:{props.comment.content}</span>
    </div>
  )
}
export default Comment