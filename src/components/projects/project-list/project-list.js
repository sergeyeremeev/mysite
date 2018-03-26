import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { selectProject } from '../../../actions/index';
import { ProjectTileCSS } from './style';

const ProjectTile = styled.div`
  ${ProjectTileCSS};
`;

const ProjectList = (props) => {
    const handleClick = (project) => {
        props.selectProject(project);
        props.onProjectSelect();
    };

    return props.projects.map((project, index) => {
        return (
            <ProjectTile
                key={project.shortName}
                onClick={() => handleClick(project)}
                allVisible={props.mobileProjectsVisible}
            >
                <img src={project.image} alt=""/>
                <h3>{project.name}</h3>
            </ProjectTile>
        );
    });
};

function mapStateToProps({projects}) {
    return {projects};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectProject}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
