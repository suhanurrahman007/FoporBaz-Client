import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AssignmentsCard = ({ assignment }) => {
  const {
    _id,
    thumbnailUrl,
    title,
    marks,
    selectedDate,
    difficultyLevel,
    description,
  } = assignment;

  return (
    <div>
      <div className="card card-compact bg-[#150f2d] text-white rounded-md shadow-xl">
        <figure>
          <img
            className="w-full h-40"
            src={thumbnailUrl}
            alt={"Product Image"}
          />
        </figure>
        <div className="card-body items-center text-center h-60">
          <h2 className="card-title">{title}</h2>
          <p>Mark : {marks}</p>
          <p className="ml-12">{selectedDate}</p>
          <div className="badge badge-accent mx-auto badge-outline">
            {difficultyLevel}
          </div>
          <p>{description}</p>
          <div className=" grid grid-cols-2 mt-4 space-x-3">
            {/* Button to delete the assignment */}
            <Link
              to={`/viewAssignment/${_id}`}
              className="btn w-full  btn-outline btn-info text-xs"
            >
              <FaEdit /> View
            </Link>
            <Link
              to={`/updateAssignment/${_id}`}
              className="btn w-full  btn-outline btn-success text-xs"
            >
              <FaEdit /> Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsCard;
