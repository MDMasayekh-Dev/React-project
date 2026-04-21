import React from 'react'
import Container from '../components/Container'
import Flex from '../components/flex'
import Image from '../components/Images'
import Logo from '../assets/logo.png'
import Listitems from '../components/Listitems'
import Buttons from '../components/Buttons'

const Navbar = () => {
  return (
    <nav>
        <Container>
           <Flex className="justify-between items-center">
            <div>
               <Image src={Logo}/>
            </div>
            <div>           
            <ul className='flex gap-[43px]'>
       <Listitems className="" text='Home'/>
       <Listitems className="" text='Pages'/>
       <Listitems className="" text='Services'/>
       <Listitems className="" text='Blog'/>
       <Listitems className="" text='Contact'/>
            </ul>
           </div>
            <div>
                <Buttons text="Download CV"/>
            </div>
           </Flex>
        </Container>
    </nav>
  )
}

export default Navbar