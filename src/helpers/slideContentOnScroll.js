import { css } from 'styled-components';

export const SlidingDownContentCSS = css`
  transform: ${props => props.visible ? 'none' : 'translateY(-200px)'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: transform 0.6s ease, opacity 0.6s ease;
`;

export const SlidingUpContentCSS = css`
  transform: ${props => props.visible ? 'none' : 'translateY(200px)'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: transform 0.6s ease, opacity 0.6s ease;
`;

export function animateContentOnScroll() {
    const scrolledFromTop = (window.pageYOffset !== undefined) ? window.pageYOffset :
        (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const windowHeight = window.innerHeight;

    if (this.element.offsetTop + 150 < scrolledFromTop + windowHeight) {
        this.setState({ visible: true });
    }
}
