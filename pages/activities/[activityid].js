import React from 'react';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getActivityById } from '../../dummy-activities-data';
import ActivitySummary from '../../components/activity-detail/activity-summary';
import ActivityLogistics from '../../components/activity-detail/activity-logistics';
import ActivityContent from '../../components/activity-detail/activity-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function ActivityDetailPage() {
  const router = useRouter();
  const activityId = router.query.activityId;
  const activity = getActivityById(activityId);

  if (!activity) {
    return (
      <>
        <ErrorAlert>
          <p>No activity found</p>
        </ErrorAlert>
      </>
    );
  }

  return (
    <Fragment>
      <ActivitySummary title={activity.title} />
      <ActivityLogistics
        date={activity.date}
        address={activity.location}
        image={activity.image}
        imageAlt={activity.title}
      />
      <ActivityContent>
        <p>{activity.description}</p>
      </ActivityContent>
    </Fragment>
  );
}
