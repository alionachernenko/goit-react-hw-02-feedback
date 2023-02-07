import { Statistics } from "./Statistics/Statisticd"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


import React, { Component } from "react";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addFeedback = e => {
    let feedbackType = e.target.id
    console.log('hey')

    this.setState((prevState) => ({
        [feedbackType]: prevState[feedbackType] += 1
    }))

    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
}

 countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return (this.total = good + bad + neutral)
 }
      
  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state 

    if (good) return(this.positive = Math.round((good / (good + neutral + bad)) * 100))
    else return 0
  }

  render() {
    const {good, neutral, bad} = this.state
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.addFeedback}/>
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positive={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback yet"/>}
      </Section>
    </>
    )
  }
};
