import React from 'react';
import App from './App';

import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter : new Adapter()})

describe('<App />', () => {
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })
  
  it('should have .container class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('.container')).toBe(true)
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
