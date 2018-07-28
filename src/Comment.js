import React, { Component } from 'react'

class Comment extends Component{
    render() {
        const { comment } = this.props
        return(
            <div className='col-sm-12'>
                <div className='card'>
                    <p className='card-body'>{comment.comment}</p>
                </div>
            </div>
        )
    }
}

export default Comment