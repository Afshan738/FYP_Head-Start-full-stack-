const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");
const connectDB = require("./config/db");

dotenv.config({ path: "./.env" });
connectDB();

const seedAdminUser = async () => {
  try {
    if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
      console.error(
        "Please provide ADMIN_USERNAME and ADMIN_PASSWORD in your .env file."
      );
      process.exit(1);
    }
    const adminExists = await Admin.findOne({
      username: process.env.ADMIN_USERNAME,
    });

    if (adminExists) {
      console.log(
        `Admin user '${process.env.ADMIN_USERNAME}' already exists. No action taken.`
      );
      process.exit();
    }
    await Admin.create({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    });

    console.log(
      ` Admin user '${process.env.ADMIN_USERNAME}' created successfully!`
    );
  } catch (error) {
    console.error(" Error creating admin user:", error.message);
  } finally {
    console.log("Closing database connection...");
    mongoose.disconnect();
  }
};

seedAdminUser();
