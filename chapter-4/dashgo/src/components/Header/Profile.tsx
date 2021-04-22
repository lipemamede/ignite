import { Box, Flex, Avatar, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Sue Doe</Text>
          <Text color="gray.300" fontSize="small">
            suedoe@mail.com
          </Text>
        </Box>
      )}
        <Avatar size="md" name="Sue Doe" src="https://github.com/mamede.png" />
      </Flex>
  )
}