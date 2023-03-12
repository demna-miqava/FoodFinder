import React from 'react';
import {useToast} from 'native-base';
import {ToastStatus} from '@type/';
import {Alert} from '@components/Alert';
import {useTranslation} from 'react-i18next';

interface Toast {
  id: string;
  title: string;
  message: string;
  status: ToastStatus;
  duration?: number;
}

export const useBasicToast = () => {
  const toast = useToast();
  const {t} = useTranslation();

  const showToast = ({id, title, message, status, duration = 3000}: Toast) => {
    const isToastActive = toast.isActive(id);
    !isToastActive &&
      toast.show({
        id,
        render: () => (
          <Alert title={t(title)} message={t(message)} status={status} />
        ),
        duration,
      });
  };

  const clearToast = (id: string) => toast.close(id);

  const clearAllToasts = () => {
    toast.closeAll();
  };

  return {
    showToast,
    clearToast,
    clearAllToasts,
  };
};
