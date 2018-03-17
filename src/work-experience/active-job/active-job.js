import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class ActiveJob extends Component {
    render() {
        if (!this.props.activeJob) {
            return <div>Select previous work experience!</div>
        }

        return (
            <div>
                <h3>{this.props.activeJob.title}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeJob: state.activeJob
    };
}

export default connect(mapStateToProps)(ActiveJob);
