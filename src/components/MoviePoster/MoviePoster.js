import ReactPlayer from 'react-player';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import Icon from '../Icons/Icon';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useState } from 'react';
import getData, { baseUrlVideo } from '~/until/request';

function MoviePoster({ id }) {
    const [video, setVideo] = useState('');
    const [movie, setMovie] = useState('');
    console.log('id', id);
    useEffect(() => {
        if (id) {
            getData(`movie/${id}`)
                .then((res) => {
                    setMovie(res.data);
                })
                .catch((err) => console.error(err));
            getData(`movie/${id}/videos`)
                .then((res) => {
                    setVideo(res.data.results[0]);
                })
                .catch((err) => console.error(err));
        }
    }, [id]);
    console.log('data', video);
    return (
        <div className="relative">
            {video.key && (
                <ReactPlayer
                    className="absolute top-0 left-0"
                    width="100%"
                    height="30%"
                    url={`${baseUrlVideo}${video.key}`}
                    playing={true}
                    volume={false}
                    loop
                    config={{
                        youtube: {
                            playerVars: { modestbranding: 1 },
                        },
                    }}
                />
            )}
            <div className="bg-black">
                <div className="">
                    <div className="flex items-end justify-between">
                        <span>
                            <ButtonsGroup title={movie.title} />
                        </span>
                        <span className="pl-8">
                            <Icon isBorder icon={<MdKeyboardArrowDown />} />
                        </span>
                    </div>
                    <span>{movie.release_date}</span>
                    <span>{movie.vote_average}</span>
                </div>
            </div>
        </div>
    );
}

export default MoviePoster;
