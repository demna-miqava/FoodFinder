import CryptoJS from 'react-native-crypto-js';

// move to .env
const encryptionKey = '1234';

export const encrypt = (value: string) => {
  return CryptoJS.AES.encrypt(
    value.toString(),
    String(encryptionKey),
  ).toString();
};

export const decrypt = (value: string, type?: string | undefined) => {
  try {
    const bytes = CryptoJS.AES.decrypt(value, String(encryptionKey));
    const unencryptData = bytes.toString(CryptoJS.enc.Utf8);
    return type === 'string' ? unencryptData : JSON.parse(unencryptData);
  } catch (e) {
    console.log('error===>', e);
    return value;
  }
};
