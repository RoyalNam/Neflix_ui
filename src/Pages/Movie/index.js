import MainLayout from '~/layouts/MainLayout';
import DATA_LIST from '~/Data';

function Movie() {
    return <MainLayout urls={DATA_LIST.movieList} />;
}

export default Movie;
// return (
//     <>
//         <MainLayout
//             children={movieList.map((movieItem, index) => (
//                 <Slider key={index} title={movieItem.title} url={movieItem.url} />
//             ))}
//         />
//     </>
// );
