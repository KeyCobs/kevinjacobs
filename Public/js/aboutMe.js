function ageCalculator()
{
    const currentAge = new Date();
    var birthday = new Date(1999,2,28);
    var currentDate = new Date();
    currentAge.setFullYear(currentDate.getFullYear() - birthday.getFullYear())
    currentAge.setMonth(currentDate.getMonth() - birthday.getMonth())
    currentAge.setDate(currentDate.getDay() - birthday.getDay())
    document.getElementById("age").innerText = currentAge.getFullYear();
}