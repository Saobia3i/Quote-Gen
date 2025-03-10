import React, { useState } from "react";
import { Card, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import "./QuoteGen.css";

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Difficulties in life are intended to make us better, not bitter.", author: "Dan Reeves" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" }
];

const QuoteGen = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <Card className="quote-card">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">- {quote.author}</p>
        <Button 
          type="primary" 
          icon={<ReloadOutlined />} 
          onClick={getNewQuote} 
          className="quote-button"
        >
          New Quote
        </Button>
      </Card>
    </div>
  );
};

export default QuoteGen;
