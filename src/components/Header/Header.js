import { NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io';
import config from '~/config';
import Icon from '../Icons/Icon';

function Header() {
    const NAV_ITEMS = [
        {
            to: config.routers.home,
            title: 'Home',
        },
        {
            to: config.routers.tvShows,
            title: 'TV Shows',
        },
        {
            to: config.routers.movie,
            title: 'Movies',
        },
    ];

    return (
        <div className="nav fixed top-0 min-w-full z-10 bg-black">
            <nav className="flex justify-between items-center">
                <div className="flex nav-left items-center">
                    <a href="/" className="p-4 block">
                        <img
                            className="w-16"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                            alt="Netflix Logo"
                        />
                    </a>
                    <div className="flex navTop">
                        {NAV_ITEMS.map((nav, index) => (
                            <NavLink
                                key={index}
                                to={nav.to}
                                className={({ isActive }) => `p-4 block, ${isActive ? 'active' : ''}`}
                            >
                                {nav.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="nav-right">
                    <div className="flex items-center">
                        <a href="/" className="py-4 px-2 block">
                            <Icon icon={<BiSearch />} />
                        </a>
                        <a href="/" className="py-4 px-2 block">
                            <Icon icon={<IoMdNotifications />} />
                        </a>
                        <a href="/" className="p-2 flex items-center h-auto">
                            <img
                                className="w-8 rounded-full"
                                src="data:image/png;base64,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"
                                alt="user"
                            />
                            <IoMdArrowDropdown className="text-lg ml-0.5" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
