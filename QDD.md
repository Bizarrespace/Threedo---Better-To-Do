Question driven development

User stories:
Add the "duration* (enterable), and a "date added" and "date completed" (both display, not entered) components.

## Current progress
- Learn about how hooks are working as well
- ~~Learn about react navigation and how the containers work~~
- https://reactnavigation.org/docs/hello-react-navigation
- https://www.phind.com/agent?cache=cllym5ax70003mw08dynurjhb

## Display Tasks on Front Page
- ~~Show date added~~
    - Just have to add date() which takes care of the current time and day added
   
## Create a component to display a single task in list
- If a task is clicked, has its own page
  - ~~How would you make another page in react native?~~
      - Using the navigation component, which uses a stack structure to take care of the screens 
  - ~~How would you transition to that other page?~~
      - On the button, when you click on it, do props.navigation.navigate to whatever screen that you want 
  - Once you get to that page you would just render the task that you clicked
    - ~~How would you know what task you clicked? Like how would you get the id of that task~~
        - Pass the id and name and what it to that navigate function
    - Once you have that id then you just render the task like the main page 
- Page also has Done button to go back to the list of tasks
  - ~~How would you get a button to transfer back to a page that you want~~
      - Back button already made by the container, can change what it says 
- Edit button, launches another page where you can edit the task
  - Same questions of going to another page with that task id
  - How would you edit the task to change the text or the due date?
## "Add Task" button on Front Page, entry form on another page
- The button should take to another page, where you could just reuse the adding logic we already have for switching pages
- Once added you have to go back to the main page
## "Show Completed" toggle on front page
- Show completed tasks, incl date completed, if set
- How would you store the tasks that have been completed?
- Once you know how to store you just render the ones that have been completed instead of the tasks that are right now
## Do a bit of styling.

