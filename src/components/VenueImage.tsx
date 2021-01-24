import * as React from 'react';
import { Blurhash } from 'react-blurhash';

type imageContainerProps = {
  blurhash: string;
  online: boolean;
};

const getClassNames = (online: boolean) => {
  return online ? 'image' : 'image imageOffline';
};

const VenueImage = ({ blurhash, online }: imageContainerProps) => {
  return (
    <div className="venueImage">
      {!online && <h3 className="offline">Offline</h3>}
      <Blurhash
        className={getClassNames(online)}
        hash={blurhash}
        width={240}
        height={135}
      />
    </div>
  );
};

export default VenueImage;
