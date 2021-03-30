import React from "react";
import './App.css';
import Counter from "./Counter";
// import Employee from "./Employee";
// import TodoList from './TodoList';
import { Switch, Route, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { AppBar, Button, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";



// const employeeInfo = [
//   {
//     firstName: "Jack",
//     lastName: "Smith",
//     age: "21",
//     employeeId: "1",
//   },
//   {
//     firstName: "Bob",
//     lastName: "Pole",
//     age: "22",
//     employeeId: "2",
//   },
//   {
//     firstName: "Car",
//     lastName: "Man",
//     age: "23",
//     employeeId: "3",
//   },
// ]

function App() {
  //to read a variable from reduxStore, we need the useSelector hook.
  //useSelector kinda has an automatic parameter, state, that it passes in.
  //In state.counter.count, counter is the file name and count is the variable inside the initialState object
  const count = useSelector((state) => state.counter.count);
  const voters = ["Samurai", "Gene", "Sulivan"];

  const history = useHistory();
  let location = useLocation();
  
  function navigateTo(newPath) {
    console.log(location.pathname + " vs " + newPath);
    //do not push to history unnecessarily
    if (location.pathname !== newPath) {
      console.log("pushed " + newPath);
      history.push(newPath);
    }
  }

  return (
    <div className="App" style={{paddingTop: "37px", backgroundColor: "grey", height: "100vh"}}>
      <AppBar position="fixed">
        <Grid container justify="center">
          <Button variant="contained" onClick={() => navigateTo("/about")}> About Us </Button>
          <button onClick={() => navigateTo("/contact")}> Contact Us </button>
          <button onClick={() => navigateTo("/")}> Home Page </button>          
        </Grid>
      </AppBar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <h2>In App component, the total count is {count}</h2>
      {voters.map(voter => (
        <Counter key={voter} name={voter} />
      ))}

      {/* <TodoList /> */}
        {/* <h1> Company Directory </h1>
        <Employee {...employeeInfo[0]} /> */}

        {/* {employeeInfo.map(employee => {
          return (
            <Employee key={employee.employeeId} {...employee} />
          )
        })} */}

        {/* <Employee firstName="Jack" lastName="Smith" />
        <Employee firstName="Stephanie" lastName="A" />
        <Employee firstName="George" lastName="B" />
        <Employee firstName="Anthony" lastName="C" /> */}
    </div>
  );
}

export default App;
