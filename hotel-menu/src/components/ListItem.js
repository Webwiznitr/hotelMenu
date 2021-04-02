import React from 'react';
import List from './List';
import styles from '../components/ListItem.css';
import pizza from '../assets/images/pizza.svg'

const ListItem = () => {
    return (
        <>
        <div className="root">
       
            <div className="box">
            <img src={pizza} className="imgbox"></img>
            <h2 className="heading">Pizza</h2>
            <p className="para">25 Items</p>   
            <button className="btn">></button>
            </div>

            <div className="box">
            <img src={pizza} className="imgbox"></img>
            <h2 className="heading">Pizza</h2>
            <p className="para">25 Items</p>   
            <button className="btn">></button>
            </div>

            <div className="box">
            <img src={pizza} className="imgbox"></img>
            <h2 className="heading">Pizza</h2>
            <p className="para">25 Items</p>   
            <button className="btn">></button>
            </div>

            <div className="box">
            <img src={pizza} className="imgbox"></img>
            <h2 className="heading">Pizza</h2>
            <p className="para">25 Items</p>   
            <button className="btn">></button>
            </div>

            <div className="box">
            <img src={pizza} className="imgbox"></img>
            <h2 className="heading">Pizza</h2>
            <p className="para">25 Items</p>   
            <button className="btn">></button>
            </div>

            <div className="box">
            <img src={pizza} className="imgbox"></img>
            <h2 className="heading">Pizza</h2>
            <p className="para">25 Items</p>   
            <button className="btn">></button>
            </div>

            <div className="box">
            <img src={pizza} className="imgbox"></img>
            <h2 className="heading">Pizza</h2>
            <p className="para">25 Items</p>   
            <button className="btn">></button>
            </div>
        </div>
      </> 
    );
}

export default ListItem;