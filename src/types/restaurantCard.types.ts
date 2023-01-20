export interface RestaurantCardType {
  name: string;
  icon: any;
  photos: string[];
  address?: string;
  rating: number;
  opening_hours: {
    open_now: boolean;
  };
  business_status: 'OPERATIONAL' | 'CLOSED_TEMPORARILY';
  place_id: string;
}
