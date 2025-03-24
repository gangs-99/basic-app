import RecoilMyDiv3 from "./RecoilMyDiv3"

export default function RecoilMyDiv2(props) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 justify-center items-center bg-lime-600 text-white">
        <div className="w-full flex justify-start">
          {`${props.dn1} > ${props.dn2}`}
        </div>
        <RecoilMyDiv3 dn1={props.dn1} dn2={props.dn2} dn3={props.dn3} />
    </div>
  )
}