import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 255.99;

  // const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString('en-US', { day: 'numeric' });

  return (
    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div>
        <div>{month} </div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
