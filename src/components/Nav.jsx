import React from 'react'
import '../components/Nav.css'
import { FaSearch} from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import unicorn from '../images/uni.png'
import Yourprofile from '../components/Yourprofile';


function Nav() {
    
  return (
    <div>
        <nav className='nav'>
            <img className='uni' src={unicorn} alt="hello"/>
            <div className='home'>
                Home
            </div>
            <div className='tdy '>
                Today
            </div>
            
            <select className='create'>

                
                <option value="fruit">Create</option>

                <option value="vegetable">Vegetable</option>

                <option value="meat">Meat</option>
                

            </select>
            
            <div className='search-container'>
            <div className='search'>
            
            <  FaSearch/>
            </div> 
            <input className='search-input' type="text" placeholder='Search' />
           
            </div>
            <div className='bell'>
                
                <BsBell/>
            </div>
            <div className='chat'>
                <BiChat/>
            </div>
            <div>
                <Yourprofile/>
            </div>
        </nav>
    </div>
  )
}

export default Nav