import * as React from 'react';
import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Root from './Root';
import '../App.css';

export interface IVenue {
  blurhash: string;
  launch_date: string;
  location: number[];
  name: string;
  online: boolean;
  popularity: number;
}

interface IVenueProps {}

const Venues: React.FC<IVenueProps> = () => {
  const [popularVenues, setPopularVenues] = useState<IVenue[]>([]);
  const [newVenues, setNewVenues] = useState<IVenue[]>([]);
  const [nearbyVenues, setNearbyVenues] = useState<IVenue[]>([]);

  const sortByOnline = (arr: IVenue[]) => {
    const original: IVenue[] = [...arr];
    const sorted = original.sort((a, b) => Number(b.online) - Number(a.online));
    return sorted;
  };

  const sortByNew = (arr: IVenue[]) => {
    const original: IVenue[] = [...arr];
    const sorted = original.sort(
      (a, b) => Number(a.launch_date) - Number(b.launch_date)
    );
    const sortedByOnline = sortByOnline(sorted);
    return sortedByOnline;
  };

  const getVenues = async () => {
    const response = await fetch('.././discovery_page.json');
    const allVenues = await response.json();

    const popularUnsorted = allVenues.sections[0].restaurants;
    const newUnsorted = allVenues.sections[1].restaurants;
    const nearbyUnsorted = allVenues.sections[2].restaurants;

    setPopularVenues(sortByOnline(popularUnsorted));
    setNewVenues(sortByNew(newUnsorted));
    setNearbyVenues(sortByOnline(nearbyUnsorted));
  };

  useEffect(() => {
    getVenues();
  }, []);

  const getCarousel = (arr: any[], category: string) => {
    return (
      <div className="carouselContainer">
        <div className="category">
          <h2 className="categoryTitle">{category}</h2>
          <h3 className="categoryEntries">Kaikki ({arr.length})</h3>
        </div>
        <Slider
          dots={true}
          infinite={arr.length > 5}
          slidesToShow={5}
          slidesToScroll={1}
          speed={800}
          // lazyLoad="ondemand"
        >
          {arr.map((venue) => (
            <Root key={uuidv4()} restaurant={venue} />
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <section className="venues">
      {getCarousel(popularVenues, 'Popular')}
      {getCarousel(newVenues, 'New')}
      {getCarousel(nearbyVenues, 'Nearby')}
    </section>
  );
};

export default Venues;
