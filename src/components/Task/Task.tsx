import { XCircleIcon, PencilIcon, HashtagIcon } from '@heroicons/react/solid';

interface TaskProps {
  task: ITask;
}

function Task(props: TaskProps) {
  const { task } = props;
  return (
    <li className="flex items-center justify-between max-w-sm p-4 text-xl font-medium rounded-md bg-nord-200">
      <button type="button">
        <HashtagIcon className="w-6" />
      </button>
      <span>{task.content}</span>
      <div className="flex items-center gap-x-2">
        <button type="button">
          <PencilIcon className="w-6" />
        </button>
        <button type="button">
          <XCircleIcon className="w-6" />
        </button>
      </div>
    </li>
  );
}

export default Task;
