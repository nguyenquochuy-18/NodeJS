var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('This is products router');
});

router.get('/type', function(req, res, next) {
    res.send('type');
});

router.get('/kind', function(req, res, next) {
    res.send('kind');
});

router.get('/ab?cd', function(req, res, next) {
    res.json('ab?cd');
})

router.get('/search/:name/type/:type', function(req, res, next) {
    const name = req.params.name;
    const type = req.params.type;
    console.log('Params: ', req.params);
    const price = req.query.price;
    console.log(price);
    res.send('ab');
})

/// body params query


router.post('/', function(req, res, next) {
    const result = [{
            id: 1,
            name: 'iPhone 14',
        },
        {
            id: 2,
            name: 'iPhone 11',
        }
    ];
    res.jsonp({ user: "Hello Huy" });
    res.json(result);
});


router.post('/', function(req, res, next) {
    const result = [];
    const data = req.body;
    console.log(data);

    res.json(data);
});


//Download file
router.get('/download', function(req, res, next) {
    res.download('public/images/nature.jpg');

})

module.exports = router;