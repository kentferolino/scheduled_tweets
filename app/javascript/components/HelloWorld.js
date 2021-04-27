import React from "react";
import PropTypes from "prop-types";
class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: 15 }}>Greetings {this.props.greeting}</div>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default HelloWorld;
