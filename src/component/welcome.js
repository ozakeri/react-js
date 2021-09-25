import React, {Component} from 'react'
import Proptypes from 'prop-types'

const Welcome = (props) => {
    return <div>
        {props.children}
    </div>
}

export default class Website extends Component {
    render() {
        return (
            <div>
            <Welcome>

            </Welcome>

            <h1 onClick={this.props.handler}> Test </h1>
            <p>My name Is {this.props.name + " And " + this.props.age} And
                I <span>{Math.floor(Math.random() * 30)}</span></p>
        </div>)
    }
}

Website.propTypes = {
    name: Proptypes.string,
    age: Proptypes.number.isRequired,
    handler: Proptypes.func
}

Website.defaultProps = {
    name: "testiiiiiiiiiitestiiiiiiiiii"
}

Welcome.propTypes = {
    children: Proptypes.arrayOf(Proptypes.element)
}




