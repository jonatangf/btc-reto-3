# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary
The key of this task has been to use [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) to create a 
drag and drop interface. This library has been created by Atlassian and its core characteristics are:

* Beautiful and natural movement of items 💐
* Accessible: powerful keyboard and screen reader support ♿️
* Extremely performant 🚀
* Clean and powerful api which is simple to get started with
* Plays extremely well with standard browser interactions
* Unopinionated styling
* No creation of additional wrapper dom nodes - flexbox and focus management friendly!
 
## Configuration for react-beautiful-dnd

First, we need to enclose our code inside a `<DragDropContext onDragEnd={handleOnDragEnd}>` component, and then we need 
to create a function that will be called when the drag and drop operation is complete. In this case, the function is 
`handleOnDragEnd` (included in the file App.js), and the goal of this function is to update the state of the application when the element is dropped.

Second, we need to create a `<Droppable droppableId="droppable">` component, which corresponds to the area where the 
elements can be dropped. In our case, this element will be every TodoList in the application. 

Third, we need to create a `<Draggable draggableId="draggable">` component, which will be every ticket in the TodoList.

Last but not least, it is important to feed the `<TodoList>` with the placeholder, which will be the space where the 
elements can be dropped to be added at the end of the list.

The logic of the drag and drop is contained in the `handleOnDragEnd` function, and its goal is to update the state of 
the application depending on three scenarios:

* The element is dropped in the same position as it was before: it will remain in the same position.
* The element is dropped in a different position than it was before, but inside the same `<Droppable>`: the order of the TodoList will be changed
* The element is dropped in a different `Droppable`: the element will be moved to the new `<Droppable>` and it will be removed from the current one

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
