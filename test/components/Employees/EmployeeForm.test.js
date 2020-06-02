import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmployeeForm from '../../../src/components/Employees/EmployeeForm'
configure({ adapter: new Adapter() })

describe('EmployeeForm', () => {
  const onAddEmployee = jest.fn()
  let wrapper
  beforeEach(() => {
    wrapper = mount(<EmployeeForm
      onAddEmployee={onAddEmployee}
      loading={false}
    />)
  })

  it('renders', () => {
    expect(wrapper).not.toBeNull()
  })

  it('should render <EmployeeForm/>', () => {
    expect(wrapper.find(EmployeeForm)).toHaveLength(1)
  })

  it('should have proper props for file field', () => {
    expect(wrapper.find('input[type="file"]').props()).toEqual({
      id: 'image',
      onChange: expect.any(Function),
      type: 'file'
    })
  })

  it('should have proper props for name field', () => {
    expect(wrapper.find('input[id="name"]').props()).toEqual({
      id: 'name',
      onChange: expect.any(Function),
      type: 'text',
      value: ''
    })
  })

  it('should have proper props for age field', () => {
    expect(wrapper.find('input[id="age"]').props()).toEqual({
      id: 'age',
      onChange: expect.any(Function),
      type: 'number',
      value: ''
    })
  })

  it('should have proper props for age field', () => {
    expect(wrapper.find('input[id="salary"]').props()).toEqual({
      id: 'salary',
      onChange: expect.any(Function),
      type: 'number',
      value: ''
    })
  })
})
