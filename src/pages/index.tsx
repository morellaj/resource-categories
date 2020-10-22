import React, { useState } from 'react';
import categories from '../data/categories';
import Entry from '../components/entry';
import styled from 'styled-components';

export default function Home() {
  const [foldAll, setFoldAll] = useState(0);
  const [showAll, setShowAll] = useState(0);
  const [showLabel, setShowLabel] = useState(true);
  const [showDescription, setShowDescription] = useState(true);

  const categoryKeys = Object.keys(categories);
  const categoryList = categoryKeys.map((category) => (
    <Entry
      key={category}
      foldAll={foldAll}
      showAll={showAll}
      showLabel={showLabel}
      showDescription={showDescription}
      categoryText={category}
      children={categories[category]}
    />
  ));
  return (
    <div>
      <ButtonContainer>
        <button onClick={() => setFoldAll(foldAll + 1)}>Fold All</button>
        <button onClick={() => setShowAll(showAll + 1)}>Open All</button>
        <button onClick={() => setShowLabel(!showLabel)}>Show Label</button>
        <button onClick={() => setShowDescription(!showDescription)}>Show Description</button>
      </ButtonContainer>
      {categoryList}
    </div>
  );
}

const ButtonContainer = styled.div``;
