import React, { useState, useCallback, useMemo, useEffect } from 'react'

import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'
import ErrorModal from '../UI/ErrorModal'
import Search from './Search'
import axios from '../../axios-employees'

function Employees () {
  const [employees, setEmployees] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const addEmployeeHandler = useCallback((employee) => {
    setIsLoading(true)
    /*
    const fd = new FormData()
    fd.append('profile_image', employee.profile_image, employee.profile_image.name)
    fd.set('employee_name', employee.employee_name)
    fd.set('employee_age', employee.employee_age)
    fd.set('employee_salary', employee.employee_salary)
    const fileHeaders = {
      'content-type': 'multipart/form-data',
      'Accept': 'application/json',
    }

    console.log(...fd)
    axios
      .post('/api/employee', fd, fileHeaders)
    */
    axios
      .post('/api/employee', employee)
      .then((response) => {
        setIsLoading(false)
        return response.data
      })
      .then((responseData) => {
        return setEmployees((prevEmployees) => [
          ...prevEmployees,
          {
            ...responseData
          }
        ])
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }
  , [])

  const getEmployeeHandler = useCallback((search) => {
    setIsLoading(true)
    axios
      .get('/api/employee')
      .then((response) => {
        setIsLoading(false)
        return response.data
      })
      .then((responseData) => {
        let result = responseData
        if (search.length) {
          result = result.filter((item) => {
            return item.employee_name
              .toLowerCase()
              .includes(search.toLowerCase())
          })
        }
        return setEmployees(result)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  const removeEmployeeHandler = useCallback((id) => {
    setIsLoading(true)
    axios
      .delete(`/api/employee/${id}`)
      .then((response) => {
        setIsLoading(false)
        if (response.status !== 200) {
          throw new Error('Bad response')
        }
        return response.data
      })
      .then((responseData) => setEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => emp.id !== id)
      ))
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  const sortBy = useCallback((sortedEmployeesList) => {
    setEmployees(sortedEmployeesList)
  }, [])

  useEffect(() => {
    sortBy(employees)
  }, [sortBy, employees])

  const clearError = useCallback(() => {
    setError(false)
  }, [])

  const employeeList = useMemo(() => {
    return (
      <EmployeeList
        sortBy={sortBy}
        employees={employees}
        onRemoveEmployee={removeEmployeeHandler}
      />
    )
  }, [sortBy, employees, removeEmployeeHandler])

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>
        {error}
      </ErrorModal>}
      <section>
        <Search onFilterEmployees={getEmployeeHandler} />
        <EmployeeForm
          onAddEmployee={addEmployeeHandler}
          loading={isLoading}
        />
        {employeeList}
      </section>
    </div>
  )
}

export default Employees
