import   React, { Component } from 'react'

class ParentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "john",
            lastName: "doe",
            email: "blank@mailcatch.com",
            phone: 1234567890,
            university: "Illinois Institute of Technology",
            timezone: "CST",
            bio: "beep boop"

        };
        //this.handleInputChange = this.handleInputChange.bind(this);
        //onChange={e => this.setState({ firstName: e.target.value})}
    }


render() {
    return ( 

        <form id = "ParentForm">
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
            <label>
                University:
                <input
                name="university"
                type="text"
                value={this.state.university}
                onChange={e => this.setState({ university: e.target.value})} />

            </label>
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
            <label>
                Short Bio:
                <input
                name="bio"
                type="text"
                value={this.state.bio}
                onChange={e => this.setState({ bio: e.target.value})} />

            </label>
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

