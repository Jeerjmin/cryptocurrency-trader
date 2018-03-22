import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import {History} from '../app/containers/history/history';

import {  TableRow, TableHeaderColumn } from 'material-ui/Table';


describe('<History />', () => {


    	 it('contains HeaderColumns: Тип, Пара, Потратчено, Получнено in HistoryTable  ', function () {

    		const wrapper = shallow(<History table = {[]}  />);

        expect(wrapper.contains(
            <TableRow>
                <TableHeaderColumn tooltip="The ID">Тип</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name">Пара</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Потрачено</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Получено</TableHeaderColumn>
            </TableRow>
        )).to.equal(true);

    });


});
