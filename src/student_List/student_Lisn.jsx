import React from "react";
import "./students.css";

class List extends React.Component {
  state = {
    name: "",
    group: "",
    course: "",
    isPresent: false,
    students: [],
  };

  hendleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hendleChangeCourse = (event) => {
    const { value } = event.target;
    this.setState({
      course: value,
    });
  };

  hendleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.state.students.push({
      name: this.state.name,
      group: this.state.group,
      course: this.state.course,
      isPresent: this.state.isPresent,
    });
    console.log(this.state.students);
    this.setState({
      name: "",
      group: "",
      course: "",
      isPresent: false,
    });
  };

  render() {
    const { name, group, course, isPresent } = this.state;
    const isFormValid = name && group && course;
    return (
      <div className="container">
        <form onSubmit={this.hendleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.hendleChange}
            placeholder="Iм'я"
          />
          <input
            type="text"
            name="group"
            value={group}
            onChange={this.hendleChange}
            placeholder="Група"
          />
          <p>
            Enter course:{" "}
            {["HTML", "CSS", "JS", "React"].map((el) => (
                <span>
                    {el}
              <input
                type="checkBox"
                name="course"
                value={el}
                onChange={this.hendleChangeCourse}
                checked={course === el}
              />
              </span>
            ))}
          </p>
          <label>
            {["Присутній", "Відсутній"].map((el) => (
              <span>
                {el}
                <input
                  type="radio"
                  name="isPresent"
                    value={el}
                    onChange={this.hendleChange}
                    checked={isPresent === el}
                />
              </span>
            ))}
          </label>
          <button type="submit" disabled={!isFormValid}>
            Відправити
          </button>
        </form>

        <div className="students-list">
            <h2>Students list</h2>
            {this.state.students.map((student, index) => (
              <div key={index} className="student-item">
                <h3>Student #{index + 1}</h3>
                <p>Name: {student.name}</p>
                <p>Group: {student.group}</p>
                <p>Course: {student.course}</p>
                <p>Is Present: {student.isPresent}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default List;
