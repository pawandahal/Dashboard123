import Upcoming from "@/components/tableSection/Upcoming";
import PartialTable from "@/components/tableSection/Partialtable";
import { RiStackLine } from "react-icons/ri";

export default function Home() {
 
  return (
    <div className='w-full'>
      {/* main section */}
      {/* list of itmes */}
      <div className="w-[95vw] flex justify-center ">
        <div className="grid grid-cols-4  gap-4 relative   items-center p-2">
          <div className="shadow-md grid grid-cols-1  w-full h-[14vh]  items-center justify-center p-5">
            <div className="flex gap-4 justify-between items-center ">
              <p>Total Available Limit</p>
              <p>
                <RiStackLine />
              </p>
            </div>
            <div>
          
              <p>Rs.0</p>
            </div>
          </div>
          <div className="shadow-md grid grid-cols-1  w-full h-[14vh]  items-center justify-center p-5">
            <div className="flex gap-4 justify-between items-center ">
              <p>Total Available Limit</p>
              <p>
                <RiStackLine />
              </p>
            </div>
            <div>
         
              <p>Rs.0</p>
            </div>
          </div>
          <div className="shadow-md grid grid-cols-1  w-full h-[14vh]  items-center justify-center p-5">
            <div className="flex gap-4 justify-between items-center ">
              <p>Total Available Limit</p>
              <p>
                <RiStackLine />
              </p>
            </div>
            <div>
           
              <p>Rs.0</p>
            </div>
          </div>
          <div className="shadow-md grid grid-cols-1  w-full h-[14vh]  items-center justify-center p-5">
            <div className="flex gap-4 justify-between items-center ">
              <p>Total Available Limit</p>
              <p>
                <RiStackLine />
              </p>
            </div>
            <div>
            
              <p>Rs.0</p>
            </div>
          </div>
        </div>
      </div>

      {/* upcoming 5 fellow up */}
      <div className="relative  w-[90vw] h-fit">
        {/* first fellow up */}
        <Upcoming />
      </div>
      {/* partial fellow up */}
      <div className="relative  w-[90vw] h-fit">
        <PartialTable />
      </div>
    </div>
  );
}
