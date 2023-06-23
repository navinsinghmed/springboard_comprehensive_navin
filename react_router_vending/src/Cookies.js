import { Link } from 'react-router-dom';

const Cookies = () => {
    return (
        <div className='container'>
            <h1>🍪 Cookies</h1>
            <p>A delicious bag of chocolate chip cookies.</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
};

export default Cookies;