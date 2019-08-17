const express = require('express');

/** Init express app */
const app = express();
app.use(express.static('3d_Box'))
app.listen(3000, () => {
    console.log(`Server running on port 3000.`);
});