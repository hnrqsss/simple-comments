import React, { Component } from 'react'

import Comment from './Comment'

class Comments extends Component {
    
    render() {  
        const { comments }  = this.props
        return(
            <div className='row'>
                {Object.keys(comments).map(index => <Comment comment={comments[index]} key={index} />)}
            </div>
        )
    }
}

export default Comments