// @flow
import React, { Component } from 'react';
import ProjectList from './project-list/project-list';
import ProjectActive from './project-active/project-active';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { animateContentOnScroll } from '../../helpers/slideContentOnScroll';
import { ProjectsContainer, ProjectsViewMore } from './style';

type State = {
    overlayActive: boolean,
    mobileProjectsVisible: boolean,
    scrolledTo: boolean,
};

class Portfolio extends Component<{}, State> {
    state = {
        overlayActive: false,
        mobileProjectsVisible: false,
        scrolledTo: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.animateProjectsOnScroll);
    }

    componentDidUpdate() {
        if (this.state.scrolledTo === true) {
            window.removeEventListener('scroll', this.animateProjectsOnScroll);
        }
    }

    animateProjectsOnScroll = animateContentOnScroll.bind(this);

    handleProjectSelect = () => {
        if (document.body) {
            document.body.style.overflow = 'hidden';
        }
        this.setState({ overlayActive: true });
    };

    handleOverlayClose = () => {
        if (document.body) {
            document.body.style.overflow = 'auto';
        }
        this.setState({ overlayActive: false });
    };

    toggleProjectsVisibility = () => {
        this.setState({ mobileProjectsVisible: !this.state.mobileProjectsVisible });
    };

    element: ?HTMLDivElement;

    render() {
        return (
            <SectionWrapper>
                <SectionContainer>
                    <SectionTitle>Portfolio</SectionTitle>
                    <ProjectsContainer
                        innerRef={(el) => { this.element = el; }}
                        scrolledTo={this.state.scrolledTo}
                    >
                        <ProjectList
                            onProjectSelect={this.handleProjectSelect}
                            mobileProjectsVisible={this.state.mobileProjectsVisible}
                        />
                        <ProjectsViewMore
                            onClick={this.toggleProjectsVisibility}
                        >
                            {this.state.mobileProjectsVisible ? 'Less' : 'More'}
                        </ProjectsViewMore>
                        <ProjectActive
                            overlayActive={this.state.overlayActive}
                            onOverlayClose={this.handleOverlayClose}
                        />
                    </ProjectsContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default Portfolio;
