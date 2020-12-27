import   React, { Component } from 'react'

class ParentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "john",
            lastName: "doe",
            email: "blank@mailcatch.com",
            phone: 1234567890,
            timezone: "CST",
            essential: "True"


        };
        //this.handleInputChange = this.handleInputChange.bind(this);
        //onChange={e => this.setState({ firstName: e.target.value})}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }

render() {
    console.log("ParentForm.js")
    return ( 

        <form onSubmit ={this.handleSubmit}
        id = "ParentForm">
            <div>
            <label>
                First Name:
                <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                //onChange={this.handleInputChange} 
                onChange={e => this.setState({ firstName: e.target.value})}
                />

            </label>
            <br />
            <label>
                Last Name:
                <input
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value})} />


            </label>
            <br />
            <label>
                Email:
                <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value})} />

            </label>
            <br />
            <label>
                Phone:
                <input
                name="phone"
                type="number"
                value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value})} />

            </label>
            <br />

            <br />
            <label>
                Timezone:
                <input
                name="timezone"
                type="text"
                value={this.state.timezone}
                onChange={e => this.setState({ timezone: e.target.value})} />

            </label>
            <br />

            </div>
            <p class = "full">
                <button type="submit">Submit</button>
            </p>
        </form>
    )
}
    }
//<script src="mainPF.js"></script>
export default ParentForm

