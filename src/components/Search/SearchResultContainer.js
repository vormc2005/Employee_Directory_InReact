import React, {Component} from "react";
import API from "../../utils/API"
import "./Style.css"

//Array for table
const columns = [
  { id: 1, label: "Image" },
  { id: 2, label: "Full name" },
  { id: 4, label: "E-mail" },
  { id: 3, label: "Phone" },
  { id: 5, label: "DOB" }
];


class SearchResultContainer extends Component {
  state = {
    results: [],
    search: ""
  };
  
  
    // // When this component mounts, search the Person by last name


    componentDidMount(){  
      this.searchPerson()  
    }
    searchPerson = () => { 
      API.getEmployeesApi()
        .then(res => {this.setState({results: res.data.results }, () =>console.log(this.state.results))
      })
        .catch(err => console.log(err));
    };
  
   handleSearch = event =>{
     const {name, value} = event.target;
     this.setState({[name]:value});
   }


    render() {
        return (
                  
               
                  
                  <div className="results">
                    
                      <input
                        className="input"
                        placeholder="Type name here"
                        type="text"
                        onChange={this.handleSearch.bind(this)}
                        name="search"
                        value={this.state.search}
                      ></input>
                    
                    <table className="table">
                      <thead>
                        <tr>
                          {columns.map(column => (
                            <th key={column.id}>{column.label}</th>
                          ))}
                        </tr>
                      </thead>
                        <tbody>
                          {this.state.results
                            .filter(emp =>
                              (emp.name.first + " " + emp.name.last)
                                .toLowerCase()
                                .includes(this.state.search.toLowerCase())
                            )
                            .map(emp => {
                              return (
                                //included key equal to each person's SSN so I wouldn't get the "each child should have unique 'key' prop" error
                                //SSN is a unique identifier
                                <tr key={emp.id.value}>
                                  <td>
                                    <img src={emp.picture.thumbnail}></img>
                                  </td>
                                  <td>{emp.name.first + " " + emp.name.last}</td>
                                  <td>{emp.email}</td>
                                  <td>{emp.phone}</td>
                                  <td>{emp.dob.date.substring(0, 10)}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                    </table>
                  </div>   
              
                      
               
  )}             
        
}
    
  


export default SearchResultContainer;