import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() =>{
      fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
   },[])
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-24 gap-8">
         {
            services.map(service => <ServiceCard key={service._id} service={service}/>)
         }    
      </div>
   );
};

export default Services;