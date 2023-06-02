BUILDING AN ALARM CLOCK

RULES
1. Write one statement per line
2. Capitalize initial keywords (READ, WRITE, IF, WHILE, UNTIL etc).
3. Indent to show hierarchy.
4. End multi line structure.
5. Keep statements language agnostic.

PROCESS
1. Render the current time 
2. Render the current date
3. Display the date in an easy to read format
4. Display the time in an easy to read format
5. Create a button to set the alarm
6. Create an input box for the user to enter in when they want the alarm to trigger
7. Track the current time in relation to the time the user entered
8. If the current time is equal to the time the user entered the alarm gets triggered
END

INITIALIZE: Variables

Current Date
- Year
-Month
-Date
     
Current Time 
- Hours
- Minutes
- Seconds

Alarm 
- Button Controlled 
- Tracks Current Time
- Tracks Entered Alarm Time 
        
Alarm Button 
- Has a user input 

-----------------------------------------------------------------------------------------------

BEGIN

INITIALIZE() variables
Current Date: (currentDate)
Current Time: (currentTime)
Alarm: off 
Alarm Button: undefined

INITIALIZE() functions 

FUNC
    CREATE function that:
        Use the "new Date" method to display the current date and change it's format to make it more readable
        Use the "new Date" method to display the current time and change it's format to make it more readable

FUNC
     CREATE function that: 
        Tracks the current time in relation to the time entered by the user
        IF the current time is greater than the entered time then an alert will trigger
        
FUNC
     CREATE function that: 
        Sets the other functions to be connected with the alarm button and calls them upon "click"

END
