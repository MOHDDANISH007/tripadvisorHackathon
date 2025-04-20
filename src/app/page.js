import Image from 'next/image'
import HeroSection from '@/components/subHeroSection/hero.jsx'
import MainHeroSection from '@/components/mainheroSection/page.jsx'
import CountryCardSection from '@/components/CountryCardSection/page'
import CountryCardSection2 from '@/components/CountryCardSection2/page'
import MoreToExplore from '@/components/MoreToExplore/page'
import CardSection3 from '@/components/CardSection3/page'
import TopDestinationSection from '@/components/TopDestinationSection/page'
import TravelerChoice from '@/components/TravelerChoice/page'
export default function Home () {
  return (
    <main>
      <HeroSection />
      <MainHeroSection />
      <CountryCardSection/>
      <CountryCardSection2/>
      <MoreToExplore/>
      <TopDestinationSection/>
      <CardSection3/>
      <TravelerChoice/>
    </main>
  )
}
