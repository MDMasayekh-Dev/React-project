import React from 'react'
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Services from './layouts/Services'
import Servicecards from './components/Servicecards'
import Aboutme from './components/Aboutme'
 
const App = () => {
  return (
<div>
<Navbar/>
<Banner/>
<Services/>
<Aboutme/>
</div>
  )
}

export default App