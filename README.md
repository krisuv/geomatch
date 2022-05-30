# Geomatch
## Quiz app that matches You with the country you are really into.


### Looking inside Question objects
In Geomatch the questions are rendered in HTML based on the Question class. Here you can see a single instance of a question:
```javascript
const Question1 = new Question(
  "Tea or coffee?",
  "☕",
  new Answer("tea", uk, japan, poland, russia, china, indonesia, india, egypt),
  new Answer("coffee",czechia,germany,finland,italy,greece,israel,uae,usa,canada,mexico,brazil,australia,uganda)
);
```
Each question has 3 parameters:
1. description
2. avatar
3. answers

Descriptions are just string parameters. The answers however, are the instances of Answer class which has its own parameters:
* name
* and countries

The number of answers(and countries in every answer) is not restricted- I used rest operator to allow undifined number of them: 
```javascript
class Question {
  constructor(description, avatar, ...answers) {
    this.description = description;
    this.avatar = avatar;
    this.answers = [...answers];
  }
}
```
As you can see, in Question class third parameter is a rest parameter. The class is defined in questions.js file.
