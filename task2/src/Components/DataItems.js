import React from 'react'
import PropTypes from 'prop-types'
import './dataitem.css'

function DataItems(props) {
    return (
        <>
        <div className="my-3">
            <div className="card">
                <img src={props.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.firstName} {props.lastName}</h5>
                    <p className="card-text">{props.email}</p>
                </div>
            </div>
        </div>
        </>
    )
}

DataItems.propTypes = {
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
    
}

DataItems.defaultProps ={
    email: "abc@xyz.com",
    firstName: "Unknown",
    lastName: "Unknown"
}

export default DataItems

