import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import {App} from '../app/containers/app/app';
import Balance from '../app/containers/balance/balance';
import Buysell from '../app/containers/buysell/buysell';
import History from '../app/containers/history/history';




describe('<App />', () => {
    it('contains an <Balance/> component', function () {
        const wrapper = shallow(<App   />);
        expect(wrapper.find(Balance)).to.have.length(1);
    });

    it('contains an <Buysell/> component', function () {
		  const wrapper = shallow(<App />);
		  expect(wrapper.find(Buysell)).to.have.length(1);
    });
    it('contains an <History/> component', function () {
        const wrapper = shallow(<App />);
        expect(wrapper.find(History)).to.have.length(1);
    });


});
