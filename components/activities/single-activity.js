import React from 'react';

export default function SingleActivity(props) {
  const { details } = props;
  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
    </div>
  );
}
