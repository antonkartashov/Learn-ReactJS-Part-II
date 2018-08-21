# Learn ReactJS: Part II
Codacademy:<br>
https://codecademy.com/learn/react-102

Child Components Update Their Parents' state:

```
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
```

![React States](https://github.com/antonkartashov/Learn-ReactJS-Part-II/blob/master/src/React-States.gif)

```
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
