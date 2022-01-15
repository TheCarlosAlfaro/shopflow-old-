import React from 'react';
import { getAllActivities } from '../../dummy-activities-data';
import SingleActivity from '../../components/activities/single-activity';

export default function Activities() {
  const allActivities = getAllActivities();
  return (
    <div>
      <h1>Activities Page.</h1>
      <p>Shows all activities</p>
      {allActivities.map((activity) => {
        return <SingleActivity key={activity.id} details={activity} />;
      })}
    </div>
  );
}
