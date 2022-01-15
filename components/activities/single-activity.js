import React from 'react';
import Image from 'next/image';
import styles from './single-activity.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

export default function SingleActivity(props) {
  const { details } = props;

  const humanReadableDate = new Date(details.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = details.location.replace(', ', '\n');

  const exploreLink = `/activities/${details.id}`;
  return (
    <li className={styles.item}>
      <Image
        src={'/' + details.image}
        alt={details.title}
        width={240}
        height={240}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{details.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>

        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Activity</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
