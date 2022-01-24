const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});


promotionRouter.route('/:promoId')
.get((req, res, next) => {
  res.end('will send details of the promotion: ' + req.params.promoId + ' to you')
})
.post((req,res,next) => {
  res.statusCode = 403
  res.end('POST operation does not supported on /promotions/' + req.params.promoId)})
.put((req,res,next) => {
  res.write('updating the promotion: ' + req.params.promoId + '\n')
  res.end('will update the promotion: ' + req.body.name + ' with details: ' + req.body.description)
})
.delete((req,res,next) => {
  res.end('deleting promotion: ' + req.params.promoId)
})


module.exports = promotionRouter;