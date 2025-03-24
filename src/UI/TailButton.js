export default function TailButton(props) {
    const colorB = {
        'blue' : 'bg-blue-500',
        'orange' : 'bg-orange-500',
        'lime' : 'bg-lime-500',
        'yellow' : 'bg-yellow-500'
    };

    const colorBHover = {
        'blue' : 'hover:bg-blue-800',
        'orange' : 'hover:bg-orange-700',
        'lime' : 'hover:bg-lime-700',
        'yellow' : 'hover:bg-yellow-600'
    }

    let fsize = props.fsize;
    if(!fsize || fsize === '') {
        fsize = 'xm';
    }

    return (
        <div>
            <button className={`inline-flex w-11/12 px-5 py-3 rounded-md mx-2 justify-center items-center text-white font-bold
                                ${colorB[props.bcolor]} ${colorBHover[props.bcolor]} text-${fsize}`}
                    onClick={props.handleClick}
            >
                {props.caption}
            </button>
        </div>
    );
}