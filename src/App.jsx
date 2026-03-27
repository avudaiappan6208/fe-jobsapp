import { Outlet } from "react-router-dom"
import Layout from "./layouts/layout.jsx"
import { useLoaderData } from "react-router"

const App = () => {

  const user = useLoaderData()
  

  return (
    <Layout
      user={user}
      >
      <Outlet />
    </Layout>
  )
}

export default App

