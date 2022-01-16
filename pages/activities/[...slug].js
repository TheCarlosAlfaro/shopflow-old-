import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredActivities } from '../../dummy-activities-data';
import ActivityList from '../../components/activities/activity-list';
import ResultsTitle from '../../components/activities/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

export default function FilteredActivities() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values.</p>
        </ErrorAlert>
        <Button link="/activities">Go Back to all activities</Button>
      </div>
    );
  }

  const filteredActivities = getFilteredActivities({
    year: numYear,
    month: numMonth,
  });

  if (!filteredActivities || filteredActivities.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No activities were found.</p>
        </ErrorAlert>
        <Button link="/activities">Go Back to all activities</Button>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <ActivityList activities={filteredActivities} />
    </div>
  );
}
