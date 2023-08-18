import { BsFillPlayFill } from 'react-icons/bs';
import { BiLike, BiDislike } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import Button from '../Button/Button';

function ButtonsGroup({ title = 'Name Movie or TvShow' }) {
    return (
        <>
            <h4 className="font-semibold text-4xl">{title}</h4>
            <div className="flex mt-4">
                <Button title={'Play'} icon={<BsFillPlayFill />} />
                <Button onlyIcon icon={<AiOutlinePlus />} />
                <Button onlyIcon icon={<BiLike />} />
                <Button onlyIcon icon={<BiDislike />} />
            </div>
        </>
    );
}

export default ButtonsGroup;
