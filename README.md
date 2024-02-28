
# BlogZ - Social Media Platform

Welcome to BlogZ, a social media platform designed to empower users to share their stories through writing. BlogZ provides essential functionalities such as user authentication, profile management, story creation, reaction to stories, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

BlogZ is a web-based application built to facilitate the sharing of stories and experiences among users. With features like user authentication, profile management, and story creation, BlogZ aims to provide a seamless and engaging platform for content creators and readers alike.

## Features

- **User Authentication**: Secure login and signup functionalities to authenticate users.
- **Profile Management**: Users can manage their profiles, update information, and upload profile pictures.
- **Story Creation**: Users can write and publish their stories with rich text formatting options.
- **Reacting to Stories**: Users can react to stories by liking or commenting on them.
- **Dashboard**: A personalized dashboard for each user to view their posts, reactions, and interactions.
- **Logout**: Securely log out from the application to ensure account safety.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- Node.js and npm (Node Package Manager)
- MongoDB
- Git

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/blogz.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd blogz
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   MONGODB_URI=<your-mongodb-uri>
   SECRET_KEY=<your-secret-key>
   ```

   Replace `<your-mongodb-uri>` with your MongoDB connection URI and `<your-secret-key>` with a secret key for JWT token generation.

5. **Run the Application**:

   ```bash
   npm start
   ```

6. **Access the Application**:

   Open your web browser and navigate to `http://localhost:3000` to access BlogZ.

## Usage

- **Signup/Login**: Users can sign up for a new account or log in with existing credentials.
- **Profile Management**: Users can update their profile information and upload a profile picture.
- **New Post**: Users can create and publish new stories with rich text formatting options.
- **Reacting to Story**: Users can react to stories by liking or commenting on them.
- **Logout**: Users can securely log out from the application.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
