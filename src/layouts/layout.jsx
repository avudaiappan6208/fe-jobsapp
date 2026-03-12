import { Link, useNavigate } from "react-router-dom";

const layout = ({ children, user }) => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-900 text-white p-4 flex justify-between">
        <div>
          <Link to="/" className="mr-4">Home</Link>
          {!user && <Link to="/register" className="mr-4">Register</Link>}
          {!user && <Link to="/login" className="mr-4">Login</Link>}

        </div>

        {
          user && user.role === 'user' && (
            <>
            <Link to="/candidate/profile" className="mr-4">Dashboard</Link>
            </>
          )
        }

        <div>
          {user && (<button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => navigate('/logout')}>Logout</button>)}
        </div>

      </nav>


      <main className="flex-grow">
        {children}
      </main>

    </div>
  )
}

export default layout
