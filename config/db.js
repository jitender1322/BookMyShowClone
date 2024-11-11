const mongoose = require("mongoose");

const uri = "mongodb+srv://jitendersarswat6:Jeet1322@cluster0.txt54.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
  console.error("Error connecting to MongoDB Atlas", error);
});


