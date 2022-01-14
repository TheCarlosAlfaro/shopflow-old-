import React from 'react';
import Link from 'next/link';

export default function Opportunities() {
  const opportunitiesList = [
    {
      id: 'showone',
      name: 'Show one in some venue',
    },
    {
      id: 'showtwo',
      name: 'Show two in another venue',
    },
    {
      id: 'showthree',
      name: 'Show three in my favorite venue',
    },
  ];

  return (
    <div>
      <h1>This is the Opportunities Page</h1>
      <p>Shows a list of opportunities.</p>
      <div>
        <ul>
          {opportunitiesList.map((opportunity) => {
            return (
              <li key={opportunity.id} name={opportunity}>
                <Link href={`/opportunities/${opportunity.id}`}>
                  {opportunity.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
