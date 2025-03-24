import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  //전체 데이터
  const [tdata, setTdata] = useState();
  
  //대분류 데이터
  const [c1, setC1] = useState();
  // 선택된 대분류
  const [selC1, setSelC1] = useState();

  //중분류 데이터
  const [c2, setC2] = useState();
  // 선택된 대분류
  const [selC2, setSelC2] = useState();

  //상세정보
  const [info, setInfo] = useState();


  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:34f1f0b1-1289-49db-be1b-a4566880bb97?`;
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
    
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err => console.error(err));
  };


  //컴포넌트 생성 시 Fetch
  useEffect(() => {
    getFetchData();
  }, []);

  //tdata가 변경되었을 때
  useEffect(() => {
    if (!tdata) return;

    //대분류 데이터 넣기
    let tm = tdata.map( item => item['사고유형대분류'] );
    tm = [...new Set(tm)];

    setC1(tm);
  }, [tdata]);

  //대분류 변경되었을 때
  useEffect(() => {
    if(!tdata || !c1 || !selC1) return;

    //중분류 데이터 넣기
    let tm = tdata.filter(item => item['사고유형대분류'] === selC1)
                  .map(item => item['사고유형']);
    setC2(tm);
  }, [selC1]);

  //중분류 변경되었을 때
  useEffect(() => {
    if(!selC2) return;

    let tm = tdata.filter(item => item['사고유형대분류'] === selC1
                                  && item['사고유형'] === selC2)[0];
    
    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
    tm = infoKey.map(item => 
      <div key={item} className="flex">
        <div className="w-1/2 h-10 flex justify-center items-center bg-lime-300 font-bold">{item}</div>
        <div className="w-1/2 h-10 flex justify-center items-center border">
          {parseInt(tm[item]).toLocaleString()}
        </div>
      </div>
    );

    setInfo(tm);
  }, [selC2]);


  return (
    <div className="w-full h-full flex flex-col justify-start items-center text-sm mx-5">
      { c1 && <TrafficNav title="대분류" c={c1} sel={selC1} setSel={setSelC1} /> }
      { c2 && <TrafficNav title="사고유형" c={c2} sel={selC2} setSel={setSelC2} /> }
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>
    </div>
  );
}
