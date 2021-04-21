import { Box, Flex, Avatar, Text } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center" >
        <Box mr="4" textAlign="right">
          <Text>Sue Doe</Text>
          <Text color="gray.300" fontSize="small">
            suedoe@mail.com
          </Text>
        </Box>

        <Avatar size="md" name="Sue Doe" src="https://github.com/mamede.png" />
      </Flex>
  )
}