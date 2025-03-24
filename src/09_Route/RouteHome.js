import { Link } from "react-router-dom"

export default function RouteHome({defaultNav}) {
  const p1Item = ['🍎', '🍌', '🥕'];
  const p1Li = p1Item.map(item => <li className="mb-2" key={item}><Link to={defaultNav + '/p1/' + item}>{item}</Link></li>);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <h1 className="text-2xl font-bold">RouteHome</h1> */}
      <div className="w-3/5 grid grid-cols-2 mx-10">
        <div className="w-full flex flex-col m-2 p-2 justify-start items-center text-xl">
            <h2>Page1 값 전달</h2>
            <ul className="mt-5">
                {p1Li}
            </ul>
        </div>
        <div className="w-full flex flex-col m-2 p-2 justify-start items-center text-xl">
            <h2>Page2 값 전달</h2>
            <ul className="mt-5">
                {/* <li><Link to={`${defaultNav}/p2?item=🍎`}>사과🍎</Link></li>
                <li><Link to={`${defaultNav}/p2?item=🍌`}>바나나🍌</Link></li>
                <li><Link to={`${defaultNav}/p2?item=🥕`}>당근🥕</Link></li> */}
                <li><Link to={`${defaultNav}/p2?item1=🍎&item2=🍌&item3=🥕`}>🍎🍌🥕</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
