# data-visualizer
A web application for graphical visualization of the formatted input data  

### dependencies
- React v18.2.0
- Node v16.14.2
- npm v8.11.0

### at the /data-visualizer folder, start the project

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
nodemon
```

### launching the client

```
cd client
npm start
```

### data management

In the server folder, there is a JSON containing the very data to this project. Every time the client fetches the server sending a GET request, it receives from it the desired data to be displayed to the user. This updates are made in such a way that the table and chart components are rerendered accordingly in real time. On the other hand, whenever the user sends a POST request to the server via the top form, the form data (verified) is appended to the server JSON. 

### JSON format

```
{
    "users": [
        {
            "firstName": "Williams",
            "lastName": "Santiago",
            "participation": "30",
            "id": 1
        }
    ]
}
```

When a new user is added to the JSON file via POST request, the percentual table column is updated as a whole for the total amount of the "participation" fields changes and so does the percentual participation. Therefore, there is no need to keep track of this extra field in the server data.

When one tries to send data where the first and last names are already on the JSON file, a PUT request is triggered and this user participation is updated and so is the whole visualization. In order to delete a user from the database, just type first and last names common to the JSON and click the delete button.

## running tests

### client tests at the /data-visualizerfolder

```
cd client
npm test a
```

### server tests at the /data-visualizer folder

```
cd server
npx jest
```

The overall tests are simple but important ones.

### the main styling is made using styled-components from react

This styling files are inside folders and are named folderName.styles.js

## applied Chart and Table documentation

- ApexCharts: https://apexcharts.com/docs/chart-types/pie-donut/
- MUI X: https://mui.com/x/react-data-grid/
