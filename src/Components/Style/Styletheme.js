import {createTheme} from '@mui/material';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#039FD0',
            
        },
        secondary: {
            main: "#000000"
        },
        text:{
            primary: "#000000",
            secondary: "#000000",
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                  textTransform: "none"
                }
              }

        },
    }    
})