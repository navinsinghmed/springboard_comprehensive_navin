import { Link } from 'react-router-dom';

const SourPatchWatermelon = () => {
    return (
        <div className='container'>
            <h1>🍉 Sour Patch Watermelon</h1>
            <p>A bag of Sour Patch Watermelon gummy candy.</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
};

export default SourPatchWatermelon;