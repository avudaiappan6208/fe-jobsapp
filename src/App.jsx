import { Outlet } from "react-router-dom"
import Layout from "./layouts/layout.jsx"

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App

