import React from 'react';
import TaskList from './TaskList';

interface Props {
  title: string;
}

function Content(props: Props) {
  const { title } = props;
  return (
    <main className="flex-1 h-screen overflow-auto text-2xl font-semibold z-1 p-7">
      <div className="container flex flex-col items-start p-5 pt-8">
        <h1 className="mb-16 text-6xl font-bold">
          {title}
        </h1>
        <TaskList />
      </div>
    </main>
  );
}

export default Content;
