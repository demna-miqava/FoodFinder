import {PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {useState} from 'react';
import {isPlatform} from '@app/helpers';
import {Platform} from '@constants/';

export const useLocationPermissions = () => {
  const [currentLocation, setCurrentLocation] = useState('');

  const requestLocation = () => {
    const permission = isPlatform(Platform.Ios)
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    request(permission).then(res => {
      console.log('res', res);
    });
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        const {latitude, longitude} = coords;
        setCurrentLocation(`${latitude},${longitude}`);
      },
      error => {
        console.log('location', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return {
    requestLocation,
    getLocation,
    currentLocation,
  };
};
