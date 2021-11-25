import { extendTheme } from "native-base";

const config = {
    useSystemColor: false,
    initialColorMode: "light",
}

const colors = {
    primary: {
        50: '#EEF2F6',
        100: '#DCEEFB',
        200: '#B6D1F2',
        300: '#8EBEE9',
        400: '#68A9D4',
        500: '#4F8CC4',
        600: '#3A7AB1',
        700: '#2B6A9E',
        800: '#1E5A82',
        900: '#0D4A6E',
    }
}

export default extendTheme({ config, colors });