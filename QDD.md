Question driven development

User stories:
Add the "duration* (enterable), and a "date added" and "date completed" (both display, not entered) components.

## Current progress
Add task page works, details page works, edit page works
   
## Create a component to display a single task in list
- ~~Edit button, launches another page where you can edit the task~~
  - ~~How would you give the same navigation functionality to this page? Like you click a button and it moves you to another page~~
## "Add Task" button on Front Page, entry form on another page
- ~~The button should take to another page, where you could just reuse the adding logic we already have for switching pages~~
- ~~Once added you have to go back to the main page~~
  - ~~Reuse the logic for setting tasks, but on a diffeernet page make~~
## "Show Completed" toggle on front page
- Show completed tasks, incl date completed, if set
- How would you store the tasks that have been completed?
- Once you know how to store you just render the ones that have been completed instead of the tasks that are right now
- Have another property in tasks that sets completed to false at first, then button to just filter all the tasks to look for completed
  - The remove button also makes the removed property true
## Do a bit of styling.

