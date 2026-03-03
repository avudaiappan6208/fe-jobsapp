import { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleregister = (e) => {
        e.preventDefault();
        console.log(form);
        console.log("Registering user...");
    }
    return (
        <div className='max-w-xs mx-auto mt-20 p-4 border rounded'>
            <h2 className="text-xl mb-4 ml-8 mt-3 font-bold">Candidate Registration</h2>
            <form className="flex flex-col space-y-3">
                <input type="text" name="name" placeholder="Full Name" className="border p-2 rounded" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input type="email" name="email" placeholder="Email" className="border p-2 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" name="password" placeholder="Password" className="border p-2 rounded" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded" onClick={handleregister}>Register</button>
            </form>
        </div>
    )
}

export default Register
