import { useEffect } from "react";
import { toast } from "react-toastify";
import authservices from "../services/authServices.js";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate()
    const logoutUser = async () => {
        try {
            const response = await authservices.logout();
            if (response.status === 200) {
                toast.success(response.data.message)
                setTimeout(() => {
                    navigate("/");
                }, 500);
            }
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        logoutUser();
    }, []);


    return (

        <div>
            Loging Out.....
        </div>
    )
}

export default Logout;
