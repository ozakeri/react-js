import './App.css';
import React, {useState} from "react";


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

    const gotoSite = (e) => {
        e.preventDefault();
        console.log('google.com')
    }

    const [isToggleOn, setToggle] = useState(true);
    const handleToggleClick = () => {
        setToggle(!isToggleOn)
    }

    return (
        <div className="App">
            {/*  <Website name="OMIDDDDDD" age={20} handler={() => clickHandler("One")}/>
                <Website name="Zakeri" age={30} handler={() => clickHandler("Two")}/>*/}

            {/* <Counter/>*/}

            <a href={'https://www.google.com/'} onClick={gotoSite}>
                Click Me
            </a>

            <button onClick={handleToggleClick}>
                {isToggleOn? 'ON' : 'OFF'}
            </button>
        </div>)

}

export default App;
