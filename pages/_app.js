import DefaultLayout from '../layouts/DefaultLayout';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import store from '../redux/store';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

export default MyApp;
