import { useOptionsContext } from "../context/options"

export default function Content() {
  const { options, setOptions } = useOptionsContext();


  return (
    <div className="flex flex-wrap w-full">
      Content Test
    </div>
  );
}
