import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import getData, { baseUrlImg } from '~/until/request';
import Cart from '../Cart/Cart';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';

function Modal({ onClose, movieItem, id, type }) {
    const hour = Math.floor(movieItem.runtime / 60);
    const minute = movieItem.runtime % 60;
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        // Get Movie similar
        getData(`${type}/${id}/similar`)
            .then((res) => {
                setSimilarMovie(res.data.results);
            })
            .catch((err) => {
                console.error(err);
            });
        // Get cast
        getData(`${type}/${id}/credits`)
            .then((res) => {
                setCast(res.data.cast);
                setCrew(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id, type]);
    console.log('Similar: ', similarMovie);
    return (
        <div className="fixed scroll-none top-0 left-0 right-0 bottom-0 overflow-y-scroll z-10">
            <div onClick={onClose} className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)] z-10"></div>
            <div className="relative max-w-3xl overflow-hidden rounded mx-auto bg-[#181818] z-50 my-10">
                <div className="relative">
                    <img className="w-full" alt={movieItem.title} src={baseUrlImg + movieItem.backdrop_path} />
                    <div className="absolute bottom-12 z-10 left-12">
                        <ButtonsGroup title={movieItem.title} />
                    </div>
                    <button className="absolute z-20 right-4 top-4">
                        <AiFillCloseCircle onClick={onClose} className="text-4xl" />
                    </button>
                    <div className="bg-img"></div>
                </div>
                <div className="px-8 pb-12">
                    <div className="flex-1 flex leading-5 gap-4">
                        <div className="flex  flex-col">
                            <div className="flex gap-3 font-bold">
                                <p className="text-green-800">{movieItem.vote_average}</p>
                                <p>{parseInt(movieItem.release_date.split('-')[0])}</p>
                                <p>
                                    {hour}h {minute}m
                                </p>
                                <span className="border rounded-sm text-xs border-current leading-none p-1">hd</span>
                            </div>
                            <p className="mt-3">{movieItem.overview}</p>
                        </div>
                        <div className="max-w-[45%]">
                            <div className="text-block mb-2">
                                <span className="text-slate-400">Cast: </span>
                                {cast.map((castItem) => (
                                    <a key={castItem.id} className="hover:underline mr-1" href="/">
                                        {castItem.name},
                                    </a>
                                ))}
                            </div>
                            <div>
                                <span className="text-slate-400">Genres: </span>
                                {movieItem.genres.map((genres) => (
                                    <a key={genres.id} className="hover:underline" href="/">
                                        {genres.name},
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-white font-bold text-2xl">More like this</h4>
                        <div className="flex justify-between flex-wrap -ml-4">
                            {similarMovie.map(
                                (movie, index) =>
                                    index <= 8 && (
                                        <div key={movie.id} className="max-w-[33%] pl-4 pt-4 ">
                                            <Cart movie={movie} />
                                        </div>
                                    ),
                            )}
                        </div>
                    </div>
                    <div>
                        <h4>
                            <span className="text-slate-400">About: </span>
                            <span>{movieItem.title}</span>
                        </h4>
                        <p>
                            <span className="text-slate-400">Creator: </span>
                            <span>{}</span>
                        </p>
                        <div className=" leading-5">
                            <span className="text-slate-400">Cast: </span>
                            {cast.map((castItem) => (
                                <a key={castItem.id} className="hover:underline mr-1" href="/">
                                    {castItem.name},
                                </a>
                            ))}
                            {/* {crew.map((crewItem) => (
                                <a key={crewItem.id} className="hover:underline mr-1" href="/">
                                    {crewItem.name},
                                </a>
                            ))} */}
                        </div>
                        <div>
                            <span className="text-slate-400">Genres: </span>
                            {movieItem.genres.map((genres) => (
                                <a key={genres.id} className="hover:underline" href="/">
                                    {genres.name},
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
