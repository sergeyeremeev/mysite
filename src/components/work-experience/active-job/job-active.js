// @flow
import React from 'react';
import { connect } from 'react-redux';
import ActiveJobMobile from './job-active-mobile';
import ActiveJobDesktop from './job-active-desktop';

type Props = {
    activeJob: Object,
    animateResetter: boolean,
    shouldDisplayMobile: boolean,
    overlayActive: boolean,
    onOverlayClose: Function,
};

const ActiveJob = (props: Props) => {
    const {
        activeJob, animateResetter, shouldDisplayMobile, overlayActive, onOverlayClose,
    } = props;

    if (shouldDisplayMobile) {
        return (
            <ActiveJobMobile
                activeJob={activeJob}
                overlayActive={overlayActive}
                onOverlayClose={onOverlayClose}
            />
        );
    }

    return (
        <ActiveJobDesktop
            activeJob={activeJob}
            animateResetter={animateResetter}
        />
    );
};

function mapStateToProps({ activeJob }) {
    return { activeJob };
}

export default connect(mapStateToProps)(ActiveJob);
