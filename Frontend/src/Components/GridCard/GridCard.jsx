import React,{useState} from 'react'
import logo from '../../assets/image.png'
import deletelogo from '../../assets/delete.png'
import './GridCard.css'

function GridCard() {
    const [isDeleteModelShow, setisDeleteModelShow] = useState(false)
    return (
        <>
            <div className="gridcard">
                <img src={logo} alt='' />
                <h3>My First Project</h3>
                <div className='gridcard-para'>
                    <p>Created on 25th feb</p>
                    <img onClick={()=>setisDeleteModelShow(true)} src={deletelogo} alt='' />
                </div>
            </div>

            {isDeleteModelShow ? <div className='model'>
                <div className="mainModel">
                    <h3>Do you want to Delete this Project?</h3><br />
                    <div className='model-buttons'>
                        <button>Yes</button>
                        <button onClick={() => setisDeleteModelShow(false)}>No</button>
                    </div>
                </div>
            </div> : ""}
        </>
    )
}

export default GridCard
