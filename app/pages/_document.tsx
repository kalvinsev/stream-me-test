import Document, { Head, Html, Main, NextScript} from "next/document";
import React from 'react';
import { ServerStyleSheets } from '@mui/styles';




class MyDocument extends Document {
    static async getInitialProps(ctx) {
        //Render the app and get the context of the page with collected side effects
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => 
            originalRenderPage({ 
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });


        const intitialProps = await Document.getInitialProps(ctx);
 
        return {
            ... intitialProps, 
            styles: [
                ...React.Children.toArray(intitialProps.styles),
                sheets.getStyleElement(),
            ],
        };
    }

    render(){
        return (
            <Html>
                <Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                </Head>
            </Html>
        )
    }
}

export default MyDocument;