import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react"
import axios from "axios";

export default function Rest() {
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);

    const [isUpdate, setIsUpdate] = useState(false);
    const [isUpdateId, setIsUpdateId] = useState();

    const txt1Ref = useRef();
    const txt2Ref = useRef();

    const url = 'http://localhost:3005/posts';

    const getFetchData = async () => {
        // const resp = await fetch(url);
        // const data = await resp.json();
        const { data } = await axios.get(url);

        setTdata(data);
    };

    const handleOk = () => {
        if(isUpdate) jsonPut();
        else jsonPost();
    }

    const handleUpdate = (item) => {
        txt1Ref.current.value = item.title;
        txt2Ref.current.value = item.author;

        setIsUpdate(true);
        setIsUpdateId(item.id);
    };

    const jsonPost = async () => {
        if(txt1Ref.current.value === '') {
            alert('제목을 입력하세요.');
            txt1Ref.current.focus();
            return;
        }
        if(txt2Ref.current.value === '') {
            alert('작성자를 입력하세요.');
            txt2Ref.current.focus();
            return;
        }

        const postData = {
            title : txt1Ref.current.value,
            author : txt2Ref.current.value
        };

        const { data } = await axios.post(url, postData);
        console.log(data);

        setTdata([data, ...tdata]);
        txt1Ref.current.value = '';
        txt2Ref.current.value = '';
        txt1Ref.current.focus();
    };

    const jsonDelete = async (id) => {
        await axios.delete(`${url}/${id}`);

        setTdata(tdata.filter(item => item.id !== id));
    };

    const jsonPut = async () => {
        const putData = {
            id : isUpdateId,
            title : txt1Ref.current.value,
            author : txt2Ref.current.value
        };

        const { data } = await axios.put(`${url}/${isUpdateId}`, putData);
        setTdata(tdata.map(item => item.id === isUpdateId ? data : item));

        txt1Ref.current.value = '';
        txt2Ref.current.value = '';
        txt1Ref.current.focus();

        setIsUpdate(false);
        setIsUpdateId('');
    };

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        console.log(tdata);

        let tm = tdata.map(item => 
            <tr key={item.id} className="h-10 border-b">
                <td className="px-6 py-3 w-3/6 text-center">{item.title}</td>
                <td className="px-6 py-3 w-1/6 text-center">{item.author}</td>
                <td className="px-6 py-3 w-1/6 text-center">
                    <TailButton caption='삭제' bcolor='orange' handleClick={() => jsonDelete(item.id)} fsize='xs' />
                </td>
                <td className="px-6 py-3 w-1/6 text-center">
                    <TailButton caption='수정' bcolor='yellow' handleClick={() => handleUpdate(item)} fsize='xs' />
                </td>
            </tr>
        );

        setTags(tm);
    }, [tdata]);
    
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-11/12 grid grid-cols-7 md:grid-co-7 bg-slate-100 text-center my-5 p-5">
                <label htmlFor="txt1" className="my-2">제목</label>
                <div className="flex col-span-3">
                    <input id="txt1" type="text" className="form-input w-full" ref={txt1Ref}></input>
                </div>
                <label htmlFor="txt2" className="my-2">작성자</label>
                <div className="flex">
                    <input id="txt2" type="text" className="form-input w-full" ref={txt2Ref}></input>
                </div>
                <TailButton caption={isUpdate ? "수정" : "입력"} bcolor='lime' handleClick={handleOk} />
            </div>
            <table className="w-11/12 text-left text-sm font-light text-surface">
                <thead className="border-b border-neutral-200 font-medium">
                    <tr className="bg-black text-white font-bold text-center">
                        <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
                        <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
                        <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
                        <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
                    </tr>
                </thead>
                <tbody>
                    {tags}
                </tbody>
            </table>
        </div>
    )
}
