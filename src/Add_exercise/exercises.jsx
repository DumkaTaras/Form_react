import React, { Component } from "react";
import "./exercise.css";

class Exercise extends Component {
  state = {
    exercise_name: "",
    isCheck: false,
    filterText: "",
    array_exercise: [],
  };

  writeExercise = (event) => {
    this.setState({ exercise_name: event.target.value });
  };

  addExercise = () => {
    const { exercise_name, isCheck } = this.state;

    if (exercise_name.trim() === "") return;

    const newItem = {
      name: exercise_name,
      checked: isCheck,
    };

    this.setState((prevState) => ({
      array_exercise: [...prevState.array_exercise, newItem],
      exercise_name: "",
    }));
  };

  deleteExercise = (id) => {
    this.setState((prevState) => ({
      array_exercise: prevState.array_exercise.filter((_, i) => i !== id),
    }));
  };

  checkedTask = (event) => {
    const { value, checked } = event.target;
    const newArray = this.state.array_exercise.map((el) =>
      el.name === value ? { ...el, checked } : el
    );
    this.setState({ array_exercise: newArray });
  };

  handleFilter = (event) => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const { exercise_name, array_exercise, filterText } = this.state;

    // 🔥 ФІЛЬТР ТУТ (а не в state)
    const filteredArray = array_exercise.filter((el) =>
      el.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const tasks_Counter = array_exercise.length;
    const ready_Tasks = array_exercise.filter((el) => el.checked).length;

    return (
      <div className="container">
        <div className="task_Counter">
          <h3 className="counter">Всього завдань: {tasks_Counter}</h3>
          <h3 className="counter">Виконаних завдань: {ready_Tasks}</h3>
        </div>

        <h1>Додайте завдання до списку</h1>

        <input
          onChange={this.writeExercise}
          type="text"
          value={exercise_name}
          className="input_Name"
        />

        <button className="add_Exrercise" onClick={this.addExercise}>
          Додати
        </button>

        <div className="filter">
          <p>Фільтрування по імені:</p>
          <input
            onChange={this.handleFilter}
            type="text"
            className="filter_Name"
            value={filterText}
          />
        </div>

        <div className="list_container">
          <ul className="list">
            {filteredArray.map((el, id) => (
              <li key={id}>
                <div className="exercise-box">
                  <input
                    type="checkbox"
                    value={el.name}
                    checked={el.checked}
                    onChange={this.checkedTask}
                    className="checkbox"
                  />

                  <p className={el.checked ? "done_true" : ""}>
                    {el.name}
                  </p>

                  <button
                    className="delete-exercise"
                    onClick={() => this.deleteExercise(id)}
                  >
                    Видалити
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Exercise;