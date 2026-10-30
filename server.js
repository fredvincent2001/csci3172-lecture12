
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

// Route to count page visits
app.get('/visit-count', (req, res) => {
    let visits = parseInt(req.cookies.visits, 10) || 0;

    visits++;

    res.cookie('visits', visits, {
        httpOnly: true,
        sameSite: 'lax'
    });

    res.json({
        message: `You have visited this page ${visits} time(s).`
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});