# Node.js TypeScript Template

This repository serves as a robust template to quickly start developing a REST server using Node.js with Express in TypeScript. Designed to provide a solid starting point, the template includes essential configurations and dependencies that allow you to focus on implementing your own features right from the start.

## Features

- **TypeScript Project Structure**: Utilizes TypeScript for safer and more efficient development.
- **Development and Production Scripts**: Includes scripts for local development and production builds.
- **Express Framework**: Configured with Express, a minimalistic and flexible web application framework for Node.js.
- **Environment Variables Management**: Integration with `dotenv` and `env-var` for secure configuration management.
- **Live Reload in Development Mode**: When working in development mode, our project supports live reloading. This feature ensures that any changes you make to the codebase are immediately applied.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/JoeCode13/express-ts-template.git
   cd express-ts-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Local Development**

   To start the server in development mode with automatic reloading:

   ```bash
   npm run dev
   ```

4. **Build for Production**

   Compiles the project to JavaScript:

   ```bash
   npm run build
   ```

   Then, start the built server:

   ```bash
   npm start
   ```

## Scripts

- `npm run dev`: Runs the server in development mode with automatic reload.
- `npm run build`: Cleans the distribution folder and compiles the project to JavaScript.
- `npm start`: Runs the built server.

## Dependencies

- **Express**: Web application framework.
- **dotenv**: Loads environment variables from `.env`.
- **env-var**: Environment variable management.

## Project Structure

This project is structured to support a clean architecture, ensuring separation of concerns and making it easier to manage and scale. Below is a breakdown of the key directories within the `src` folder and their intended purposes:

- `src/`
  - `app.ts`: The entry point of the application.
  - `config/`: Contains configuration files, including environment variable setups and other configuration-related utilities.
    - `envs.ts`: Manages environment variables using `dotenv` and `env-var`.
    - `index.ts`: Serves as a centralized export point for configuration settings.
  - `data/`: Intended for data access layers, models, and any logic related to data storage and retrieval.
    - `index.ts`: Centralizes data-related exports and configurations.
  - `domain/`: The heart of the application's business logic. This directory contains the rules, models, and business processes of your app.
    - `index.ts`: Aggregates and exports domain models and business logic.
  - `presentation/`: Manages the communication with the external world (clients, external services). It handles HTTP requests, routing, and controllers.
    - `auth/`: Specific to authentication features, including controllers and routes for authentication.
      - `controller.ts`: Manages authentication-related request handling.
      - `routes.ts`: Defines authentication-related routes.
    - `routes.ts`: Centralizes application route definitions.
    - `server.ts`: Sets up and starts the HTTP server, including middleware configurations.

### Purpose of Key Directories

- **`domain/`**: This directory is central to the application, holding all the business logic. It's designed to be agnostic of the web framework or any external libraries used, focusing purely on the business rules of your application.

- **`presentation/`**: This directory acts as the interface between your application and the outside world. It contains everything related to handling and responding to HTTP requests, such as controllers, routes, and server configuration. This separation ensures that the business logic (domain) remains isolated from how the outside world interacts with the application.

## API Endpoints

This template comes with two pre-configured API endpoints that are ready to use:

- `GET /api/users` - Retrieves a list of users.
- `GET /api/users/2` - Retrieves the details of the user with ID 2.

These endpoints serve as examples and starting points for developing your own API functionality.

## Developed by

[Joel Luna](https://github.com/JoeCode13) - Feel free to reach out to me for any questions or suggestions.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
