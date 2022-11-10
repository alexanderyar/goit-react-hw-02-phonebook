import React from 'react'

import PropTypes from 'prop-types'
import { Filter } from './Filter/Filter'



export const Contacts = ({ contacts, filterFunc, inputValue, onDeleteClick }) => (
         <>
        <h2>Contacts</h2>
        <Filter filterFunc={filterFunc} inputValue={inputValue} />
        <ul>
        {contacts.map(({ name, id, number }) => (
            <li key={id}><p>{name}: {number}</p><button type="button" onClick={() => onDeleteClick(id)}>Delete this bastard</button></li>
         
        ))}
        </ul>
        </>
)
        

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            
            })
    )
}