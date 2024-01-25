import Todo from './Todo';

test('todo renders correctly', () => {
  const text = 'Test todo';

  const onClickDelete = jest.fn();
  const onClickComplete = jest.fn();

  const todo = (
    <Todo
      todo={{ text }}
      onClickDelete={onClickDelete}
      onClickComplete={onClickComplete}
    />
  );

  expect(todo).toHaveTextContent(text);
});
