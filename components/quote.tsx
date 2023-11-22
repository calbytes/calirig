import React from 'react';

export default function Quote({quoteData}): JSX.Element {
  const rawQuote = quoteData.quote;
  const formattedQuote = rawQuote.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line} <br />
    </React.Fragment>
  ));

  return(
    <div className="container d-flex justify-content-center mt-5 border flex-column" 
    style={{maxWidth: '600px'}}>
      <p className="text-center fw-bold">
        Quote_Maestro
      </p>
      <p>{formattedQuote}</p>
      <p>- {quoteData.author}, {quoteData.title}</p>
    </div>
    );
}