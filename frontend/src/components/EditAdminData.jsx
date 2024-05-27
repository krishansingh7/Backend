/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditAdminData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formDatas, setFormDatas] = useState({
    publisherURL: "",
    publisherName: "",
    publisherEmail: "",
    publisherPhoneNo: "",
    mozDA: "",
    categories: "Agriculture",
    websiteLanguage: "English",
    ahrefsDR: "",
    linkType: "Do Follow",
    price: "",
    monthlyTraffic: "Monthly Traffic >= 1000",
    mozSpamScore: "Spam Score <= 01",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/superAdmin/getOneAdminData/${id}`)
      .then((response) => {
        const data = response.data;
        // Ensure all fields are strings
        const sanitizedData = {
          publisherURL: data.publisherURL || "",
          publisherName: data.publisherName || "",
          publisherEmail: data.publisherEmail || "",
          publisherPhoneNo: data.publisherPhoneNo || "",
          mozDA: data.mozDA || "",
          categories: data.categories || "",
          websiteLanguage: data.websiteLanguage || "",
          ahrefsDR: data.ahrefsDR || "",
          linkType: data.linkType || "",
          price: data.price || "",
          monthlyTraffic: data.monthlyTraffic || "",
          mozSpamScore: data.mozSpamScore || "",
          siteWorkedWith: data.siteWorkedWith || "",
          publisherRole: data.publisherRole || "",
        };
        setFormDatas(sanitizedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormDatas({
      ...formDatas,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/superAdmin/updateOneAdminData/${id}`,
        formDatas
      );
      toast.success("Client Data updated successfully!");
      navigate("/superadmin");
    } catch (error) {
      toast.error("Error updating data!");
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Client</h1>
      <form onSubmit={submitForm} className="space-y-4">
        {/* 1st Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="mozDA" className="mb-1">
              Moz DA
            </label>
            <input
              type="number"
              id="mozDA"
              name="mozDA"
              min="1"
              max="100"
              value={formDatas.mozDA}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="categories" className="mb-1">
              Categories
            </label>
            <select
              id="categories"
              name="categories"
              value={formDatas.categories}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            >
              <option value="Agriculture">Agriculture</option>
              <option value="Animals And Pets">Animals and Pets</option>
              <option value="Art">Art</option>
              <option value="Automobiles">Automobiles</option>
              <option value="Business">Business</option>
              <option value="Books">Books</option>
              <option value="Beauty">Beauty</option>
              <option value="Career And Employment">
                Career and Employment
              </option>
              <option value="Computer">Computer</option>
              <option value="Construction And Repairs">
                Construction and Repairs
              </option>
              <option value="Culture">Culture</option>
              <option value="Ecommerce">E-commerce</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Environment">Environment</option>
              <option value="Fashion">Fashion</option>
              <option value="Finance">Finance</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="websiteLanguage" className="mb-1">
              Website Language
            </label>
            <select
              id="websiteLanguage"
              name="websiteLanguage"
              value={formDatas.websiteLanguage}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Marathi">Marathi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Urdu">Urdu</option>
              <option value="Odia">Odia</option>
              <option value="Tamil">Tamil</option>
              <option value="Telegu">Telegu</option>
              <option value="Bengali">Bengali</option>
              <option value="Kannada">Kannada</option>
            </select>
          </div>
        </div>

        {/* Publisher URL */}
        <div className="grid grid-cols-1">
          <div className="flex flex-col">
            <label htmlFor="publisherURL" className="mb-1">
              Publisher URL
            </label>
            <input
              type="url"
              id="publisherURL"
              name="publisherURL"
              title="Please ensure to provide proper format of the url"
              placeholder="https://www.google.com"
              pattern="https?://.*"
              value={formDatas.publisherURL}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            />
          </div>
        </div>

        {/* 2nd Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="ahrefsDR" className="mb-1">
              Ahrefs DR
            </label>
            <input
              type="number"
              id="ahrefsDR"
              name="ahrefsDR"
              min="1"
              max="100"
              value={formDatas.ahrefsDR}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkType" className="mb-1">
              Link Type
            </label>
            <select
              id="linkType"
              name="linkType"
              value={formDatas.linkType}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            >
              <option value="Do Follow">Do Follow</option>
              <option value="No Follow">No Follow</option>
            </select>
          </div>
        </div>

        {/* 3rd Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="1"
              max="10000"
              value={formDatas.price}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="monthlyTraffic" className="mb-1">
              Monthly Traffic
            </label>
            <select
              id="monthlyTraffic"
              name="monthlyTraffic"
              value={formDatas.monthlyTraffic}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            >
              <option value="Monthly Traffic >= 1000">
                Monthly Traffic {">="} 1000
              </option>
              <option value="Monthly Traffic >= 10000">
                Monthly Traffic {">="} 10,000
              </option>
              <option value="Monthly Traffic >= 50000">
                Monthly Traffic {">="} 50,000
              </option>
              <option value="Monthly Traffic >= 100000">
                Monthly Traffic {">="} 100,000
              </option>
              <option value="Monthly Traffic >= 200000">
                Monthly Traffic {">="} 200,000
              </option>
              <option value="Monthly Traffic >= 300000">
                Monthly Traffic {">="} 300,000
              </option>
              <option value="Monthly Traffic >= 400000">
                Monthly Traffic {">="} 400,000
              </option>
              <option value="Monthly Traffic >= 500000">
                Monthly Traffic {">="} 500,000
              </option>
              <option value="Monthly Traffic >= 600000">
                Monthly Traffic {">="} 600,000
              </option>
              <option value="Monthly Traffic >= 700000">
                Monthly Traffic {">="} 700,000
              </option>
              <option value="Monthly Traffic >= 800000">
                Monthly Traffic {">="} 800,000
              </option>
              <option value="Monthly Traffic >= 900000">
                Monthly Traffic {">="} 900,000
              </option>
              <option value="Monthly Traffic >= 1000000">
                Monthly Traffic {">="} 1,000,000
              </option>
              <option value="Monthly Traffic >= 10000000">
                Monthly Traffic {">="} 10,000,000
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="mozSpamScore">Moz Spam Score</label>
            <select
              id="mozSpamScore"
              name="mozSpamScore"
              value={formDatas.mozSpamScore}
              onChange={inputChangeHandler}
              className="focus:outline focus:outline-blue-400 cursor-pointer p-2"
            >
              <option value="Spam Score <= 01">Spam Score {"<="} 01</option>
              <option value="Spam Score <= 02">Spam Score {"<="} 02</option>
              <option value="Spam Score <= 05">Spam Score {"<="} 05</option>
              <option value="Spam Score <= 10">Spam Score {"<="} 10</option>
              <option value="Spam Score <= 20">Spam Score {"<="} 20</option>
              <option value="Spam Score <= 30">Spam Score {"<="} 30</option>
            </select>
          </div>
        </div>

        {/* 4th Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="publisherName" className="mb-1">
              Publisher Name
            </label>
            <input
              type="text"
              id="publisherName"
              name="publisherName"
              value={formDatas.publisherName}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="publisherEmail" className="mb-1">
              Publisher Email
            </label>
            <input
              type="email"
              id="publisherEmail"
              name="publisherEmail"
              value={formDatas.publisherEmail}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="publisherPhoneNo" className="mb-1">
              Publisher Phone No.
            </label>
            <input
              type="tel"
              id="publisherPhoneNo"
              name="publisherPhoneNo"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              value={formDatas.publisherPhoneNo}
              onChange={inputChangeHandler}
              className="border rounded p-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 mt-4"
        >
          Update Client
        </button>
      </form>
    </div>
  );
};

export default EditAdminData;
