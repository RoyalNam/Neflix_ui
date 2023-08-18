import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useEffect, useState } from 'react';
import getData, { baseUrlImg } from '~/until/request';
import MoviePoster from '../MoviePoster/MoviePoster';

function Slider({ urls = [] }) {
    const [moviesData, setMoviesData] = useState([]);
    const [movieId, setMovieId] = useState(null);
    const [indexId, setIndexId] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = urls.map((item) => getData(item.url));
                const response = await Promise.all(promises);
                const results = response.map((res) => res.data.results);
                setMoviesData(results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [urls]);
    // console.log(moviesData);
    const handleMouseEnter = (id, ind) => {
        setMovieId(id);
        setIndexId(ind);
    };
    return (
        <div className="pl-10 mt-6">
            {moviesData.map((listData, innerIndex) => (
                <div key={innerIndex}>
                    <h4 className="py-4 text-xl font-semibold">{urls[innerIndex].title}</h4>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={8}
                        slidesPerView={7}
                        navigation
                    >
                        {listData.map((itemData) => (
                            <SwiperSlide key={itemData.id} className="">
                                <div
                                    className={movieId === itemData.id && 'relative'}
                                    onMouseEnter={() => handleMouseEnter(itemData.id, innerIndex)}
                                    onMouseLeave={() => setMovieId(null)}
                                >
                                    <img
                                        className="w-full rounded"
                                        src={baseUrlImg + itemData.poster_path}
                                        // src={'https://image.tmdb.org/t/p/w500' + itemData.poster_path}
                                        alt={itemData.title}
                                    />
                                    {movieId === itemData.id && indexId === innerIndex && (
                                        <div className="absolute z-50 top-0 h-96 left-1/2 -translate-x-1/2 min-w-fit">
                                            <MoviePoster id={movieId} />
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
}

export default Slider;
