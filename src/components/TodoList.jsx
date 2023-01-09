import { Spinner, VStack } from '@chakra-ui/react'
import { useMutation, useQuery } from '@apollo/client'

import TodoItem from './TodoItem'
import TotalCount from './TotalCount'

import { ALL_TODO, DELETE_TODO, UPDATE_TODO } from '../apollo/todos'

const TodoList = () => {
  const { data, loading, error } = useQuery(ALL_TODO)
  const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO)
  const [removeTodo, { error: removeError }] = useMutation(DELETE_TODO, {
    update(cache, { data: { removeTodo } }) {
      cache.modify({
        fields: {
          allTodos(currentTodos = []) {
            return currentTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`)
          }
        }
      })
    }
  })

  if (loading) {
    return <Spinner />
  }

  if (error || updateError || removeError) {
    return <h2>Error...</h2>
  }

  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo) => (
          <TodoItem 
            onToggle={toggleTodo}
            onDelete={removeTodo}
            key={todo.id}
            {...todo} 
          />
        ))}
      </VStack>
      <TotalCount />
    </>
  )
}

export default TodoList