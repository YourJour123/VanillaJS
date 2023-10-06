const quotes = [
  {
    quote: "By failing to prepare. you are preparing to fail.",
    author: "Benjamin Franklin",
  },
  {
    quote: "You create your opportunities by asking for them.",
    author: "Patty Hansen",
  },
  {
    quote: "Nothing fails like success.",
    author: "Gerald Nachman",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "A discovery is said to be an accident meeting a prepared mind.",
    author: "Albert Szent-Gyorgyi",
  },
  {
    quote: "The Bible promises no loaves to the loafer.",
    author: "Unknown",
  },
  {
    quote:
      "Waste no more time talking about great souls and how they should be. Become one yourself!",
    author: "Marcus Aurelius Antoninus",
  },
  {
    quote: "Rather be dead than cool.",
    author: "Kurt Cobain",
  },
  {
    quote: "Judgement, not passion should prevail.",
    author: "Epicharmus",
  },
  {
    quote: "The unexamined life is not worth living",
    author: "Socrates",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
