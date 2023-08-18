import Home from '~/Pages/Home';
import Movie from '~/Pages/Movie';
import TvShows from '~/Pages/TvShows';
import config from '~/config';

const publicRouters = [
    {
        path: config.routers.home,
        component: Home,
    },
    {
        path: config.routers.movie,
        component: Movie,
    },
    {
        path: config.routers.tvShows,
        component: TvShows,
    },
];
const privateRouters = [];
export { publicRouters, privateRouters };
