# Yumpoint - Namaste React Project

Yumpoint is a React-based food ordering web application built as part of the **Namaste React** course. It integrates React Router, Redux, Context API, and custom hooks to provide a seamless user experience for browsing restaurants, viewing menus, and managing a shopping cart.

## Features

- 🍽️ **Restaurant Listing** - Fetch and display restaurants using Swiggy API.
- 📄 **Restaurant Menu** - View menu items of a selected restaurant.
- 🔍 **Search & Filter** - Search restaurants dynamically.
- 🛒 **Cart Management** - Add, remove, and clear items in the cart using Redux.
- 🏷️ **Offers Display** - Show offers using Higher Order Components.
- 🌐 **Online Status Checker** - Custom hook to check internet connectivity.
- 🏃‍♂️ **Lazy Loading** - Code-splitting for performance optimization.
- 🎭 **Shimmer Effect** - Skeleton loading for a better UX.
- 🧪 **Testing** - Unit tests using Jest & React Testing Library.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/prasad0022/namaste-react-yumpoint.git
   ```
2. Navigate to the project directory:
   ```sh
   cd prasad0022-namaste-react-yumpoint
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

```
prasad0022-namaste-react-yumpoint/
├── README.md
├── babel.config.js
├── index.html
├── jest.config.js
├── package.json
├── styles.css
├── .parcelrc
└── src/
    ├── App.js
    ├── __tests__/
    │   ├── About.test.js
    │   ├── Header.test.js
    │   └── mockTest.test.js
    ├── components/
    │   ├── About.jsx
    │   ├── Body.jsx
    │   ├── BusinessCard.jsx
    │   ├── CartItem.jsx
    │   ├── CartPage.jsx
    │   ├── Contact.jsx
    │   ├── ErrorPage.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── ResCard.jsx
    │   ├── ResCategory.jsx
    │   ├── ResMenu.jsx
    │   ├── ResMenuPage.jsx
    │   ├── Search.jsx
    │   └── ShimmerCard.jsx
    └── utils/
        ├── UserContext.js
        ├── constants.js
        ├── mockData.js
        ├── mockTest.js
        ├── useOnlineStatus.js
        ├── useResMenu.js
        ├── useRestaurants.js
        └── store/
            ├── appStore.js
            └── cartSlice.js
```

## Usage

- Visit the homepage to see available restaurants.
- Click on a restaurant to view its menu.
- Add items to the cart.
- Test components using Jest & React Testing Library.

## Technologies Used

- **React** - Component-based UI development.
- **React Router** - Client-side routing.
- **Redux Toolkit** - State management.
- **Tailwind CSS** - Styling.
- **Jest & React Testing Library** - Unit testing.
- **Parcel** - Bundling.

## Contributing

Feel free to fork the repo, create a branch, and submit pull requests. Any contributions are welcome! 😊
