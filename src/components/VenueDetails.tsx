import * as React from 'react';

type VenueDetailsProps = {
  name: string;
  rating: number;
  online: boolean;
};

const convertRating = (num: number) => {
  return (Math.round(num * 100) / 10).toFixed(1);
};

const VenueDetails = ({ name, rating, online }: VenueDetailsProps) => {
  return (
    <div className="venueDetails">
      <p className="venueTitle">{name}</p>
      <div className="venueStats">
        <p className="venueRating">{convertRating(rating)}</p>
        <p className="venueOnline">{online ? 'Open' : 'Closed'}</p>
      </div>
    </div>
  );
};

export { VenueDetails, convertRating };
