import React from 'react'
import { useLoaderData } from 'react-router-dom';
import jobServices from '../../services/jobServices';
import { toast } from 'react-toastify';

const CandidateDashboard = () => {

  const jobs = useLoaderData();
  console.log(jobs);

  const handlejobapply = (jobid) => {
    jobServices.applyjob(jobid)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }
  return (
    <div className='bg-gray-100 px-2 rounded-lg 
    shadow-md max-w-xs mx-auto mt-10 p-4 border rounded 
    text-center font-bold  text-xl'>
      <h2 className='mb-5'>Candidate Dashboard</h2>
      <div>
        {
          jobs.jobs.map((job) => (
            <div key={job._id} className='bg-white p-4 rounded-lg shadow-md mb-4'>
              <h3 className='text-lg font-semibold'>{job.title}</h3>
              <p className='text-gray-600'>{job.description}</p>
              <button className='bg-green-100 text-green-800 px-4 py-2 rounded-md
               hover:bg-green-200 transition duration-200' onClick={() => handlejobapply(job._id)}>
                Apply Now
              </button>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default CandidateDashboard
