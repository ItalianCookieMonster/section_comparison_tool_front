Here’s a draft of the README for your frontend repository:

---

# Precast Concrete Block Comparison Web App - Frontend

This repository contains the frontend implementation of the web application designed to compare different sections of retaining walls using precast concrete blocks. Users can generate detailed reports on costs, materials, and CO2 emissions based on various block configurations, and export these reports for their own projects or businesses.

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Useful Links](#useful-links)
- [Contact](#contact)

## Overview

The frontend is built using React with TypeScript, utilizing a modern component-based architecture. It provides a user-friendly interface for selecting block configurations, comparing sections, and generating reports. The app interacts with a Django-based backend via API calls.

## Technologies Used

- **React 18.3.1** - JavaScript library for building user interfaces
- **TypeScript 5.5.3** - For static type checking
- **Vite 5.4.1** - For fast builds and hot module replacement
- **React Hook Form 7.53.0** - For handling form validation and inputs
- **TanStack React Query 5.55.4** - For fetching, caching, and synchronizing server data
- **TailwindCSS 3.4.10** - For utility-first styling
- **Zod 3.23.8** - For schema validation
- **Axios 1.7.7** - For making HTTP requests
- **React Router DOM 6.26.1** - For handling routing
- **Vitest 2.0.5** - For unit testing
- **Radix UI** - For accessible, customizable UI components

## Setup and Installation

To get the frontend running locally, follow the steps below:

### 1. Clone the repository

```bash
git clone git@github.com:ItalianCookieMonster/section_comparison_tool_front.git
cd repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the necessary environment variables. For example:

```
VITE_API_URL=http://localhost:8000/api
```

Adjust the API URL based on your backend server.

## Running the Project

To run the frontend locally, use the following command:

```bash
npm run dev
```

This will start the development server, and the app will be available at `http://localhost:5173/`.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will generate the optimized production-ready files.

## Testing

The project uses `Vitest` for unit testing and `Testing Library` for component testing. To run tests, use:

```bash
npm run test
```

To run tests with the UI:

```bash
npm run test-ui
```

To check test coverage:

```bash
npm run coverage
```

## Useful Links

- [Database Schema](https://drawsql.app/teams/valentina-5/diagrams/section-comparison-tool) 
- [Figma Design](https://www.figma.com/design/mV7H0yoqPbrsKBMeVzv3vH/Wireframe-BlockCalculator?node-id=23-6674&t=ZMFFcyeQMrXhfIZ9-1) 
- [Flowchart](https://drive.google.com/file/d/15my32Zdf100SE88YOFgBbZMQrayNrGWT/view?usp=sharing)

## Contact

For inquiries, reach out via [LinkedIn](https://linkedin.com/in/your-linkedin-profile](https://www.linkedin.com/in/valentinatoni/ ).
