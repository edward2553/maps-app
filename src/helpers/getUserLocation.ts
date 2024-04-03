import { TUserLocation } from '../interfaces';

export const getUserLocation = async (): Promise<TUserLocation> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        const userCoords = { lat , lng };
        resolve(userCoords);
      },
      (err) => {
        reject('No se pudo obtener la location:' + err.message);
      }
    );
  });
};
