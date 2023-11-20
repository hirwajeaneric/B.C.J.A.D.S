# Question
Create a function that recieves a year and tells the user that the year is leap or not.

# Fun fact about leap years
In the Gregorian calendar, a normal year consists of 365 days. Because the actual length of a sidereal year (the time required for the Earth to revolve once about the Sun) is actually 365.2425 days, a "leap year" of 366 days is used once every four years to eliminate the error caused by three normal (but short) years. Any year that is evenly divisible by 4 is a leap year: for example, 1988, 1992, and 1996 are leap years.

However, there is still a small error that must be accounted for. To eliminate this error, the Gregorian calendar stipulates that a year that is evenly divisible by 100 (for example, 1900) is a leap year only if it is also evenly divisible by 400.

For this reason, the following years are not leap years:

1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600

This is because they are evenly divisible by 100 but not by 400.

The following years are leap years: 1600, 2000, 2400

This is because they are evenly divisible by both 100 and 400.

# How to determine whether a year is a leap year
To determine whether a year is a leap year, follow these steps:

1. If the year is evenly divisible by 4
2. If the year is evenly divisible by 100
3. If the year is evenly divisible by 400
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days).

# Hint & Requirements
1. Use relevant information from the provided descriptions to build your program/function.
2. Your function should be called: "leapYearChecker"
3. Your function should recieve an argument of datatype: number
4. Your function should return a boolean which is either "true" or "false"
5. To submit your work, create a file whose name starts with your first name and then leap_year_checker
    Example: 
        `jane-leap_year_calculator.js`
6. To work on the answer, first copy starter code from a file called `sample_answer.js`        