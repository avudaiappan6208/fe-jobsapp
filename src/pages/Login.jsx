

const Login = () => {
    return (
        <div className="max-w-xs mx-auto mt-20 p-4 border rounded">
            <h2 className="text-xl ml-28 font-bold">Login</h2>
            <form className="flex flex-col space-y-3 mt-4">
                <input type="email" placeholder="Email" className="border p-2 rounded" />
                <input type="password" placeholder="Password" className="border p-2 rounded" />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Login</button>  
            </form> 
        </div>
    )
}

export default Login
