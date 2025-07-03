
import { Route, Routes } from 'react-router-dom';
import './css/App.css'
// import * as React from 'react';
// import { Component } from 'react';
// import Group from './componentss/Group';
import Movie from './componentss/movie';
import Home from './page/Home';
import Fav from './page/Fav';
// import { Nav } from 'react-bootstrap';
import Nav from './componentss/Nav';
import { Moviegiver } from './Factor/moviefact';

function App() {
  // const [count, setCount] = useState(0)

  // const movnum = 2;

  return (

    <Moviegiver>
      <Nav />
    <main className='main-content '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Fav />} />  
      </Routes>  
    </main>
    </Moviegiver>



    // <>
    // <Home />
    // {/* {movnum == 1 && (<Movie movi={{title: "Collections", release_date: "2025"}} /> )} */}
    // {/* //  (<Movie movi={{title: "Collectio", release_date: "2025"}} /> )} */}
    // {/* //  (<Movie movi={{title: "Collections", release_date: "2025"}} /> )} */}
      // {/* <div><Movie /> */}
        /* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        // </p> */
      // {/* </div> */}
      /* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
    // </>
  )
}

export default App
