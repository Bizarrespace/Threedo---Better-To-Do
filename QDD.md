Question driven development

User stories:
Add the "duration* (enterable), and a "date added" and "date completed" (both display, not entered) components.

## Display Tasks on Front Page
- Show date added
  - If we wanted to add due date instead of our length how would we go about doing this?
    - Would have to be able to let user add another text that would reprsent due date
    - How would you add mulitple fields to an input? Can you even put multiple fields
      - Once we do have the two entries, then we can just display the date like length
   
## Create a component to display a single task in list
- If a task is clicked, has its own page
  - How would you make another page in react native?
  - How would you transition to that other page?
  - Once you get to that page you would just render the task that you clicked
    - How would you know what task you clicked? Like how would you get the id of that task
    - Once you have that id then you just render the task like the main page 
- Page also has Done button to go back to the list of tasks
  - How would you get a button to transfer back to a page that you want
- Edit button, launches another page where you can edit the task
  - Same questions of going to another page with that task id
  - How would you edit the task to change the text or the due date?
## "Add Task" button on Front Page, entry form on another page
- The button should take to another page, where you could just reuse the adding logic we already have
- Once added you have to go back to the main page
## "Show Completed" toggle on front page
- Show completed tasks, incl date completed, if set
- How would you store the tasks that have been completed?
- Once you know how to store you just render the ones that have been completed instead of the tasks that are right now
## Do a bit of styling.

