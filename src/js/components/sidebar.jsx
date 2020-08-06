import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {

    let restaurantName, website, telephoneNumber, streetAddress, city, state, zipCode;

    if (this.props.data.length) {
      restaurantName = this.props.data[0][0].Restaurant_Name;
      website = this.props.data[0][0].Website;
      telephoneNumber = this.props.data[0][0].Telephone;
      streetAddress = this.props.data[1][0].Street_Address;
      city = this.props.data[1][0].City;
      state = this.props.data[1][0].State;
      zipCode = this.props.data[1][0].Zip_Code;
    }

    return (
      <div>
        {restaurantName}
        {website}
        {streetAddress}
        {zipCode}
      </div>
    );
  }
}

export default Sidebar;