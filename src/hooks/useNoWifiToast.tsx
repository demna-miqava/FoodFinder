import React, {useEffect} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {useToast} from 'native-base';
import {Alert} from '@components/Alert';
import {ToastIds} from '@constants/';
import {useTranslation} from 'react-i18next';

const noWifi = ToastIds.NoWifi;

const title = 'noInternetConnectionTitle';
const message = 'noInternetConnectionMessage';

export const useNoWifiToast = () => {
  const toast = useToast();
  const {t} = useTranslation();
  const {isConnected} = useNetInfo();
  const isToastActive = toast.isActive(noWifi);
  useEffect(() => {
    if (isConnected) {
      isToastActive && toast.close(noWifi);
    } else {
      !isToastActive &&
        toast.show({
          id: noWifi,
          placement: 'top',
          render: () => (
            <Alert status="error" title={t(title)} message={t(message)} />
          ),
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);
};
