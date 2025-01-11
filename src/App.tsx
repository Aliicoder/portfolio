import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import NotFoundPage from "./pages/public/NotFoundPage"

const HomePage = lazy(()=>import("@/pages/public/HomePages/HomePage"))


function App() {
  return (
    <Routes  >
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}

export default App
