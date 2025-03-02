import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from '../src/pages/HomePage'
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
