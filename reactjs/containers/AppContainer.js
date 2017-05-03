import React from 'react';
import { connect } from 'react-redux';
import * as data from '../actions/data';
import App from '../components/App';

class AppContainer extends React.Component {

    componentDidMount() {
        this.props.requestData();
    }

    render() {

        const { props } = this;

        if(props.isFetching) {
            return (
                <div>Loading...</div>
           )
        } else {
            return (
                <App data={ props.data } />
            );
        }
    }
}

const mapStateToProps = (state) => {

    const { data } = state;
    
    return {
        state,
        isFetching : data.isFetching,
        data : data.data,
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    requestData : () => dispatch(data.requestData()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppContainer);