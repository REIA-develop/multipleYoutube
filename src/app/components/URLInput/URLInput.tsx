"use client"
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import styles from "./URLInput.module.css";
interface URLMap{
    id : number;
    value : string;
}
export function URLInput() : ReactElement{
    const [urlList, setUrlList]:[
        urlList: Array<URLMap>, setUrlList:Dispatch<SetStateAction<Array<URLMap>>>
    ] = useState([{
        id : 1
        ,value:""
    }]);
    let inputList : Array<ReactElement> = [];
    const displayCount : number = 4;
    urlList.map((value,index)=>{
        console.log("url_"+String(index));
        console.log("delete_"+String(index));
        inputList = inputList.concat(
            <input
                type="text"
                placeholder="PCで開いた際のyoutube URL"
                value={value.value}
                key={"url_"+String(value.id)}
                data-index ={index}
                onChange={(e)=>{
                    if(e.currentTarget == null){
                        return;
                    }
                    const targetIndex : number = Number(e.currentTarget.dataset.index);
                    const newUrlList : Array<URLMap> = urlList.map((value,index)=>{
                        if(index != targetIndex){
                            return value;
                        }
                        return {
                            id : value.id
                            ,value: e.currentTarget.value
                        };
                    });
                    setUrlList(newUrlList);  
                }}
            />
        );
        inputList = inputList.concat(
            <button onClick={(e)=>{
                    if(e.currentTarget == null){
                        return;
                    }
                    const targetIndex : number = Number(e.currentTarget.dataset.index);
                    console.log(targetIndex)
                    const newUrlList : Array<URLMap> = urlList.filter((value,index) => index != targetIndex);
                    setUrlList(newUrlList);  
                }}
                key={"delete_"+String(value.id)}
                data-index ={index}
            >
                削除
            </button>
        );
    })
    return(
        <div className={styles.frame} style={{
            ["--urlCount" as string] : urlList.length
            /*表示許容行 + 1*/
            ,["--displayCount" as string] : displayCount + 1
            ,["--scroll" as string] : (urlList.length > displayCount) ? "scroll" : ""
        }}>
            <div className={styles.header}>
                <span className={styles.title}>URL</span>
                <button className={styles.add} onClick={()=>setUrlList(urlList.concat({
                    id : urlList[urlList.length - 1].id + 1
                    ,value : ""
                }))}>追加</button>
            </div>
            {inputList}
            
            
        </div>
    );
}