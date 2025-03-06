import * as Crypto from 'crypto-js';

export const encryptData = (data: string) => {
  let result = Crypto.AES.encrypt(
    data,
    process.env.NEXT_PUBLIC_KEY!,
  ).toString();
  return result;
};

export const decryptData = (data: string) => {
  const result = Crypto.AES.decrypt(data, process.env.NEXT_PUBLIC_KEY!);
  return result.toString(Crypto.enc.Utf8);
};

export const hashData = (data: string) => {
  return Crypto.SHA256(data).toString();
};
