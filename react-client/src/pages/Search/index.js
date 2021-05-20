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

  return (
    <>
      <div className="" id="SearchBar-container">
      <input name="input" onChange={handleInput} placeholder="Find your dream job today" className="SearchBar" type='text'></input>
      <button onClick={getJobs} className="col"><i id="search" class="fa fa-search" aria-hidden="true"></i></button>
      </div>

   <br></br>
          <select name="Filter_2" id="Filter_2">
            <option value="Recent">Recent</option>
            <option value="Popular">Popular</option>
          </select>
   
      <div class="row">
        <div>
          {loading ? <div></div>
            : <>
              <h1> Results</h1>
              <div><Results data={jobsData} /></div></>}
        </div>
      </div>



    </>
  )
}

export default Search;