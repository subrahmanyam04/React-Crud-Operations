import axios from "axios";
import React, { useState, useEffect } from 'react';

const Studenttable = () => {

  const [data, setData] = useState([{}]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

const [selectedStudentId, setSelectedStudentId] = useState(null);


const [error, setError] = useState(''); 


  useEffect(()=>{
    getUser();
  }, [])
  // console.log(typeof(data));

// get call here...............

  const getUser = async() => {
     await axios.get("http://localhost:4000/Information")
     .then((res) => setData(res.data));
     
  };


// Delete call here............

const handleDelete = async (id) => {
  await axios.delete("http://localhost:4000/Information/" +id)
  .then(()=> {
  getUser();
  alert("deleted")
  
} );

};

// edit call here.....................

const handleEdit = (id) => {
  const selectedStudent = data.find((student) => student.id === id);
  setSelectedStudentId(id);
  setFormData({
    name: selectedStudent.name,
    email: selectedStudent.email,
  });
};

const handleUpdate = () => {
  if (!formData.name || !formData.email) {
    setError("Name and email are required fields.");
    return;
  }

  axios
    .put("http://localhost:4000/Information/" + selectedStudentId, formData)
    .then(() => {
      getUser();
      setSelectedStudentId(null);
      setFormData({
        name: "",
        email: "",
      });
      setError('');
      // alert("Updated");
    })
    .catch((error) => {
      console.error("Error updating student:", error);
    });
};


// Cancel butoon Here....................

const handleCancelUpdate = () => {
  setSelectedStudentId(null);
  setFormData({
    name: "",
    email: "",
  });
  setError('');
};

// push call here................

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email) {
    setError("Name and email are required fields.");
    return;
  }

  axios
    .post("http://localhost:4000/Information", formData)
    .then(() => {
      
      getUser();
     
      setFormData({
        name: "",
        email: "",
       
      });
      setError('');
    })
    .catch((error) => {
      console.error("Error adding student:", error);
    });
};
  
    return(


<div className="container mt-5">
    <h2 className="text-center mb-4 mt-1">TODO'S APP</h2>
<div className="row">

  <div className="col-md-6 mx-auto">
    
    <form id="myform"  className="p-3 border border-dark border-3"  >
      <div className="mb-3 mt-3">
        <label>Name:</label>
        {/* <input type="text" className="form-control input"  placeholder="Enter employe name" id="fname"/> */}
        <input type="text" id="name"  placeholder="Enter student name" className="form-control" value={formData.name}
        onChange={(e)=> setFormData({...formData, name:e.target.value} , console.log(formData.name) )} />
            
      </div>
     
      <div className="mb-3 mt-3">
        <label>Email:</label>
        {/* <input type="email" className="form-control" placeholder="Enter student email" id="email" value={formData.email || ""}
        onChange={(e)=> setFormData({...formData, eamil:e.target.value})} /> */}
        <input type="email" className="form-control" placeholder="Enter student email" id="email" name="email" value={formData.email}
        onChange={(e)=> setFormData({...formData, email:e.target.value})} />

      
      </div>
     
      <div className="row g-1" >
                {/* <div class="col-md-2 ">
                  <button type="submit" className="btn btn-primary" id="button" onClick={handleSubmit} >Submit</button> 
                  <button  className="btn btn-success ms-1" id="upbutton" style={{display:"none"}} >update</button>
                  </div> */}
                  <div class="col-md-2">
  <button type="button" className={`btn ${selectedStudentId ? "btn-success" : "btn-primary"}`} onClick={selectedStudentId ? handleUpdate : handleSubmit}>
    {selectedStudentId ? "Update" : "Submit"} </button>
    </div>
    <div class="col-md-2">
  
    <button className="btn btn-secondary ms-1" onClick={handleCancelUpdate} >
      Cancel
    </button>

</div>

                  <span className="text-danger" id="error">{error}</span>
                  {/* {error && <span className="text-danger">{error}</span>}   */}
                  </div>
    </form>
   
  </div>
</div>

{/* Table representation */}

<h2 className='text-center mt-5 mb-3'>STUDENT DATA</h2>
<table className="table table-striped border border-dark border-2 table-hover ">
  
      <thead>
        <tr>
          
          <th className="border border-dark bg-info">Name</th>
          <th className="border border-dark bg-info" >Email</th>
          <th className="border border-dark bg-info">Action</th>
          {/* <th className="border border-dark bg-info">Delete</th> */}
        </tr>
      </thead>
      <tbody id="tbody">
       {
        data.map((user) => (
          <tr>
            <td className="border border-dark">{user.name}</td>
            <td className="border border-dark">{user.email}</td>
            {/* <td className="border border-dark"><button class="btn btn-primary" >Edit</button></td> */}
            <td className="border border-dark"><button className="btn btn-primary" onClick={() => handleEdit(user.id)}>Edit</button>
<button class="btn btn-danger ms-3" onClick={() => handleDelete(user.id)} >Delete</button>
            </td>
            {/* <td className="border border-dark" onClick={() => handleDelete(user.id)}><button class="btn btn-danger" >Delete</button></td> */}
          </tr>
        ))
       }
      </tbody>
    
</table>
</div>

    );
}

export default Studenttable;