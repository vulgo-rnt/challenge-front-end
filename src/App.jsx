import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import GlobalStyled from './components/GlobalStyled'
import Banner from './components/Banner'
import MainList from './components/MainList'

function App() {
  const info = {
    title : 'title',
    address:"jaguaribe",
    postalCode:'2322-3322',
    state:'sao paulo',
    country:'osasco',
    breweryType:'micro'
  }
  return (
    <BrowserRouter>
      <GlobalStyled/> 
        <Banner/>
          <Routes>
            <Route path='/' element={<MainList/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App
