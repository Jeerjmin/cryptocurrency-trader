import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import {Buysell} from '../app/containers/buysell/buysell';



describe('<Buysell />', () => {




    it('contains an  10 elements of cryptocurrency list + default primaryText  ', function () {

        const mockTotal = { };
        const wrapper = shallow(<Buysell total = {mockTotal}  />);

        expect(wrapper.find('MenuItem')).to.have.length(11);

    });


    it('contains an  2 inputs for cryptocurrency exchange  ', function () {

        const mockTotal = { };
        const wrapper = shallow(<Buysell total = {mockTotal}  />);

        expect(wrapper.find('input')).to.have.length(2);

    });


    it('contains an  2 inputs for cryptocurrency exchange  ', function () {

        const mockTotal = { };
        const wrapper = shallow(<Buysell total = {mockTotal}  />);

        expect(wrapper.find('input')).to.have.length(2);

    });

    it('contains an  2 buttons - BUY & SELL  ', function () {

        const mockTotal = { };
        const wrapper = shallow(<Buysell total = {mockTotal}  />);

        expect(wrapper.find('button')).to.have.length(2);

    });







});
