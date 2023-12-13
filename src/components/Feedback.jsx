// import React from 'react';
// import css from './Feedback.module.css';

// const Feedback = ({
//   good,
//   neutral,
//   bad,
//   handleClick,
//   total,
//   positivePercentage,
// }) => {
//   return (
//     <div className={css.feedback_container}>
//       <div>
//         <h2>Please leave feedback</h2> 
//          <div className={css.btn_list}>
//           <li>
//             <button
//               onClick={() => handleClick('good')}
//               className={css.btn}
//               type="button"
//             >
//               Good
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleClick('neutral')}
//               className={css.btn}
//               type="button"
//             >
//               Neutral
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleClick('bad')}
//               className={css.btn}
//               type="button"
//             >
//               Bad
//             </button>
//           </li>
//         </div>
//       </div>

//       <div>
//         <h2>Statistics</h2>
//         <div>      <p>
//             Cood: <span className="good">{good}</span>
//           </p>
//            <p>
//             Neutral: <span className="neutral">{neutral}</span>
//          </p>
//           <p>
//              Bad: <span className="bad">{bad}</span>
//           </p>
//           <p>
//              Total: <span className="total">{total}</span>
//            </p>
//            <p>
//              Positive feedback:{' '}
//             <span className="percentage">{positivePercentage}%</span>
//           </p>
//          </div>
//        </div>
//            </div>
           
//    );
//  };

// export { Feedback };
