import '../00_Navigate/navigate.css';

export default function SubWrapper({mainWrap, mainAlign}) {
    if(!mainAlign || mainAlign === '') {
        mainAlign = 'center';
    }

    return (
        <div className={`grow w-full flex justify-center items-${mainAlign} overflow-y-auto my-3`}>
            {mainWrap}
        </div>
    );
}