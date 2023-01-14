import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../Components/Search';
import './Home.css';

function Home() {
    return (
        <div className='google__body'>
            <div className='home__header'>
                <Link to="">Gmail</Link>
                <Link to="">Images</Link>
                <AppsIcon />
                <AccountCircleIcon />
            </div>

            <div className='search__body'>
                <Search />
            </div>

            <footer>
                <div className='footer__upper'>India</div>
                <div className='footer__bottom'>
                    <div className='footer__left'>
                        <Link to=''>About</Link>
                        <Link to=''>Advertising</Link>
                        <Link to=''>Business</Link>
                        <Link to=''>How search works</Link>
                    </div>

                    <div className='footer__right'>
                        <Link to=''>Privacy</Link>
                        <Link to=''>Terms</Link>
                        <Link to=''>Settings</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home