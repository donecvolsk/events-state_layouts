//основной компонент
import { useState } from "react";
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from "./ListView";
import { products } from '../products'

export default function Store() {
    const view_list = 'view_list';// положение карточек списком
    const view_module = 'view_module';// положение карточек карточками
    const [select, setSelect] = useState(view_list);

    function onSwitch(icon) {
        setSelect(icon);
        if(icon === view_module) {
            setSelect(view_list);
        }else {
            setSelect(view_module);
        }
    }

    return (
        <div>
            <div className="toolbar">
            <IconSwitch icon={select} onSwitch={onSwitch}/>
            </div>
            
            {select === 'view_list' ? <CardsView cards={products}/> : <ListView cards={products} />}
            
        </div>        
    ) 
}