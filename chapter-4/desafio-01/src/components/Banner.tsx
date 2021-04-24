import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function Banner() {
    return (
        <Flex
            width="100%"
            height={["163px", "250px", "250px", "335px"]}
            backgroundImage="url('/banner-background.svg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Flex
                justify={["center", "space-between"]}
                align="center"
                width="100%"
                maxWidth={1160}
                mx="auto"
                px={["4", "10", "15"]}
            >
                <Box>
                    <Heading
                        color="white"
                        fontWeight="500"
                        fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
                    // lineHeight="3.375rem"
                    >
                        5 Continentes, <br /> infinitas possibilidades.
                    </Heading>
                    <Text
                        maxWidth={["100%", "100%", "100%", "540px"]}
                        fontSize={["0.8rem", "0.8rem", "xl", "lg"]}
                        color="white"
                        mt="5"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
                <Image
                    src="/airplane.svg"
                    alt="Avião"
                    width={["300px", "300px", "300px", "430px"]}
                    display={["none", "none", "block"]}
                    transform="translateY(48px)"
                    ml="8"
                />
            </Flex>
        </Flex>
    )
}