import { Link, useNavigate } from "react-router-dom";

const layout = ({ children, user }) => {
  const navigate = useNavigate()
  console.log(user);
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-900 text-white p-4 flex justify-between">
        <div>
          <Link to="/" className="mr-4">Home</Link>
          {!user && <Link to="/register" className="mr-4">Register</Link>}
          {!user && <Link to="/login" className="mr-4">Login</Link>}
          {
            user && user.user.role === 'user' && (
              <>
                <Link to="/candidate/dashboard" className="mr-4">Dashboard</Link>
                <Link to="/candidate/profile" className="mr-4">Profile</Link>
                <Link to="/candidate/applications" className="mr-4">Applications</Link>
              </>
            )
          }
          {
            user && user.user.role === 'recruiter' && (
              <>
                <Link to="/recruiter/dashboard" className="mr-4">Dashboard</Link>
                <Link to="/recruiter/profile" className="mr-4">Profile</Link>
                <Link to="/recruiter/jobs" className="mr-4">Create Jobs</Link>
                <Link to="/recruiter/manage-applications" className="mr-4">Manage Applications</Link>
              </>
            )
          }


        </div>





        <div>
          {
            user && (
              <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600" onClick={() => {
                navigate("/logout");
              }}>
                Logout
              </button>
            )
          }
        </div>
      </nav >
      <main className="flex-grow p-40">
        {children}
      </main>

    </div >
  )
}

export default layout;
