import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { db } from "../firebase/firebaseConfig";


// loader
export const loader =async({params})=>{
const docRef = doc(db, "ricipies",params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  console.log("No such document!");
}
return null
}

function SingleRecipe() {
  const data =useLoaderData()
  console.log(data);
  return(
    <>
    {data && (
      <div className="mb-20 text-center">
        <h1  className="text-3xl font-bold mb-10">{data.title}</h1>
        <img className="w-full h-[460px]" src={data.image} alt="" />
        <h2>ingredients : {data.ingredients}</h2>
      </div>
    )}
   </>
  ) 
}

export default SingleRecipe