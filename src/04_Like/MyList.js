import MyListData from './MyListData.json';
import MyListItem from './MyListItem';

export default function MyList() {
    
    return (
        <div className='w-11/12 grid grid-cols-2 gap-4 place-items-center'>
            {MyListData.map((listData) => {
                return <MyListItem key={listData.id} title={listData.title} imgUrl={listData.imgUrl} content={listData.content} />
            })}
        </div>
    );
}