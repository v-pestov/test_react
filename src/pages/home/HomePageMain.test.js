import React from 'react';
import { shallow } from 'enzyme';
import HomePageMain from './HomePageMain';
import '../../setupTests';

describe('Home-Page Main test', () => {
  it('should have "main" wraper', ()=>{
    const wraper = shallow(<HomePageMain />);
    const main = wraper.find(".home-main");
    expect(main).toHaveLength(1);
  });
});