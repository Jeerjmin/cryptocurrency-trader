import { combineReducers } from 'redux';

import { DataReducer } from './data/data';
import { BuyReducer } from './buysell/buysell';
import { TableReducer } from './table/table';

export const reducers = combineReducers({

    data: DataReducer,
    total: BuyReducer,
    table: TableReducer
});
