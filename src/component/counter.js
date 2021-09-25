import React, {useState} from 'react'

const Counter = () => {
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
}

export default Counter