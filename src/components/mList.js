import React from 'react'
import MItem from './mItem'
const MList = (props) => {
    const {list=[]} = props
    return(
        <tbody>
            {list.map((item, index) => <MItem {...props} key={index} {...item} ></MItem>)}
        </tbody>
    )
}
export default MList