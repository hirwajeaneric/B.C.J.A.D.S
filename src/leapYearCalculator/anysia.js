function leapYear(year)
{
return (year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0);
}
console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
