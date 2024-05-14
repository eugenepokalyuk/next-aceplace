# Organization Info Finder

This project is a Next.js application that allows users to search for organizations by their tax identification number (INN) and display detailed information about the organization. The data is fetched from the DaData API.

## Features

- Search organizations by INN
- Display detailed information about organizations
- Responsive design
- Modal confirmation before redirecting to external maps
- Error handling for empty search input and API errors

## Tech Stack

- Next.js
- React
- TypeScript
- CSS/SCSS
- DaData API

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [rep url]
   cd organization-info-finder
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Create a .env.local file in the root of the project and add your DaData API token:
    ```bash
    NEXT_PUBLIC_DADATA_API_TOKEN=your_api_token
    ```
4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
Open http://localhost:3000 with your browser to see the result.

# Project Structure
```
.
├── components
│   ├── Modal.tsx        # Modal component
│   ├── SearchForm.tsx   # Search form component
├── pages
│   ├── _app.tsx         # Custom App component for global styles
│   ├── index.tsx        # Home page with search form
│   ├── info
│       ├── [inn].tsx    # Dynamic route for displaying organization info
├── styles
│   ├── global.css       # Global CSS styles
├── public
│   ├── favicon.ico      # Favicon
│   ├── vercel.svg       # Vercel logo
├── .gitignore           # Git ignore file
├── package.json         # Package configuration and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project description
```

## Usage
### Searching for an Organization
1. Enter the INN in the search field on the home page.
2. Click the search button.
3. If the INN is valid, you will be redirected to a page displaying detailed information about the organization.

### Viewing Organization Information
The organization information page displays the following details:
- Name
- Address
- KPP
- Management (Name and Position)
- INN
- OGRN
- OKPO
- OKATO
- OKTMO
- OKOGU
- OKFS
- OKVED
- Organizational and Legal Form (OPF)
### Redirect to External Maps
- Click on the address to open the modal confirmation.
- If you click "Yes", you will be redirected to Yandex Maps with the address pre-filled.
