import './Input.css';

const Input = (props) => {

  return (
    <div>
      <form action="">
        <label>
          {props.label}
          <input
            type="button"
            value="A"
            id="optionA"
            className="route"
            onClick={props.handleInputChange}
          />
          <input
            type="button"
            value="B"
            id="optionB"
            className="route"
            onClick={props.handleInputChange}
          />
          <input
            type="button"
            value="C"
            id="optionC"
            className="route"
            onClick={props.handleInputChange}
          />
          <input
            type="button"
            value="D"
            id="optionD"
            className="route"
            onClick={props.handleInputChange}
          />
          <input
            type="button"
            value="E"
            id="optionE"
            className="route"
            onClick={props.handleInputChange}
          />
          <input
            type="button"
            value="F"
            id="optionF"
            className="route"
            onClick={props.handleInputChange}
          />
        </label>

          <input
            type="submit"
            value="CALCULATE DELIVERY COST"
            onClick={props.calculateDeliveryCost}
            className="submit calc"
          />
          <input
            type="button"
            value="RESET"
            onClick={props.resetInput}
            className="submit reset"
          />

      </form>
      <div>
        <p>{props.input.length === 1 ? 'Select at least two citites' : ''}</p>
        <h3>CHOSEN ROUTE: {props.input}</h3>
        <h2
          className={
            props.sum === 'No such route possible, reset to try again' ? 'error' : ''
          }
        >
          {props.sum === 'No such route possible, reset to try again'
            ? props.sum
            : `Total delivery cost: ${props.sum}`}
        </h2>
      </div>
    </div>
  );
};

export default Input;
