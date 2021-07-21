module.exports = (app) => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();
  router.post("/auth/signup", users.signUp);
  router.post("/auth/login", users.login);
  router.post("/auth/logout", users.logout);
  router.get("/auth/coupons", users.getCouponCode);
  router.post("/auth/bookings", users.bookShow);
  app.use("/users", router);
};

// sample api calls
/*
      Singup
      URL -> http://localhost:3000/api/sign-up
      body -> {
        "email" : "rockysuven@somemail.com",
        "password" : "suven123",
        "role" : "user"
  }
  
      Login 
      URL -> http://localhost:3000/api/login
      body -> {
        "email" : "rockysuven@somemail.com",
        "password" : "suven123"
   }
  
      Logout
      URL -> http://localhost:3000/api/logout
      body -> {
        "id": "60699113a9d6f338bc1496cb"
  }
    */
