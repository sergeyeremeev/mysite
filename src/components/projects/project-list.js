import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProject } from '../../actions';
import styled from 'styled-components';
import themeColors from '../common/theme-colors';

const ProjectTile = styled.div`
  position: relative;
  display: block;
  width: calc((100% - 60px) / 4);
  margin: 0 20px 20px 0;
  padding: 15px;
  float: left;
  text-align: center;
  background: ${themeColors.white};
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s box-shadow ease;
  cursor: pointer;
  
  &:before {
    content: '';
    padding-top: 66.666666%;
    display: table;
    width: 1px;
    margin-left: -1px;
  }
  
  img {
    max-width: 80%;
    max-height: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 35%;
  }
  
  h3 {
    position: absolute;
    width: calc(100% - 30px);
    top: 63%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: ${themeColors.brown};
    line-height: 1.4;
  }
  
  &:nth-child(4n) {
    margin-right: 0;
  }
  
  &:hover {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
  }
`;

class ProjectList extends Component {
    handleClick(index, project) {
        this.props.selectProject(project);
        this.props.onProjectSelect(index);
    }

    render() {
        return this.props.projects.map((project, index) => {
            return (
                <ProjectTile
                    key={project.shortName}
                    onClick={this.handleClick.bind(this, index, project)}
                >
                    <img src={project.image} alt=""/>
                    <h3>{project.name}</h3>
                </ProjectTile>
            );
        });
    }
}

function mapStateToProps({projects}) {
    return {projects};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectProject: selectProject}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
