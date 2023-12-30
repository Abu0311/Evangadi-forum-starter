const express = require("express");
const app = express();
const port = 5000;

//db connection
const dbConnection = require("./db/dbconfig");

//user routes middleware file

const userRoutes = require("./routes/userRoute");

//questions routes middleware file

const questionsRoutes = require("./routes/questionRoute");
//authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");

//json middleware to extract json data
app.use(express.json());

//user routes middleware
app.use("/api/users", userRoutes);

//questions routes middleware
app.use("/api/questions", authMiddleware, questionsRoutes);

// //Answers routes middleware file

// const userRoutes = require("./routes/userRoute");

// //Answers routes middleware
// app.use("/api/uses", userRoutes);
async function start() {
	try {
		const result = await dbConnection.execute("select 'test'");
		await app.listen(port);
		console.log("database Connection established");
		console.log(`listening on ${port}`);
	} catch (error) {
		console.log(error.message);
	}
}
start();

// app.listen(port, (err) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(`listening on ${port}`);
// 	}
// });
