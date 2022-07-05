import { useState, Fragment } from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/global';
import { LoaderUI1 } from './components/loader-ui-1';
import { CircleLoader } from './components/loader-ui-2';
import { BounceBall } from './components/loader-ui-3';
import { theme } from './styles/theme';


const App = () => {
  
  return (
    <ThemeProvider theme = {theme}>
      <Fragment>
        <GlobalStyled />
        <div className="App">
          <LoaderUI1 />
          {/* <CircleLoader /> */}
          {/* <BounceBall /> */}
        </div>
      </Fragment>
    </ThemeProvider>
  )
}

export default App
