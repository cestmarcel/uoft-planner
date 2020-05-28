# Daily schedule planner
## Homework no. 5 | UofT Full Stack Coding

### 1. Summary
This is a simple daily schedule planner. Users can see timeslots for each business hour of the day and can enter an event for each timeslot. The slots are color-coded depending on the current time. The application is available under: https://marcelthiemann.com/uoft-planner

### 2. Features
#### 2.1 General user flow
Upon loading the applications, users are presented with a timeslot-based overview of their workday. In the header they find the current date. The main are of the application consists of editable timeslots where users can log events for their workday. The events are stored in local storage, so users can leave the application and re-visit the page throughout the day. Beneath the timeslots is a button that allows users to clear the schedule. The application also features a sticky footer.
![Screenshot of the application](https://github.com/cestmarcel/uoft-planner/blob/master/assets/screenshots/application.png)

#### 2.2 Color coding
![Screenshot of the color coded timeslots](https://github.com/cestmarcel/uoft-planner/blob/master/assets/screenshots/events.png)
The timeslots that represent the business hours of the day are color coded depending on the time of day the user accesses the application. Past events have a dark gray color, the event of the current hour are dark blue, and future events are light gray.
The user can enter an event by clicking on one of the timeslots. Only if the user actually enters an event name (aka anything different from the pre-filled "Open, click to edit") and hits the save-button, the event will be stored in the browser's local storage. 
A tooltip above the respective timeslots ensures that the user does not forget to click the save-button.
![Screenshot of the tooltip](https://github.com/cestmarcel/uoft-planner/blob/master/assets/screenshots/tooltip.png)

#### 2.3 Interface responding to cursor position
![UI reponse to cursor position](https://github.com/cestmarcel/uoft-planner/blob/master/assets/screenshots/planner.gif)

Some elements of the user interface resond if hovered. The time indicator changes color, the event name becomes bold, and the lock in the save-button opens while the button itself darkens. These features are supposed to help the user navigate the interface.
![Screenshot of the application](https://github.com/cestmarcel/uoft-planner/blob/master/assets/screenshots/color-code.png)

#### 2.4 After work view
If the application is being accessed outside business hours (after 6.59pm), a notification in the header will be displayed telling the user the current time and that all events are completed.
![Screenshot of the after work view](https://github.com/cestmarcel/uoft-planner/blob/master/assets/screenshots/after-work.png)

#### 2.5 Clearing the schedule
If the user decides to clear the schedule, they can do so by clicking the "Clear schedule" button on the bottom of the page. This triggers a modal used to make the user confirm their choice and to avoid accidental clearing of the schedule.
![Screenshot of the application](https://github.com/cestmarcel/uoft-planner/blob/master/assets/screenshots/modal.png)

### 3. External APIs, Libraries, and Frameworks 
- This application uses moment.js https://momentjs.com/ to access and format the current time to color code the event slots as well as display the current time in the "after work view". Documentation for moment.js is available under: https://momentjs.com/docs/
- jQuery https://jquery.com/ is being used for HTML document traversal. Documentation available under: https://api.jquery.com/
- This application also uses Bootstrap, utilizing responsive Styles and components. More information about Bootstrap is available under https://getbootstrap.com with documentation under https://getbootstrap.com/docs/4.5/getting-started/introduction/