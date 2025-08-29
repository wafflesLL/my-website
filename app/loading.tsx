import { LoaderCircle } from "lucide-react";
export default function Loading(){
  return(
    <div className="min-h-screen flont-bold flex flex-col text-7xl text-center justify-center items-center">
      <h1>Loading</h1>
      <LoaderCircle size={70}/>
    </div>
  )
}
