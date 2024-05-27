import { useEffect, useState } from "react";
import axios from "axios";

const AdminTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/admin/getAdminData"
        );
        // console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2">S.No.</th>
              <th className="px-4 py-2">Publisher Name</th>
              <th className="px-4 py-2">Publisher Email</th>
              <th className="px-4 py-2">Publisher Number</th>
              <th className="px-4 py-2">Publisher URL</th>
              <th className="px-4 py-2">Categories</th>
              <th className="px-4 py-2">ahrefDR</th>
              <th className="px-4 py-2">mozDA</th>
              <th className="px-4 py-2">Website Language</th>
              <th className="px-4 py-2">linkType</th>
              <th className="px-4 py-2">price</th>
              <th className="px-4 py-2">moz Spam Score</th>
              <th className="px-4 py-2">Monthly Traffic</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.publisherName}</td>
                <td className="px-4 py-2">{user.publisherEmail}</td>
                <td className="px-4 py-2">{user.publisherPhoneNo}</td>
                <td className="px-4 py-2">{user.publisherURL}</td>
                <td className="px-4 py-2">{user.categories}</td>
                <td className="px-4 py-2">{user.ahrefsDR}</td>
                <td className="px-4 py-2">{user.mozDA}</td>
                <td className="px-4 py-2">{user.websiteLanguage}</td>
                <td className="px-4 py-2">{user.linkType}</td>
                <td className="px-4 py-2">{user.price}</td>
                <td className="px-4 py-2">{user.mozSpamScore}</td>
                <td className="px-4 py-2">{user.monthlyTraffic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
