# Task Manager Web App

Welcome to the Task Manager web app! This application allows users to manage their tasks by adding, marking, and deleting tasks. It also features a login/signup system along with dark and light mode options for a personalized user experience.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux.js Toolkit
  - Redux Persistence
  - Material UI
  - React Router DOM
  - Formik
  - Yup

- **Backend:**
  - bcrypt
  - cors
  - dotenv
  - express
  - helmet
  - jsonwebtoken
  - method-override
  - mongodb
  - mongoose
  - morgan

## Features

- **Task Management:**
  - Add tasks: Users can add new tasks to their list.
  - Mark tasks: Users can mark tasks as completed.
  - Delete tasks: Users can delete tasks from their list.

- **User Authentication:**
  - Signup: New users can create an account to access the app.
  - Login: Existing users can log in to their accounts securely.

- **User Preferences:**
  - Dark Mode: Users can switch to a dark mode interface for reduced eye strain in low-light environments.
  - Light Mode: Users can switch back to a light mode interface for standard viewing.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the required environment variables (e.g., database connection URI, JWT secret, etc.).

5. Run the development server in server:
   ```bash
   node index.js
   ```

6. Run the React server:
    ```bash
   npm run dev
   ```

6. Access the app in your browser at `http://localhost:3000`.

## Additional Notes

- This project utilizes Redux for state management, providing a centralized store for managing application state efficiently.

- Redux Persistence ensures that user data persists across sessions, enhancing the user experience by retaining task lists and preferences.

- The backend is built with Express.js and MongoDB, providing a robust and scalable foundation for managing user authentication and task data.

- Material UI is used for designing the user interface, offering a sleek and intuitive design that enhances usability.

## Contributors

- [Sagar Kapoor](https://github.com/SagarKapoorin)
---
