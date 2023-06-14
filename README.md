## Getting Started

First make sure that you are installing nodejs on your system

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Overview

The project is built using **Next.js**, the latest version of the framework. It is designed to be responsive and compatible with different screen sizes, including tablets, mobile devices, and laptops. The application utilizes **Redux** for state management, providing a centralized store for managing data and state changes.

## Documentaion

Every File has detailed documntation that describes all ins and outs of the code

## Folder Structure

The project follows a specific folder structure to organize its different components and resources. Below is an overview of the six main folders used:

1. **components**: This folder contains the application components. It holds all the reusable and custom components that make up the user interface.

2. **public**: The public folder contains static assets such as images and icons used within the application. These assets can be accessed directly from the frontend.

3. **styles**: The styles folder holds all the CSS files used for styling the components and layout of the application. It includes stylesheets that are specific to individual components as well as global stylesheets.

4. **redux**: The redux folder encompasses the logic for managing application state using Redux. It includes actions, reducers, and selectors that define how the state is modified and accessed throughout the application.

5. **utils**: The utils folder contains helper functions and constants that can be used across different parts of the application. These functions are reusable and provide common functionalities required by the application.

6. **service**: The service folder houses the data fetching functions and handles backend communication. It includes functions for fetching data from external APIs or communicating with a backend server.

## Data Storage with Firebase

The project utilizes Firebase as the chosen data storage solution. Firebase provides an easy-to-configure backend service that allows for seamless data storage and retrieval. By leveraging Firebase, you can conveniently manage and store data without the need for complex backend setups.

Please note that the specific implementation details for integrating Firebase into the project are not provided in this README. For detailed instructions on how to configure and use Firebase, refer to the official Firebase documentation.

## Conclusion

This README provides a high-level overview of the project, highlighting the key technologies, folder structure, and data storage approach. It serves as a starting point for understanding the project's architecture and can help developers get familiar with the project's structure and organization.
