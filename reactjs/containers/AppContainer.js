import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

class AppContainer extends React.Component {

    componentDidMount() {
        this.props.requestData();
    }

    render() {

        console.log(props);

        const { props } = this;

        return (
            <App data={ props.data } />
        );
    }
}

const mapStateToProps = (state) => {

    const { data } = state;
    
    return {
        state,
        data : data,
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    requestData : () => dispatch(data.requestData()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);