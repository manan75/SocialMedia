import './Navbar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/home' style={{textDecoration:"none"}}>
        <span>MananSocial</span>
        </Link> 
        <HomeIcon/>
        <GridViewIcon/>
        <DarkModeIcon/>
        <PersonOutlineOutlinedIcon/>
        <SearchOutlinedIcon/>
      </div>
      <div className='right'>

      </div>
    </div>
  )
}

export default Navbar