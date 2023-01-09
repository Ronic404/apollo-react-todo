import { Checkbox, CloseButton, HStack, Text } from '@chakra-ui/react'

const TodoItem = ({ id, title, completed, onToggle, onDelete }) => {
  const handleChangeCheckbox = () => {
    onToggle({
      variables: {
        id,
        completed: !completed,
      }
    })
  }

  const handleClickButton = () => {
    onDelete({
      variables: {
        id,
      }
    })
  }

  return (
    <HStack spacing={3}>
      <Checkbox isChecked={completed} onChange={handleChangeCheckbox} />
      <Text>{title}</Text>
      <CloseButton onClick={handleClickButton} />
    </HStack>
  )
}

export default TodoItem