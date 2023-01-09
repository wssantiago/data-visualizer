# oncase-challenge
Oncase fullstack challenge

### dependencies
- React v18.2.0
- Node v16.14.2
- npm v8.11.0

### at the /oncase-challenge folder, start the project

```
cd client
npm install
cd ..
cd server
npm install
```

### launching the server

```
cd server
npm start
```

### launching the client

```
cd client
npm start
```

### data management

In the server folder, there is a JSON containing the very data to this project. Every time the client fetches the server sending a GET request, it receives from it the desired data to be displayed to the user. This updates are made in such a way that the table and chart components are rerendered accordingly in real time. On the other hand, whenever the user sends a POST request to the server via the top form, the form data (verified) is appended to the server JSON. 
