import { useState } from "react";
import {AmountApp} from '../amount'

export const ContainerApp = ({value, setValue, numberPerson, setNumberPerson, tip, setTip}) => {

    const [activeButton, setActiveButton] = useState(null);

    const handleChange = (e, type, buttonIndex) => {
        let value = undefined
        if (e?.target?.value) {
            value = Number(e?.target?.value);
        } else {
            value = e;
        }
        if (Number.isInteger(value)) {
            // type 1: amount
            // type 2: number of people
            switch (type) {
                case 1:
                    setValue(value);
                    break;
                case 2:
                    setNumberPerson(value);
                    break;
                case 3:
                    setTip(value);
                    setActiveButton(buttonIndex);
                    break;
                default:
                    break;
            }
        }

        
    };



  return (
    <>
        <div className='data-wrapper'>
            <h1>Bill</h1>
            <label for="input-bill">
                <input className="input-bill" id="input-bill" value={value} onChange={(e) => {handleChange(e, 1)}}/>
            </label>
            <h2>Select Tip %</h2>
            <ul>
                <li><button type="button" className={`percentage-button ${
                activeButton === 1 ? "btn-active" : "disabled"}`} onClick={() => handleChange(5, 3, 1)}>5%</button></li>
                <li><button type="button"className={`percentage-button ${
                activeButton === 2 ? "btn-active" : "disabled"}`} onClick={() => handleChange(10, 3, 2)}>10%</button></li>
                <li><button type="button" className={`percentage-button ${
                activeButton === 3 ? "btn-active" : "disabled"}`} onClick={() => handleChange(15, 3, 3)}>15%</button></li>
                <li><button type="button" className={`percentage-button ${
                activeButton === 4 ? "btn-active" : "disabled"}`} onClick={() => handleChange(25, 3, 4)}>25%</button></li>
                <li><button type="button"className={`percentage-button ${
                activeButton === 5 ? "btn-active" : "disabled"}`} onClick={() => handleChange(50, 3, 5)}>50%</button></li>
                <li>
                    <input placeholder="Custom"  className={`percentage-button custom-button ${activeButton === 0 ? "btn-active" : "disabled"}`}  onChange={(e) => {handleChange(e, 3, 0)}}/>
                </li>
            </ul>
            <h2>Number of People</h2>
            <label for="input-people">
                <input id="input-people" className="input-people" value={numberPerson} onChange={(e) => {handleChange(e, 2)}}/>
            </label>
        </div>
    </>
  )
}

