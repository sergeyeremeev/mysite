import React, { Component } from 'react';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { animateContentOnScroll } from '../../helpers/slideContentOnScroll';
import { MessageContainer, MessageInner } from './style';

class Message extends Component {
    state = { visible: false };

    componentDidMount() {
        window.addEventListener('scroll', this.animateMessageOnScroll);
    }

    componentDidUpdate() {
        if (this.state.visible === true) {
            window.removeEventListener('scroll', this.animateMessageOnScroll);
        }
    }

    animateMessageOnScroll = animateContentOnScroll.bind(this);

    render() {
        return (
            <SectionWrapper>
                <SectionContainer>
                    <MessageContainer
                        innerRef={(el) => { this.element = el; }}
                        visible={this.state.visible}
                    >
                        <MessageInner>
                            <h2>Statement</h2>
                            <p>
                                <strong>I believe</strong> in hard work more than in anything else. Many people claim to
                                be hard workers, but in reality, they do not know what they are talking about. Working 8
                                hours a day is not hard work. Doing a good job and not wasting time is not hard work.
                                Being stronger than your laziness and always being ready to start working is not hard
                                work, although we are getting very close here. Hard work is when you know that you gave
                                everything you had and still believe it was not enough. Hard work is when you go to bed
                                completely exhausted, already being prepared to work even harder the next day. It is a
                                constant state of self-improvement which stretches to all areas of your everyday life
                                and not just your career. It is discipline and dedication combined with immense
                                willpower which are just like muscles, they can be made stronger if you are ready to do
                                the exercises every day. No matter how you feel, there is no reason good enough to skip
                                a day. Hard work is the only way to success and if you are not ready to make such
                                sacrifices - you will fail.
                            </p>
                            <p>
                                <strong>I believe</strong> that a hard working person with little knowledge is ten times
                                more valuable than an average one with a library in his head. In the short term, the
                                second one will provide more value, no argument here. But it is very common for people
                                to achieve a certain level of knowledge and stay at that level pretty much for the rest
                                of their lives. Most people do not develop much further after they finish University and
                                spend a couple of years at their job. Hard workers, however, keep improving every day.
                                They do not do it because they have to. They do it because they can not live without it.
                                Nothing feels worse to them than a day without at least a little achievement.
                            </p>
                            <p>
                                <strong>I believe</strong> that I have what it takes to outwork most people. I am not
                                saying that I know my craft better than anyone else. What I am saying is that once the
                                goal is set, I will do every single thing I can to become the very best. I realize there
                                are people who are able to work harder than I do. There are people who can sit down for
                                16, 18, maybe even 20 hours straight every day to achieve their goals. There is no
                                limit, the only way to improve further is to work harder and I do it every single day.
                                I get inspired by the example of these people and I am working to become one of them and
                                eventually surpass them.
                            </p>
                            <p>
                                These are my beliefs and I believe in them with all my heart. However, there is one
                                thing that <strong>I know</strong>. I know that today I will work harder than I did
                                yesterday. Today I will become a better version of myself. Today will be a great day
                                and I refuse to wait for tomorrow!
                            </p>
                        </MessageInner>
                    </MessageContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default Message;
