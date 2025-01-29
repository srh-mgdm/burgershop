import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Burger from './Burger'

function Home() {
  const[selectBurgers,setSelectBurgers]=useState([])
  function selectBurger(newBurger) {
    
    setSelectBurgers([...selectBurgers, newBurger])
  }
  function removeBurger(bergerToDelete) {
    setSelectBurgers(selectBurgers.filter(burger => burger!== bergerToDelete))
    
  }
  return (
    <div className={styles.main}>
      <img src="logo.png" alt="logo" className={styles.image} />
      <p className={styles.desc}>Number of bergers selected : {selectBurgers.length}</p>
      <div className={styles.container}>
      <Burger name="The New Yorker" image="./newyorker.jpg" selectBurger={selectBurger} removeBurger={removeBurger}/> 
      <Burger name="The Californian"image="./californian.jpg" selectBurger={selectBurger} removeBurger={removeBurger}/> 
      <Burger name="The Chicken One"image="./chickenone.jpg" selectBurger={selectBurger} removeBurger={removeBurger}/> 
      </div>
    </div>
  );
}

export default Home;
