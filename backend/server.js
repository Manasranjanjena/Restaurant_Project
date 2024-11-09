import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
 
// import dotenv from 'dotenv';
// dotenv.config();

// const port = process.env.PORT || 4000; // Default to 4000 if PORT is not set

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });