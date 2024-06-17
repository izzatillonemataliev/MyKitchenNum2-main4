import { useCollection } from "../hooks/useColection"
import RecipiesList from "../components/RecipiesList";

function Home() {
  const {data:recipies} =useCollection()
  console.log(recipies && recipies.length);
  return(
  <div className="mb-10">
    <h1 className="text-3xl font-bold">All Recipies-{recipies && recipies.length}</h1>
    {recipies && <RecipiesList recipies={recipies}/>}
  </div>
  )
}

export default Home