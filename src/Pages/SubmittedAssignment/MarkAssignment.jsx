import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const MarkAssignment = () => {
  const submittedMark = useLoaderData();
  console.log(submittedMark);
  const axios = useAxios()
  const { _id, pdfLink, node } = submittedMark;
//   console.log(_id);


    const handleMarkSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const pdfLink = form.pdfLink.value;
      const mark = form.mark.value;
      const feedback = form.feedback.value;
      const node = form.node.value;
   

      const markSubmit = {
        pdfLink,
        feedback,
        mark,
        node,
        status: "completed",
      };

      try {
        const res = await axios.put(`/submitted/${_id}`, markSubmit);
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Wow....!",
            text: "The Assignment details have been updated successfully.!",
          });
        } else {
          Swal.fire("Error", "Plz updating this  assignment.", "error");
        }
      } catch (error) {
        console.error("Error Update assignment:", error);
        Swal.fire(
          "Error",
          "An error occurred while updating the assignment.",
          "error"
        );
      }
    };
  return (
    <div className="p-5 md:px-16">
      <form onSubmit={handleMarkSubmit} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">PDF Link</span>
            </label>
            <input
              type="text"
              name="pdfLink"
              defaultValue={pdfLink}
              placeholder="Enter PDF link"
              className="input input-bordered bg-[#010313]"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input
              type="number"
              name="mark"
              placeholder="Marks"
              className="input input-bordered bg-[#010313]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Assignment Feedback</span>
            </label>
            <input
              type="text"
              name="feedback"
              placeholder="Assignment feedback"
              className="input input-bordered bg-[#010313]"
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
              name="node"
              defaultValue={node}
              placeholder="Enter Submit Node..."
              className="textarea textarea-bordered bg-[#010313]"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn bg-[#150f2d] hover:bg-[#010313]">
            Assignment Mark
          </button>
        </div>
      </form>
    </div>
  );
};

export default MarkAssignment;
