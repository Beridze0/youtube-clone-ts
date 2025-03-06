import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import VideoPage from './pages/VideoPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='video/:id' element={<VideoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App