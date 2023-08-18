import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai';
import { baseUrlImg } from '~/until/request';
import Button from '../Button/Button';

function Cart({ movie = {} }) {
    return (
        <>
            <div className="bg-[#333] rounded overflow-hidden">
                <img className="w-full h-32" alt={movie.title} src={baseUrlImg + movie.backdrop_path} />
                <button className="absolute z-10 right-4 top-4">
                    <AiFillCloseCircle className="text-4xl" />
                </button>
                <div className="flex px-4 mt-2 flex-col h-56 ">
                    <div className="flex justify-between items-center">
                        <div className="text-lg">
                            <p className="text-green-600 font-bold">{movie.vote_average} Rate</p>
                            <p className="leading-none">{movie.release_date}</p>
                        </div>

                        <span>
                            <Button onlyIcon icon={<AiOutlinePlus />} />
                        </span>
                    </div>
                    <p className="mt-3 text-cart">{movie.overview}</p>
                </div>
            </div>
        </>
    );
}

export default Cart;
