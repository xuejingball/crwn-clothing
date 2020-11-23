import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...otherProps} />
        );
};

export default WithSpinner;

/*
with-data.js: HOC component

import React from 'react';

// a function that takes in a component, and passes in some props
// then returns another component that renders the original component

const withData = (wrappedComponent, dataSource) = {
    class WithData extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
        }

        componentDidMount() {
            fetch(dataSource)
            .then(response => response.json())
            .then(data => this.setState({data: data.slice(0, 3)}))
        }

        render() {
            const {dataSource, ...otherProps} = this.props
            return this.state.data.length < 1 ? (<h1>Loading</h1>
            ) : (
                <WrappedComponent data={this.state.data} {...otherProps} />
            )
        }
    }

    return WithData
}

export Default withData;
*/