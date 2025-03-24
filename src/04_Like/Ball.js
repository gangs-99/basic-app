export default function Ball({n}) {
    const colorN = {
        'b0' : 'bg-orange-500',
        'b1' : 'bg-lime-500',
        'b2' : 'bg-sky-500',
        'b3' : 'bg-violet-500',
        'b4' : 'bg-rose-500'
    };

    return (
        <div className={`inline-flex w-16 h-16 mx-2 justify-center items-center rounded-full text-2xl font-bold
                        text-white ${colorN["b"+Math.floor(n/10)]}`}
        >
            {n}
        </div>
    );
}