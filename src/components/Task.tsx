import React from 'react';

interface Props {
  task: Task;
}

function Task(props: Props) {
  const { task } = props;
  return (
    <li className="flex p-4 rounded-md gap-x-2 bg-nord-200">
      <span>{task.content}</span>
    </li>
  );
}

export default Task;
