import { Outlet } from "react-router"
import Layout from "./layouts/layout.jsx"

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App

