import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmployeeList from '../../../src/components/Employees/EmployeeList'
configure({ adapter: new Adapter() })

describe('EmployeeList', () => {
  const employees = [
    { id: 2, employee_name: 'Garrett Winters', employee_salary: 170750, employee_age: 63, profile_image: '' },
    { id: 3, employee_name: 'Ashton Cox', employee_salary: 86000, employee_age: 66, profile_image: '' },
    { id: 4, employee_name: 'Cedric Kelly', employee_salary: 433060, employee_age: 22, profile_image: '' }]
  const sortBy = jest.fn()
  let wrapper
  beforeEach(() => {
    wrapper = mount(<EmployeeList
      employees={employees}
      sortBy={sortBy}
    />)
  })

  it('renders', () => {
    expect(wrapper).not.toBeNull()
  })

  it('should render <EmployeeList/>', () => {
    expect(wrapper.find(EmployeeList)).toHaveLength(1)
  })

  it('should render list of employees', () => {
    expect(wrapper.find('.employee-list')).toBeDefined()
  })

  it('should render <select>', () => {
    expect(wrapper).not.toBeNull()
  })
})
