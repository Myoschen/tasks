import TaskList from './TaskList';

interface ContentProps {
  title: string;
}

function Content(props: ContentProps) {
  const { title } = props;
  return (
    <main className="flex-1 h-screen overflow-auto transition-colors p-7 bg-nord-100/20 dark:bg-nord-600 ">
      <div className="container flex flex-col items-start p-5 pt-8">
        <h1 className="mb-16 text-6xl font-bold dark:text-nord-100">
          {title}
        </h1>
        <TaskList />
      </div>
    </main>
  );
}

export default Content;
