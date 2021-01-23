import * as React from 'react';
import ImageContainer from './ImageContainer';
import { Bottom } from './Bottom';
import { IVenue } from './Venues';

type rootProps = {
  venue: IVenue;
  key: string;
};

const Root = ({ venue }: rootProps) => {
  return (
    <div className="venueRoot">
      <ImageContainer blurhash={venue.blurhash} online={venue.online} />
      <Bottom
        name={venue.name}
        rating={venue.popularity}
        online={venue.online}
      />
    </div>
  );
};

export default Root;
