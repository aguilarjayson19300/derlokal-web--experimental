import Head from 'next/head'
import { useEffect } from 'react';


const NavBar = () => {
    useEffect(() => {
        document.querySelector('html')?.classList.add('scroll-smooth');
    }, []);

    return (
    <Head>
            <title>Der Lokal</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
            <meta name='description' content='Der Lokal' />
            <link rel='icon' href='/favicon.ico' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;900&family=Noto+Sans:wght@700&display=swap' rel='stylesheet' />
        </Head>

    )
};

export default NavBar;