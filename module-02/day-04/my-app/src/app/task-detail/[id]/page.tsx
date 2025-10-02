import { getById } from "@/services/backendless.service";

export default async function TaskDetail({
  params,
}: {
  params: { id: string };
}) {
  const task = await getById(params.id);

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-[80px] font-jose">
      <span className="text-2xl">{task.taskName}</span>
      <span>
        {new Date(task.created).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </span>
    </div>
  );
}
