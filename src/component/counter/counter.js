import React, {Component} from 'react'
import "./counter.css";
import Button from "./buttonStyle";
import style from "./counter.module.css";
import module from "./counter.module.css"


/*const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    return (
        <div>
            <p>
                you click {count} item
            </p>

            <button onClick={() => setCount(count + 1)}>
                click me
            </button>

            <input name={'name'} value={name} onChange={handleChange}/>

        </div>

    )
}*/


export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', count: 0
        }
    }

    render() {
        return (
            <div>
                <p className={module.tagStyle}>
                    you click {this.state.count} item
                </p>

                <Button onClick={() => this.setState({count: this.state.count + 1})}>
                    click me
                </Button>

                <input name={'name'} value={this.state.name} onChange={(e)=>this.setState({name : e.target.value})}/>

            </div>
        )
    }
}