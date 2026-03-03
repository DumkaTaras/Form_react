import React from "react";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
  gender: "",
  age: "",
};
const Gender = {
  MALE: "male",
  FEMALE: "female",
};

class Form extends React.Component {
      state = {
    ...INITIAL_STATE,
  };

  hendleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };
  hendleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    alert(`Login: ${this.state.login}`);
    this.setState(INITIAL_STATE);
  };
  render() {
    const { login, email, password, agreed, gender, age } = this.state;
    const isFormValid = login && email && password && agreed && gender && age;
    return (
      <div className="container">
        <form onSubmit={this.hendleSubmit}>
          <h2>Registration form</h2>
          <input
            type="text"
            name="login"
            placeholder="Login..."
            value={login}
            onChange={this.hendleChange}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={this.hendleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={password}
            onChange={this.hendleChange}
          />
          <br />
          <section>
            <h3>Choose your gender</h3>
            <label>
              <input 
              type="radio"
              name="gender"
              value={Gender.MALE}
              checked = {gender === Gender.MALE}
              onChange={this.hendleChange} />
              Male
            </label>
          </section>
          <br />
          <label>
            Chose your age
            <select name="age" value={age} onChange={this.hendleChange}>
              <option value="" disabled>Select age</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
            </select>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={this.hendleChange}
            />
            I agree with terms and conditions
          </label>
          <br />
          <button type="submit" disabled={!isFormValid}>
            Register{login || " user"}
          </button>
        </form>
      </div>
    );
  }
}

export default Form;