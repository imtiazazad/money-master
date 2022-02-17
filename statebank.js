document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodField = document.getElementById('food-field');
    const foodAmount = parseInt(foodField.value);
    
    const rentField = document.getElementById('rent-field');
    const rentAmount = parseInt(rentField.value);

    const clothsField = document.getElementById('cloths-field');
    const clothsAmount = parseInt(clothsField.value);

    const totalExpense = foodAmount + rentAmount + clothsAmount;
    
    //update toral expense
    const totalExpenseNumber = document.getElementById('total-expense');
    totalExpenseNumber.innerText = totalExpense;

    //getting income amount
    const incomeField = document.getElementById('income-field');
    const incomeAmount = parseInt(incomeField.value);

    //update balance
    const balance = document.getElementById('balance');
    const updateBalance = incomeAmount - totalExpense;
    balance.innerText = updateBalance;
})

document.getElementById('save-btn').addEventListener('click', function(){
    const saveField = document.getElementById('save-field')
    const saveAmount = parseInt(saveField.value);
    
    const incomeField = document.getElementById('income-field');
    const incomeAmount = parseInt(incomeField.value);

    const save = document.getElementById('save');
    const saveParc = saveAmount / 100;
    const saveTotalAmount = saveParc * incomeAmount;
    save.innerText = saveTotalAmount;
    console.log(saveTotalAmount);

    const foodField = document.getElementById('food-field');
    const foodAmount = parseInt(foodField.value);
    
    const rentField = document.getElementById('rent-field');
    const rentAmount = parseInt(rentField.value);

    const clothsField = document.getElementById('cloths-field');
    const clothsAmount = parseInt(clothsField.value);

    const totalExpense = foodAmount + rentAmount + clothsAmount;
    console.log(totalExpense);

    const balance = document.getElementById('balance');
    const updateBalance = incomeAmount - totalExpense;
    balance.innerText = updateBalance;
    console.log(updateBalance);

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingTotalBalance = updateBalance - saveTotalAmount;
    remainingBalance.innerText = remainingTotalBalance;
})