import React from 'react';
import Task from './Task';

const FakeTaskList: Task[] = [
  { id: '5489', content: 'For test 1', completed: false },
  { id: '6661', content: 'For test 2', completed: false },
  { id: '8795', content: 'For test 3', completed: true },
];

function TaskList() {
  return (
    <ul className="flex flex-col items-start pl-5 gap-y-4 border-nord-500">
      {FakeTaskList.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}

export default TaskList;
