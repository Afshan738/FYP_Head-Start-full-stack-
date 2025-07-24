
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: String,
    projectUrl: String,
    githubUrl: String,
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill", 
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
