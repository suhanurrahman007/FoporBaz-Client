import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import MyAssignmentsCard from "./MyAssignmentsCard";
import Swal from "sweetalert2";
import Faq from "../../components/Faq/Faq";


const MyAssignments = () => {
  const [assignments, setAssignments] = useState([])
  const [email, setEmail] = useState('')
  const { user } = useAuth();
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/assignments?email=${user.email}`).then((res) => {
      setAssignments(res.data);
    });
  }, [axios, user.email])

  console.log(assignments);

  useEffect(()=> {
    assignments.map((assignment) => setEmail(assignment?.email));
  },[assignments, email])
    console.log(email);



  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(`assignments/${id}?userEmail=${email}&queryEmail=${user.email}`,)
            .then((res) => {
              console.log(res.data);

              if (res.data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "The selected item has been successfully Deleted.",
                  "success"
                );

                const remaining = assignments.filter(
                  (assignment) => assignment._id !== id
                );
                setAssignments(remaining);
              }
            });
        } catch (error) {
          console.error("Error deleting assignment:", error);
          Swal.fire(
            "Error",
            "An error occurred while deleting the assignment.",
            "error"
          );
        }
      }
    });
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-20 py-12">
        {assignments?.map((assignment) => (
          <MyAssignmentsCard
            key={assignment._id}
            assignment={assignment}
            handleDelete={handleDelete}
          ></MyAssignmentsCard>
        ))}
      </div>
      <Faq></Faq>
    </div>
  );
};

export default MyAssignments;
