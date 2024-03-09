import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
    interface ThemeOptions {
        overrides?: {
            MuiAppBar: {
                colorInherit: {
                    backgroundColor: string;
                    color: string;
                };
            };
        };
        props?: {
            MuiAppBar: {
                color: string;
            };
        };
    }
}

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Open Sans',
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#01D167',
                color: '#fff',
            },
        },
    },
    props: {
        MuiAppBar: {
            color: 'inherit',
        },
    },
});

export default theme;