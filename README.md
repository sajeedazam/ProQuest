# Pro Quest
Welcome to ProQuest – the irresistible online application designed for households! Whether you're juggling a demanding job and struggling to manage your home, craving a spa session but hesitant to leave the house, or seeking a trusted nanny for your little one, we've got you covered. Our mission is to make your life easier by offering a seamless way to book appointments with verified professionals, all at the touch of your fingertips. Say goodbye to the hustle and bustle of everyday tasks, and embrace the convenience and comfort that ProQuest brings to your doorstep. Let us take care of your various needs so you can focus on what truly matters – enjoying life to the fullest!

## Project Requirments:

- **Minimal Requirments**
  - **Signup for customers** ✅
  - **Customer Side : (Book service and add to cart)** ✅
  - **Professional Side: (Accepted Jobs, Rejected Jobs)** ✅
  - **Database to hold Customer and Professional Data** ✅
  - **Customer can choose any service from a set of distinct categories** ✅

- **Standard Requirments** 
  - **Ways to keep track of available, accepted, and completed Jobs for the professional** ✅
  - **Dynamically update total earnings for professional** ✅
  - **Transaction gateway for the customer** ✅
  - **Ability to remove items from cart (Customer)** ✅
  - **Firebase authentication to prevent unauthorised users on the website** ✅

- **Stretch Requirments:**
  - **Live Chat feature (to chat directly with the professional)** ✅
  - **Since our services are restricted to Vancouver, customers can check whether our services are available near them by entering their zip code.** ✅
  - **Customer satisfactory code(a randomly generated code) which is provided to the customer and the customer is expected to provide it to the the professional only if they are satisfied with the professional's work.** ❌

## Additional notes:
- Requirements needed to be re-adjusted after a teammate had dropped the course
- As of now there is only a single professional as advised by an instructor after the first design review group demo.

## Technologies used:
- **Unit 1 - HTML, CSS, JS**
  - *HTML*
      - Provides the basic structure of the web pages.
      - Used in JSX within React components.
    *CSS*
      - Adds style, layout, and appearance to HTML elements.
  - *JS*
      - The common programming language used in the MERN stack, connecting MongoDB, Express, React-Redux, and Node.js.
- **Unit 2 – React & Redux**
    - Used React Hooks to manage several React functional components.
    - Made use of props to pass data from parent component to child component, where their use cases are, including but not limited to, passing jobs as a prop to display them on the notifications page, and to help toggle the Popup window for payments in the checkout page. 
    - Used Redux thunks to handle API calls to and from the server for instance changing the state of a job on the professional side(i.e, from accepted jobs to completed jobs) and to dynamically load the total earnings for the professional.
    - Overall helped in reducing code duplication, and data handling safer(since redux is immutable).
- **Unit 3 – Node & Express**
    - Through npm (Node Package Manager), we managed dependencies and various libraries, like Express.
    - Express is used to create restful APIs, allowing the front end (React) to communicate with the back end (Node.js), including database interactions.
- **Unit 4 – MongoDB**
    - Used Mongoose library to define schemas and create models for easier data handling and validation in the database.
    - Used the MongoDB database to store all the data, i.e. items in the cart, jobs for the professional, chat messages, etc.
    - Used mongoose queries to extract relevant data from the MongoDB database, and made data transfers between collections namely notifies, accepts, etc. 
- **Unit 5 – Builds and Deployment**
    - Render.com
        - Client side deployed as a Static Site using render.com.
        - Main server and chat server deployed as a Web Service including the required environment variables.
        - Deploying through render.com was convenient and cost effective for the scale of this project.
- **Above and beyond**
    - Opencagedata API
        - An external API used for forward geocoding.
        - A JS function written to check if the coordinates retrieved from the API response is within a particular square boundary, for this project namely the bounds of Vancouver.
    - Firebase Authentication
        - An external API used to authenticate current and new users.
    - Socket.io
        - A JS library used to implement the live chat feature.
    - Stripe
        - An external API used to collect credit card details and process payments.

## Next Steps:
- Handle multiple professionals and have additional features that come along with it such as reviews/ratings.
- Have additional steps to prevent customers and professionals from griefing each other in any way.
- Deploy website using AWS.
- Expand to more cities other than just Vancouver.

## Contributions:
- SHAFQUAT UL BARI, CSID: t3l6p
    - Worked on CSS for the project.
    - Implementation of the Stripe/transaction feature.
    - Pair coded with Sa-adat, Aditya to implement Redux actions and reducers. 
    - Pair coded with Sa-adat, Aditya and Rahul to implement socket.io based Chat feature. 
    - Worked on customer homepage, including the popup to avail services and dynamically display the amount earned by the professional on the professional homepage after jobs are completed.
- Sa-Adat-Azam Sajeed, CSID: w1n5k
    - Implemented majority of the reducers, redux thunks, and services to handle and connect to the backend. (client: redux/service.js, redux/thunks.js, redux/reducer.js, store.js) Furthermore, dispatched the respective async thunks where required. (components/Cart, phomepage.js, components/Jobs) Also implemented forward geocoding using opencagedata API. (client: city.js, server: geocode.js)
    - Contributed significantly in handling the backend server routes and their methods, including all the GET/POST/DELETE after creating different collections and also a part of figuring out how to transfer items between collections (Express; MongoDB, server: cart.js, jobList.js). 
    - Deployed client and two servers on render, and contributed in connecting socket.io to the deployed website as it was initially implemented to work on localhost. (chat_server/bin/www) Also setup dotenv for keeping server strings secure. (.env variables)
    - Helped in debugging and or fixing most of the bugs in the project where things did not work as expected and keeping the codebase organised / readable.
- Aditya Nasam, CSID: b2b6c
    - Assisted in structuring and outlining concepts for different logical aspects of the project.
    - Implemented the redux components (actions, reducers, and store) and the redux thunks middleware to handle all the API calls to and from the server.
    - Handled the mongoose queries to extract data from the mongoDB database, notably worked with transfering data between collections and also used aggregate sum to update professional earnings.
    - Implemented the responsive customer login page and handled the client-side(react) routing and backend server routes including the implementations for GET/POST/DELETE methods.
    - Assisted in deploying the socket.io based chat function to the website, and also contributed in debugging few essential functionality.