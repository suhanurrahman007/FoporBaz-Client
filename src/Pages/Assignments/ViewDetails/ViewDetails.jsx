import { useLoaderData } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import submit from "../../../assets/submit/ignou online assignment submission.jpg";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState } from "react";
import PdfPreviewModal from "./PdfPreviewModal";

const ViewDetails = () => {
  const assignment = useLoaderData();
  const { thumbnailUrl, title, marks, date, difficultyLevel, description } =
    assignment;
  console.log(title);

  const { user } = useAuth();
  const axios = useAxios();
  console.log(user.email);

  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [pdfLink, setPdfLink] = useState(""); // Set the PDF link based on your data

  const openPdfModal = () => {
    setIsPdfModalOpen(true);
  };

  const closePdfModal = () => {
    setIsPdfModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pdfLink = form.pdfLink.value;
    const node = form.node.value;
    const userEmail = user?.email;

    const submitted = {
      pdfLink,
      date,
      title,
      marks,
      node,
      userEmail,
      status: "pending",
      examineeName: "S H Suhan",
    };
    console.log(submitted);

    try {
      const res = await axios.post("/submitted", submitted);
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Wow....!",
          text: "The Product details have been Added successfully.!",
        });
      }
    } catch (error) {
      console.error(error.massage);
    }
  };

  return (
    <div>
      <div className="py-10">
        <div className="px-5 md:px-16 lg:px-24 grid lg:grid-cols-3 gap-4 lg:gap-20">
          <div className="col-span-2">
            <div className="card h-80  bg-base-100 shadow-xl image-full">
              <figure
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img className="w-full" src={thumbnailUrl} alt="Shoes" />
              </figure>
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-3xl">{date}</h2>
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-2 items-center gap-5 py-5">
                <p>
                  <span className="text-lg font-bold mr-3">
                    Assignment Name :{" "}
                  </span>{" "}
                  <span className="text-sm text-[#c5a35e]">{title}</span>
                </p>
                <p>
                  <span className="text-lg font-bold mr-3">Level : </span>{" "}
                  <span className="text-sm badge badge-accent badge-outline">
                    {difficultyLevel}
                  </span>
                </p>
                <p>
                  <span className="text-lg font-bold mr-3">
                    Assignment Number :{" "}
                  </span>{" "}
                  <span className="text-sm badge badge-secondary badge-outline">
                    {marks} Number
                  </span>
                </p>
              </div>
              <p className="text-justify text-sm">{description}</p>

              <p className="text-gray-400 mt-10 text-justify">
                I will be happy to help you with your assignment, but I need
                more specific details in order to provide you with the most
                relevant information and guidance. Please provide the following
                information: Assignment Topic: What is the subject or topic of
                your assignment? Please provide a clear and concise description.
                Assignment Requirements: What are the specific requirements and
                guidelines for the assignment? <br /> This might include word
                count, format, style (e.g., essay, report, presentation), and
                any specific questions or prompts you need to address. Deadline:
                When is the assignment due? Knowing the deadline will help you
                plan your work effectively. Additional Information: Is there any
                additional information or context you can provide about the
                assignment that would be helpful? Once you provide this
                information, I can offer you more tailored assistance and
                guidance for your assignment. Is this conversation helpful so
                far?
              </p>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <div className="space-y-14">
              <div className="flex gap-5">
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="text-6xl text-orange-900"
                >
                  <FaRegClock></FaRegClock>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Open Hours</h2>
                  <p className="text-sm font-semibold text-gray-400">
                    Monday – Friday 8.00 am – 5.00 pm <br />
                    Weekend Closed
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-6xl text-orange-900">
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    {" "}
                    <BiSolidPhoneCall></BiSolidPhoneCall>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Phone & E-mail</h2>
                  <p className="text-sm font-semibold text-gray-400">
                    Phone: 1-800-64-38
                  </p>
                  <p className="text-sm font-semibold text-gray-400">
                    Fax: 1-800-64-39
                  </p>
                  <a className="text-sm font-semibold text-gray-400" href="#">
                    office@fable.com
                  </a>
                </div>
              </div>

              <img className="w-full rounded-lg h-40" src={submit} alt="" />

              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <button
                  className="btn w-full bg-[#c5a35e] hover:bg-[#222335] font-normal text-white border-none rounded-none"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Take Assignment
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box bg-[#0C0D21]">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">PDF Link</span>
                          </label>
                          <input
                            type="text"
                            name="pdfLink"
                            placeholder="Enter PDF link"
                            className="input input-bordered bg-[#010313]"
                          />
                        </div>
                        <button
                          className="btn btn-outline btn-success my-5"
                          onClick={openPdfModal}
                        >
                          Preview
                        </button>
                        <PdfPreviewModal
                          pdfUrl={pdfLink}
                          isOpen={isPdfModalOpen}
                          onClose={closePdfModal}
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            Assignment Description
                          </span>
                        </label>
                        <textarea
                          name="node"
                          placeholder="Enter Submit Node..."
                          className="textarea textarea-bordered bg-[#010313]"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn bg-[#1e1541] hover:bg-[#010313] w-full my-7"
                      >
                        Submit to Assignment
                      </button>
                    </form>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ViewDetails;
