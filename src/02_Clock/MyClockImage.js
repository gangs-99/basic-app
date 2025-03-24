import clock from './clock.png';

function MyClockImage() {
    return (
        <div className='text-center p-4 m-6'>
            <img src={clock} alt='clock' className='w-3/5 inline-block' />
        </div>
    );
}

export default MyClockImage;