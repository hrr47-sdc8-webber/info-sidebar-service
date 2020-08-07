import React from 'react';
import PropTypes from 'prop-types';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked
    })
  }

  render() {
    const { streetAddress, city, state, zipCode } = this.props;

    return (
      `${streetAddress}, ${city}, ${state}, ${zipCode}, USA`
    );
  };
}

Address.propTypes = {
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
};

export default Address;
