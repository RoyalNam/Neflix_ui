// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'tippy.js/dist/tippy.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouters } from './routers';
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    {publicRouters.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} Component={Page} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
