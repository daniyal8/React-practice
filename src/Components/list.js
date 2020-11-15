import React from 'react';
import Icon from './bin-with-lid.png'
import './list.css'

function List () {
    const lists = ['Gym', 'Studies', 'Coding',]
    return(
        <div className="lists">
        <ul className="ulist">
            {lists.map((index) => (
            <li key={index} className="list">
                <input type="checkbox" id="cb2" />
                {index}
                <img className="img" src={Icon} alt="" width="30px"/>
            </li>
            ))}
        </ul>
            
        </div>
    )
}
export default List;