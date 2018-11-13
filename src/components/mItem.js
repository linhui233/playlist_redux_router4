import React from 'react'
const MItem = (props) => {
    const {name, author, isCollect, isChecked, id } = props
    return (
        <tr className={`${isChecked ? 'selected' : ''}${isCollect? ' collected' : ''}`}>
            <td>
                <input type="checkbox" onChange={e => {
                    props.setChecked(id, e.target.checked)
                }} checked={isChecked}/>
            </td>
            <td>{name}</td>
            <td>{author}</td>
            <td>
                <input type="checkbox" onChange={e => {
                    props.setCollect(id, e.target.checked)
                }} checked={isCollect}/>
            </td>
            <td><span className="delete" onClick={() => props.remove(id)}>X</span></td>
        </tr>
    )
}
export default MItem