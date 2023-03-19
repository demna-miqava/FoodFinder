import {BusinessStatusEnum} from '@constants/';

export interface RestaurantCardType {
  name: string;
  icon: any;
  photos: [{photo_reference: string}];
  address?: string;
  rating: number;
  opening_hours: {
    open_now: boolean;
  };
  business_status: keyof typeof BusinessStatusEnum;
  place_id: string;
  imageRef: string;
  vicinity: string;
}

export interface RestaurantResult {
  results: RestaurantCardType[];
}
