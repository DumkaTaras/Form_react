import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Exercise from "./Add_exercise/exercises";
import Form from "./form/form";
import List from "./student_List/student_Lisn";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        {/* <List /> */}
        <Exercise/>
      </div>
    );
  }
}

export default App;
