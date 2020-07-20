import React from 'react';
import { storesContext } from '../contexts/storeContext';

export const useStores = () => React.useContext(storesContext);
