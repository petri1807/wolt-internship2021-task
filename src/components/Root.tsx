import * as React from 'react';
import ImageContainer from './ImageContainer';
import Bottom from './Bottom';

interface IVenue {
  blurhash: string;
  launch_date: string;
  location: number[];
  name: string;
  online: boolean;
  popularity: number;
}

type rootProps = {
  restaurant: IVenue;
  key: string;
};

const Root = ({ restaurant }: rootProps) => {
  return (
    <div className="venueRoot">
      <ImageContainer
        blurhash={restaurant.blurhash}
        online={restaurant.online}
      />
      <Bottom
        name={restaurant.name}
        rating={restaurant.popularity}
        online={restaurant.online}
      />
    </div>
  );
};

export default Root;
