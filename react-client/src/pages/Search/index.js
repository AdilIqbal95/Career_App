import React, {useState} from 'react';
import { Results } from '../../components';
import data from '../../temp_data'
import { useAuthContext } from "../../contexts/auth";
import axios from 'axios';

const Search = () => {
    // const [jobList, setJobList] = useState(data)
    const tempData = data
    const [inputData, setInputData] = useState({input:""})
    const { refresh } = useAuthContext();
    const [jobsData, setjobsData] = useState()
    const handleInput = e => setInputData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    let input = inputData.input
    console.log("Input data is: ",inputData)
    console.log("Input is: ",input)
    
    const getJobs = async () => {
      // setInput()
      await refresh()
      try {
        let token = localStorage.getItem("token")
        let userID = localStorage.getItem("user_id")
        const options = {
          headers: { "Authorization": `Bearer ${token}` }
        };
        const response = await axios.get(`${process.env.API_URL}/api/jobs?keywords=${input}`, options)
        const data = response.data.results
        const totalResults = response.data.totalResults
        console.log("job data: ",data)
        console.log("total results: ",totalResults)
      } catch (err) {
        console.error(err.message)
      }
    }
    getJobs()

    return (
        <>
            <div className="row"id="SearchBar-container">
              <input name="input" onChange={handleInput} className= "SearchBar col" type='text'></input>
              <button className="col"><i id="search" class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <div class="row">
              <div class="col" id="Filter1">
                <select name="Filter_1" id="Filter_1">
                  <option value="All">All</option>
                  <option value="Jobs">Jobs</option>
                  <option value="Companies">Companies</option>
                </select>
              </div>
              <div class="col" id="Filter2">
                <select name="Filter_2" id="Filter_2">
                  <option value="Recent">Recent</option>
                  <option value="Popular">Popular</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div>
                <h1> Results</h1>
                <div><Results data={tempData} /></div>
              </div>
            </div>

            
          
        </>
    )
}

export default Search;