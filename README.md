# [Learn ReactJS: Part II](https://codecademy.com/learn/react-102)

1 Stateless Components From Stateful Components
* Child Components Update Their Parents' state
* Child Components Update Their Siblings' props

2 Advanced React
* Style
* Container Components From Presentational Components
* Stateless Functional Components
* PropTypes
* React Forms

3 Lifecycle Methods
* Mounting Lifecycle Methods
* Updating/Unmounting Lifecycle Methods

```
import React, {Component} from 'react'
import './App.css'

class Button extends Component {
    static get defaultProps() {
        return {color: 'red'}
    }
    handleClick() {
        this.props.onClick(this.props.color)
    }
    render() {
        return (
            <button className='Button' onClick={this.handleClick.bind(this)}>
                Make {this.props.color}
            </button>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {color: 'ivory'}
    }
    changeColor(color) {
        this.setState({color})
    }
    render() {
        return (
            <div className='App' style={{background: this.state.color}}>
                <Button color='coral' onClick={this.changeColor.bind(this)} />
                <Button color='gold' onClick={this.changeColor.bind(this)} />
                <Button color='deepskyblue' onClick={this.changeColor.bind(this)} />
            </div>
        )
    }
}

export default App
```
