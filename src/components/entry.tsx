import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { principleAges } from '../data/principleAges';
import { principleDescriptions } from '../data/principleDescriptions';
import LearningGoalList from './learningGoalList';
import { learningGoals } from '../data/learningGoals';

export default function Entry({ foldAll, showAll, showLabel, showAge, showDescription, masterShowLearningGoals, label, children }: any) {
  const [showChildren, setShowChildren] = useState(true);
  const [showLearningGoals, setShowLearningGoals] = useState(false);

  useEffect(() => {
    if (showAll != 0) {
      setShowChildren(true);
    }
  }, [showAll]);

  useEffect(() => {
    if (foldAll != 0) {
      setShowChildren(false);
    }
  }, [foldAll]);

  useEffect(() => {
    setShowLearningGoals(masterShowLearningGoals);
  }, [masterShowLearningGoals]);

  const age = principleAges[label] || '4';
  const description = principleDescriptions[label] || label;
  const childLabels = children ? Object.keys(children) : null;
  const childrenList = childLabels
    ? childLabels.map((label) => (
        <Entry
          key={label}
          showAll={showAll}
          foldAll={foldAll}
          showLabel={showLabel}
          showAge={showAge}
          showDescription={showDescription}
          masterShowLearningGoals={masterShowLearningGoals}
          label={label}
          children={children[label]}
        />
      ))
    : null;

  const icon = showChildren ? (
    <StyledBiMinus
      keys={childLabels}
      onClick={() => setShowChildren(!showChildren)}
      onContextMenu={() => console.log('contextMenu')}></StyledBiMinus>
  ) : (
    <StyledBiPlus
      keys={childLabels}
      onClick={() => setShowChildren(!showChildren)}
      onContextMenu={() => console.log('contextMenu')}></StyledBiPlus>
  );

  const entryLearningGoals = learningGoals[label];

  return (
    <Container>
      <Text onClick={() => setShowLearningGoals(!showLearningGoals)}>
        {icon}
        <Label showLabel={showLabel}>
          {label}
          <Hyphen showLabel={showLabel} showDescription={showDescription}>
            -
          </Hyphen>
        </Label>
        <Description showDescription={showDescription}>
          <Age showAge={showAge}>{`(${age}+) `}</Age>
          {description}
        </Description>
      </Text>
      {entryLearningGoals && showLearningGoals && <LearningGoalList learningGoals={learningGoals[label]} />}
      <Children showChildren={showChildren}>{childrenList}</Children>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 20px;
  padding-top: 3px;
`;

const Text = styled.div`
  position: relative;
`;

const Label = styled.span`
  font-weight: 700;
  display: ${({ showLabel }) => (showLabel ? 'inline' : 'none')};
`;

const Hyphen = styled.span`
  padding: 0 3px;
  display: ${({ showLabel, showDescription }) => (showLabel && showDescription ? 'inline' : 'none')};
`;

const Description = styled.span`
  display: ${({ showDescription }) => (showDescription ? 'inline' : 'none')};
`;

const Age = styled.span`
  display: ${({ showAge }) => (showAge ? 'inline' : 'none')};
`;

const Children = styled.div`
  display: ${({ showChildren }) => (showChildren ? 'block' : 'none')};
`;

const StyledBiPlus = styled(BiPlus)`
  display: ${({ keys }) => (keys.length > 0 ? 'block' : 'none')};
  cursor: pointer;
  position: absolute;
  left: -20px;
`;

const StyledBiMinus = styled(BiMinus)`
  display: ${({ keys }) => (keys.length > 0 ? 'block' : 'none')};
  cursor: pointer;
  position: absolute;
  left: -20px;
`;
