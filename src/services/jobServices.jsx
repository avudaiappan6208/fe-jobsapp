import instance from "./instance";

const jobServices = {
    getJobs: async () => {
       return await instance.get("/user/jobs");
    },
    getJobById: async (id) => {
        return await instance.get(`/user/jobs/${id}`);
    },
    applyjob: async (id) => {
        return await instance.post(`/user/apply/${id}`);
    }
};

export default jobServices;