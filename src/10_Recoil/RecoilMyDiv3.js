import TailButton from "../UI/TailButton";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilMyDiv3({dn1, dn2, dn3}) {
  const [n, setN] = useRecoilState(AtomN);
  const handleUp = () => {
    const newN = n + 1;
    setN(newN);
    localStorage.setItem("n", newN);
  };
  const handleDown = () => {
    const newN = n - 1;
    setN(newN);
    localStorage.setItem("n", newN);
  };

  // const handleSave = () => {
  //   localStorage.setItem("n", n);
  // };
  const handleRemove = () => {
    localStorage.removeItem("n");
    setN(0);
  };

  return (
    <div className="flex flex-col p-5 m-16 justify-center items-center w-4/5 h-4/5 text-2xl bg-lime-500 text-white">
      <div className="w-full flex flex-col justify-start items-start">
          <div>
            {`${dn1} > ${dn2} > ${dn3}`}
            </div>
          <div className="w-full grid grid-cols-3 mt-2">
            <TailButton caption='증가' bcolor='yellow' handleClick={handleUp} fsize='sm' />
            <TailButton caption='감소' bcolor='yellow' handleClick={handleDown} fsize='sm' />
            {/* <TailButton caption='저장' bcolor='yellow' handleClick={handleSave} fsize='sm' /> */}
            <TailButton caption='삭제' bcolor='yellow' handleClick={handleRemove} fsize='sm' />
          </div>
      </div>
    </div>
  )
}