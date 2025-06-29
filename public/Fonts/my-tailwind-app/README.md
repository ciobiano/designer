# My Tailwind App

This project is a Tailwind CSS application that integrates the Satoshi font family for a modern and stylish design.

## Project Structure

```
my-tailwind-app
├── public
│   ├── Fonts
│   │   ├── OTF
│   │   ├── TTF
│   │   └── WEB
│   │       ├── css
│   │       │   └── satoshi.css
│   │       └── fonts
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── styles.css
│   └── index.tsx
├── tailwind.config.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-tailwind-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

Your application will be available at `http://localhost:3000`.

## Custom Fonts

The Satoshi font family is included in the project. The font files are located in the `public/Fonts` directory, and the CSS rules for the font are defined in `public/Fonts/WEB/css/satoshi.css`. 

To use the Satoshi fonts in your styles, ensure that you import the `satoshi.css` file in your main stylesheet (`src/styles.css`).

## Tailwind CSS

This project uses Tailwind CSS for styling. You can customize the Tailwind configuration in the `tailwind.config.js` file.

## License

This project is licensed under the MIT License.