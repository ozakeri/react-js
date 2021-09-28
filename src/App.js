import './App.css';
import React, {useState} from "react";
import Greeting from "./component/greeting";
import Email from "./component/mailBox";


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


    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logIn = () => {
        setIsLoggedIn(true)
    }

    const logOut = () => {
        setIsLoggedIn(false)
    }

    let button
    if (isLoggedIn){
        button = <button onClick={logOut}> LogOut </button>
    }else {
        button = <button onClick={logIn}> LogIn </button>
    }

    const messageList = ['one','two','three']

    return (
        <div className="App">
            {/*  <Website name="OMIDDDDDD" age={20} handler={() => clickHandler("One")}/>
                <Website name="Zakeri" age={30} handler={() => clickHandler("Two")}/>*/}

            {/* <Counter/>*/}
            {/*
            <a href={'https://www.google.com/'} onClick={gotoSite}>
                Click Me
            </a>

            <button onClick={handleToggleClick}>
                {isToggleOn? 'ON' : 'OFF'}
            </button>*/}

           {/* <Greeting isLoggedIn={isLoggedIn}/>
            {button}*/}

            <Email messageList = {messageList}></Email>

        </div>)

}

export default App;
