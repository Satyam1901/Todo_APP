
# MERN Stack TODO App

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the MERN Stack TODO App! This is a simple and beautiful TODO application built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to create, read, update, and delete their to-dos, making task management easy and efficient.

## Features

- Create new to-do items
- Read all to-do items
- Mark to-do items as completed
- Responsive design for all devices

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

## Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/mern-todo-app.git
    cd mern-todo-app
    ```

2. Install dependencies:

    ```sh
    # For the backend
    cd backend
    npm install

    # For the frontend
    cd ../frontend
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `backend` directory with the following content:

    ```env
    MONGO_URI=your_mongodb_uri
    ```
4. Start the development servers:

    ```sh
    # In the backend directory
    npm run dev

    # In the frontend directory
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Create a new to-do item by entering a title and description.
3. Mark items as completed by clicking the "Mark as Complete" button.
4. Edit or delete existing to-do items using the respective buttons.

## API Endpoints

- **GET /api/todos**: Get all to-dos
- **POST /api/todos**: Create a new to-do
- **PUT /api/todos/:id**: Update a to-do
- **DELETE /api/todos/:id**: Delete a to-do

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Happy coding! ✨
