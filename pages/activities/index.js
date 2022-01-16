import React from 'react';
import { getAllActivities } from '../../dummy-activities-data';
import ActivityList from '../../components/activities/activity-list';
import ActivitiesSearch from '../../components/activities/activities-search';

export default function Activities() {
  const allActivities = getAllActivities();
  return (
    <div>
      <h1>Activities Page.</h1>
      <p>Shows all activities</p>
      <ActivitiesSearch />
      <ActivityList activities={allActivities} />
    </div>
  );
}
