import React,{useState} from 'react'
import logo from '../../assets/image.png'
import deleteImage from '../../assets/delete.png'
import './ListCard.css'
function ListCard() {
    const [isDeleteModelShow, setisDeleteModelShow] = useState(false)


    return (
        <>
            <div className='listcard'>
                <div className='listcard-image'>
                    <img src={logo} alt=''/>
                    <div className='listcard-para'>
                        <h3>My First Project</h3>
                        <p>Creted on 25th feb</p>
                    </div>
                </div>
                <div className='listcard-delete'>
                    <img onClick={()=>setisDeleteModelShow(true)} src={deleteImage} alt=''/>
                </div>
            </div>
            {isDeleteModelShow? <div className='model'>
                <div className="mainModel">
                    <h3>Do you want to Delete this Project?</h3><br/>
                    <div className='model-buttons'>
                        <button>Yes</button>
                        <button onClick={()=>setisDeleteModelShow(false)}>No</button> 
                    </div>
                </div>
            </div> : ""}
        </>   
    )
}

export default ListCard
