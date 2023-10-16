// import axios from "axios";
// import React, { useState, useEffect } from 'react';

// const Information = () => {
//   const [data, setData] = useState([{}]);
//   useEffect(()=>{
//     getUser();
//   }, [])
//   // console.log(typeof(data));

//   const getUser = async() => {
//      await axios.get("http://localhost:4000/posts")
//      .then((res) => setData(res.data));
     
//   };

// const handleDelete = async (id) => {
//   await axios.delete("http://localhost:4000/posts/" +id)
//   .then((res)=> alert("deleted") );
//   getUser();
// }



 

//     return(




// <div className="container mt-5">
// <h2 className='text-center mt-5 mb-3'>STUDENT DATA</h2>
// <table className="table table-striped border border-dark border-2">
  
//       <thead>
//         <tr>
          
//           <th className="border border-dark">Name</th>
//           <th className="border border-dark" >Email</th>
//           <th className="border border-dark">Edit</th>
//           <th className="border border-dark">Delete</th>
//         </tr>
//       </thead>
//       <tbody id="tbody">
//        {
//         data.map((user) => (
//           <tr>
//             <td className="border border-dark">{user.name}</td>
//             <td className="border border-dark">{user.email}</td>
//             <td className="border border-dark"><button class="btn btn-primary" >Edit</button></td>
//             <td className="border border-dark" onClick={() => handleDelete(user.id)}><button class="btn btn-danger" >Delete</button></td>
//           </tr>
//         ))
//        }
//       </tbody>
    
// </table>

// </div>

//     );
// }



// export default Information;