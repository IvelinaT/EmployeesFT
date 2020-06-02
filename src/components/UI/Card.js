import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

function Card (props) {
  return (<div className="card">
    {props.children}
  </div>)
}
Card.propTypes = {
  children: PropTypes.node.isRequired
}
export default Card
