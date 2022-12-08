//App Component to initialize pages. You can override it and control the page initialization and:

/* 
- Persist layouts between page changes
- Keeping state when navigating pages
- Custom error handling using componentDidCatch
- Inject additional data into pages
- Add global CSS. In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
why? global CSS affects all elements on the page.

*** pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
** The App.getInitialProps receives a single argument called context.ctx. It's an object with the same set of properties as the context object in getInitialProps.
* If your app is running and you added a custom App, you'll need to restart the development server. Only required if pages/_app.js didn't exist before.
When you add getInitialProps in your custom app, you must import App from "next/app", call App.getInitialProps(appContext) inside getInitialProps and merge the returned object into the return value.

*/

import '../styles/globals.css';

export default function App({Component, pageProps}){
    return < Component {...pageProps}/>
}