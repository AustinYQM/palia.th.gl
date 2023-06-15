export const VIEWBOX = "0 0 100 100";

export const ICONS = {
  altars: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    attribute: (attribute: string) => {
      switch (attribute) {
        case "Dexterity":
          return "#FFC107";
        case "Strength":
          return "#FF5722";
        case "Max Obols":
          return "#9C27B0";
        case "Intelligence":
          return "#3F51B5";
        case "Willpower":
          return "#4CAF50";
        default:
          return null;
      }
    },
    lineWidth: 3,
    path: "M21 0c4.79 9.35 5.13 6 14 7.19C42.53 8.2 42.8 12.44 49 4h2c1.55 2.11 3.24 4.73 6 5.34 2.34.52 5.45-1.41 8-1.95C71.56 5.99 76.5 9.18 78 0h3c-.04 11.39-1.87 9.92-9.72 15.81-1.81 1.36-3.69 3.52-5.28 5.37 9.44-2.45 10.34 1.67 14.99 0 3.05-.8 4.81-3.81 7.18-5.77C91.57 12.6 95.7 11.45 100 11c-2.33 4.06-4.94 4.67-7.03 8.09-2.33 3.8-3.48 12.96-11.97 15.15-4.18 1.45-6.42-.74-13 0 .76 3.88.86 4.61-2 7.76l-6-7-3.83 15 4.68 21 3.28 8.83L60 85l9-3c.11 6.18-3.23 6.71-8 10-2.52 1.74-6.89 4.95-10 5.09-2.7.12-4.85-1.64-7-3.02-5.35-3.43-10.9-5.42-12-12.07l9 3-4.11-5.26L40.06 71l5.61-23.96L40 36l-4 6c-3.88-2.33-3.97-3.72-3-8-7.67-.58-15.71 3.7-21.02-5.1-1.6-2.67-1.3-6.18-3.86-9.73C5.4 15.4 2.75 15.67 1 11c4.28.55 7.53 1.59 11 4.3 2.45 1.91 5 5.13 8 6.01 3.07.91 9.45-1.68 13-2.31-6.09-5.09-16.5-9.2-12-19Z",
    radius: 18,
  },
  cellars: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "m15 50-.83-33c-.42-5.45.6-6.56 5.83-7l1.17 23 1.62 10L22 56c-8.69-.16-15.51.61-17-10 6.11-.78 7.14-1.89 10 4Zm34-40c4.93.87 4.91 2.2 5 7v18l2 21h-8l1-46ZM11 20c-6.43-1.11-6.87-7.79 0-9v9Zm12.6-7.98c3.23-1.37 15.9-1.62 19.34-.59 4.67 1.39 4.44 5.97 2.46 7.55C43.83 20.23 39.98 20 38 20c-4.79.01-21.43 1.91-14.4-7.98ZM55 12h9v8c-7.8-.03-8.89.14-9-8ZM6 30c.22-6.25.8-6.91 7-6v6H6Zm41 0H32c-2.63-.01-8.05.6-8.55-3.04-.16-1.11.26-2.09 1.13-2.79C26.72 22.46 36.9 22.95 40 23c1.62.03 4.06-.04 5.4 1.02 1.74 1.38 1.53 4 1.6 5.98Zm8 0c.26-7.5 2.09-6.97 9-7v7h-9Zm-42 3.11.66 4.87c.44 12.06-16.41-2.41-4.61-4.87H13ZM44 44c-3.09 0-15.66.39-17.69-.6-2.92-1.43-2.96-7.48-.57-9.41C27.28 32.75 31.06 33 33 33c2.94-.01 11.14-.73 12.98 1.6 1.22 1.55 1.17 13.82.97 16.36-.09 1.14-.19 2.37-.94 3.3C44.4 56.25 40.33 55.99 38 56c-2.76.01-9.55.4-11.69-1.02-2.75-1.84-3.23-7.8 0-9.38 2.61-1.28 11.32.21 17.69-1.6Zm11.03-10c1.31-.22 3.61-.72 4.91-.51 5.95.94 5.16 12.05-1.82 10.06-2.51-.71-2.87-2.26-3.09-4.59V34Zm3.53 12.07c5.79-1.64 4.99 7.3 2.18 8.76-3.49 1.82-5.09-4.68-2.18-8.76ZM6 58h51c2.39 0 5.61-.13 7.83.7C68.65 60.13 79.35 71.53 83 74.83 88.61 79.91 95.48 84.6 98 92H24C19.66 82.65 6.73 72.69 6 58Zm5 3c-.29 3.49 5.97 11.95 8.14 15 2.78 3.9 5.4 8.28 9.86 10.43C33.67 88.68 43.56 88 49 88h42c-2.72-5.7-7.21-8.7-11.85-12.75C70.89 68.04 68.3 61.08 56 61H25c-5.93.07-8.19 1.6-14 0Zm45 9c1.93.02 4.17-.08 6 .6 5.04 1.85 12.23 8.99 13 14.4-2-.1-4.02-.12-5.91-.89C64.69 82.33 57.98 74.22 56 70Zm-1 15-4 .77c-11.12.46-5.53-11.43 1.59-4.46 1.16 1.15 1.65 2.32 2.41 3.69Z",
    radius: 13,
  },
  dungeons: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "M45 1.44C57.73-.2 72.47 7.08 80.33 17c5.59 7.05 5.56 10.38 7.06 12.85 3.12 5.14 11.77 1.75 9.44 7-1.1 2.48-4.92 3.59-6.6 7.19-.61 2.09-.2 8.35 0 10.96l-1.15 11 1.07 11v8c.97 4.01 6.2 10.07-4.15 10.91-3.43.27-9.13.06-8.28-4.93.32-1.85 2-3.66 2.25-5.98.43-4.05-2.39-10.53-6.99-11.13-4.07-.53-6.58 2.04-8.63 5.13-1.09 1.63-2.15 4.41-4.51 4.39-3.86-.02-4.28-6.08-8.31-7.28-3.39-1.01-7.59.47-9.9 3.02-1.23 1.36-2.53 4.28-4.65 4.28-3.7 0-3.5-6.36-9.98-7.26-8.46-1.17-9.03 6.52-7.59 12.85.45 1.97 2.12 4.96 1.72 6.77-.85 3.86-8.56 3.72-11.03 2.21-3.69-2.62-.55-7.71 0-11.98.18-4.75-1.47-10.21-2.11-15V55c.01-2.6.6-9.04 0-11-1.46-3.21-6.35-6.58-4.82-9.4 1.18-2.18 5.18-.85 8.25-4.75l6.34-13.83C23.19 8.15 35.88 3.2 45 1.44Zm-2.69 9.16c-3.3 2.78-2.33 7.32-2.31 11.4.04 7.33 2.23 16.27 11.94 11.99 1.6-.7 2.75-1.57 3.46-3.2 1.28-2.93 1.05-16.04-1-18.48-2.63-3.12-8.55-2.57-12.09-1.71ZM65 32.97c2.28.05 10 1.05 11.24 0 1.98-1.51.66-4.3 0-5.97-2.71-5.52-5.67-9.36-11.24-12v17.97ZM31 16c-4.35 2.47-12.47 11.46-11.14 16.69.77 3.01 8.67 3.46 10.54-.84.94-2.15.6-12.82.6-15.85Zm0 53V51c-.01-6.82.06-9.61-7.98-8.94-7.53.62-4.68 8.77-4.19 13.94.58 6.04-1.93 14.17 7.17 13.78l5-.78Zm9-27v16c.04 2.96.14 7.11 2.09 9.54 2.59 3.18 9.64 3.1 12.31 0 2.34-2.66 1.93-15.72 1.49-19.52-.22-1.97-.58-3.65-2.32-4.85C51.12 41.49 43.19 42 40 42Zm26.44.57C63.47 45.33 64.98 50.15 65 54c.05 10.78-1.53 12.95 7 15.16 1.51.33 3.2.71 4.71 0C79.56 67.99 79 63.57 79 61c.01-3.25.65-15.29-1.02-17.4-1.99-2.51-8.8-1.7-11.54-1.03Z",
    radius: 16,
  },
  alchemists: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "M45 40c1.61-7.67 13.92-25.06 18.9-32 2.59-3.61 7.24-8.12 11.79-4.4 2.75 2.25 4.06 8.14 2.87 11.4L62 43l-17-3Zm33-15c9.19-2.32 16.48 6.31 11.98 14.98-1.94 3.73-6.39 5.79-9.98 7.61-7.45 3.77-10.52 7.35-19 7.31H43l-7-1.69c-3.21-.45-5.86.2-9-1.14-1.68-.72-8.29-5.36-10-6.67-5.36-4.08-12.07-10.89-7.83-18.19 3.63-6.24 12.31-8.16 18.83-8.93 1.82-.21 10.08-.83 7.83 3.35-1.35 2.5-5.45 2.21-7.83 2.47-3.99.43-10.36 2.72-11.75 6.92-1.19 3.57 2.33 6.13 4.77 7.98 6.8 5.17 7.95 8.87 16.98 9.15h21c3.47-.5 10.62-4.21 14-5.9 3.09-1.55 10.76-4.92 10.47-9.07-.16-2.25-3.13-3.45-5.47-8.18ZM11 46c7.71 2.62 13.19 10.48 18.04 11.69l6.96.52 7 1.68h20c12.24-.1 10.96-6.77 23-7.89-1.18 7.22-8.9 19.18-15.04 23.16-4.41 2.86-19.64 6.07-24.96 5.72-4.14-.27-16.49-3.51-20-5.72-4.53-2.85-5.16-5.04-7.86-9.07l-3.98-5.26C12.2 57.35 11.09 50.03 11 46Zm49 36.67c7.03.62 8.54 7.24 4.69 10.1-3.62 2.7-16.95 5.44-21.69 5.14-2.63-.17-14.78-3.35-16.43-4.92-2.36-2.24-1.49-7.19 1.66-8.3 1.75-.62 8.64 1.21 11.77 1.3 17.84.48 7.95-.47 20-3.32Z",
    radius: 18,
  },
  healers: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "M27 16.48c5.57-.27 7.81.97 12 4.61 2.18 1.9 5.92 6.1 9 5.97 3.78-.17 9.18-7.43 15-9.83 5.91-2.44 18.37 1.35 22.5 6.03 2.61 2.95 3.38 6.93 3.48 10.74.44 15.88-10.24 24.67-22.26 33.2l-6.71 4.21c-5.69 4.48-7.99 11.39-11.94 11.39-2.57 0-11.28-10.22-14.07-12.41l-7-4.78L11.99 51.9c-5.98-8.59-7.81-23.28 1.05-30.6 3.57-2.95 9.47-4.06 13.96-4.82ZM27 22c-8.56.5-12.23 3.94-14.55 12-.86 3.01-1.61 4.82-.8 8 .56 2.18 2.58 6.12 3.98 7.87C18.67 53.66 29.53 62.69 34 64c-1.34-4.77-.94-5.84-6-7v-4l-5-1 2-5-6-4 2-3-3-3 5-2-5-2v-2l7-1-2-4 4-4Zm34 43c7.62-2.43 20.38-14.43 23.03-22 3.56-10.2-5.1-20.29-15.03-21l5 4-2 4 6 1v2l-5 3 6 3-6 1 4 3-1 4-6-1 3 6-6 1 1 4-5 1-2 7Zm-7-30H43c1.89 6.79 4.21 12.01-6 7v11l8-3-1 10h9c-4.25-8.67-1.34-10.06 7-8l-1-10-3 1.44c-8.33 3.03-3.3-5.45-2-8.44Z",
    radius: 18,
  },
  jewelers: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "M21 10h56c-1.39 6.87-3.45 11.86-11 12H39c-2.98 0-9.24.44-11.68-1.02-3.49-2.1-5.55-7.19-6.32-10.98Zm-5 4c8.34 7.35 8.44 16.43 4 26-3.85-.9-13.31-3.61-14.13-8.09C5.24 28.42 13.67 17.02 16 14Zm64 0c5.65 1.74 8.7 7.3 11.96 12 1.21 1.75 3.13 4.27 1.91 6.49-.84 1.53-3.34 2.29-4.87 2.84L75 40c-4.44-14.51-.81-13.94 5-26Zm-8 27H33c-2.19 0-6.52.37-7.91-1.6-1.24-1.68-.37-4.56 0-6.4 1.43-6.52.97-7.87 7.91-8h38l1 16ZM5 38c4.58.49 5.89 1.18 10 3.18C25.38 46.22 25.26 50.24 29.27 60c1.88 4.57 3.93 9.1 4.73 14-5.27-2.61-7.18-6.51-10.8-11C18.45 57.12 7.75 44.44 5 38Zm64 7 23-6c-1.93 6.77-15.89 23.6-20.88 30-3.2 4.09-6.05 8.38-11.12 10 .98-11.96 5.79-22.63 9-34Zm-40 0h36l-9.02 33C54.74 82.68 53.9 88.3 49 90l-6.56-8.04L34.87 63 29 45Z",
    radius: 18,
  },
  occultists: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 1.5,
    path: "M48.35 3.07c7.1-1.78 8.46 11.91 3.12 14.88-3.24 1.81-6.07-2.25-6.78-4.95-1.02-3.9.94-7.36 3.66-9.93ZM11 16.7c5.51-1.25 17.15-1.51 21.94 1.64 4.72 3.11 3.91 6.29 7.28 9.35C43.4 30.56 48.01 30.07 52 30c11.74-.22 7.36-7.02 15.04-11.77C71.29 15.59 76.21 15.98 81 16c12.58.06 18.68 7.52 17.91 20-.45 7.28-4.14 15.07-11.91 16.66-5.38 1.1-10.16-1.37-14.2 3.49-1.73 2.07-5.01 8.18-5.22 10.85-.27 3.5 1.98 7.39 2.28 11 .67 8.1-5.01 16.98-12.86 19.35-2.33.71-5.56.71-8 .63-2.9-.08-4.31-.24-7-1.46C33.77 92.77 30.58 85.77 31.09 77c.41-7.08 3.32-9.12-.72-16-1.75-2.97-4.03-6.15-7.37-7.4-3.64-1.36-7.45.49-12-2.34-13.58-8.44-13.03-28.54 0-34.56ZM33 29c-1.43-2.88-2.15-4.04-5.02-5.77-6.92-4.2-16.29-1.52-19.96 5.77-2.93 5.82-.31 15.35 6 17.99 2.77 1.17 6.02 1 8.98 1.01-1.27-2.95-7.44-13.86-7.1-15.94.84-5.22 13.21-3.49 17.1-3.06Zm44 19c4.87-.02 8.79.22 12.53-3.53C98.86 35.12 91.54 19.69 78 21.2c-4.45.5-7.46 3.38-11 5.8v2l17 1-7 18ZM35 35H23c.68 2.7 2.12 7.75 5.17 8.66 4.41 1.32 6.41-5.63 6.83-8.66Zm25 0H40c-.69 9.82-6.6 13.05-6.91 17-.11 1.45.53 2.75 1.18 4 5.27 10.16 9.9 2.87 16.73 3.36L63 62l4.84-11-4.35-7L60 35Zm17 1H65c2.09 4.81 2.8 6.64 7 10l5-10ZM58 67c-7.65-1.98-8.47-2.65-16 1l8 11c4.51-3.46 6.56-6.5 8-12Zm-20 5c-1.09 2.76-1.1 5.04-.98 8 .7 18.06 26.93 17.07 27.35-1 .06-2.58-1.13-4.84-2.37-7-1.67 3.59-8.38 13.85-12.99 12.66-3.59-.92-8.85-9.5-11.01-12.66Z",
    radius: 20,
  },
  stableMasters: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "m50 3 17 10v5H42v3c4.1 0 19.11.43 22-.59 2.31-.82 4.84-3.01 7-4.39 2.22-1.4 8.03-6.08 10.4-4.28 4.05 3.07-1.18 9.89-1.4 16.26 8.87-3.04 7.72 4.72 9.29 11 2.15 8.6-.88 13.52-.88 17 0 5.23 4.38 14.04 1.39 23.82C87.42 87.6 79.41 83.73 78 75h-3l2 7c-9.72-1.59-5.55-7.31-7.88-14-4.29-12.36-4.73-8.65-8.12-15l-3-7-1 5-5 1c3.26 3.54 4.22 4.18 5 9l-9-3 7.99 9.09L57.3 76l2.1 9-4.4 15c-1.9-.15-3.12-.09-4.91-1.01L35 87.25c-5.36-4.2-14.48-8.68-18.11-14.22-5.41-8.27-2.75-14.51.92-22.45 2.04-4.41.56-5.12 4.75-11.49C24.76 35.74 36.44 24.36 40 21c-11.84 3.83-16.89 13.1-22.75 23.42-3.89 6.87-2.62 9.41-4.82 11.86C9.55 59.48 4.89 59 1 59c.78-9.9 7.33-6.54 10-15-3.88-.89-4.32-1.04-5-5 5.96-2.03 8.64-5.65 13-10l-7-1c3.31-6.53 7.61-6.37 14-8l-4-7 6.91-2.05L39 13l-4-8c6.93.24 7.98 1.99 14 5l1-7Zm33 20c2.91-5.67 8.9-7.79 15-8-.21 6.64-4.18 10.17-10 13l-5-5Zm-5 19h-2v6h2v-6Zm7 31c-1.63-1.83-1.66-1.76-4-1l4 1Z",
    radius: 18,
  },
  waypoints: {
    color: "#7bdbe7",
    heighlightColor: "#93f4ff",
    lineWidth: 1,
    path: "M47.18 9.02c12.6-4.51 11.64 7.32 16.13 11.29L72 25.52C81.47 32.59 85.86 40.14 86 52c.03 2.66-.21 6.54.56 9 1.21 3.89 9.64 13.9 3.13 19.26-4.3 3.54-12.13.37-15.69.9l-9 3.62c-4.4 1.4-13.3 2.31-18 2.21-11.38-.27-15.05-4.77-19-5.4-4.85-.77-14.74 2.44-17.4-3.73-2.95-6.85 3.78-12.41 5.52-16.14 1.18-2.77.26-4.91 0-7.72-.59-9.53 4.38-21.18 11.93-27.07l11.44-6.74c3.24-2.96 2.07-6.58 7.69-11.17ZM26 74.89c9.14 3.61 12.81 10 26 8.52 4.07-.46 8.18-.75 12-2.36l9-4.67c3.41-.72 6.11 2.19 10.94 1.47 9.38-1.4-1.35-12.41-1.92-14.94-.69-3.04 1.28-6.77.5-11.91-1.45-9.56-4.72-16.11-12.61-21.96l-9.61-5.6c-3.41-3.02-4.22-12.76-10.13-10.78-4.56 1.52-4.25 7.72-7.48 10.58l-11.64 6.55C24.19 35.02 19.57 45.39 20.1 54c.33 3.44 1.57 6.48 0 9.83-1.41 2.68-6.42 6.69-5.7 11.06.61 3.5 8.38 4.92 11.6 0ZM50 15h3l2 6-7-1 2-5Zm-2 8.9c6.64-1.71 6.45.82 12.04 3.01C76.56 33.38 82.12 44.97 79.17 62c-.41 2.34-.25 5.87-1.36 7.78C76.63 71.8 65.58 77.5 63 78.52c-3.22 1.28-4.73 1.24-8 1.63-11.66 1.42-12.73.71-23-5.12-4.84-2.74-8.3-3.75-8.55-10.03-.32-7.86-1.74-15.38 1.27-23C28.67 32 39.05 28.06 48 23.9Zm6 2.1-5-1v7h5v-6ZM33 61l11.32-19c1.17-1.91 3.55-5.35 2.45-7.67-2.22-4.67-10.46 1.42-12.67 3.34C27.03 43.81 26.89 51.54 28 60l5 1Zm42-2c-1.84-10.29.19-15.2-9-22.66-1.93-1.57-7.92-5.74-9.77-1.99-1.09 2.24 1.28 5.77 2.37 7.65L70 61l5-2Zm-45-1c0-11.67 1.64-18.9 14-23-1.22 4.99-9.8 20.36-14 23Zm29-23c8.69 4.68 13.35 9.62 12 20-4.23-3.6-10.89-14.57-12-20Zm8 29L53.47 40.29 50 38 36 64h31ZM50 45c5.4 2.85 8.37 9.3 10 15H43l7-15ZM26 65c.36.96.41 1.72 1.13 2.67 3.83 5.08 7.97-4.1 1.81-3.67-1.2.08-1.95.61-2.94 1Zm47.01-.97c-4.67 2.51-1.62 5.97.73 5.23 1.81-.58 3.51-4.14-.73-5.23ZM67 68c-6.64-1.61-16.9-1.04-24-1-4.6.03-6.18-.53-8 4 9.3 4.76 26.11 8.74 32-3Zm-48 1h2l2 7-7-1 3-6Zm22 1 20 1c-6 2.5-14.55 3.08-20-1Zm38 5c1.31-3.54 1.4-3.81 5-5l2 6-7-1Z",
    radius: 24,
  },
} as const;

