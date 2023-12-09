
import {  useLoaderData } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const UpdateAssignment = () => {

  const {user} = useAuth()
  console.log(user.email);
  

  const assignment = useLoaderData()
  const {
    _id,
    thumbnailUrl,
    email,
    title,
    marks,
    date,
    difficultyLevel,
    description,
  } = assignment;
 
  const axios = useAxios()


  const handleUpdateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target
    const title = form.title.value 
    const thumbnailUrl = form.thumbnailUrl.value; 
    const marks = form.marks.value; 
    const date = form.date.value; 
    const difficultyLevel = form.difficultyLevel.value; 
    const description = form.description.value; 

    const updateAssignment = {
        title, email, thumbnailUrl, marks, date, difficultyLevel, description
    }

    try {
      const res = await axios.put(
        `/assignments/${_id}?email=${user.email}`,
        updateAssignment
      );
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Wow....!",
          text: "The Assignment details have been updated successfully.!",
        });
      }else{
        Swal.fire(
          "Error",
          "Plz updating this  assignment.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error update assignment:", error);
      Swal.fire(
        "Error",
        "An error occurred while updating the assignment.",
        "error"
      );
    }


  };
  return (
    <div className="p-5 md:px-16">
      <form onSubmit={handleUpdateAssignment} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Assignment Title"
              defaultValue={title}
              className="input input-bordered bg-[#150f2d]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input
              type="number"
              name="marks"
              defaultValue={marks}
              placeholder="Marks"
              className="input input-bordered bg-[#150f2d]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Assignment difficulty level</span>
            </label>
            <select
              className="input input-bordered text-white bg-[#150f2d]"
              name="difficultyLevel"
              defaultValue={difficultyLevel}
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="thumbnailUrl"
              defaultValue={thumbnailUrl}
              placeholder="https://example.com/image.jpg"
              className="input input-bordered bg-[#150f2d]"
              pattern="https://.*" // Optional: To ensure it starts with 'https://'
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={date}
              placeholder="Marks"
              className="input input-bordered text-white bg-[#150f2d]"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6 space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Assignment Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Enter Assignment description..."
              className="textarea textarea-bordered bg-[#150f2d]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-[#150f2d] hover:bg-[#010313]"
          >
            Update to Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAssignment;
