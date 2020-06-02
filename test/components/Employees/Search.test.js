import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from '../../../src/components/Employees/Search'
import Card from '../../../src/components/UI/Card'
configure({ adapter: new Adapter() })

describe('Search', () => {
  const onFilterEmployees = jest.fn()
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Search onFilterEmployees={onFilterEmployees} />)
  })

  it('renders', () => {
    expect(wrapper).not.toBeNull()
  })

  it('should render <Card/> element', () => {
    expect(wrapper.find(Card)).toHaveLength(1)
  })
  it('should render Filter by Name label', () => {
    expect(wrapper.find('label').text()).toEqual('Filter by Name')
  })
})
