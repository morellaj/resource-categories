import React from 'react';
import styled from 'styled-components';

export default function LearningGoal({ text, learningGoals }) {
  const keys = Object.keys(learningGoals);
  const list = keys?.map((learningGoal) => (
    <LearningGoal key={learningGoal} text={learningGoal} learningGoals={learningGoals[learningGoal]} />
  ));
  return (
    <Container>
      {text}
      {list}
    </Container>
  );
}

const Container = styled.div`
  padding-left: 20px;
`;
