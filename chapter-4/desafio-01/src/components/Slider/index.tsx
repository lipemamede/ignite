import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
  return (
    <>
        <Heading
            fontSize={["lg", "3xl", "4xl"]}
            fontWeight="500"
            textAlign="center"
            mb={["5", "14"]}
        >
            Vamos nessa? <br />
            Então escolha seu continente
        </Heading>

        <Flex
            width="100%"
            maxWidth={1160}
            mx="auto"
            mb={["5", "10"]}
            height={["250px", "450px"]}
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                autoplay={{
                    delay:4000
                }}
                style={{
                    width: '100%',
                    flex: '1'
                }}
            >
                <SwiperSlide>
                    <Flex
                        width="100%"
                        height="100%"
                        align="center"
                        justifyContent="center"
                        direction="column"
                        bgImage="url(https://images.unsplash.com/photo-1599171571332-b31a23c3fd33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href="/continent/europe">
                            <a >
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >
                                    Europa
                                </Heading>
                                <Text 
                                    fontSize={["0.8rem", "1xl", "2xl"]} 
                                    fontWeight="bold" 
                                    color="gray.300"
                                    mt={["2", "4"]}
                                >
                                    O contimente mais antigo
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        width="100%"
                        height="100%"
                        align="center"
                        justifyContent="center"
                        direction="column"
                        bgImage="url(https://images.unsplash.com/photo-1599171571332-b31a23c3fd33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href="/continent/europe">
                            <a >
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >
                                    Europa
                                </Heading>
                                <Text 
                                    fontSize={["0.8rem", "1xl", "2xl"]} 
                                    fontWeight="bold" 
                                    color="gray.300"
                                    mt={["2", "4"]}
                                >
                                    O contimente mais antigo
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        width="100%"
                        height="100%"
                        align="center"
                        justifyContent="center"
                        direction="column"
                        bgImage="url(https://images.unsplash.com/photo-1599171571332-b31a23c3fd33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href="/continent/europe">
                            <a >
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >
                                    Europa
                                </Heading>
                                <Text 
                                    fontSize={["0.8rem", "1xl", "2xl"]} 
                                    fontWeight="bold" 
                                    color="gray.300"
                                    mt={["2", "4"]}
                                >
                                    O contimente mais antigo
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    </>
  )
}