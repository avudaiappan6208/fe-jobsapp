import { useDispatch, useSelector } from "react-redux";
import { selectName, selectEmail, selectPassword, setName, setEmail, setPassword } from "../redux/features/auth/registerslice";
import { toast } from "react-toastify";
import authservices from "../services/authServices";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleregister = async (e) => {
        e.preventDefault();

        try {
            const response = await authservices.register({ name, email, password });
            if (response.status === 201) {
                toast.success("Registration successful");
                dispatch(setName(''));
                dispatch(setEmail(''));
                dispatch(setPassword(''));

                // redirect to login page
                navigate('/login');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
            
        }
    }
    return (
        <div className='max-w-xs mx-auto mt-20 p-4 border rounded'>
            <h2 className="text-xl mb-4 ml-8 mt-3 font-bold">Candidate Registration</h2>
            <form className="flex flex-col space-y-3">
                <input type="text" name="name" placeholder="Full Name" className="border p-2 rounded" value={name} onChange={(e) => dispatch(setName(e.target.value))} />
                <input type="email" name="email" placeholder="Email" className="border p-2 rounded" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                <input type="password" name="password" placeholder="Password" className="border p-2 rounded" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded" onClick={handleregister}>Register</button>
            </form>
        </div>
    )
}

export default Register
