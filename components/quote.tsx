import React from 'react';

export default function Quote({quoteData}): JSX.Element {
    return(
      <div className="border p-3 lead mb-3">
        <p className="text-center fw-bold">
          Quote of the Day
        </p>
        <p>{quoteData.quote}</p>
        <p>- {quoteData.author}, {quoteData.title}</p>
      </div>
    );
}