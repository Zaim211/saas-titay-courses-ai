
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  
  return (
  <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="1"
          name="Companion One"
          topic="Topic One"
          subject="Subject One"
          duration={33}
          color="#FF5733"
        />
         <CompanionCard 
          id="2"
          name="Companion Two"
          topic="Topic Two"
          subject="Subject Two"
          duration={34}
          color="#fFBD33"
        />
          <CompanionCard 
            id="3"
            name="Companion Three"
            topic="Topic Three"
            subject="Subject Three"
            duration={35}
            color="#33FF57"
          />
      </section>
      <section className='home-section'>
        <CompanionList 
          title="Recently completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
  </main>

  )
}

export default Page