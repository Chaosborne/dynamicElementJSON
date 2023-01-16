'use strict';

let summary = document.getElementById('summary');

fetch('data.json')
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(json => {
    // console.log(json);
    for (let i in json) {
      console.log(`${i}: ${json[i]}`);

      let newSummaryItem = document.createElement('div');
      newSummaryItem.textContent = `${i}: ${json[i]}`;
      // document.body.append(newSummaryItem);
      summary.append(newSummaryItem);
      newSummaryItem.className = 'newSummaryItem';
    }
  });
