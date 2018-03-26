export const JOB_SELECTED = 'JOB_SELECTED';
export const PROJECT_SELECTED = 'PROJECT_SELECTED';
export const SKILL_SELECTED = 'SKILL_SELECTED';

export function selectJob(job) {
    return {
        type: JOB_SELECTED,
        payload: job,
    };
}

export function selectProject(project) {
    return {
        type: PROJECT_SELECTED,
        payload: project,
    };
}

export function selectSkill(skill) {
    return {
        type: SKILL_SELECTED,
        payload: skill,
    };
}
