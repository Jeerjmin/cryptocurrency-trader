import React       from 'react';
import { connect } from 'react-redux';

import { bindActionCreators }       from 'redux';

import { FindStyle } from '../../actions/actions';


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';



export class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            multiSelectable: false,
            enableSelectAll: false,
            height: '100vh',
        };


        this.handleToggle = this.handleToggle.bind(this)
        this.handleChange = this.handleChange.bind(this)

    };



    handleToggle(event, toggled)  {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange(event)  {
        this.setState({height: event.target.value});
    };



    render() {



        console.log(this.props.table.table)




        return (
            <div className="History">
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">Тип</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Пара</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Потрачено</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Получено</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        { this.props.table.map(function(row, index) {


                            if(row.type=='BUY') {
                                return (
                                    <TableRow key={index}>
                                        <TableRowColumn style={{color: 'green'}}>{row.type}</TableRowColumn>
                                        <TableRowColumn>{row.pair}</TableRowColumn>
                                        <TableRowColumn>{row.spent}</TableRowColumn>
                                        <TableRowColumn>{row.received}</TableRowColumn>
                                    </TableRow>
                                )
                            }

                            else {
                                return (
                                    <TableRow key={index}>
                                        <TableRowColumn style={{color: 'red'}}>{row.type}</TableRowColumn>
                                        <TableRowColumn>{row.pair}</TableRowColumn>
                                        <TableRowColumn>{row.spent}</TableRowColumn>
                                        <TableRowColumn>{row.received}</TableRowColumn>
                                    </TableRow>
                                )

                            }
                        })}
                    </TableBody>

                </Table>
            </div>
        );
    }
}


const mapStateToProps = state => (
    {
        table: state.table.table,
    }
);



const matchDispatchToProps = dispatch => bindActionCreators(
    {
        FindStyle
    },
    dispatch
);


export default connect(mapStateToProps, matchDispatchToProps)(History);
