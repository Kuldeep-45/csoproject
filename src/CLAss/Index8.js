import React from 'react'
import Info8 from "../CLAss/C8"
import { homeObjSport,homeObjFood, homeObjMental, homeObjPhysical,homeObjacad } from './DataC8'
const Index8 = () => {
    return (
        <>
        <Info8 {...homeObjacad}/>
        <Info8 {...homeObjSport}/>
        <Info8 {...homeObjPhysical}/>
        <Info8 {...homeObjMental}/>
         <Info8 {...homeObjFood}/>
        </>
    )
}

export default Index8
