import React, { Component } from 'react'
import { Button } from '../../globalStyles';
import GoogleMapReact from 'google-map-react';
import {
  Container,
  Subscription,
  SubHeading,
  SubText,
  Form,
  FormInput
} from './FindLocation.elements';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;



const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class FindLocation extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <Container>     
      <Subscription>
      <SubHeading>
      Physical Therapy Locations
      </SubHeading>
      <SubText>Search for an ATI Physical Therapy location near you and get on the road to recovery</SubText>
      <Form>
        <FormInput name='email' type='text' placeholder='Enter an Address, City, State and/or ZIP Code' />
        <Button fontBig>Search</Button>
      </Form>
    </Subscription>
    <div style={{ height: '60vh', width: '60%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBU6ZtGS0cotgK3jkFXSWd3BFAdON36OzE"/* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </Container>               
    );
}
}

export default FindLocation;
