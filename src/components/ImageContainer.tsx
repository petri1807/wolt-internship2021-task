import * as React from 'react';
import { Blurhash } from 'react-blurhash';

type imageContainerProps = {
  blurhash: string;
  online: boolean;
};

const ImageContainer = ({ blurhash, online }: imageContainerProps) => {
  const getClassNames = () => {
    return online ? 'image' : 'image imageOffline';
  };

  return (
    <div className="venueImageContainer">
      {!online && <h3 className="offline">Offline</h3>}
      <Blurhash
        className={getClassNames()}
        hash={blurhash}
        width={240}
        height={135}
      />
    </div>
  );
};

export default ImageContainer;
