import * as React from 'react';

type BottomProps = {
  name: string;
  rating: number;
  online: boolean;
};

const Bottom = ({ name, rating, online }: BottomProps) => {
  const convertRating = (num: number) => {
    return (Math.round(num * 100) / 10).toFixed(1);
  };

  return (
    <div className="venueBanner venueBottom">
      <p className="venueTitle">{name}</p>
      <div className="venueStats">
        <p className="venueRating">{convertRating(rating)}</p>
        <p className="venueOnline">{online ? 'Open' : 'Closed'}</p>
      </div>
    </div>
  );
};

export default Bottom;