const CIRCLE_PATH =
  "M43 .44C85.9-5.06 115.91 42 91.64 78A50.02 50.02 0 0 1 78 91.64c-6.54 4.41-13.25 6.71-21 7.92-5.55.87-11.52.55-17-.56-40.84-8.33-53.92-59.51-23-86.82C25.02 5.1 32.71 2.34 43 .44Z";
const CHEST_PATH =
  "M0 41c2.87-9.21 1.42-9.8 2.98-15 2.09-7.02 5.71-11.36 10.29-16.82 1.8-2.14 7.87-8.39 10.97-6.13 2.5 1.81.03 5.12-1.35 6.67-4.59 5.13-7.95 7.54-10.72 14.28C10.12 28.98 9.06 37.12 7 40l12 6c.09-8.35 5.87-25.1 12.13-30.54 4.24-3.7 7.48-4.39 12.87-4.46-2.11 2.95-3.49 4.41-6 7l-4.53 5c-3.26 4.34-6.86 12.59-7.5 18-.23 1.95-.7 4.81.72 6.4 1.5 1.69 4.26 1.53 6.25 1.6v-8.87L44 29c.09 7.12 1.47 9.48 4 16-7.16 4.29-7.78 8.69 1 11 1.74-9.8 6.05-20.78 13.05-27.98 4.2-4.31 9.17-7.71 12.95-1.02-10.3 3.56-14.05 10.88-17.63 20.58C55.4 52.94 54.57 57.95 61 60c-5.05-10.76 6.85-33.83 20-31l-7.52 8.91C69.21 43.28 65.22 53.14 65 60l-3 2h6c.04-11.31 4.06-19.26 12.05-27.15C84.86 30.1 89.36 27.43 95 33c-8.71 3.4-15.1 7.47-18.02 17l-2.86 12c-.33 2.52-.04 5.62-2.43 7.27-3.11 2.16-15.07-2.73-18.69-4L23.96 52.12C14.6 48.09 8.81 47.28 0 41Zm16 1c-6.91-3.4-5.35-7.79-2.88-14C16.15 20.41 21.99 9.71 31 9l-8.41 14L16 42Zm17-6c-.68-1.52-1.35-2.1-1.13-4 .58-4.93 10.02-15.36 15.13-15.8 3.67-.32 12.12 3.51 16 4.8-3.51 7.44-9.62 10.46-12 21-5.4-3.05-3.23-4.98-4.3-10-.51-2.41-1.8-4.71-2.7-7L33 36Zm44 31c.08-8.63 3.41-19.43 9.26-25.95 2.36-2.63 6.61-5.84 10.27-3.7 3.96 2.33 3.59 7.37 1.16 10.65C94.27 52.59 81.98 64.64 77 67ZM28 41h2v7h-2v-7ZM0 46l15.28 6.27L32 59.09l21.17 9.53 17.81 7.69L72 84v13l-16.17-6.64-32.79-13.64C19.41 75.26 4.61 69.01 2.85 66.7-.39 62.46 0 51.3 0 46Zm46 2c1.85 3.08 1.25 3.82-2 5l2-5Zm53 3c1.61 4.06 1.68 16.24-.56 19.99l-9.03 10.1C84.86 86.77 81.93 91.72 75 95l.6-19 7.4-9 16-16Zm-80 6L7 53c0 10.71.56 13.3 12 16V57Zm-9 0c5.59 1.23 5.81 2.55 6 8-5.52-1.49-5.8-2.45-6-8Zm18 3h-5v12l26 11 2-12-7-2 3 9-7-5c-3.12.28-3.15.57-5-2l-4 2c-5.19-5.25-6.12-5.61-3-13Zm66 5c-6.2 2.93-14.98 10.38-12 18 4.04-8.55 9.47-8.25 12-18Zm-65 1-1 1 5 3-4-4Zm16 7h-1l1 1v-1Zm20 15c.19-9.08 2.24-10.42-10-15l-1 1c.48 7.41-1.36 13.15 11 14Zm-9-10c6.18.22 6.78.82 7 7l-7-2v-5Z";
