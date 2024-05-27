import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SuperAdminTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/superAdmin/getAllAdminData"
        );
        // console.log(response)
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `http://localhost:4000/superAdmin/deleteOneAdminData/${userId}`
      );
      toast.success("Client Deleted Successfully")
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      toast.error("Error deleting user")
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                S.No.
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Publisher Name
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Publisher Email
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Publisher Number
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Publisher URL
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Categories
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                ahrefDR
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                mozDA
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Website Language
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                linkType
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Price
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                moz Spam Score
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Monthly Traffic
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Delete or Update
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="bg-gray-100 border-b border-gray-200"
              >
                <td className="w-1/12 py-3 px-4">{index + 1}</td>
                <td className="w-1/12 py-3 px-4">{user.publisherName}</td>
                <td className="w-1/12 py-3 px-4">{user.publisherEmail}</td>
                <td className="w-1/12 py-3 px-4">{user.publisherPhoneNo}</td>
                <td className="w-1/12 py-3 px-4">{user.publisherURL}</td>
                <td className="w-1/12 py-3 px-4">{user.categories}</td>
                <td className="w-1/12 py-3 px-4">{user.ahrefsDR}</td>
                <td className="w-1/12 py-3 px-4">{user.mozDA}</td>
                <td className="w-1/12 py-3 px-4">{user.websiteLanguage}</td>
                <td className="w-1/12 py-3 px-4">{user.linkType}</td>
                <td className="w-1/12 py-3 px-4">{user.price}</td>
                <td className="w-1/12 py-3 px-4">{user.mozSpamScore}</td>
                <td className="w-1/12 py-3 px-4">{user.monthlyTraffic}</td>
                <td className="w-1/12 py-3 px-4">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded my-2"
                  >
                    <i className="fa-solid fa-trash"></i> DELETE
                  </button>
                  <Link
                    to={`/editadmindata/${user._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                  >
                    EDIT
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuperAdminTable;
