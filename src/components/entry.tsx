import React from 'react';

export default function Entry({ categoryText, children }: { categoryText: string; children: Object }) {
  const keys = children ? Object.keys(children) : null;
  const childrenList = keys ? keys.map((key) => <Entry key={key} categoryText={key} children={children[key]} />) : null;
  return (
    <div>
      <div>{categoryText}</div>
      <div>{childrenList}</div>
    </div>
  );
}
