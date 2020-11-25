import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LearningGoal from './learningGoal';

export default function LearningGoalList({ learningGoals }) {
  const keys = Object.keys(learningGoals);
  const list = keys?.map((learningGoal) => (
    <LearningGoal key={learningGoal} text={learningGoal} learningGoals={learningGoals[learningGoal]} />
  ));
  return keys && keys.length > 0 ? <Container>{list}</Container> : null;
}

const Container = styled.div`
  border: 1px solid black;
`;
