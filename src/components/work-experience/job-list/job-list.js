// @flow
import React from 'react';
import { connect } from 'react-redux';
import JobPreviewSingle from './job-preview-single';
import { JobList } from './style';

type Props = {
    jobs: Array<Object>,
    activeIndex: ?number,
    onJobSelect: Function,
    isMobile: boolean,
};

const JobListContainer = (props: Props) => {
    const handleJobSelect = (index) => {
        props.onJobSelect(index);
    };

    const renderJobList = () => props.jobs.map((job, index) => (
        <JobPreviewSingle
            active={index === props.activeIndex}
            onJobSelect={() => handleJobSelect(index)}
            key={job.shortName}
            job={job}
            isMobile={props.isMobile}
        />
    ));

    return (
        <JobList>
            {renderJobList()}
        </JobList>
    );
};

function mapStateToProps({ jobs }) {
    return { jobs };
}

export default connect(mapStateToProps)(JobListContainer);
