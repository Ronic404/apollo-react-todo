import { Checkbox, CloseButton, HStack, Text } from '@chakra-ui/react'

const TodoItem = ({ id, title, completed, onToggle }) => {
  const handleChangeCheckbox = () => {
    onToggle({
      variables: {
        id,
        completed: !completed,
      }
    })
  }

  return (
    <HStack spacing={3}>
      <Checkbox isChecked={completed} onChange={handleChangeCheckbox} />
      <Text>{title}</Text>
      <CloseButton />
    </HStack>
  )
}

export default TodoItem