import { Link } from "react-router-dom";

const Submit = ({ submitted }) => {
  
    const { _id, title,date, status, examineeName, marks } = submitted;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <tbody>
            <tr className="grid grid-cols-12 text-center">
              <th className="col-span-2">{title}</th>
              <td className="col-span-2">{examineeName}</td>
              <td className="badge badge-accent badge-outline col-span-2">{status}</td>
              <td className="col-span-2">{marks}</td>
              <td className="col-span-2">{date}</td>
              <th className="col-span-2">
                <Link
                  to={`/markSubmit/${_id}`}
                  className="btn btn-outline btn-secondary btn-xs"
                >
                  Give Mark
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submit;