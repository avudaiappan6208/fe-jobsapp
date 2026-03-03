

const Register = () => {
    return (
        <div className='max-w-xs mx-auto mt-20 p-4 border rounded'>
            <h2 className="text-xl mb-4 ml-8 mt-3 font-bold">Candidate Registration</h2>
            <form className="flex flex-col space-y-3">
                <input type="text" placeholder="Full Name" className="border p-2 rounded" />
                <input type="email" placeholder="Email" className="border p-2 rounded" />
                <input type="password" placeholder="Password" className="border p-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>  
            </form>
        </div>
    )
}

export default Register
