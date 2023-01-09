import { Checkbox, CloseButton, HStack, Text } from '@chakra-ui/react'

const TodoItem = ({ title, completed }) => {
  return (
    <HStack spacing={3}>
      <Checkbox isChecked={completed} />
      <Text>{title}</Text>
      <CloseButton />
    </HStack>
  )
}

export default TodoItem