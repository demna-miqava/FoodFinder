import React, {useEffect} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {useToast} from 'native-base';
import {Alert} from '@components/Alert';
import {ToastIds} from '@constants/';

const noWifi = ToastIds.NoWifi;

const title = 'Oops, you have no internet access';
const message = 'Please turn wifi on to see restaurants nearby';

export const useNoWifiToast = () => {
  const toast = useToast();
  const {isConnected} = useNetInfo();
  const isToastActive = toast.isActive(noWifi);
  console.log('is con', isConnected, noWifi);
  useEffect(() => {
    if (isConnected) {
      isToastActive && toast.close(noWifi);
    } else {
      console.log('is act', isToastActive);
      !isToastActive &&
        toast.show({
          id: noWifi,
          placement: 'top',
          render: () => (
            <Alert status="error" title={title} message={message} />
          ),
        });
    }
  }, [isConnected]);
};
