import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';


function Search({ ishidden }) {
    const [inputValue, setInput] = useState("");
    const navigate = useNavigate();
    const [{ }, dispatch] = useStateValue();

    const SubmitForm = (e) => {
        e.preventDefault();
        navigate("/search")
        dispatch({
            type: actionTypes.Set_type_value,
            term: inputValue
        }
        )
        console.log(inputValue);
    }

    return (
        <form onSubmit={SubmitForm} className='search'>
            <Link to='/'><img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google-Logos' />
            </Link>
            <div className='search__box' >
                <SearchIcon />
                <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {ishidden ? (
                <div className='open'>
                    <div className='Buttons'>
                        <Button variant="Google Search">Google Search</Button>
                        <Button variant="I'm Feeling Lucky">I'm Feeling Lucky</Button>
                    </div>

                    <div className='language'>
                        Google Offered in :
                        <Link to=''>हिन्दी</Link>
                        <Link to=''>বাংলা</Link>
                        <Link to=''>తెలుగు</Link>
                        <Link to=''>मराठी</Link>
                        <Link to=''>தமிழ்</Link>
                        <Link to=''>ગુજરાતી</Link>
                        <Link to=''>ಕನ್ನಡ</Link>
                        <Link to=''>മലയാളം</Link>
                        <Link to=''>ਪੰਜਾਬੀ</Link>
                    </div>
                </div>
            ) : (
                <div className='hidden'>
                    <div className='Buttons'>
                        <Button variant="Google Search">Google Search</Button>
                        <Button variant="I'm Feeling Lucky">I'm Feeling Lucky</Button>
                    </div>

                    <div className='language'>
                        Google Offered in :
                        <Link to=''>हिन्दी</Link>
                        <Link to=''>বাংলা</Link>
                        <Link to=''>తెలుగు</Link>
                        <Link to=''>मराठी</Link>
                        <Link to=''>தமிழ்</Link>
                        <Link to=''>ગુજરાતી</Link>
                        <Link to=''>ಕನ್ನಡ</Link>
                        <Link to=''>മലയാളം</Link>
                        <Link to=''>ਪੰਜਾਬੀ</Link>
                    </div>
                </div>

            )
            }

        </form>
    );
}

export default Search;