import React from 'react';
import './Home.css'
import Button from 'react-bootstrap/Button';
import cardHome from '../../assets/img-blog2.webp'
import Accordion from 'react-bootstrap/Accordion';


const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='home-container'>
     <h1>LOREM IMPSUM LOREM IMPSUM <span>LOREM IMPSUM</span></h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <form className='form-home'>
       <input type="email" placeholder="Email address" name="email" id="email" className='wailist-input'/> 
        <button value="subtmit" className='button-primary-global'>Join wailist</button>
       </form>
       <div className="grid-container">
      <div className="grid-item large">
        <h2>Database</h2>
        <p>Every project is a full Postgres database, the world's most trusted relational database.</p>s
      </div>
      <div className="grid-item">
        <h2>Authentication</h2>
        <p>Add user sign ups and logins, securing your data with Row Level Security.</p>
      </div>
      <div className="grid-item">
        <h2>Edge Functions</h2>
        <p>Easily write custom code without deploying or scaling servers.</p>
      </div>
      <div className="grid-item">
        <h2>Storage</h2>
        <p>Store, organize, and serve large files, from videos to images.</p>
      </div>
      <div className="grid-item">
        <h2>Realtime</h2>
        <p>Build multiplayer experiences with realtime data synchronization.</p>
      </div>
      <div className="grid-item">
        <h2>Vector</h2>
        <p>Integrate your favorite ML models to store, index, and search vector embeddings.</p>
      </div>
    </div>
       {/* <section>
        <div className='card-home'>
          <div className='card-home-text'>
         <h3>An AI tool made to enhance designers.</h3>
         <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"</p>
         </div>
         <img src={cardHome} alt='cardHome'/>
        </div>
       </section> */}

       <section>
        <div className='preguntas-frecuentes'>
          <h4>PREGUNTAS FRECUENTES</h4>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Question</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Question </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Question</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Question</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Question</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Question</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </div>
       </section>
       <section>
        <div className='card-home'>
          <div className='card-home-text'>
         <h3>An AI tool made to enhance designers.</h3>
         <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"</p>
         </div>
         <div className='card-home-grid'>
         <div className="grid-item">
        <h2>Authentication</h2>
        <p>Add user sign ups and logins, securing your data with Row Level Security.</p>
      </div>
      <div className="grid-item">
        <h2>Edge Functions</h2>
        <p>Easily write custom code without deploying or scaling servers.</p>
      </div>
         </div>
        </div>
       </section>

     </div>
    
    </div>

    </>
  );
}

export default Home;
