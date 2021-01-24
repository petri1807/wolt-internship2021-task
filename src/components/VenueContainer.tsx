import * as React from 'react';
import VenueImage from './VenueImage';
import { VenueDetails } from './VenueDetails';
import { IVenue } from './Discovery';

type VenueContainerProps = {
  venue: IVenue;
  key: string;
};

const VenueContainer = ({ venue }: VenueContainerProps) => {
  return (
    <div className="venueContainer">
      <VenueImage blurhash={venue.blurhash} online={venue.online} />
      <VenueDetails
        name={venue.name}
        rating={venue.popularity}
        online={venue.online}
      />
    </div>
  );
};

export default VenueContainer;
