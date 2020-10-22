import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import textHelper from '../helpers/textHelper';

export default function Entry({ foldAll, showAll, showLabel, showDescription, categoryText, children }: any) {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    setShowChildren(true);
  }, [showAll]);

  useEffect(() => {
    setShowChildren(false);
  }, [foldAll]);
  const [label, description] = textHelper(categoryText);
  const keys = children ? Object.keys(children) : null;
  const childrenList = keys
    ? keys.map((key) => (
        <Entry
          key={key}
          showAll={showAll}
          foldAll={foldAll}
          showLabel={showLabel}
          showDescription={showDescription}
          categoryText={key}
          children={children[key]}
        />
      ))
    : null;

  return (
    <Container>
      <Text>
        <StyledIcon
          keys={keys}
          onClick={() => setShowChildren(!showChildren)}
          onContextMenu={() => console.log('contextMenu')}
        ></StyledIcon>
        <Label showLabel={showLabel}>
          {label}
          <Hyphen showLabel={showLabel} showDescription={showDescription}>
            -
          </Hyphen>
        </Label>
        <Description showDescription={showDescription}>{description}</Description>
      </Text>
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

const Children = styled.div`
  display: ${({ showChildren }) => (showChildren ? 'block' : 'none')};
`;

const StyledIcon = styled(BiPlus)`
  display: ${({ keys }) => (keys.length > 0 ? 'block' : 'none')};
  cursor: pointer;
  position: absolute;
  left: -20px;
`;
