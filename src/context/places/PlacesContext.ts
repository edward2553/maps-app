import { createContext } from 'react';
import { PlacesContextProps } from '../../interfaces';

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
);
