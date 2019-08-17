const express = require('express');

/** Init express app */
const app = express();
const port = server.listen(process.env.PORT || 8080);
app.use(express.static('3d_Box'))
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});