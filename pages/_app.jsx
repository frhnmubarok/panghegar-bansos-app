import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/lato';

import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
