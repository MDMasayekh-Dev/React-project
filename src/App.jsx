import React from 'react'
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Services from './layouts/Services'
import Servicecards from './components/Servicecards'
import Aboutpart from './layouts/Aboutpart'

 
const App = () => {
  return (
<div>
<Navbar/>
<Banner/>
<Services/>
<Aboutpart/>
</div>
  )
}

export default App