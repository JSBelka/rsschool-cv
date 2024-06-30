# **Anna Soboleva**

**Junior Frontend Developer**
******
**Contact information:**

**Phone:** +7911 137 2008
  
**E-mail:** barbi-bar@mail.ru
  
**Telegram:** @annette_soboleva
****** 
**Briefly About Myself:**

Since my childhood I have been interested in language systems as a set of different words and rules that help people from different cultures to express themselves. Having started my career as a foreign languages teacher in private schools fifteen years ago, I became profficient in teaching foreign languages.

I have a degree in translation, Russian, English and French, as well as a degree in online marketing where I studied how to create effective ads through bright and catching images. I became really interested in creating such images online and decided to take a course in basic JavaScript. My knowledge of languages and marketing really helps me to easily get new skills in such a new sphere for me.

I sincerely believe that my skills and interests will help me to achieve my final goal to become a proficient Frontend Developer.
******
**Skills and Proficiency:**
* JavaScript Basics
* Git, GitHub
* VS Code
******
**Code example:**

Example of the code from **Stepik** course: *You have time variables that contain user input data. Write JavaScript code that converts time from one format to another and writes the result to the result variable.Input format: 12-hour time format, where AM and PM are abbreviations used to indicate the time of day.*
```
let newTime = time.slice(0,5).split(':');
let hours = newTime[0];
let minutes = newTime[1];
let middle = time.slice(-2);

if (middle === 'AM' && hours === '12') {
result = "00:" + minutes;
} else if (middle === 'AM') {
    if(hours<10) {
       result = "0" + hours + ":" + minutes; 
    } else {
result = hours + ":" + minutes;
    }
} else if (middle === 'PM' && hours === '12') {
result = hours + ':' + minutes;
} else {
result = (parseInt(hours) + 12) + ':' + minutes;
}
```
******
**Courses:**
* JavaScript Basic Level (completed)

![JavaScriptBasics](C:\АНЯ\JS "Certificate")
******
**Languages:**
* English - C1/C2 Level
* French - C1
* Spanish - B1
* Italian - A1
* Russian - Native
