import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    mozDA: "1",
    toDA:"100",
    categories: "",
    websiteLanguage: "",
    ahrefsDR:"1",
    toDR:"100",
    linkType:"",
    maxLinkAllow:"",
    markedAsSponsored:"",
    price:"1",
    toPrice:"100000",
    monthlyTraffic:"",
    mozSpamScore:"",
    serviceType:"",
    siteWorkedWith:"",
    publisherRole:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-2xl text-white bg-blue-700 p-2 my-2">FAQ</h1>
      <form onSubmit={handleSubmit} className="bg-gray-200 shadow-xl p-4">
        {/* 1st Row */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col">
            <label htmlFor="mozDA">Moz DA </label>
            <input
              type="number"
              id="mozDA"
              name="mozDA"
              min="1"
              value={formData.mozDA}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="toDA">To </label>
            <input
              type="number"
              id="toDA"
              name="toDA"
              min="1"
              max="100"
              value={formData.toDA}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="categories">Categories </label>
            <select
              id="categories"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="allCategories">All</option>
              <option value="agriculture">Agriculture</option>
              <option value="animalsAndPets">Animals and Pets</option>
              <option value="art">Art</option>
              <option value="automobiles">Automobiles</option>
              <option value="business">Business</option>
              <option value="books">Books</option>
              <option value="beauty">Beauty</option>
              <option value="careerAndEmployment">Career and Employment</option>
              <option value="computer">Computer</option>
              <option value="constructionAndRepairs">
                Construction and Repairs
              </option>
              <option value="culture">Culture</option>
              <option value="ecommerce">E-commerce</option>
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
              <option value="environment">Environment</option>
              <option value="fashion">Fashion</option>
              <option value="finance">Finance</option>
              <option value="webDevelopment">Web Development</option>
              <option value="appDevelopment">App Development</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="websiteLanguage">Website Language </label>
            <select
              id="websiteLanguage"
              name="websiteLanguage"
              value={formData.websiteLanguage}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="allLanguage">All</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="punjabi">Punjabi</option>
              <option value="marathi">Marathi</option>
              <option value="gujarati">Gujarati</option>
              <option value="urdu">Urdu</option>
              <option value="odia">Odia</option>
              <option value="tamil">Tamil</option>
              <option value="telegu">Telegu</option>
              <option value="bengali">Bengali</option>
              <option value="kannada">Kannada</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex items-center gap-5 my-4">
          <div className="flex flex-col">
            <label htmlFor="ahrefsDR">Ahrefs DR</label>
            <input
              type="number"
              id="ahrefsDR"
              name="ahrefsDR"
              min="1"
              value={formData.ahrefsDR}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="toDR">To</label>
            <input
              type="number"
              id="toDR"
              name="toDR"
              min="1"
              max="100"
              value={formData.toDR}
              onChange={handleChange}
              // required
              // placeholder="100"
              className="focus:outline focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkType">Link Type:</label>
            <select
              id="linkType"
              name="linkType"
              value={formData.linkType}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="">All</option>
              <option value="doFollow">Do Follow</option>
              <option value="noFollow">No Follow</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="maxLinkAllow">Max Link Allow</label>
            <select
              id="maxLinkAllow"
              name="maxLinkAllow"
              value={formData.maxLinkAllow}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="markedAsSponsored">Marked As Sponsored</label>
            <select
              id="markedAsSponsored"
              name="markedAsSponsored"
              value={formData.markedAsSponsored}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="all">All</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* 3rd Row */}
        <div className="flex items-center gap-5 mb-4">
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              min="1"
              value={formData.price}
              onChange={handleChange}
              // required
              // placeholder="1"
              className="focus:outline focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="toPrice">To </label>
            <input
              type="number"
              id="toPrice"
              name="toPrice"
              min="1"
              max="100000"
              value={formData.toPrice}
              onChange={handleChange}
              // required
              // placeholder="100000"
              className="focus:outline focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="monthlyTraffic">Monthly Traffic</label>
            <select
              id="monthlyTraffic"
              name="monthlyTraffic"
              value={formData.monthlyTraffic}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="allMonthlyTraffic">All</option>
              <option value="monthlyTraffic1000">
                Mothly Traffic {">="} 1000
              </option>
              <option value="monthlyTraffic10000">
                Mothly Traffic {">="} 10 000
              </option>
              <option value="monthlyTraffic50000">
                Mothly Traffic {">="} 50 000
              </option>
              <option value="monthlyTraffic100000">
                Mothly Traffic {">="} 100 000
              </option>
              <option value="monthlyTraffic200000">
                Mothly Traffic {">="} 200 000
              </option>
              <option value="monthlyTraffic300000">
                Mothly Traffic {">="} 300 000
              </option>
              <option value="monthlyTraffic400000">
                Mothly Traffic {">="} 400 000
              </option>
              <option value="monthlyTraffic500000">
                Mothly Traffic {">="} 500 000
              </option>
              <option value="monthlyTraffic600000">
                Mothly Traffic {">="} 600 000
              </option>
              <option value="monthlyTraffic700000">
                Mothly Traffic {">="} 700 000
              </option>
              <option value="monthlyTraffic800000">
                Mothly Traffic {">="} 800 000
              </option>
              <option value="monthlyTraffic900000">
                Mothly Traffic {">="} 900 000
              </option>
              <option value="monthlyTraffic1000000">
                Mothly Traffic {">="} 1 000 000
              </option>
              <option value="monthlyTraffic10000000">
                Mothly Traffic {">="} 10 000 000
              </option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="mozSpamScore">Moz Spam Score</label>
            <select
              id="mozSpamScore"
              name="mozSpamScore"
              value={formData.mozSpamScore}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="allMozSpamScore">All</option>
              <option value="spamScore01">Spam Score {"<="} 01</option>
              <option value="spamScore02">Spam Score {"<="} 02</option>
              <option value="spamScore05">Spam Score {"<="} 05</option>
              <option value="spamScore10">Spam Score {"<="} 10</option>
              <option value="spamScore20">Spam Score {"<="} 20</option>
              <option value="spamScore30">Spam Score {"<="} 30</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="serviceType">Service Type</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              // required
              className="focus:outline focus:outline-blue-400 cursor-pointer"
            >
              <option value="allServiceType">All</option>
              <option value="contentPlacement">Content Placement</option>
              <option value="contentCreation">
                Content Creation & Placement
              </option>
              <option value="linkInsArticle">
                Link Insertions In An Existing Article
              </option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* 4th Row */}

        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            {" "}
            <div className="flex flex-col">
              <label htmlFor="siteWorkedWith">
                Sites {"I've (haven't)"} Worked With
              </label>
              <select
                id="siteWorkedWith"
                name="siteWorkedWith"
                value={formData.siteWorkedWith}
                onChange={handleChange}
                // required
                className="focus:outline focus:outline-blue-400 cursor-pointer"
              >
                <option value="allWebsitesWorkedWith">All Websites</option>
                <option value="excludeSitesWorkedWith">
                  Exclude Sites {"I've"} Worked With
                </option>
                <option value="onlySitesWorkedWith">
                  Only Sites {"I've"} Worked With
                </option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="publisherRole">Publisher Role</label>
              <select
                id="publisherRole"
                name="publisherRole"
                value={formData.publisherRole}
                onChange={handleChange}
                // required
                className="focus:outline focus:outline-blue-400 cursor-pointer"
              >
                <option value="allWebsitesRole">All Websites</option>
                <option value="websitesByOwner">Websites added by Owner</option>
                <option value="websitesByContributors">
                  Websites added by Contributors
                </option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          {/* Buttons here */}
          <div className="flex gap-7">
            <button type="reset" className="py-1 px-2 bg-gray-900 text-white">
              Reset
            </button>
            <button type="submit" className="py-1 px-2 bg-gray-900 text-white">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
