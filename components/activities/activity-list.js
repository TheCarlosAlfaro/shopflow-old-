import React from 'react';
import SingleActivity from './single-activity';

export default function ActivityList(props) {
  const { activities } = props;
  return (
    <ul>
      {activities.map((activity) => (
        <SingleActivity key={activity.id} details={activity} />
      ))}
    </ul>
  );
}
