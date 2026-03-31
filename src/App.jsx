import { Outlet, useLoaderData } from "react-router-dom"
import Layout from "./layouts/layout.jsx"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "./redux/features/auth/userSlice.js";

const App = () => {

 const user = useLoaderData();
 const dispatch = useDispatch();
useEffect(() => {
  if (user) {
    dispatch(setUser(user));
  }else {
    dispatch(clearUser());
  }
}, [user]);
 


  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App

