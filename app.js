var express = require('express');
var app = express();
var AV = require('leanengine');
app.use(express.static('./'));
app.use(AV.express());
// 可以将一类的路由单独保存在一个文件中
//app.use('/todos', todos);
//app.use('/users', users);

//app.get('/', function(req, res) {
//  res.redirect('/todos');
//})

//app.use(function(req, res, next) {
// var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handlers

// 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message || err,
      error: err
    });
  });
}

// 如果是非开发环境，则页面只输出简单的错误信息
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message || err,
    error: {}
  });
});

module.exports = app;
