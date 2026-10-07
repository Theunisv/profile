import { useState } from 'react';

const quotes = [
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is prerequisite for reliability.",
    "Make it work, make it right, make it fast.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "The best error message is the one that never shows up.",
    "Code is like humor. When you have to explain it, it's bad.",
];

const TechQuote = () => {
    const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
return (
    <p className='mt-5 text-center lg:leading-tight'>{quote}</p>
);
}

export default TechQuote;
