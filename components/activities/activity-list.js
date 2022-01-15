import React from 'react';
import SingleActivity from './single-activity';
import styles from './activity-list.module.css';

export default function ActivityList(props) {
  const { activities } = props;
  return (
    <ul className={styles.list}>
      {activities.map((activity) => (
        <SingleActivity key={activity.id} details={activity} />
      ))}
    </ul>
  );
}
