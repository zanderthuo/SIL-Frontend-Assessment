# SIL Assessment
- The use of this Application is to view Albums and Images for a specific user.
  A user will be able to edit

## Features
- Login Page: Enables user authentication to access the application's functionalities securely using google login.
- Home Page: This page shows the list of all users and the number of albums they have. You are able to view a single user by
  clicking the button.
- User information Page: Displays all user details, and user albums. On the sigle album there is a buttn to view the album.
- Album information Page: Displays the album detils, and the album's photo list. On the single album there is a button to view 
  photo.
- Photo Page: Displays a photo and it's details. There is an edit button.
- Redux Toolkit Integration: Utilizes Redux Toolkit for state management across various components and functionalities, ensuring 
  a consistent and predictable state.

## How to Use the Application:
- To access and utilize the application, follow these steps:

1. Click on the Get Started Button to start.
2. Use your gmail account to login.
3. Functionality Overview:
  - Upon successful login using your gmail account, you will land on the home page.
  - You will see the list of users with album count on a card and a button to view user infromation.
  - On clicking the button to view user information, you will see user details and the list of user albums fora user.
  - You will also see a button to view an album. Click it to view album information.
  - On the view album information page, you will see album title and the list of album's photos.
  - You will see a button to view a photo. Click it.
  - One you clickt the button, you will see the photo, photo title, and a button to edit the photo title,
  - Click the button to edit the title. A modal will pop up with a form to edit the title.
  - On success you will see the success alert.

### Folder Structure

```
/src
│
├── /pages
│   ├── EditPhotoPage.js
│   ├── ErrorPage.js
|   ├── HomePage.js
|   ├── LandingPage.js
|   ├── LoginPage.js
|   ├── ViewAlbumPage.js
|   ├── ViewPhotoPage.js
│   └── ViewUserPage.js
│
├── /components
│   ├── Header.js
│   ├── Footer.js
│   ├── Home.js
│   ├── Landing.js
│   ├── LoginForm.js
│   ├── ViewAlbum.js
│   ├── ViewPhoto.js
│   └── ViewUser.js
│
│
├── /route
│   └── PrivateRoute.js
│
├── /redux
│   ├── /actions
│   │   ├── albumActions.js
│   │   ├── allUsersActions.js
│   │   └── photoActions.js
│   │
│   ├── /slices
│   │   ├── albumSlices.js
│   │   ├── allUsersSlices.js
│   │   ├── photoSlices.js
│   │   └── userSlices.js
│   │
│   └── store.js
│
├── /api
|   └── api.js
│
└──App.js
```

## How to Run the Project Locally

1. Clone the repository:

   ```
        git clone https://github.com/zanderthuo/SIL-Frontend-Assessment.git

        cd SIL-Frontend-Assessment

        npm install

        npm start
   ```