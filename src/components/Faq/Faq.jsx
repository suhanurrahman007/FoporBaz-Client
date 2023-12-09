import { BsCheck2Circle } from "react-icons/bs";
import images from "../../assets/logo/PhotoRoom.png-PhotoRoom.png";
const Faq = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-16 lg:px-28 mb-5 gap-5">
      <div className="space-y-5">
        <h2 className="text-3xl text-justify py-10 font-bold">
          will have some frequently asked <span className="text-orange-900">questions</span> :
        </h2>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            What is online group study, and how does it work?
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            How can I find or join an online study group?
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            What are the benefits of online group study sessions?
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            What tools or platforms are commonly used for online group study?
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            How do I ensure productive and effective online group study
            sessions?
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            Are there any etiquette guidelines for online group study sessions?
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            What if I have technical difficulties during a study session?
          </h2>
        </div>
        <div className="flex space-x-3 text-orange-800 items-center text-lg">
          <BsCheck2Circle></BsCheck2Circle>
          <h2 className="text-gray-400">
            What is the ideal group size for online study sessions?
          </h2>
        </div>
      </div>
      <div>
        <img className="w-full mt-9" src={images} alt="" />
      </div>
    </div>
  );
};

export default Faq;
