import { Link } from "react-router-dom"
import {IoTrashOutline} from "react-icons/io5"

function RecipiesList({recipies}) {
  return <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {recipies.map((recipie)=>{
      return (
      <li key={recipie.id}>
        <Link to={`/singleRecipie/${recipie.id}`}>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
       <figure><img className="w-96 h-80" src={recipie.image} alt="more"/></figure>
        <div className="card-body">
        <h2 className="text-2xl font-bold">{recipie.title}</h2>
        <p className="line-clamp-3 mb-2">{recipie.method}</p>
       <div className="card-actions flex-nowrap items-center">
      <button className="btn btn-primary ">More</button>
       <button onClick={()=>deleteRecipie(recipie.id)} className="btn btn-secondary">
        <IoTrashOutline/>
        </button>
      </div>
      </div>
      </div>
        </Link>
      </li>
      )
    })}
  </ul>
}

export default RecipiesList
