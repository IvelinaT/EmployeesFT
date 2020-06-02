import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from '../../../src/components/UI/Card'
configure({ adapter: new Adapter() })

describe('Card', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Card>
        test
    </Card>)
  })

  it('renders', () => {
    expect(wrapper).not.toBeNull()
  })

  it('should render <Card/> element', () => {
    expect(wrapper.find(Card)).toHaveLength(1)
  })
  it('should render <Card/> element', () => {
    expect(wrapper.find('.card')).toBeDefined()
  })
})
