# Intuji Frontend Assignment - Yubin Karki

This repo contains the solution for the assignment for Frontend developer role.  
Uses mantine UI components and remixicon. Project initialized using Vite.  
Using external css for styling. But, there are some instances of inline styles to save time.  

## Run Locally

- Run `nvm use` to change to the preferred node version
- Run `npm i` and then `npm run dev` to start a local server

## Solution Walkthrough

- The `App.jsx` acts as the home screen where our component is going to reside
- The `components` directory has the main `Contacts` component
- All the components specific to the `Contacts` component reside inside the contacts directory
- The `CustomControl`, `CustomInput` and `UserProfileCard` are all inside the `Contacts` directory
- The data is fetched from a local json file with a slight delay (1s) to simulate a server request  

## App Functions

- View list of users and active status
- View members and team
- Search users
