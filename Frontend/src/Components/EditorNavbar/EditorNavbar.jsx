import React from 'react'
import './EditorNavbar.css'
import logo from '../../assets/image.png'
import {FiDownload} from 'react-icons/fi'

function EditorNavbar() {
    return (
        <div className='editornavbar'>
            <div className='editornavbar-logo'>
                <img src={logo} alt=''/>
            </div>
            <p>File/MyProject</p>
            <i><FiDownload/></i>
            
        </div>
    )
}

export default EditorNavbar
