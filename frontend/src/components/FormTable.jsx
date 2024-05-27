/* eslint-disable react/prop-types */

const FormTable = ({ users }) => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-2 md:px-6 text-left">S.No.</th>
              <th className="py-3 px-2 md:px-6 text-left">Categories</th>
              <th className="py-3 px-2 md:px-6 text-left">ahrefDR</th>
              <th className="py-3 px-2 md:px-6 text-left">mozDA</th>
              <th className="py-3 px-2 md:px-6 text-left">Website Language</th>
              <th className="py-3 px-2 md:px-6 text-left">Link Type</th>
              <th className="py-3 px-2 md:px-6 text-left">Price</th>
              <th className="py-3 px-2 md:px-6 text-left">mozSpamScore</th>
              <th className="py-3 px-2 md:px-6 text-left">Monthly Traffic</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="py-3 px-6 text-center text-lg font-semibold"
                >
                  No Data Fetched
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {index + 1}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.categories}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.ahrefsDR}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.mozDA}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.websiteLanguage}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.linkType}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.price}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.mozSpamScore}
                  </td>
                  <td className="py-3 px-2 md:px-6 text-center text-md font-semibold">
                    {user.monthlyTraffic}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormTable;
