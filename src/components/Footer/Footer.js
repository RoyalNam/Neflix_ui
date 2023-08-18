import { MdArrowDropDown, MdLanguage } from 'react-icons/md';

function Footer() {
    const LINKS_FOOTER = [
        {
            to: '/',
            title: 'FAQ',
        },
        {
            to: '/',
            title: 'Help Center',
        },
        {
            to: '/',
            title: 'Account',
        },
        {
            to: '/',
            title: 'Media Center',
        },
        {
            to: '/',
            title: 'Investor Relations',
        },
        {
            to: '/',
            title: 'Jobs',
        },
        {
            to: '/',
            title: 'Redeem Gift Cards',
        },
        {
            to: '/',
            title: 'Buy Gift Cards',
        },
        {
            to: '/',
            title: 'Ways to Watch',
        },
        {
            to: '/',
            title: 'Terms of Use',
        },
        {
            to: '/',
            title: 'Privacy',
        },
        {
            to: '/',
            title: 'Cookie Preferences',
        },
        {
            to: '/',
            title: 'Corporate Information',
        },
        {
            to: '/',
            title: 'Contact Us',
        },
        {
            to: '/',
            title: 'Speed Test',
        },
        {
            to: '/',
            title: 'Legal Notices',
        },
        {
            to: '/',
            title: 'Netflix Originals',
        },
    ];
    return (
        <footer className="py-11">
            <div className="container max-w-[1280px] mx-auto text-slate-300 text-lg">
                <h4 className="text-2xl">Question</h4>
                <div className="flex flex-wrap my-6">
                    {LINKS_FOOTER.map((link, index) => (
                        <a key={index} href={link.to} className="w-3/12 leading-6 py-2 hover:underline">
                            {link.title}
                        </a>
                    ))}
                </div>
                <div className="inline-flex items-center gap-2 text-2xl p-4 border border-gray-300 rounded">
                    <MdLanguage />
                    <span>English</span>
                    <MdArrowDropDown />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
