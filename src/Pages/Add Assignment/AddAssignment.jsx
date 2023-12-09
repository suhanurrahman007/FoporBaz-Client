import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS styles

import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { data } from "autoprefixer";

const AddAssignment = () => {
  const [title, setTitle] = useState(null);
  const [marks, setMark] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [description, setDescription] = useState(null);

  const { user } = useAuth();
  // console.log(user.email);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log(data);

  const axios = useAxios();

  const assignment = {
    title,
    marks,
    difficultyLevel,
    thumbnailUrl,
    selectedDate,
    description,
    email: user?.email,
  };
  console.log(assignment);

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    const res = await axios.post("/assignments", assignment);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Wow....!",
        text: "The Product details have been Added successfully.!",
      });
    }
  };
  return (
    <div className="p-5 md:px-16">
      <form onSubmit={handleAddAssignment} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              onBlur={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Assignment Title"
              className="input input-bordered bg-[#150f2d]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input
              onBlur={(e) => setMark(e.target.value)}
              type="number"
              name="marks"
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
              onBlur={(e) => setDifficultyLevel(e.target.value)}
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
              onBlur={(e) => setThumbnailUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="input input-bordered bg-[#150f2d]"
              pattern="https://.*" // Optional: To ensure it starts with 'https://'
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              onBlur={(e) => setDate(e.target.value)}
              placeholder="Marks"
              className="input input-bordered text-white bg-[#150f2d]"
              required
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy" // You can customize the date format
              placeholderText="Select date"
              className="input input-bordered  w-full text-white bg-[#150f2d]"
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
              onBlur={(e) => setDescription(e.target.value)}
              placeholder="Enter Assignment description..."
              className="textarea textarea-bordered bg-[#150f2d]"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn bg-[#150f2d] hover:bg-[#010313]">
            Add to Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAssignment;
