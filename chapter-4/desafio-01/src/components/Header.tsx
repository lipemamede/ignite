import { Flex, Grid, Icon, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
    const { asPath } = useRouter()
    const notHome = asPath !== "/"

    return(
        <Flex 
            as="header" 
            w="100%" 
            h={["50", "100"]} 
            mx="auto" 
            mt="5" 
            mb="5" 
            px="6" 
            align="center" 
            justifyContent="center"
        >
            <Grid
                width="100%"
                maxWidth={1160}
                h="100%"
                mx="auto"
                alignItems="center"
                templateColumns="repeat(3,1fr)"
                justifyContent="center"
            >
                {notHome && (
                    <Link href="/">
                        <a >
                            <Icon as={RiArrowLeftSLine} fontSize={["20", "40"]} justifySelf="start" />
                        </a>
                    </Link>
                )}
                <Image src="/logo.svg" alt="Logo" justifySelf="center" gridColumn="2" width={["81px", "184px"]} />
            </Grid>
        </Flex>
    )
}