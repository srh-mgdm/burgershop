import styles from '../styles/Burger.module.css';


function Burger(props) {
 
  
  return (
    <div className={styles.burgerCard}>
    
        <h1 className={styles.title}>
         {props.name}
        </h1>
        <img src={props.image} alt={props.name} className={styles.image} />
        <div className={styles.buttonContainer}> 
          <button className={styles.button} onClick={()=>props.selectBurger(props.name)}>Select</button>
          <button className={styles.button} onClick={()=>props.removeBurger(props.name)}>Remove all</button>
        </div>
     
    </div>
  );
}

export default Burger;
