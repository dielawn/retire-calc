
const savingsData = [];

  const compoundSavings = (initialSavings, monthlyContribution, rateOfGrowth, years) => {   
    let totalSavings = initialSavings;
    let annualContribution = monthlyContribution * 12;
    
    for(let i = 0; i < years; i++){
        let growth = (totalSavings + annualContribution) * rateOfGrowth;
        totalSavings = totalSavings + annualContribution + growth;
        const annualData = {
            year: i + 1,
            contribution: annualContribution,
            growth: growth.toFixed(2),
            savings: totalSavings.toFixed(2)

        }
        savingsData.push(annualData)
        
        console.log(`Year ${i + 1}: Growth = ${growth.toFixed(2)}, Total Savings = ${totalSavings.toFixed(2)}`);
        
    }
    console.table(savingsData)
   return savingsData
};


const renderTable = () => {
  const tableBody = document.getElementById('savingsTable');
  // clear existing rows
  tableBody.innerHTML = '';

  savingsData.forEach((data) => {
    console.log('hi')
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${data.year}</td>
      <td>${data.contribution}</td>
      <td>${data.growth}</td>
      <td>${data.savings}</td>`;
    tableBody.appendChild(newRow);
  });
};


// compoundSavings(19282, 600, 0.02, 30);

document.getElementById('calculate').addEventListener('click', () =>{
compoundSavings(19282, 600, 0.02, 30);
 renderTable()
})

document.getElementById('clear').addEventListener('click', () =>{
    
})


  

  