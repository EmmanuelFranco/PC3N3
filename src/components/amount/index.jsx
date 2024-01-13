export const AmountApp = ({value, numberPerson, tip, setValue, setNumberPerson, setTip}) => {


    const calculateQuote = () => {
        let result = 0;
        if (value && numberPerson && tip) {
            result = (value + (value * tip / 100)) / numberPerson;
        }else if(value && numberPerson){
            result = value / numberPerson;
        }
        return result.toFixed(2);
    }

    const calculateTypeAmount = () => {
        let result = 0;
        if (value && numberPerson && tip) {
            result = (value * tip / 100) / numberPerson;
        }
        return result.toFixed(2);
  
    }

    const reset = () => {
        setValue(0);
        setNumberPerson(1);
        setTip(0);
    }

    const resetCustom = () => {
      setTip(0);
    };

  return (
    <>
      <div className="result-wrapper">
        <div class="result-txt">
          <div class="text-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <h3>
              $<span id="tip-amount">{calculateTypeAmount()}</span>
            </h3>
          </div>
          <div class="total-amount">
            <div>
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <h3>
              $<span id="total">{calculateQuote()}</span>
            </h3>
          </div>
        </div>
        <button type="button" class="reset-button" onClick={() => {reset(); resetCustom();}}>
          RESET
        </button>
      </div>
    </>
  )
}
