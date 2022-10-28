
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Forbidden = () => {


    const interval = 500;

    function generateLocks() {
        const lock = document.createElement('div'),
            position = generatePosition();
        lock.innerHTML = '<div class="top"></div><div class="bottom"></div>';
        lock.style.top = position[0];
        lock.style.left = position[1];
        lock.classList = 'lock' // generated';
        document.body.appendChild(lock);
        setTimeout(() => {
            lock.style.opacity = '1';
            lock.classList.add('generated');
        }, 100);
        setTimeout(() => {
            lock.parentElement.removeChild(lock);
        }, 2000);
    }

    function generatePosition() {
        const x = Math.round((Math.random() * 100) - 10) + '%';
        const y = Math.round(Math.random() * 100) + '%';
        return [x, y];
    }
    setInterval(generateLocks, interval);
    generateLocks();


    return (
        <div className="main">
            <HelmetProvider>
                <Helmet >
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge " />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>React First App | Access Denied</title>
                    <link rel="stylesheet" href="access.css" />
                </Helmet>
            </HelmetProvider>
            <div className="main-mid">
                <h1 className="w-100 animate-top jumbo"><code>Access Denied</code></h1>
                <hr className="w-100 animate-left" style={{ margin: 'auto', width: '50%' }} />
                <h3 className="w-100 animate-right">You dont have permission to view this site.</h3>
                <h3 className="w-100 animate-zoom">🚫🚫🚫🚫</h3>
                <h6 className="w-100 animate-zoom">error code:403 forbidden</h6>
            </div>
        </div>
    )
}

export default Forbidden