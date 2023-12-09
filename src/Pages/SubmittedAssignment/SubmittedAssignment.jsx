import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Submit from "./Submit";

const SubmittedAssignment = () => {
    const [submitted, setSubmitted]= useState([])
    const axios =useAxios()

    useEffect(()=>{
        axios.get('/submitted')
        .then(res =>{
            setSubmitted(res.data); 
        })
    },[axios])

    const filterSubmitted = submitted.filter(submit => submit.status === "pending")
    console.log(filterSubmitted);
    return (
      <div className="px-5 md:px-20 py-12">
        {filterSubmitted.map((submitted) => (
          <Submit key={submitted._id} submitted={submitted}></Submit>
        ))}
      </div>
    );
};

export default SubmittedAssignment;