export const SPAWN_ICONS = {
  additionalMonsters: {
    color: "#ded3bd",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: CIRCLE_PATH,
    radius: 5,
  },
  chestsAny: {
    color: "#bbbbbb",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: CHEST_PATH,
    radius: 14,
  },
  chestsT1: {
    color: "#4ade80",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: CHEST_PATH,
    radius: 14,
  },
  chestsT2: {
    color: "gold",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: CHEST_PATH,
    radius: 14,
  },
  chestsT3: {
    color: "#d87f36",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "M41 12c1.07-3.07.93-2.93 4-4l-4 4ZM29 38c-2.66-4.87-5.15-4.23-6.4-7.22-2.18-5.23 6.57-17.39 8.7-18.76 1.3-.84 2.29-.78 3.7-1.02-2.39 3.67-7.2 9.54-7.47 14-.36 6.09 9.56 10.12 1.47 13Zm12-24c0 3.24-.2 5.85.8 9 .63 1.99 2.63 5.34 1.15 7.34-1.88 2.55-6.32-2.57-7.39-4.05-3.4-4.68.81-10.55 5.44-12.29Zm36 0c4.74 3.43 7.47 6.37 9.41 12l2.38 9c1.08 7.34.26 9.69 9.21 10-1.43 3.84-3.07 3.91-5.19 7.05-3.77 5.6-1.71 7.53-9.81 9.95l5.39-13.73-6.65-7.31L78.69 21 77 14ZM2 32c8.99-.73 6.2-4.52 10.51-9.87C15.1 18.91 19.11 17.02 23 16c-2.59 3.49-6.02 7.44-6.31 12-.27 4.19 4.33 11.29 6.57 15 4.98 8.28 14.49 12.76 19.74 2 2.13.28 6.03 1.06 7.98.65 4.79-1.02 7.22-7.23 6.75-11.65L55 25c6.12 1.8 9.66 6.99 11.37 13 1.93 6.81-2.22 12.19 7.63 13-1.18 5.57-2.48 5.38-4.87 10.01C65.46 68.16 67.85 71.66 57 72l-1-3-1 3-9-3 4 7c6.05 2.98 5 4.68 5 11l-7.04-6.45L26 68.92l-11-5.43L5 64l4-11 11 4-11.57-8.21L5.42 40 2 32Zm63-14c7.91 2.7 10.54 9.38 12.4 17 1.7 6.91-.61 12.25 8.6 13l-6.6 15.36L70 68l2.69-9 4.11-6.77-6.49-6.37L67.79 27 65 18ZM29.05 54.74c-3.87 1.35-3.9 3.53-2.48 7.2.62 1.61 1.85 4.05 3.99 2.89 2.59-1.4 4.73-8.37-1.51-10.09ZM38 64c-.72 3.29 1.22 3.37 4 4l-4-4Zm57 13c-7.12 1.6-11.71-3.72-10.34-7.79.77-2.33 3.33-3.26 5.34-4.21l5 12Zm-14 8c-5.01-.84-14.12-5.8-8.57-11.65 1.94-2.04 4.96-2.66 7.57-3.35l1 15Zm-22-7 9-2-5 16c-5.75-2.01-4-8.74-4-14Z",
    radius: 18,
  },
  harbingers: {
    color: "#fc764a",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "M47 2c5.14 2.6 5.94 11.69 6 17l-3-4-5 4 2-17ZM17 9l6.26 7.74L38 27c.22-.62.16-1.37 1-2.43 2.33-2.91 17.1-7.83 22 3.43l14.86-10.45L83 10c0 4.04.67 10.6-1.6 13.95-3.55 5.23-10.66 5.56-11.34 14.05-.71 8.87 3.41 8.1 2.92 20-.16 3.88-1.22 7.74-5.98 7.39L62 64l1.83 9.09L60 85h-2l-1-6-2 2h-1l-13-2 2 8c-8.73-2.49-8.47-16.4-5-23.16-1.56.15-4.56.22-5.98 0C25.95 62.1 26.27 52.97 27.3 48c.85-4.14 3.24-6 2.55-11-.93-6.79-7.36-6.94-11.25-13C16.28 20.38 17 13.32 17 9ZM2 40c6.71.86 17.69 4.92 21 11l-10-2 18.42 27 .58 9c-4.97.06-9.23 1.15-14 2.47-1.79.49-4.71 2.04-6.38.71-2.1-1.67-.47-4.54.68-6.18 2.39-3.44 7.4-8.72 7.45-13.27.02-2.82-4.23-8.68-6.04-10.9C10.61 54.02 3.38 44.39 2 40Zm73 11 2.29-3.24 16.67-7.28L98 42c-5.18 2.87-12.74 13.66-16.1 18.91-1.86 2.91-1.99 4.89-4.9 7.09l4.59 9L88 88l-22-3 .58-9 5.49-8.17L85 49l-10 2Zm-22-2c-1.63-1.83-1.66-1.76-4-1l4 1Zm-21 8c2.74 0 10.56.62 12.26-1.6.81-1.06.65-2.18 0-3.27C41.97 48.29 35.83 49 32 49v8Zm36-8c-3.51.01-7.75-.16-10.68 2.14-2.97 2.34-1.89 5.45 1.74 5.93H68V49ZM51 60h-4l-2 8c3.99-1.4 4.01-1.4 8 0l-2-8ZM22 71c-.79 1.97-3.61 10.35-.84 11.18L29 81c-1.16-5.44-2.57-6.75-7-10Zm55 0c-5.24 1.95-6.88 4.65-8 10l10 1-2-11ZM45 89l8-1-2 12c-4.15-2.34-4.95-6.52-6-11Z",
    radius: 18,
  },
  highValueTargets: {
    color: "orange",
    heighlightColor: "#ffffff",
    lineWidth: 2,
    path: "M23 73c-1.54-4.74-5.3-19.49-4.74-24 .39-3.16 2.95-7.14 4.51-10 5.95-10.96 7.75-13.66 16.19-23 3.66-4.05 5.88-9.6 10.06-12.26C56.78-1.21 67.88 3.7 72 11c-7.41-1.33-14.67-1.37-20.96 3.56C44.33 19.81 38.61 39.43 37 48c5.96-5.95 10.23-9.88 17-14.96l6.91-4.67c4-3.18 4.92-6.73 9.13-9.36 8.22-5.15 20.3-1.2 25.96 5.99-7.73 0-12.72-.14-20 3.33C66.66 32.78 55.11 48.52 51 58c4.4-3.58 9.52-6.59 15-8.22l6-1.5c4.21-1.66 5.98-4.86 11-5.13 9.39-.5 15.53 8.36 16 16.85-4.26-2.25-9.2-5.46-14-6.01C72.28 52.52 65.71 62.62 59.94 72 51.36 85.93 45.81 96.52 28 97.82c-5.19.37-12.66-1.18-16.68-4.61C4.06 87.01-.31 67.34.1 58l2.17-17c-.64-5.03-2.53-8.72 0-14C6.13 19.16 13.01 17.07 21 17c-2.5 3.6-5.72 6.91-7.39 11-5.96 14.61.72 32.91 9.39 45Z",
    radius: 16,
  },
} as const;
export type ICON = (typeof ICONS)[keyof typeof ICONS];
export type SPAWN_ICON = (typeof SPAWN_ICONS)[keyof typeof SPAWN_ICONS];
