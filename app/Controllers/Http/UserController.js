"use strict";
const Database = use("Database");
const User = use("App/Models/User");

class UserController {
  async index({ request, response }) {
    return Database.table("users").select("username");
  }
  async store({ request, response }) {
    const data = request.only(["username", "email", "password"]);

    const userExists = await User.findBy("email", data.email);

    return userExists;
  }
}

module.exports = UserController;
