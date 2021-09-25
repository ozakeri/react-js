import './App.css';
import React from "react";
import Website from "./component/welcome";
import Counter from "./component/counter";

/*function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}*/

const App = () => {
    const clickHandler = (name) => {
        alert(name)
    }

        return (
            <div className="App">
              {/*  <Website name="OMIDDDDDD" age={20} handler={() => clickHandler("One")}/>
                <Website name="Zakeri" age={30} handler={() => clickHandler("Two")}/>*/}

                <Counter/>
            </div>)

}

export default App;
