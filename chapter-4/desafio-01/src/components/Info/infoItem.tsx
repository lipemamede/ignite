import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface InfoItemProps {
    icon: string
    text: string
}

export default function InfoItem({icon, text}: InfoItemProps) {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    })

    return (
        <Flex
            direction={["row", "column"]}
            alignItems="center"
            justifyContent="center"
        >
            {isMobile 
            ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" />
            : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
            <Text
                color="gray.600"
                fontSize={["md", "xl", "2xl"]}
                fontWeight="500"
            >{text}</Text>
        </Flex>
    )
}