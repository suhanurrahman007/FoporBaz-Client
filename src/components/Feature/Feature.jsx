import img1 from "../../assets/Feature/images.jfif";
import img2 from "../../assets/Slider/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg";
import img3 from "../../assets/Slider/close-up-image-of-a-young-female-student-doing-assignments-in-library-H7XY5B.jpg";
import img4 from "../../assets/Slider/students-working-and-studying-flatlay.jpg";


const Feature = () => {
  return (
    <div>
      <div className="">
        <div className="p-9 space-y-5">
          <h2 className="text-center text-3xl font-extrabold">
            It’s simple. You have a Feature to plan and <br /> we have{" "}
            <span className="text-orange-900">the solutions</span>
          </h2>
          <p className="text-sm text-gray-300 text-center">
            HERE IS HOW WE CAN HELP YOU
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 px-5 md:px-16 lg:px-24">
          <div
            className="card bg-[#150F2D] shadow-sm"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <figure>
              <img src={img1} alt="Shoes" className="rounded-xl h-36 w-full" />
            </figure>

            <div className="card-body items-center text-center h-52">
              <h2 className="card-title">Calculus Study Group</h2>

              <p className="text-sm text-gray-400">
                Mathematics study session with a focus on calculus.
              </p>

              <p className="text-sm font-bold text-gray-400">Mathematics</p>
            </div>
          </div>
          <div
            className="card bg-[#150F2D] shadow-sm"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <figure>
              <img src={img2} alt="Shoes" className="rounded-xl h-36 w-full" />
            </figure>

            <div className="card-body items-center text-center h-52">
              <h2 className="card-title">Chemistry Periodic Table Review</h2>

              <p className="text-sm text-gray-400">
                Chemistry study session covering periodic table elements.
              </p>

              <p className="text-sm font-bold  text-gray-400">Chemistry</p>
            </div>
          </div>
          <div
            className="card bg-[#150F2D] shadow-sm"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <figure>
              <img src={img3} alt="Shoes" className="rounded-xl h-36 w-full" />
            </figure>

            <div className="card-body items-center text-center h-52">
              <h2 className="card-title">Algorithms in Computer Science</h2>

              <p className="text-sm text-gray-400">
                Computer Science study session on algorithms.
              </p>

              <p className="text-sm font-bold  text-gray-400">
                Computer Science
              </p>
            </div>
          </div>
          <div
            className="card bg-[#150F2D] shadow-sm"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <figure>
              <img src={img4} alt="Shoes" className="rounded-xl h-36 w-full" />
            </figure>

            <div className="card-body items-center text-center h-52">
              <h2 className="card-title">Literature Analysis Workshop</h2>

              <p className="text-sm text-gray-400">
                Language Arts study session for literature analysis.
              </p>

              <p className="text-sm font-bold  text-gray-400">Language Arts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
