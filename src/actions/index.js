export const JOB_SELECTED = 'JOB_SELECTED';

export function selectJob(job) {

    return {
        type: JOB_SELECTED,
        payload: job
    }
}
