import { extendTheme } from "native-base";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    50: '#FFE4E4',
    100: '#FFCACC',
    200: '#FFAEB4',
    300: '#FF8D9D',
    400: '#FF6B85',
    500: '#FF496E',
    600: '#FF355A',
    700: '#FF2146',
    800: '#FF0D32',
    900: '#FF001B',
  }
}

export default extendTheme({ config, colors })
