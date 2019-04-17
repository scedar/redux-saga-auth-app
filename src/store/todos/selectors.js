export function getTodos(state) {
  const allTodos = state.todosReducer.todos;

  let pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} todos`,
    pageSizeOptions: ['1', '2', '5', '10', '25', '50', '100', '250', '500'],
  };

  return {
    name: `Todos`,
    tracker: state.todosReducer.todosTracker,
    timestamp: state.todosReducer.todosTimestamp,
    data: allTodos,
    noRecordMessage: `No Todos Found`,
    pagination: pagination,
  }
}

export function getTodo(state) {
  return {
    name: 'Todo',
    tracker: state.todosReducer.todoTracker,
    timestamp: state.todosReducer.todoTimestamp,
    data: state.todosReducer.todo,
    noRecordMessage: 'No Todo Found',
  }
}

export function getNewTodo(state) {
  return {
    name: 'New Todo',
    tracker: state.todosReducer.newTodoTracker,
    timestamp: state.todosReducer.newTodoTimestamp,
    data: state.todosReducer.newTodo,
  }
}

export function getUpdatedTodo(state) {
  return {
    name: 'Updated Todo',
    tracker: state.todosReducer.updatedTodoTracker,
    timestamp: state.todosReducer.updatedTodoTimestamp,
    data: state.todosReducer.updatedTodo,
  }
}

export function getDeletedTodo(state) {
  return {
    name: 'Deleted Todo',
    tracker: state.todosReducer.deletedTodoTracker,
    timestamp: state.todosReducer.deletedTodoTimestamp,
    data: state.todosReducer.deletedTodo,
  }
}

