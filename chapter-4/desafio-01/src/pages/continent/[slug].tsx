import { Avatar, Box, Flex, Grid, Heading, Icon, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import PageBanner from '../../components/PageBanner'

export default function Continent() {
    return (
        <Flex direction="column">
            <Header />
            <PageBanner />

            <Flex
                direction="column"
                maxWidth={1160}
                width="100%"
                mx="auto"
                px="6"
                mb="10"
            >
                <Grid
                    templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
                    gap={[5, 10, 16, 20]}
                    my={["8", "20"]}
                >
                    <Text
                        fontSize={["lg", "xl", "xl", "2xl"]}
                        color="gray.700"
                        textAlign="justify"
                    >
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>

                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems={["flex-start", "flex-start", "center"]}
                        >
                            <Heading
                                fontSize={["2xl", "5xl"]}
                                color="yellow.400"
                                fontWeight="500"
                            >
                                50
                            </Heading>
                            <Text
                                fontSize={["md", "xl"]}
                                color="gray.600"
                                fontWeight="600"
                            >
                                países
                            </Text>
                        </Flex>

                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems={["flex-start", "flex-start", "center"]}
                        >
                            <Heading
                                fontSize={["2xl", "5xl"]}
                                color="yellow.400"
                                fontWeight="500"
                            >
                                60
                            </Heading>
                            <Text
                                fontSize={["md", "xl"]}
                                color="gray.600"
                                fontWeight="600"
                            >
                                línguas
                            </Text>
                        </Flex>

                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems={["flex-start", "flex-start", "center"]}
                        >
                            <Heading
                                fontSize={["2xl", "5xl"]}
                                color="yellow.400"
                                fontWeight="500"
                            >
                                27
                            </Heading>
                            <Text
                                fontSize={["md", "xl"]}
                                color="gray.600"
                                fontWeight="600"
                            >
                                cidades +100
                                <Popover>
                                    <PopoverTrigger>
                                        <span>
                                            <Icon 
                                                as= {RiInformationLine} 
                                                width={["10px", "16px"]} 
                                                height={["10px", "16px"]}
                                                cursor="pointer" 
                                                ml="1" 
                                                color="gray.400"
                                            />
                                        </span>
                                    </PopoverTrigger>
                                    <PopoverContent background="gray.600" color="yellow.400">
                                        <PopoverArrow backgroundColor="gray.600"/>
                                        <PopoverCloseButton />
                                        <PopoverBody fontWeight="400" fontSize="lg">
                                            Paris, Canadá, França
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Text>
                        </Flex>
                    </Flex>
                </Grid>

                <Heading 
                    fontSize={["2xl", "4xl"]}
                    fontWeight="500"
                    mb="10"
                >
                    Cidades +100
                </Heading>

                <Grid
                    alignItems="center"
                    justifyContent="center"
                    px={["30", "0"]}
                    templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                    gap={["20px", "45px"]}
                >
                    <Box
                        borderRadius="4px"
                        overflow="hidden"
                    >
                        <Image 
                            src="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                            width="100%"
                            height="170px"
                        />
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            p="6"
                            borderWidth="1px"
                            borderColor="yellow.400"
                            borderTop="0"
                        >
                            <Flex direction="column">
                                <Heading
                                    fontSize="xl"
                                    fontWeight="500"
                                >
                                    Londres
                                </Heading>
                                <Text
                                    fontSize="md"
                                    fontWeight="500"
                                    color="gray.500"
                                    mt="3"
                                >
                                    Reino Unido
                                </Text>
                            </Flex>
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" />
                        </Flex>
                    </Box>

                    <Box
                        borderRadius="4px"
                        overflow="hidden"
                    >
                        <Image 
                            src="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                            width="100%"
                            height="170px"
                        />
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            p="6"
                            borderWidth="1px"
                            borderColor="yellow.400"
                            borderTop="0"
                        >
                            <Flex direction="column">
                                <Heading
                                    fontSize="xl"
                                    fontWeight="500"
                                >
                                    Londres
                                </Heading>
                                <Text
                                    fontSize="md"
                                    fontWeight="500"
                                    color="gray.500"
                                    mt="3"
                                >
                                    Reino Unido
                                </Text>
                            </Flex>
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" />
                        </Flex>
                    </Box>

                    <Box
                        borderRadius="4px"
                        overflow="hidden"
                    >
                        <Image 
                            src="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                            width="100%"
                            height="170px"
                        />
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            p="6"
                            borderWidth="1px"
                            borderColor="yellow.400"
                            borderTop="0"
                        >
                            <Flex direction="column">
                                <Heading
                                    fontSize="xl"
                                    fontWeight="500"
                                >
                                    Londres
                                </Heading>
                                <Text
                                    fontSize="md"
                                    fontWeight="500"
                                    color="gray.500"
                                    mt="3"
                                >
                                    Reino Unido
                                </Text>
                            </Flex>
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" />
                        </Flex>
                    </Box>

                    <Box
                        borderRadius="4px"
                        overflow="hidden"
                    >
                        <Image 
                            src="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                            width="100%"
                            height="170px"
                        />
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            p="6"
                            borderWidth="1px"
                            borderColor="yellow.400"
                            borderTop="0"
                        >
                            <Flex direction="column">
                                <Heading
                                    fontSize="xl"
                                    fontWeight="500"
                                >
                                    Londres
                                </Heading>
                                <Text
                                    fontSize="md"
                                    fontWeight="500"
                                    color="gray.500"
                                    mt="3"
                                >
                                    Reino Unido
                                </Text>
                            </Flex>
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" />
                        </Flex>
                    </Box>

                    <Box
                        borderRadius="4px"
                        overflow="hidden"
                    >
                        <Image 
                            src="https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                            width="100%"
                            height="170px"
                        />
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            p="6"
                            borderWidth="1px"
                            borderColor="yellow.400"
                            borderTop="0"
                        >
                            <Flex direction="column">
                                <Heading
                                    fontSize="xl"
                                    fontWeight="500"
                                >
                                    Londres
                                </Heading>
                                <Text
                                    fontSize="md"
                                    fontWeight="500"
                                    color="gray.500"
                                    mt="3"
                                >
                                    Reino Unido
                                </Text>
                            </Flex>
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" />
                        </Flex>
                    </Box>
                </Grid>
            </Flex>

            
        </Flex>
    )
}