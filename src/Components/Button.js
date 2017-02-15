import React from "react"

let Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.onClick}>
        Yo
      </button>
    )
  }
})

export default Button
