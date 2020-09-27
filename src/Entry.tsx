import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import AppRouter from './routes/AppRouter'
import AppHeader from "./components/AppHeader";
import './styles/main.scss';

const Entry = () => {
  return (
    <Provider store={store}>
      <AppHeader />
      <AppRouter />
    </Provider>
  );
};

export default Entry;