import { Box } from '@chakra-ui/react'
import Banner from '../components/Banner'
import { Header } from '../components/Header'
import Info from '../components/Info'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <Info />

      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.600" my={["9", "20"]} />

      <Slider />
    </>
  )
}
