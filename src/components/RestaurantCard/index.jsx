import React, { useState } from 'react';

import ReactStars from 'react-rating-stars-component';

import Skeleton from '../Skeleton';

import restaurante from '../../assets/restaurante-fake.png';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

export default ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          isHalf
          count={5}
          size={24}
          value={restaurant.rating}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt={`foto do restaurante ${restaurant.name}`}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};
