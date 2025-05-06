import { ReactElement } from "react";
import { Menu } from "../../components/menu/Menu";
import { URLInput } from "../../components/URLInput/URLInput";
import styles from "./TopPage.module.css";
export function TopPage() : ReactElement{
    return(
        <>
		<Menu/>
        <div className={styles.container}>
            <h1 className={styles.title}>multiple youtube</h1>
            <URLInput/>
            
            <button className={styles.play}>視聴</button>
        </div>
		
		</>
    );
}