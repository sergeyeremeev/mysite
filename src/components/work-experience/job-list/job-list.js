import React from 'react';
import { connect } from 'react-redux';
import JobPreviewSingle from './job-preview-single';
import { JobList } from './style';

const JobListContainer = (props) => {
    const handleJobSelect = (index) => {
        props.onJobSelect(index);
    };

    const renderJobList = () => {
        return props.jobs.map((job, index) => {

            return (
                <JobPreviewSingle
                    active={index === props.activeIndex}
                    onJobSelect={() => handleJobSelect(index)}
                    key={job.shortName}
                    job={job}
                />
            )
        });
    };

    return (
        <JobList>
            {renderJobList()}
        </JobList>
    );
};

function mapStateToProps({jobs}) {
    return {jobs};
}

export default connect(mapStateToProps)(JobListContainer);
