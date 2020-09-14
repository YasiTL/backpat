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
            essential: true

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
                Timezone:
                <input
                name="timezone"
                type="text"
                value={this.state.timezone}
                onChange={this.handleInputChange} />

            </label>
            <br />
            </div>


            <div className="form-check">
    <label>
        Are you an Essential Worker?
        <br />
      <input
        type="radio"
        name="essential"
        value="yes"
        checked={this.state.selectedOption === "yes"}
        className="form-check-input"
      />
      Yes
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="essential"
        value="no"
        checked={this.state.selectedOption === "no"}
        className="form-check-input"
      />
      No
    </label>
  </div>




        </form>
    )
}
    }

export default ParentForm

// I don't know how to make the buttons show which one you last clicked
// http://react.tips/radio-buttons-in-react-16/
//handleOptionChange = changeEvent => {
//    this.setState({
//        selectedOption: changeEvent.target.value
//      });
//    };