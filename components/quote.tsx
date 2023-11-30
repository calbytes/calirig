import React from 'react';

export default function Quote({quoteData}): JSX.Element {
  var formattedQuote = '';
  var author = '';
  var title = '';
  try{
    formattedQuote = quoteData.quote.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line} <br />
      </React.Fragment>
    ));
    author = quoteData.author;
    title = quoteData.title;
  }catch(error){
    formattedQuote = 'Having something is not always better than not having it.'
    author = "Beth Kempton";
    title = "fr0m the WwW";
  }


  return(
    <div className="container d-flex justify-content-center mt-5 mb-5 border flex-column" 
    style={{maxWidth: '600px'}}>
      <p className="text-center fw-bold">
        Quote_Maestro
      </p>
      <p>{formattedQuote}</p>
      <p>- {author}, {title}</p>
    </div>
    );
}