import React, { useState, useEffect } from 'react'

import './EmployeeList.css'

const EmployeeList = (props) => {
  const [sortType, setSortType] = useState('')
  const { sortBy, employees } = props

  const setSortOrder = (sortBy, sortList) => {
    const types = {
      age: 'employee_age',
      salary: 'employee_salary'
    }
    const sortProperty = types[sortBy]
    const sorted = [...sortList].sort((a, b) => Number(a[sortProperty]) - Number(b[sortProperty]))
    return sorted
  }

  useEffect(() => {
    const sorted = setSortOrder(sortType, employees)
    sortBy(sorted)
  }, [sortBy, sortType, employees])

  const content = !props.employees.length ? (
    <section className="employee-list">
      <h2>
            No Employees
      </h2>
    </section>
  ) : (
    <section className="employee-list">
      <h2>
          Loaded Employees
      </h2>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="age">
              Age
        </option>
        <option value="salary">
              Salary
        </option>
      </select>

      <ul>
        <li>
          <span>
                Name
          </span>
          <span>
              Age
          </span>
          <span>
                Salary
          </span>
          <span>
              Delete?
          </span>
        </li>
        {[...employees].map((emp) => (
          <li key={emp.id}>
            <span>
              {emp.employee_name}
            </span>
            <span>
              {emp.employee_age}
            </span>
            <span>
              {(emp.employee_salary / 100).toFixed(2)}
            </span>
            <span onClick={() => props.onRemoveEmployee(emp.id)}>
              {emp.profile_image && (
                <img
                  alt={emp.employee_name}
                  src={emp.profile_image}
                />
              )}
                x
            </span>
          </li>
        ))}
      </ul>
    </section>
  )

  return content
}

export default EmployeeList
