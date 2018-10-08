import React, { Component } from 'react';


const HOC = (ChildComponent) => {


    class ComposedComponent extends Component {
        render() {
            return (
                <ChildComponent />
            )
        }
    }

    return ComposedComponent; 
}
 
export default HOC;