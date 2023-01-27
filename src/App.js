import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Layout from './layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App