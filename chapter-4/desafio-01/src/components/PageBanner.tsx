import { Flex, Heading } from '@chakra-ui/react'

export default function PageBanner() {
    return(
        <Flex
            width="100%"
            height={["150px", "300px", "500px"]}
            px={["0", "0", "36"]}
            pt={["0", "0", "72"]}
            backgroundImage="url('https://images.unsplash.com/photo-1611443033479-987582c739b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Flex
                maxWidth={1160}
                width="100%"
                mx="auto"
                px="6" 
                justifyContent={["center", "center", "start"]}
                alignItems={["center", "center"]}
            >
                <Heading
                    fontSize={["1.75rem", "5xl"]}
                    fontWeight="500"
                    textAlign={["center", "left"]}
                    color="gray.100"
                >
                    Europa
                </Heading>
            </Flex>
            
            
        </Flex>
    )
}