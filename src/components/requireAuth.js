import React, { Component } from 'react';
import {connect} from 'react-redux';

const HOC = (ChildComponent) => {


    class ComposedComponent extends Component {

         //this lifecycle is run whenever the component is rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        //this lifecycle is run when the component get a new props
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway = () => {
            const {auth} = this.props;
            if(!auth) {
                console.log('I need to leave...');
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ChildComponent {...this.props}/>
            )
        }
    }

    function mapStateToProps({auth}) {
        console.log(auth);
        return {
            auth
        }
    }

    return connect(mapStateToProps)(ComposedComponent); 
}

export default HOC;
 