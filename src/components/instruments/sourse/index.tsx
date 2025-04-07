import { useDnD } from "../../provider-dnd";

const instrumentsData = [
  {
    id: 1,
    img: "/assets/capasitor-png.png",
    name: "capasitor",
    type: "capasitor",
  },
  {
    id: 2,
    img: "/assets/resistance-png.png",
    name: "resistance",
    type: "resistance",
  },
  {
    id: 3,
    img: "/assets/sourse-png.png",
    name: "sourse",
    type: "sourse",
  },
];

export const Sourse = () => {
  const [_, setType] = useDnD();

  const onDragStart = (event: any, nodeType: string) => {
    console.log("dkdkd");
    console.log(nodeType);
    //@ts-ignore
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside className="grid grid-cols-3 gap-2">
      {instrumentsData.map((el) => (
        <div
          key={el.id}
          onDragStart={(event) => onDragStart(event, "capisator")}
          className="bg-blue-300"
        >
          <div className="p-1 bg-white shadow-lg rounded-lg overflow-hidden flex justify-center flex-col gap-1 select-none">
            <div className="flex justify-center">
              <img src={el.img} alt="" className="w-[40px] h-[40px]" />
            </div>
            <p className="text-center text-[10px]">{el.name}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};
