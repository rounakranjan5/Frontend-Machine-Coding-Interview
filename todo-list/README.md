## Problem Statement :

Build a Todo List component where users can:

1. Add a new todo item.
2. Mark a todo as completed.
3. Delete a todo item.
4. View the list of all todos.


## Requirements

The component should maintain a list of todos in its state.

1. A todo has: id, text, and completed (boolean).
2. An input box with placeholder "Enter todo" to type a new todo.
3. A button labelled "Add" to add a todo.
4. Each todo should display its text and a checkbox to toggle completion.
5. Each todo should have a delete button labelled "Delete" to delete a todo.
6. Completed todos should appear with a strikethrough style.


## Constraints & Edge Cases

- Todo text should not be empty.
- Deleting an item should not affect the remaining list.
- All operations should update the Ul immediately.
- Duplicate Entries Shouldn't be allowed