import { Link } from 'react-router-dom';
import "./VendingMachine.css";

const VendingMachine = () => {
    return (
        <div className="container">
            <div className="vending-machine">
                <h1 className="vending-machine_title">Vending Machine</h1>
                <ul className="vending-machine_list">
                    <li className="vending-machine_item">
                        <Link to="/cookies">🍪 Cookies</Link>
                    </li>
                    <li className="vending-machine_item">
                        <Link to="/sourpatchwatermelon">🍉 Sour Patch Watermelon</Link>
                    </li>
                    <li className="vending-machine_item">
                        <Link to="/cocacola">🥤 Coca Cola</Link>
                    </li>
                </ul>
                <div className='drawer'><h2>Enjoy!</h2></div>
            </div>
        </div>
    );
};

export default VendingMachine;