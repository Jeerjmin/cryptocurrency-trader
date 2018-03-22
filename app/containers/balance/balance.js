import React from 'react';
import { connect } from 'react-redux';

export class Balance extends React.Component {

    render() {

        const tifOptions = Object.keys(this.props.total).filter(key =>
            this.props.total[key]!='0'
        ).map(key =>
            <div key ={key} className="balance__list" value={key}>{key}: {parseFloat(this.props.total[key].toFixed(5))}</div>
        )


        return(

            <div className="balance__cont">
                <h3>Мои балансы</h3>
                {tifOptions}
            </div>
        )


    }
}



const mapStateToProps = ({ total }) => ({ total });



export default connect(mapStateToProps)(Balance);
