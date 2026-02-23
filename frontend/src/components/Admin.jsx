import { useEffect, useState } from "react";
import Application from "./Application ";
import axios from "axios";

function Admin() {

   const [user, setUserData] = useState([]);
   const [change,setChange] = useState(false);

  const handleApprove = async(id) => {
   try{
    const req = await axios.put(`http://localhost:8080/acceptReq/${id}`)
    console.log(req.data);
      setChange(!change);
   }catch(err){
    console.log(err);
   }
  };

  const handleReject = async (id) => {
    try{
      const res = await axios.put(`http://localhost:8080/rejectReq/${id}`);
      if(res.data){
        setChange(!change);
        console.log(res.data);
      }
    }catch(err){
        console.log(err);
      }
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const req = await axios.get("http://localhost:8080/userData");
      console.log(req.data);
      setUserData(req.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();

}, [change]);


  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Pending Hostel Applications
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">

        {user.map((user) => (
          <Application key={user?.id} user={user} handleReject={handleReject} handleApprove={handleApprove}/>
        ))}

      </div>
    </div>
  );
}

export default Admin;