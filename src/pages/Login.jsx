import { useSelector } from "react-redux"
import { selectEmail } from "../redux/features/auth/loginslice"
import { selectPassword } from "../redux/features/auth/loginslice"
import { useDispatch } from "react-redux"
import { setEmail } from "../redux/features/auth/loginslice"
import { setPassword } from "../redux/features/auth/loginslice"
import { toast } from "react-toastify"
import instance from "../services/instance"
import { Navigate, useNavigate } from "react-router"




const Login = () => {
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post('/auth/login', { email, password });
            if (response.status === 200) {
                toast.success(response.data.message);
                const response = await authServices.me();
                dispatch(setUser(response.data));
                dispatch(setEmail(''));
                dispatch(setPassword(''));
                setTimeout(() => {
                    Navigate('/', { replace: true });

                }, 500);

            }


        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="max-w-xs mx-auto mt-20 p-4 border rounded">
            <h2 className="text-xl ml-28 font-bold">Login</h2>
            <form className="flex flex-col space-y-3 mt-4" onSubmit={handlelogin}>
                <input type="email" placeholder="Email" className="border p-2 rounded " value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                <input type="password" placeholder="Password" className="border p-2 rounded " value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Login</button>
            </form>
        </div>
    )
}

export default Login
