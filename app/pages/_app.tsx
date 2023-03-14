
import { use, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeDark, themeLight } from 'lib/theme';


export default function MyApp ({ Component, pageProps }) {
    
    useEffect(() => {
        //Remove the servier-side  injected css
        const jssStyles = document.querySelector("#jss-server-side");
        if(jssStyles && jssStyles.parentNode){
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={false ? themeDark : themeLight}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
