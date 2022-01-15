import React from 'react';
import { useRouter } from 'next/router';
import { getActivityById } from '../../dummy-activities-data';

export default function ActivityDetailPage() {
  const router = useRouter();
  const activityId = router.query.activityId;
  const activity = getActivityById(activityId);

  if (!activityId) {
    return <p>No activity found</p>;
  }

  return (
    <div>
      <h1>{activity.title}</h1>
      <p>Shows activity details</p>
    </div>
  );
}
