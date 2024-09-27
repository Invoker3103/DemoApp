# Assignment: Data Fetching and Filtering App

This assignment involves fetching data from a given URL, filtering the data based on gender, and prioritizing it by age. It also includes additional enhancements like a search bar, dark/light theme toggle, scroll-to-top functionality, and a custom logo update. The improvements aim to create a better user experience while keeping the app modular and scalable.

## Features Implemented

1. **Data Fetching & Filtering**:

   - Fetched data from the provided URL and categorized it into male and female data.
   - Implemented sorting for female data to display younger individuals at the top.

2. **Search Bar**:

   - Added a search bar that allows users to filter data in real time.

3. **Dark/Light Theme Toggle**:

   - Integrated a theme switcher to toggle between dark and light modes for better user experience.

4. **Scroll-to-Top Button**:

   - A scroll-to-top feature was implemented for better navigation on long pages.

5. **App Logo Update**:
   - Updated the app's logo to the Codeatsu logo to represent our organization in the assignment.

---

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### Step 2: Install Dependencies

Before running the application, ensure you have Node.js installed. Then, run the following command to install the project dependencies:

```bash
npm install
```

### Step 3: Run the Application

Once dependencies are installed, use the following command to run the app in development mode:

```bash
npm start
```

### Step 4: Build for Production

To create a production build, use:

```bash
npm run android
```

---

## Usage

### Viewing the Project

1. **Homepage**:

   - On the homepage, data is automatically fetched and displayed.
   - Female data will appear first, sorted by age (youngest first).
   - The app is responsive and works on multiple screen sizes.

2. **Filtering and Searching**:

   - Use the search bar at the top to filter the data by name.
   - The results will update dynamically based on the input.

3. **Dark/Light Mode**:

   - Toggle between dark and light themes using the switch in the header.

4. **Scroll-to-Top**:
   - When scrolling down, a "Scroll to Top" button will appear in the bottom right corner for quick navigation.
