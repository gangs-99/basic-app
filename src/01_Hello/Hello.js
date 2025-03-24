import logo from '../logo.svg';

function Hello() {
    return (
        <div>
            <div className='p-5 text-center'>
                <div className='inline-block'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p className='text-4xl font-bold'>
                    Start React Practice!
                </p>
            </div>
        </div>
    );
}

export default Hello;