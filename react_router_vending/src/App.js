import { BroswerRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Cookies from './Cookies';
import SourPatchWatermelon from './SourPatchWatermelon';
import CocaCola from './CocaCola';
import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Route exact path="/cookies">
                    <Cookies />
                </Route>
                <Route exact path="/sourpatchwatermelon">
                    <SourPatchWatermelon />
                </Route>
                <Route exact path="/cocacola">
                    <CocaCola />
                </Route>
                <Route exact path="/">
                    <VendingMachine />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;