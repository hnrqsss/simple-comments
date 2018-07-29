import React from 'react'

const Comment = props => {
    
    const { comment } = props
    
    return(
        <div className='col-sm-12'>
            <div className='card'>
                <p className='card-body'>{comment.comment}</p>
            </div>
        </div>
    )
}

export default Comment