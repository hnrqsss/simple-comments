import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {comments: {}}

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
  }

  postNewComment(comment) {
    const comments = {...this.state.comments}
    
    const timeStamp = Date.now()
    
    comments[`comm-${timeStamp}`] = comment
    
    this.setState({comments: comments})
  }

  render() {
    return (
      <div className="container">
        <NewComment  postNewComment={this.postNewComment}/>
        <Comments comments={this.state.comments} />        
      </div>
    );
  }
}

export default App
