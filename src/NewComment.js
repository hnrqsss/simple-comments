import React, { Component } from 'react'

class NewComment extends Component {
    render() {
        return(
            <div className='row'>
                <textarea placeholder='Type here!' className='form-control' />
            </div>
        )
    }
}

export default NewComment