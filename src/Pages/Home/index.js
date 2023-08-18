import MainLayout from '~/layouts/MainLayout';
import DATA_LIST from '~/Data';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Home() {
    return <MainLayout urls={DATA_LIST.homeList} />;
}

export default Home;
