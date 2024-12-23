# Employee Polls Project

## Project Overview

The **Employee Polls** application is an internal tool designed for company employees to improve collaboration and transparency. Employees can create polls with two proposed solutions, vote on polls, and see which solutions receive the most votes. Additionally, the application features a leaderboard to encourage engagement by ranking employees based on their participation.

The HR department incentivizes usage by awarding prizes each quarter to the top participants who create and answer the most polls.

### Key Features:
- Employees can create polls with the format: "Would you rather [option A] or [option B]?"
- Employees can view polls they have answered or not answered.
- Results of polls, including the number and percentage of votes for each option, are displayed.
- Leaderboard ranking employees by the number of polls created and answered.
- Secure login functionality.

---

## Why This Project?
This project reinforces your understanding of **React** and **Redux** while offering creative flexibility to add functionality. It helps you:
- Improve state predictability.
- Define clear rules for interacting with the Redux store.
- Differentiate between state managed by Redux and React components.
- Write unit tests to ensure code reliability.

---

## Getting Started

### Development Options:
1. **Workspace:** Develop using your preconfigured Workspace in the Udacity Classroom.
2. **Local Development:** Clone the repository and develop on your local machine.

### Starter Code:
The starter code includes a `_DATA.js` file that acts as a mock database. Key tasks:
- Update the `avatarURL` field for each user to include an avatar.
- Build the React/Redux front end using the provided starter code.

---

## App Functionality

### Authentication:
- Users can log in by selecting a user from a dropdown menu or through account creation.
- Information about the logged-in user is displayed.
- Unauthorized navigation redirects to the login page.
- Users can log out and log back in.

### Poll Management:
- **Homepage:**
    - Displays answered and unanswered polls, sorted by creation date (most recent first).
    - Unanswered polls are shown by default.
- **Poll Details:**
    - Available at `/questions/:id` route.
    - Includes the question, creator's avatar, and voting options.
    - Answered polls show vote counts and percentages for each option.
    - Users can vote only once per poll, and votes cannot be changed.
- **Create Poll:**
    - Available at `/new-polls` route.
    - Allows users to create a new poll with two options.
    - After submission, redirects to the homepage and categorizes the new poll appropriately.

### Leaderboard:
- Available at `/leaderboard` route.
- Displays:
    - User’s name and avatar.
    - Number of polls created.
    - Number of polls answered.
- Ranks users based on the total of polls created and answered (highest first).

### Navigation:
- Accessible pages include the leaderboard, poll details, and poll creation form.
- Navigation can be done via links or direct URL entry.

### Error Handling:
- Displays a 404 page for invalid poll URLs.

---

## App Architecture

### State Management:
- Most application state is managed by **Redux**.
- State relevant to specific components can reside in **React state**.
- All updates are triggered by dispatching action creators.

### Best Practices:
- Avoid direct API calls in component lifecycle methods.
- Organize code into reusable, modular components.

---

## Unit Testing

### Required Tests:
1. **_DATA.js Tests:**
    - Test `_saveQuestion` with valid and invalid data.
    - Test `_saveQuestionAnswer` with valid and invalid data.
2. **Snapshot Test:**
    - Test UI consistency for at least one component.
3. **DOM Test:**
    - Use `fireEvent` to simulate user interactions and verify UI updates.

### Additional Suggestions:
- Verify login page functionality (fields and error handling).
- Validate leaderboard displays correct rankings.
- Ensure poll results display accurate percentages.
- Confirm navigation bar contains all expected links.

---

## Development Tips
- Follow the template and planning stages discussed in the Udacity Chirper Project.
- Write unit tests during development to catch bugs early.
- Ensure your Redux store is the single source of truth.

---

## How to Run the Project

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Run tests:
   ```bash
   npm test
   ```

---

## Conclusion
The **Employee Polls** project not only enhances technical skills in **React** and **Redux** but also encourages creative problem-solving and effective state management. With robust functionality and thorough testing, this application will foster greater collaboration and engagement within your organization.

