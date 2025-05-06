"use client"
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import styles from "./Menu.module.css";
export function Menu(): ReactElement{
    const contentsTmp : ReactElement = (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    );
    const contentsSize :Size = {
        width:10
        ,height:300
    };
    const iconWidth : number = 20;
    const iconHeight : number = iconWidth * 0.8;
    const [isOpen, setIsOpen] : [
        isOpen : boolean, setIsOpen:Dispatch<SetStateAction<boolean>>
    ] = useState(false);
    const [contents, setContents] : [
        contents: ReactElement, setContents: Dispatch<SetStateAction<ReactElement>>
    ] = useState(<></>)

    return (
        <div
            className={styles.frame}
            style={{
                ["--width" as string]:String(iconWidth) + "px"
                ,["--height" as string]:String(iconHeight) + "px"
                ,["--contentsWidth" as string]:String(contentsSize.width) + "px"
                ,["--contentsHeight" as string]:String(contentsSize.height) + "px"
            }}
            data-open = {isOpen}
            onTransitionEnd={()=>setContents(isOpen ? contentsTmp : <></>)}
        >
            <button
                className={styles.parent}
                onClick={()=>setIsOpen(!(isOpen))}
            >
                <svg
                    viewBox={`0 0 ${iconWidth} ${iconHeight}`}
                    className={styles.parentIcon}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={`M 0 0 L ${iconWidth} 0`} className={styles.menuLine}/>
                    <path
                        d={`M 0 ${iconHeight / 2} L ${iconWidth} ${iconHeight / 2}`}
                        className={styles.menuLine}
                    />
                    <path
                        d={`M 0 ${iconHeight} L ${iconWidth} ${iconHeight}`}
                        className={styles.menuLine}
                    />
                </svg>
            </button>
            {contents}
        </div>
    );
}