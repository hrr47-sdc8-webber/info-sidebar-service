import React from 'react';
import renderer from 'react-test-renderer';
import MockDate from 'mockdate'


import Website from '../src/js/components/website';
import Time from '../src/js/components/time';
import Address from '../src/js/components/address';
import Directions from '../src/js/components/directions';
import Ratings from '../src/js/components/ratings';
import RestaurantInfo from '../src/js/components/restaurantInfo';
import Map from '../src/js/components/map';
import Phone from '../src/js/components/phone';
import Schedule from '../src/js/components/schedule';

it('renders website component correctly', () => {
  const tree = renderer
    .create(<Website website="http://www.facebook.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders time component correctly', () => {
  MockDate.set(1466424490000);
  const tree = renderer
    .create(<Time opening="9:30" closing="11:30" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  MockDate.reset();
});

it('renders address component correctly', () => {
  const tree = renderer
    .create(<Address streetAddress="319 Happy St" city="Solon" state="Ohio" zipCode={44139} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders directions component correctly', () => {
  const tree = renderer
    .create(<Directions streetAddress="319 Happy St" city="Solon" state="Ohio" zipCode={44139} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders ratings component correctly', () => {
  const tree = renderer
    .create(<Ratings food_rating="3.5" service_rating="3.5" decor_rating="3.5" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders restaurant information component correctly', () => {
  const tree = renderer
    .create(<RestaurantInfo
      food_rating="3.5"
      service_rating="3.5"
      decor_rating="3.5"
      restaurantName="Happy's"
      written_review="Some great food"
      sentence="Some great food"
      neighborhood="Boston"
      typeOfFood="BBQ"
      averagePrice="30"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders map component correctly', () => {
  const tree = renderer
    .create(<Map streetAddress="319 Happy St" city="Solon" state="Ohio" zipCode={44139} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders phone component correctly', () => {
  const tree = renderer
    .create(<Phone telephoneNumber="440-349-0105" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the schedule component correctly', () => {
  MockDate.set('1/30/2000');
  const tree = renderer
    .create(<Schedule
      clicked
      open="9:30"
      close="10:30"
      dayOfTheWeek={0}
      id={Math.random()}
       />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  MockDate.reset();
})
