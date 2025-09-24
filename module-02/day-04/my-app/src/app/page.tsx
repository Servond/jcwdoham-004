"use client";
import { useState, useRef } from "react";
import { useTheme } from "next-themes";

interface ITask {
  id: number;
  name: string;
  isComplete: boolean;
  createdAt: Date;
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { theme, setTheme } = useTheme();

  const addNewTask = () => {
    if (inputRef.current?.value) {
      const lastId = tasks[tasks.length - 1]?.id || 0;

      setTasks([
        ...tasks,
        {
          id: lastId + 1,
          name: inputRef.current.value,
          isComplete: false,
          createdAt: new Date(),
        },
      ]);
    }
  };

  const onComplete = (task: ITask) => {
    const newTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, isComplete: !t.isComplete } : t
    );

    setTasks(newTasks);
  };

  const onDelete = (task: ITask) => {
    const newTasks = tasks.filter((t) => t.id !== task.id);

    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-[80px] font-jose ">
      <img
        className="absolute -z-10 top-0 lg:w-full lg:h-[300px]"
        src={theme === "light" ? "light-jumbotron.png" : "dark-jumbotron.png"}
      />
      <div className="flex flex-col z-10  lg:w-[541px]">
        <div className="flex justify-between mb-[40px]">
          <span className="font-bold lg:text-[40px] lg:tracking-[15px] text-white">
            TODO
          </span>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <img
                src="moon-icon.png"
                alt="toggle-icon"
                className="lg:w-[25.11px] lg:h-[26px]"
              />
            ) : (
              <img
                src="sun-icon.png"
                alt="toggle-icon"
                className="lg:w-[25.11px] lg:h-[26px]"
              />
            )}
          </button>
        </div>
        <div className="flex gap-[24px] lg:mb-[24px] lg:h-[64px] rounded-[5px] lg:py-[20px] lg:px-[24px]  bg-white dark:bg-[#25273D] text-[#494C6B] dark:text-[#C8CBE7]">
          <div className="border border-[#E3E4F1] dark:border-[#393A4B] rounded-full lg:w-[24px] lg:h-[24px]"></div>
          <input
            className="border-none focus:outline-none font-normal lg:text-[18px] lg:tracking-[-0.25px] w-[350px]"
            type="text"
            ref={inputRef}
            placeholder="Create a new todo..."
          />
          <button onClick={addNewTask}>Submit</button>
        </div>
        <div className="flex flex-col bg-white dark:bg-[#25273D] rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-[0px_35px_50px_-15px_rgba(0,0,0,0.5)]  text-[#393A4B] dark:text-[#C8CBE7]">
          {tasks.map((task: ITask) => (
            <div
              key={task.id}
              className="flex lg:py-[20px] lg:px-[24px] lg:gap-[24px] border-b border-[#E3E4F1] dark:border-[#393A4B]"
            >
              <input
                type="checkbox"
                onChange={() => onComplete(task)}
                checked={task.isComplete}
              />
              <span
                className={`w-[400px] ${
                  task.isComplete
                    ? "line-through text-[#D1D2DA] dark:text-[#4D5067]"
                    : ""
                }`}
              >
                {task.name}
              </span>
              <button onClick={() => onDelete(task)}>x</button>
            </div>
          ))}
          <div className="flex justify-between lg:py-[20px] lg:px-[24px] lg:text-[14px] lg:tracking-[-0.19px] text-[#9495A5] dark:text-[#5B5E7E]">
            <span>{tasks.filter((t) => !t.isComplete).length} items left</span>
            <div className="flex gap-[19px]">
              <span className="hover:cursor-pointer text-[#3A7CFD]">All</span>
              <span className="hover:cursor-pointer">Active</span>
              <span className="hover:cursor-pointer">Complete</span>
            </div>
            <span>Clear Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
