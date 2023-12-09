
import { AiOutlineClose } from "react-icons/ai";

const MyAssignmentsCard = ({ assignment, handleDelete }) => {
  const {
    _id,
    thumbnailUrl,
    title,
    marks,
    selectedDate,
    difficultyLevel,
    description,
  } = assignment;

  console.log(assignment)

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
            <p>{marks}</p>
            <p className="ml-12">{selectedDate}</p>
          <div className="badge badge-accent mx-auto badge-outline">
            {difficultyLevel}
          </div>
          <p>{description}</p>
          <div className=" flex justify-center  mt-4 space-x-3">
            {/* Button to delete the assignment */}
            <button
              onClick={() => handleDelete(_id)}
              className="btn w-full border-none text-white text-xs hover:bg-[#511b1b] bg-[#7d2530]"
            >
              <AiOutlineClose /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAssignmentsCard;