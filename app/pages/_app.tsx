
import { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeDark, themeLight } from '../lib/theme';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import { AuthProvider } from '../lib/useAuth';



export default function MyApp ({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState);
    const [darkState, setDarkState] = useState(false);
    const handleThemeChange = () => {
        setDarkState(!darkState);
    }

    useEffect(() => {
        //Remove the servier-side  injected css
        const jssStyles = document.querySelector("#jss-server-side");
        if(jssStyles && jssStyles.parentNode){
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={darkState ? themeDark : themeLight}>
                <CssBaseline />
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
}
