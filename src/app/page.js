import Image from 'next/image'
import HeroSection from '@/components/subHeroSection/hero.jsx'
import MainHeroSection from '@/components/mainheroSection/page.jsx'
import CountryCardSection from '@/components/CountryCardSection/page'
export default function Home () {
  return (
    <main>
      <HeroSection />
      <MainHeroSection />
      <CountryCardSection/>
    </main>
  )
}
