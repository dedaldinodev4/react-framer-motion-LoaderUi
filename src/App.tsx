import { useState, Fragment } from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/global';
import { LoaderUI1 } from './components/loader-ui-1';
import { theme } from './styles/theme';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme = {theme}>
      <Fragment>
        <GlobalStyled />
        <div className="App">
          <LoaderUI1 />
        </div>
      </Fragment>
    </ThemeProvider>
  )
}

export default App
