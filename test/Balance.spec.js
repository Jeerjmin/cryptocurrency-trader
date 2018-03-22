import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import {Balance} from '../app/containers/balance/balance';



describe('<Balance />', () => {


    	 it('contains an  <div className="balance__cont"> with <h3>Мои балансы and {tifOptions}</h3>  ', function () {

        const tifOptions = []
        const mockTotal = { };
    		const wrapper = shallow(<Balance total = {mockTotal}  />);

        expect(wrapper.contains(<div className="balance__cont">
            <h3>Мои балансы</h3>
            {tifOptions}
        </div>)).to.equal(true);

    });


});
