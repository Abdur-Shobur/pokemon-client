import { Route, Routes } from 'react-router-dom'
import Details from './details/Details'
import Home from './home/Home'
import Layout from './layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
