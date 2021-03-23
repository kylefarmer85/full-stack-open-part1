import React, { useState } from 'react';

////////////////////////////// 1b

// const Header = ({ name }) => {
//   return <h1>{name}</h1>;
// };

// const Content = ({ parts }) => {
//   return (
//     <>
//       {parts.map(part => (
//         <p key={part.name}>
//           {part.name} {part.exercises}
//         </p>
//       ))}
//     </>
//   );
// };

// const Total = ({ parts }) => {
//   const arr = parts.map(part => part.exercises);

//   const reducedProps = arr.reduce((a, b) => (a += b), 0);

//   return <p>{reducedProps}</p>;
// };

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   };

//   const parts = course.parts;
//   const name = course.name;

//   return (
//     <div>
//       <Header course={name} />

//       <Content parts={parts} />

//       <Total parts={parts} />
//     </div>
//   );
// };

//////////////////////////////////////// 1b

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = 'Peter';
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

/////////////////////////////// 1d

// const History = ({ allClicks }) => {
//   return (
//     <>
//       {allClicks.length === 0 ? (
//         <div>the app is used by pressing the buttons</div>
//       ) : (
//         <div>button press history: {allClicks.join(' ')}</div>
//       )}
//     </>
//   );
// };

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'));
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'));
//     setRight(right + 1);
//   };

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };

//////////////// 1d pt2

// const Display = props => <div>{props.value}</div>;

// const Button = props => (
//   <button onClick={props.handleClick}>{props.text}</button>
// );

// const App = () => {
//   const [value, setValue] = useState(10);

//   const setToValue = newValue => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text='thousand' />
//       <Button handleClick={() => setToValue(0)} text='reset' />
//       <Button handleClick={() => setToValue(value + 1)} text='increment' />
//     </div>
//   );
// };

///////// 1d unicafe

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, bad, neutral }) => {
  const all = () => {
    return good + bad + neutral;
  };

  const average = () => {
    let goodScore = good;
    let badScore = bad;

    return (goodScore - badScore) / all();
  };

  const positive = () => {
    let pos = good / all();
    return <>{pos / 0.1} %</>;
  };

  return (
    <>
      {all() ? (
        <div>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={all()} />
          <Statistic text='average' value={average()} />
          <Statistic text='postitive' value={positive()} />
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const Statistic = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
  };
  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
