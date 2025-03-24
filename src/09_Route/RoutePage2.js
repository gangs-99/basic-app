import { useLocation, useSearchParams } from "react-router-dom";

export default function RoutePage2() {
  const fruits = ['🍎', '🍌', '🍊', '🍋', '🫐', '🍒', '🍑', '🍓', '🍉', '🍈'];

  const loc = useLocation();
  console.log('useLocation pathName : ', loc.pathname); // /practice/route/p2
  console.log('useLocation search : ', loc.search);     // item=%F0%9F%8D%8E

  const [sParams] = useSearchParams();
  console.log('useSearchParams : ', sParams);           // 전달한 파라미터 배열

  const qList = [...sParams];
  console.log(qList);

  const lis = qList.map(item => 
                          <li className="mb-5" key={item[0]}>
                            {item[1]} : {fruits.includes(item[1]) ? '과일입니다.' : '과일이 아닙니다.'}
                          </li>
  );

  return (
    <div className="w-full flex flex-col justify-center items-center">
        {/* <h1 className="text-2xl font-bold">RoutePage2</h1> */}
        <div className="w-full flex flex-col justify-start items-center text-base m-2 p-2">
            <ul>
              {lis}
            </ul>
        </div>
    </div>
  )
}
