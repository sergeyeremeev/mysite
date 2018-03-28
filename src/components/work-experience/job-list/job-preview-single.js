// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import JobPreviewContent from './job-preview-content';
import { JobPreviewCSS, JobPreviewImageCSS, JobPreviewCTA } from './style';

const JobPreview = styled.div`
  ${JobPreviewCSS};
`;

const JobPreviewImage = styled.div`
  ${JobPreviewImageCSS};
`;

type Props = {
    active: boolean,
    job: Object,
    onJobSelect: Function,
    isMobile: boolean
};

class JobPreviewSingle extends Component<Props, {hovered: boolean}> {
    state = { hovered: false };

    onMouseEnter = () => {
        this.setState({ hovered: true });
    };

    onMouseLeave = () => {
        this.setState({ hovered: false });
    };

    render() {
        return (
            <JobPreview
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                hovered={this.state.hovered}
                active={this.props.active}
            >
                <JobPreviewImage imgUrl={this.props.job.image} hovered={this.state.hovered} />
                <JobPreviewContent
                    active={this.props.active}
                    job={this.props.job}
                    onJobSelect={this.props.onJobSelect}
                    isMobile={this.props.isMobile}
                />
                <JobPreviewCTA>Learn more</JobPreviewCTA>
            </JobPreview>
        );
    }
}

export default JobPreviewSingle;
