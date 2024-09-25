# Code Playground

## Description of the Repository
This repository is for practicing web development. It contains HTML, CSS, JavaScript, Node.js, and React. There are three web applications and one communication program using sockets in this repository.

## Structure of the Repository
This is a detailed description of the structure.

### `Web-basics`
This is my first web application. It is a very simple page using HTML/CSS. The theme is the movie *Kingdom of Heaven*.

### `Web-beginner`
This is a moderate web application with HTML/CSS and client-side JavaScript. It has authentication, implemented with cookies. The theme of the application is the video game *Assassin's Creed: Brotherhood*. Languages are separated into separate files.

### `Node-server`
This is the backend for a web application called Movie Knight. It contains DAO files for connecting to the database, REST files for REST APIs, and files for refreshing the database. The frontend is in React and located in the folder `react/vite-react-app`.

### `React`
This directory contains two subdirectories: `my-react-app` and `vite-react-app`. The first one is just a dummy app that was used to practice the basics of React, but the second one (`vite-react-app`) is the frontend for the movie app that has a backend in Node.js. Link to Figma design: [Figma Design](https://www.figma.com/design/X8iSB8AqEExBpd1AeYPmAS/Untitled?node-id=0-1&t=ypwIkHY8j9NQTa73-1).

### `Socket-programming`
This directory contains two files that communicate with each other, one is a server, and the other is a socket. One sends author information, and the other receives it and replies.

## Testing

### Web-basics
- Test it with the Live Server extension in VS Code.

### Web-beginner
- Test it with the Live Server extension in VS Code.

### Movie Knight
There are two ways to test it (first needs node modules installed in `service` and `vite-react-app` directories):
1. Test it by starting the Node server with `node restServer.js` in the right directory. After that, run `npm run build` in the `vite-react-app` directory.
2. Test it with one command, run `npm run start-movie-app` in the root directory.

### Socket
- Start the two files with commands: `node nameOfTheFile` in the specific directory.

Some screenshots of the movie app:
![image](https://github.com/user-attachments/assets/e911c43b-6af1-4d06-90af-d358cb3491ae)

![image](https://github.com/user-attachments/assets/283a9049-7338-4110-98a2-537a18f8678a)

![image](https://github.com/user-attachments/assets/8680d368-dd35-4f72-b634-27112b331911)

![image](https://github.com/user-attachments/assets/6c3f4cde-b7cf-4f72-bde4-d619e1713f58)

![image](https://github.com/user-attachments/assets/38d15cbe-ddbc-4fb8-a578-f63ccf17b4e4)



