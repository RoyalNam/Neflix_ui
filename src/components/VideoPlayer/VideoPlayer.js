import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

import { BsFillPlayFill, BsVolumeDown, BsVolumeMute } from 'react-icons/bs';
import { PiWarningCircleBold } from 'react-icons/pi';

import DATA_LIST from '~/Data';
import getData, { baseUrlVideo } from '~/until/request';
import Modal from '../Modal/Modal';
import Button from '~/components/Button';

function VideoPlayer({ urls }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState('movie');
    const [idMovieVideo, setIdMovieVideo] = useState([]);
    const [movieItem, setMovie] = useState({});
    const [isVolume, setIsVolume] = useState(true);
    const [idMovie, setIdMovie] = useState();

    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    };
    const handleVolumeToggle = () => {
        setIsVolume(!isVolume);
    };

    useEffect(() => {
        if (urls === DATA_LIST.tvList) setType('tv');
        else setType('movie');
        const fetchData = async () => {
            try {
                const response = await getData(urls[2].url);
                const res = response.data.results;
                const randomIndex = Math.floor(Math.random() * res.length);
                const randomItem = res[randomIndex];
                setIdMovie(randomItem.id);
                // get Video
                getData(`${type}/${randomItem.id}/videos`)
                    .then((res) => {
                        setIdMovieVideo(res.data.results[0]);
                        // del: results[0]
                    })
                    .catch((err) => {
                        console.error(err);
                    });
                // Get Detail
                getData(`${type}/${randomItem.id}`)
                    .then((res) => setMovie(res.data))
                    .catch((err) => console.error(err));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [urls, type]);
    console.log(movieItem);

    return (
        <>
            <ReactPlayer
                className="absolute top-0 left-0 -z-10"
                width="100%"
                height="100%"
                url={`${baseUrlVideo}${idMovieVideo.key}`}
                playing={true}
                volume={isVolume}
                loop
                config={{
                    youtube: {
                        playerVars: { modestbranding: 1 },
                    },
                }}
            />

            <div className="absolute top-[50%] -translate-y-1/3 left-9 rendering-text pl-8 z-10 max-w-xl">
                <h4 className="text-5xl font-bold mb-4">{movieItem.title ? movieItem.title : movieItem.name}</h4>
                <p className="text-block  text-xl">{movieItem.overview}</p>
                <div className="flex mt-4">
                    <Button title={'Play'} icon={<BsFillPlayFill />} />
                    <Button onClick={handleModalToggle} title={'More Info'} icon={<PiWarningCircleBold />} />
                </div>
            </div>
            <span className="absolute right-12 bottom-1/3">
                <Button onClick={handleVolumeToggle} onlyIcon icon={isVolume ? <BsVolumeDown /> : <BsVolumeMute />} />
            </span>
            {modalOpen && <Modal movieItem={movieItem} type={type} id={idMovie} onClose={handleModalToggle} />}
        </>
    );
}

export default VideoPlayer;
