import React            from 'react';
import  Buysell       from '../buysell/buysell';
import  History       from '../history/history';
import  Balance       from '../balance/balance';

import './app.scss'

export class App extends React.Component {


    render() {
        return (
            <main>
                <div className="left__cont">
                    <Balance/>
                    <Buysell/>
                </div>
                <div className="History">
                    <History/>
                </div>
            </main>
        );
    }
}
