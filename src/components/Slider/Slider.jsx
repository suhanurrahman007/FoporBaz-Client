import img1 from "../../assets/Slider/18121424-group-of-girls-studying-together-in-campus.jpg";
import img2 from "../../assets/Slider/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg";
import img3 from "../../assets/Slider/students-working-and-studying-flatlay.jpg";
import img4 from "../../assets/Slider/istockphoto-1264296727-612x612.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-[470px]" />
        <div className="absolute py-24 space-y-7 pl-16 h-full text-white transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <h2 className="text-5xl font-bold">
            Assignment <br /> Help Service In <br />
            The World.
          </h2>
          <p className="text-gray-300 w-1/2 text-justify">
            Looking For Help From Premier Assignment.
          </p>
          <div className="space-x-4">
            <button className="btn bg-[#FF3811] hover:bg-[#ff391165] text-white border-none w-36">
              Discover More
            </button>
            <button className="btn btn-outline btn-success border-none w-36">
              Latest Assignment
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn mr-7 btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[470px]" />
        <div className="absolute py-24 space-y-7 pl-16 h-full text-white transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <h2 className="text-5xl font-bold">
            Affordable <br /> Price For Car <br />
            Servicing
          </h2>
          <p className="text-gray-300 w-1/2 text-justify">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn bg-[#FF3811] hover:bg-[#ff391165] text-white border-none w-36">
              Discover More
            </button>
            <button className="btn btn-outline btn-success border-none w-36">
              Latest Assignment
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn mr-7 btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-[470px]" />
        <div className="absolute py-24 space-y-7 pl-16 h-full text-white transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <h2 className="text-5xl font-bold">
            Affordable <br /> Price For Car <br />
            Servicing
          </h2>
          <p className="text-gray-300 w-1/2 text-justify">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn bg-[#FF3811] hover:bg-[#ff391165] text-white border-none w-36">
              Discover More
            </button>
            <button className="btn btn-outline btn-success border-none w-36">
              Latest Assignment
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn mr-7 btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full h-[470px]" />
        <div className="absolute py-24 space-y-7 pl-16 h-full text-white transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <h2 className="text-5xl font-bold">
            Affordable <br /> Price For Car <br />
            Servicing
          </h2>
          <p className="text-gray-300 w-1/2 text-justify">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn bg-[#FF3811] hover:bg-[#ff391165] text-white border-none w-36">
              Discover More
            </button>
            <button className="btn btn-outline btn-success border-none w-36">
              Latest Assignment
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn mr-7 btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
