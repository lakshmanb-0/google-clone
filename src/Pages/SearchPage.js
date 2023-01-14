import React from 'react'
import "./SearchPage.css";
import Search from '../Components/Search';
import { useStateValue } from '../Components/StateProvider';
import useGoogleSearch from '../Components/UseGoogleSearch';
import { Link } from 'react-router-dom';

import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div>
      <div className='SearchPage'>
        <div className='search__container'>
          <Search ishidden={false} />
          <div className='search__right'>
            <SettingsIcon />
            <AppsIcon />
            <AccountCircleIcon />
          </div>
        </div>

        <div className='options__container'>
          <div className='options__link'>
            <div className='links'>
              <div className='option'>
                <SearchIcon />
                <Link to="">All</Link>
              </div>
              <div className='option'>
                <ArticleIcon />
                <Link to="">News</Link>
              </div>
              <div className='option'>
                <BookIcon />
                <Link to="">Books</Link>
              </div>
              <div className='option'>
                <ImageIcon />
                <Link to="">Images</Link>
              </div>
              <div className='option'>
                <SmartDisplayIcon />
                <Link to="">Videos</Link>
              </div>
              <div className='option'>
                <MoreVertIcon />
                <Link to="">More</Link>
              </div>
            </div>

            <div className='tool'>
              <Button variant="Tools">Tools</Button>
            </div>
          </div>
          <div className='options__safesearch'>
            <Button variant="SafeSearch on">SafeSearch on</Button>
          </div>
        </div>
      </div>
      <div className='results'>
        <p className='count'>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) </p>
        {data?.items.map((item) => {
          return (
            <div className='result'>
              <a href={item.link} className='result_link'>{item.displayLink}</a>
              <a href={item.link} className='result_title'><h2>{item.title}</h2></a>
              <p className='result_snippet'>{item.snippet}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchPage