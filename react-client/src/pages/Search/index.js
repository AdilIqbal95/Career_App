import React, { useState } from 'react';
import { Results } from '../../components';
import { useAuthContext } from "../../contexts/auth";
import axios from 'axios';

const Search = () => {
  const [inputData, setInputData] = useState({ input: "" })
  const { refresh } = useAuthContext();
  const [jobsData, setJobsData] = useState()
  const [totalResults, setTotalResults] = useState()
  let input = inputData.input
  const [loading, setLoading] = useState(true)
  const [dropVal, setDropVal] = useState()

  const handleInput = e => setInputData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const getJobs = async () => {
    await refresh()
    try {
      let token = localStorage.getItem("token")
      let userID = localStorage.getItem("user_id")
      const options = {
        headers: { "Authorization": `Bearer ${token}` }
      };
      const response = await axios.get(`${process.env.API_URL}/api/jobs?keywords=${input}`, options)
      const data = response.data.results
      const test = data[0]
      const totalResults = response.data.totalResults
      setJobsData(data)
      setTotalResults(totalResults)
      
      setLoading(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleDropDown = (e) => {
    setDropVal(e.target.value)

    switch (e.target.value) {
      case "Recent":
        setJobsData(jobsData.sort( ( a , b ) => b.date - a.date));
        break;
      case "Popular":
        setJobsData(jobsData.sort( ( a , b ) => b.applications - a.applications ));
        break;  
    }

  }
  console.log(jobsData)
  return (
    <>
      <main className="main-container">

        <div className="" id="SearchBar-container">
          <input name="input" onChange={handleInput} placeholder="Find your dream job today" className="SearchBar" type='text'></input>
          <button onClick={getJobs} className="col"><i id="search" class="fa fa-search" aria-hidden="true"></i></button>
          <select style={{ marginLeft: "1rem" }} value={dropVal} onChange={e => handleDropDown(e)} name="Filter" id="Filter">
            <option value="Recent">Recent</option>
            <option value="Popular">Popular</option>
          </select>
        </div>


        <div className="main-container" style={{ overflowY: "auto" }}>

          {loading ? <div></div>
            : <>
              <h1 style={{ display: "none" }}> Results</h1>
              <div><Results data={jobsData} /></div></>}
    </div>
      </main>

    </>
  )
}

export default Search;