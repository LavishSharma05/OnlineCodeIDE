import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import GridCard from '../Components/GridCard/GridCard'
import ListCard from '../Components/ListCard/ListCard'
import '../CSS/Home.css'

function Home() {
    const [isGridLayout, setisGridLayout] = useState(true)
    const [iscreateModelShow, setiscreateModelShow] = useState(false)

    return (
        <>
            <div>
                <Navbar />
                <div className='home'>
                    <h2>Hi, Lavish</h2>
                </div>
                <div className='home-search'>
                    <input type='text' placeholder='Search here...' />
                    <button onClick={() => setiscreateModelShow(true)} className='home-search-btn'>+</button>
                </div>
                <div className="cards">
                    {
                        isGridLayout ?
                            <div className='grid-layout'>
                                <GridCard />
                                <GridCard />
                                <GridCard />
                                <GridCard />
                                <GridCard />
                            </div>

                            :

                            <div className='list-layout'>
                                <ListCard />
                                <ListCard />
                                <ListCard />
                                <ListCard />
                            </div>
                    }
                </div>




            </div>

            {
                iscreateModelShow ? <div className="createmodel">
                    <div>
                        <div className="createmodel">
                            <h3>Create New Project</h3>
                            <div className="createmodel-input">
                                <input type="text" placeholder="Enter Project Name" />
                            </div>
                            <div className="createmodel-btn">
                                <button onClick={() => setiscreateModelShow(false)}>Cancel</button>
                                <button>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                    : ""
            }

        </>


    )
}

export default Home
