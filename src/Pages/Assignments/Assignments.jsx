import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AssignmentCard from "./AssignmentCard";
import { useLoaderData } from "react-router-dom";
import "./assignments.css";
import Feature from "../../components/Feature/Feature";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("all");

  const { user } = useAuth();
  const axios = useAxios();
  const { count } = useLoaderData();
  console.log(count);
  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  console.log(pages);

  const filteredAssignments =
    filter === "all"
      ? assignments
      : assignments.filter(
          (assignment) => assignment.difficultyLevel === filter
        );

  const handlePre = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axios
      .get(`/assignments?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setAssignments(res.data);
      });
  }, [axios, user.email, currentPage, itemsPerPage]);

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
          axios.delete(`assignments/${id}/?email=${user.email}`).then((res) => {
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
      <div className=" px-5 md:px-20 py-12">
        <div className="my-7">
          <select
            className="input input-bordered text-white bg-[#150f2d]"
            name="difficultyLevel"
            onChange={(e) => setFilter(e.target.value)}
            required
          >
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredAssignments?.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              handleDelete={handleDelete}
            ></AssignmentCard>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button onClick={handlePre} className="btn-page">
            pre
          </button>

          {pages.map((page) => (
            <button
              key={page}
              className={`btn-page ${
                currentPage === page ? "active-page" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext} className="btn-page">
            next
          </button>
        </div>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Assignments;
