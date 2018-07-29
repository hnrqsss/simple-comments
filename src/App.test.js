import React from 'react';
import App from './App';

import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import base from './base'

Enzyme.configure({ adapter : new Adapter()})

describe('<App />', () => {
  
  const base = {
    syncState: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.length).toBe(1)
  })
  
  it('should have .container class', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('shows comments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('shows NewComments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })

  it('add a new comment to state when postNewComment', () => {
    const wrapper = shallow(<App base={base} />)
    wrapper.instance().postNewComment({comment: 'test 1 enzyme'})
  
    const comments = Object.keys(wrapper.instance().state.comments)
    console.log(comments.length)
    expect(comments.length).toBe(1)
  })

  // it('outputs the <App />', () => {
  //   const wrapperShallow = shallow(<App />)
  //   const wrapperMount   = mount(<App />)
  //   const wrapperRender  = render(<App />)

  //   console.log(wrapperShallow.debug())
  //   console.log(wrapperMount.debug())
  //   console.log(wrapperRender.html())
  // })

})
