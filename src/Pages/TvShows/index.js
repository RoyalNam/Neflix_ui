import MainLayout from '~/layouts/MainLayout';
import DATA_LIST from '~/Data';

// -> khong co video -> movielist
function TvShows() {
    return <MainLayout urls={DATA_LIST.movieList} />;
}

export default TvShows;
// return (
//     <>
//         <MainLayout
//             children={movieList.map((movieItem, index) => (
//                 <Slider key={index} title={movieItem.title} url={movieItem.url} />
//             ))}
//         />
//     </>
// );
