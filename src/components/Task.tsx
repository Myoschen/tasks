import React from 'react';
import {
  MdDone, MdDelete, MdModeEdit, MdDragIndicator,
} from 'react-icons/md';

interface Props {
  task: Task;
}

function Task(props: Props) {
  const { task } = props;
  return (
    <li className="flex items-center justify-between max-w-sm p-4 text-xl font-medium rounded-md bg-nord-200">
      <button type="button">
        <MdDragIndicator />
      </button>
      <span>{task.content}</span>
      <div className="space-x-2">
        <button type="button">
          <MdDone />
        </button>
        <button type="button">
          <MdModeEdit />
        </button>
        <button type="button">
          <MdDelete />
        </button>
      </div>
    </li>
  );
}

export default Task;
