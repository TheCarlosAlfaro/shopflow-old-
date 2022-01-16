import React from 'react';
import { getAllActivities } from '../../dummy-activities-data';
import ActivityList from '../../components/activities/activity-list';
import ActivitiesSearch from '../../components/activities/activities-search';
import { useRouter } from 'next/router';

export default function Activities() {
  const allActivities = getAllActivities();
  const router = useRouter();

  function findActivitiesHandler(year, month) {
    const fullPath = `/activities/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <h1>Activities Page.</h1>
      <p>Shows all activities</p>
      <ActivitiesSearch onSearch={findActivitiesHandler} />
      <ActivityList activities={allActivities} />
    </div>
  );
}
