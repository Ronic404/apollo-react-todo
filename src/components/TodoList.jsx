import { Spinner, VStack } from '@chakra-ui/react'
import { useMutation, useQuery } from '@apollo/client'

import TodoItem from './TodoItem'
import TotalCount from './TotalCount'

import { ALL_TODO, UPDATE_TODO } from '../apollo/todos'

const TodoList = () => {
  const { data, loading, error } = useQuery(ALL_TODO)
  const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO)

  if (loading) {
    return <Spinner />
  }

  if (error || updateError) {
    return <h2>Error...</h2>
  }

  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo) => (
          <TodoItem onToggle={toggleTodo} key={todo.id} {...todo} />
        ))}
      </VStack>
      <TotalCount />
    </>
  )
}

export default TodoList