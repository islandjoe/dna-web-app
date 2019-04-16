## Dev Journal:

- [Day 1](documentation/tech-diary/Day-01.md)
- [Day 2](documentation/tech-diary/Day-02.md)
- [Day 3](documentation/tech-diary/Day-03.md)
- [Day 4](documentation/tech-diary/Day-04.md)
- [Day 5](documentation/tech-diary/Day-05.md)
- [Day 6](documentation/tech-diary/Day-06.md)


**Task:** Create a DNA self-service login page/view and subscription listing.
 
**Functionality:** 
- The login page/view accepts an _user id_ (email) and _password_ and has a _submit button_. 
- The login checks for incorrect email-format and incorrect id/password. 
- The subscription page lists the customer subscriptions
- Be able to click on the subscriptions to get details on the subscriptions (_user name_, _phone number_ for mobile and _address_ for broadband subscription, _subscription type_, _monthly price_). 
- The list should be _searchable_ either by subscription type by text list or using facets. 
- When a subscription is selected the page should show the relevant subsription. 
- The id/password and subscriptions is hard coded. 
- Test cases for the code.
 
**Additional requirements:**
- No `create-react-app` to be used. Application configured from scratch.
- ~~For web application it should also **support older browsers** at least to some degree. It can have some finer features missing but it should not break with older browsers. We will test it also on **IE11**.~~
 
**Bonus tasks:**

• ~~Create a back-end REST API that returns the items using Node.JS (or other technology).~~ (Not enough time)
• Selected pages are responsive (resizes to desktop, tablet and mobile views).
• Tests
