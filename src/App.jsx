import { Outlet } from "react-router-dom"
import Layout from "./layouts/layout.jsx"
import { use } from "react"
import { useLoaderData } from "react-router"

const App = () => {

  const user = useLoaderData()
  console.log(user)

  return (
    <Layout
      user={user}
    >
      <Outlet />
    </Layout>
  )
}

export default App

