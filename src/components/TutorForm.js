import   React, { Component } from 'react'

class TutorForm extends React.Component {
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
    }


render() {
    return ( 

        <form>
            <div>
            <label>
                First Name:
                <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange} />

            </label>
            <br />
            <label>
                Last Name:
                <input
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInputChange} />


            </label>
            <br />
            <label>
                Email:
                <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange} />

            </label>
            <br />
            <label>
                Phone:
                <input
                name="phone"
                type="number"
                value={this.state.phone}
                onChange={this.handleInputChange} />

            </label>
            <br />
            <label>
                University:
                <input
                name="university"
                type="text"
                value={this.state.university}
                onChange={this.handleInputChange} />

            </label>
            <br />
            <label>
                Timezone:
                <input
                name="timezone"
                type="text"
                value={this.state.timezone}
                onChange={this.handleInputChange} />

            </label>
            <br />
            <label>
                Short Bio:
                <input
                name="bio"
                type="text"
                value={this.state.bio}
                onChange={this.handleInputChange} />

            </label>
            </div>

        </form>
    )
}
    }
export default TutorForm