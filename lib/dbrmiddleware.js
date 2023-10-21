function banHandler(options) {
 return function(req, res, next) {
  var bot = options.bot
  if (!req.user) { next() } else {
   bot.guilds.get("500658335217876997").fetchBans()
    .then(r=> {
     if(!r.has(req.user.id)) { next() } else {
       res.status(403).render("403banned.ejs", {
         user: req.isAuthenticated() ? req.user : null,
         bot: bot,
         req: req
       });
   }
 });
}
}
}
function notFoundPage(options) {
  return function(req, res, next)  {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: options.bot,
       req: req
    });
  }
}
function requiresAuth(req, res, next) {
  if (!req.user) { 
    res.redirect("/auth") 
  } else {
    next()
  }
}
function envChoose(req, res, next) {
  if (req.query.env == "dev") { req.isDev = true } else { req.isDev = false }
  next()
}
var exp = {banpage: banHandler, notfound: notFoundPage, auth: requiresAuth, envChoose: envChoose}
exports = module.exports = exp;
exports.package = exp;