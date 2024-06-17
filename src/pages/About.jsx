
import { VscGithub } from "react-icons/vsc";
import { FaTelegram } from "react-icons/fa";

function About() {
  return (
    <div>
        <h1 className='flex items-center justify-center text-4xl mb-10'>About the author : </h1>
        <div>
          <h2 className='text-2xl text-center mb-4'>Author <a className='link text-teal-300 hover:text-violet-600' href="https://t.me/Kolen7z">Kolen</a> (Mukhammadzoir Makhmudov)</h2>

          <div className="stats shadow flex justify-center item-center mb-4	 ">
  
  <div className="stat place-items-center">
    <div className="stat-title">Works</div>
    <div className="stat-value">18</div>
    <div className="stat-desc">From october  to april</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Visited</div>
    <div className="stat-value text-secondary">40</div>
    <div className="stat-desc text-secondary">↗︎ 40 (400%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title"> Appreciated</div>
    <div className="stat-value">10</div>
    <div className="stat-desc">↘︎ 30 (300%)</div>
  </div>

</div>

<ul className="timeline flex items-center justify-center mb-5 mt-5">
  <li>
    <div className="timeline-start timeline-box">Get off the couchr</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr className="bg-primary"/>
  </li>
  <li>
  <hr className="bg-primary"/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box"> Start learning programming</div>
    <hr className="bg-primary"/>
  </li>
  <li>
    <hr className="bg-primary"/>
    <div className="timeline-start timeline-box">Make the first website </div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">Make a full-fledged website</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">reach the junior level</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
  </li>
  
</ul>

          <p className='text-center text-2xl mb-6'>I am a novice frontend programmer, I am still learning how to improve my work, and I would be glad if you would come in and rate my other work ଘ(੭ˊᵕˋ)੭</p>
        </div>
        <p className='text-center text-2xl text-teal-300 mb-4'>you can view and evaluate the works on the following platforms :</p>
        <div className='flex justify-center items-center gap-4 mb-10'>
          <a href="https://github.com/MakhmudovM" target="blanck"><VscGithub className="w-7 h-7 hover:text-violet-600"/></a>
          <a href="https://t.me/kolen_projects" target="blanck"><FaTelegram className="w-7 h-7 hover:text-violet-600"/></a>
        </div>
    
    </div>
  )
}

export default About