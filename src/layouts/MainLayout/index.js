import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';

import Slider from '~/components/Slider/Slider';
import VideoPlayer from '~/components/VideoPlayer/VideoPlayer';
function MainLayout({ children, urls }) {
    return (
        <>
            <Header />
            <VideoPlayer urls={urls} />
            <div className="pt-[550px]">
                <Slider urls={urls} />
            </div>
            <Footer className="" />
        </>
    );
}
export default MainLayout;
