export default function MyDiv3({dn1, dn2, dn3}) {
    return (
      <div className="flex flex-col p-5 m-16 justify-center items-center w-3/4 h-3/4 text-2xl bg-lime-500 text-white">
        <div className="w-full h-10 flex justify-start items-center">
            {`${dn1} > ${dn2} > ${dn3}`}
        </div>
      </div>
    )
  }