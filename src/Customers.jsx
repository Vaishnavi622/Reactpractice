import { useEffect,useState } from "react";

function Customers(){
    const [customer, setCustomer] = useState([]);
    useEffect(() => { 
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => 
                response.json())
            .then((data) => {
                setCustomer(data);
            })
           .catch((error) =>{
            console.log(error); 
           });


        },[]);
    
    
    return(
        <div>
        <div className="p-2 m-4 flex justify-center overflow-x-auto">
        <h1>Customers Page</h1>
        <p>Welcome to the Customers page!</p>
       
         <h3> Customers {customer.length}</h3>
         </div>
         <div >
            
         
            {customer.map((customer) => (
                <div className="flex justify-evenly p-2 bg-white w-100 h-40 overflow-x-auto p-2 m-rounded-2 m-black inline-block hover:bg-blue-500 gap-2">
                <h3 key={customer.id}>{customer.name} </h3>
                <h3>{customer.email}</h3>
                <h3>{customer.username}</h3>
                </div>
            ))}

         </div>
        </div>
    )
}
export default Customers;