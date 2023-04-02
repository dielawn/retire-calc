const compoundSavings = (initialSavings, monthlyContribution, rateOfGrowth, years) => {   
    let totalSavings = initialSavings;
    let annualContribution = monthlyContribution * 12;
    for(let i = 0; i < years; i++){
        let growth = totalSavings * rateOfGrowth;
        totalSavings = totalSavings + annualContribution + growth;
        console.log(`Year ${i + 1}: Growth = ${growth.toFixed(2)}, Total Savings = ${totalSavings.toFixed(2)}`);
    }
};
compoundSavings(0, 600, 0.02, 15);
