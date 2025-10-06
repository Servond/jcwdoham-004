export default function Jumbotron({
  cover,
  title,
}: {
  cover: string;
  title: string;
}) {
  return (
    <div
      className="w-full md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('/${cover}')` }}
    >
      <div className="flex  justify-start p-40">
        <h1 className="text-black text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
