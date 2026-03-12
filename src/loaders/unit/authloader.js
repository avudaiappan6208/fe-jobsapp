import authservices from "../../services/authServices";

const authloader = async () => {
    try {
        const response = await authservices.me();
        return response.data;
    } catch (error) {
        return null;
    }
};
export default authloader;