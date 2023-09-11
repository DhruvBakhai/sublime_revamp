import React from 'react'
import Header from './Header'
import SideComponent from './SideComponent'
import WorkFeature from './WorkFeature'

function Board() {
    return (
        <div className="bg-cover bg-center my-custom_bg-class h-screen ">
            <div className="h-full  bg-black bg-opacity-50 w-full">
                <Header />
                <SideComponent />
            </div>
        
        <WorkFeature />
        </div>

    )
}

export default Board
