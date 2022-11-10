import React from 'react'

import { render } from '@testing-library/react'

    
export class Filter extends React.Component {

    // state = {
    //     inputValue: '',
    // }

    // handleChange = (e) => {
    //     e.preventDefault()
    //     console.log(e.currentTarget.value)
        
    //     this.setState(({ inputValue: e.currentTarget.value }))
    //     // this.props.filterFunc(this.state.inputValue)
    // }

    
    render() {
        return (
        <label htmlFor="filter">
            <input name="filter" type="text" value={this.props.inputValue} onChange={this.props.filterFunc} />
        </label>
       
    )
    }
    
}