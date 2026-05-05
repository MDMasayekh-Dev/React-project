import React from 'react'
import Container from '../components/Container'
import Images from '../components/Images'
import AboutImage from '../assets/banner.jpg'
import Flex from '../components/flex'
import Subheading from '../components/Subheading'

const Aboutpart = () => {
  return (
  <section>
    <Container className="pt-[120px] flex">
        <Flex className='w-1/2 gap-[30px]'>
        <Images src={AboutImage} className="w-[370px] h-[480px] "/>
        <div className='flex flex-col gap-[30px]'>
             <Images src={AboutImage} className="w-[170px] h-[225px]"/>
        <Images src={AboutImage} className="w-[170px] h-[225px]"/>
        </div>
       
        </Flex>
        <div className='w-1/2'>
        <Subheading className="" text="About Me"/>

        </div>
    </Container>
  </section>
  )
}

export default Aboutpart