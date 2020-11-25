import React, { useState } from 'react';
import Entry from '../components/entry';
import styled from 'styled-components';
import resourceLabelsStructure from '../data/resourceLabelsStructure';

export default function Home() {
  const [foldAll, setFoldAll] = useState(0);
  const [showAll, setShowAll] = useState(0);
  const [masterShowLearningGoals, setMasterShowLearningGoals] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showAge, setShowAge] = useState(false);

  const resourceLabelKeys = Object.keys(resourceLabelsStructure);
  const resourceList = resourceLabelKeys.map((label) => (
    <Entry
      key={label}
      foldAll={foldAll}
      showAll={showAll}
      showLabel={showLabel}
      showAge={showAge}
      showDescription={showDescription}
      masterShowLearningGoals={masterShowLearningGoals}
      label={label}
      children={resourceLabelsStructure[label]}
    />
  ));
  return (
    <div>
      <ButtonContainer>
        <button onClick={() => setFoldAll(foldAll + 1)}>Fold All</button>
        <button onClick={() => setShowAll(showAll + 1)}>Open All</button>
        <button onClick={() => setShowLabel(!showLabel)}>Show Label</button>
        <button onClick={() => setShowDescription(!showDescription)}>Show Description</button>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        <button onClick={() => setMasterShowLearningGoals(!masterShowLearningGoals)}>Show Learning Goals</button>
      </ButtonContainer>
      {resourceList}
    </div>
  );
}

const ButtonContainer = styled.div``;
