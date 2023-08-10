import { useMemo } from 'react'
import { Box, ThemeProvider, CssBaseline } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from './theme'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

import Navbar from '@/scenes/Navbar/Navbar'
import Dashboard from './scenes/Dashboard/Dashboard'
import Predictions from './scenes/Predictions/Predictions'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
      <div className='app'>
        <BrowserRouter >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Routes>
                <Route path='/'  element={<Dashboard />}/>
                <Route path='/predictions'  element={<Predictions />}/>
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>

  )
}

export default App
