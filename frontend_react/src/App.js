import React from 'react'
import { About , Skills , Profile , Work , Header , Footer } from './container';
import {Navbar} from './components';
import './App.scss';


const App = () => {
  return (
<div className='app'>
  <Navbar />
  <Header />
  <About />
   {/* <Work /> */}  
    {/* work is not working , there are some errors in consolee, so I removed it from App.js only! */}


  <Skills />
  <Profile />

    {/* Profile and testimonials are same , i used testimonials as profile ... */}


  <Footer />
  <h3 className="ending-text">Made with ❤️ by Hardik Sharma</h3>
</div>
  )
}

export default App;