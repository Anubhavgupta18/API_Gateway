PORT = 3005;
const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit')
const axios = require('axios');

const app = express();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per `window` (here, per 1 minute)
});


app.use(morgan('combined'));
app.use(limiter);

app.use('/bookingService', async (req, res, next) => {
    try {
        //console.log(req.headers['token']);
        const response = await axios.get('http://localhost:3001/api/v1/isAuthenticated', {
            headers: {
                'token': req.headers['token']
            }
        });
        if (response.data.success) {
            next();
        }
        else {
            return res.status(401).json({
                message: 'Unauthenticated'
            });
        }

    } catch (error) {
        return res.status(401).json({
            message:'Unauthenticated'
        })
    }

});


app.use('/bookingService', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));


app.get('/api/v1/home', (req, res) => {
    res.json({
        message: 'inside API gateway'
    })
})

app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);

})