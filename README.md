### This is my first project which I build to prctice my React skills. Created this project to understand the concept of React-Routers, react-router-dom. In this project we fetch datas from Github API and Show the data on the web page.

Visite Below link to see the demo of Projrct: 
> https://adityakkpk.github.io/ReactRouter-GithubAPI/

# Steps to create this project :

* Step 1: Create a React App using the below commands:
    - 
        > npm create vite@latest
        > cd React_App
        > npm install

* Step 2: Install Tailwind CSS 
    - 
    - Follow the below link for the installtion guid to install Tailwind CSS
        > https://tailwindcss.com/docs/guides/vite

* Step 3: Install The React-Router-Dom using the below commands: 
    - 
        > npm install react-router-dom

* Step 4: Create Components
    -
    - Create Footer, Header and Home components and design them accordingly.
    - Also create a Github component.

* Step 5: Create Layout.jsx
    -
    - Create a Layout file.
    - Import Header, Footer and Outlet.
    - Desigh the layout.

* Step 6: Update main.jsx
    -
    - At the place of ```<App />``` put ```<RouterProvider router={router} /> ```
    - Create a parent route for ```<Layout/>```.
    - Inside the parent route create routes according to your requirement.

### Now for fetching data from Github API and Display on the Github page follow the below steps:

* Step 7: Create a method 'githubInfo' to fetch data from API in ```<Github />``` component.
    -

* Step 8: Inside the main.jsx where we create route for Github pass the attribute 'loader={githubInfo}'.
    -

* Step 9: Inside ```<Github />``` component import 'useLoaderData' hook from React-router-dom.
    -

* Step 10: This hook provide a method 'useLoaderData'. Store the output of the metod in a variable and use it according to your use.
    -
