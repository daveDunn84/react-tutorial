import React, { Component } from 'react'

class Form extends Component {

    initialState = {
        firstName: '',
        job: '',
        numberOfChanges: 0
    }

    state = this.initialState

    handleChange = (event) => {

        // how does name / value get the correct info from target??
        const { id, name, value } = event.target

        this.setState({
            [name]: value,
            numberOfChanges: this.state.numberOfChanges + 1
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState);
    }

    render() {
        const { firstName, job, numberOfChanges } = this.state

        return (
            <form>
                <label htmlFor='firstName'>firstName</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                 />
                 <input
                    type="text"
                    name="noOfChanges"
                    id="noOfChanges"
                    value={numberOfChanges}
                    //onChange={this.handleChange}
                />
                <input
                    type="button"
                    onClick={this.submitForm}
                    value="Add Character"
                />
            </form>
        )
    }
}

export default Form;