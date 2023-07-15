const UserController=require('../controllers/user.controller');
const Validate=require('../middaleware/user.middaleware');
module.exports=function(app){
    app.post('/signup',Validate.validateField, UserController.signup);
    app.post('/signin', UserController.signin)
}