import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../UI/Card'
import LoadingIndicator from '../UI/LoadingIndicator'
import './EmployeeForm.css'

const EmployeeForm = React.memo((props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')
  const [image, setImage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddEmployee({
      employee_name: name,
      employee_age: age,
      employee_salary: salary,
      profile_image: image
    })
  }

  const selectFile = (event) => {
    setImage(event.target.files[0])
  }

  return (
    <section className="employee-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="salary">
              Salary
            </label>
            <input
              type="number"
              id="salary"
              value={salary}
              onChange={(event) => setSalary(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="image">
                Image
            </label>
            <input
              id="image"
              onChange={selectFile}
              type="file"
            />
          </div>

          <div className="employee-form__actions">
            <button type="submit">
              Add Employee
            </button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  )
})
EmployeeForm.propTypes = {
  onAddEmployee: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}
EmployeeForm.displayName = 'EmployeeForm'
export default EmployeeForm
