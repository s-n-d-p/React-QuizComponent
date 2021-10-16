import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((option, index) =>
                                <QuizQuestionButton key={index} button_text={option} clickHandler={this.handleClick.bind(this)} />)
                        }
                    </ul>
                </section>
            </main>)
    }

    handleClick(button_text) {
        (button_text === this.props.quiz_question.answer) && this.props.showNextQuestionHandler()
    }
}

export default QuizQuestion;