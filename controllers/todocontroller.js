const Todos =  require('../model/todomodel');

exports.test = function(req,res ) {
    res.send('Greetings from the Test Controller')
    
};

exports.create = async function(req, res ,next){
    console.log(req.body);

    if (req.body) {
        try {

    const addtodo = new Todos(req.body);
    const todo = addtodo.save();
    
    response = {
        statuscode: 200,
        data: todo,
        message: 'Todo tasks Created Successfully'
    };
    res.json(response); //response
}catch (err){
            response = {
                statuscode: 400,
                data: null,
                errors: err,
                message: 'Tasks Creation Failed'
            };
            res.json(response);
        }
    }
}