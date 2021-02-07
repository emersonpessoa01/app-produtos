const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
// const { checkout } = require('../routes');
const secret = "mysecret";

module.exports = {
    async index(req,res){
        const user = await User.find();
        res.json(user);
    },
    async create(req,res){
        const {name_user, email_user, password_user, type_user} = req.body;
        let data = {};
        let user =  await User.findOne({email_usuario});
        
        if(!user){
            data = {name_user, email_user, password_user, type_user};

            user = await User.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    },
    async details(req,res){
        const {_id} = req.params;
        const user = await User.findOne({_id});
        res.json(user);
    },
    async delete(req,res){
        const { _id } = req.params;
        const user = await User.findByIdAndDelete({_id});
        return res.json(user);
    },
    async update(req,res){
        const { _id, name_user, email_user, password_user, type_user } = req.body;
        const data = {name_user, email_user, password_user, type_user};
        const user = await User.findOneAndUpdate({_id},data,{new:true});
        res.json(user);
    },
    async login(req,res){
        const { email, password } = req.body;
        User.findOne({email_usuario: email}, function(err,user){
            if(err){
                console.log(err);
                res.status(200).json({erro: "Erro no servidor. Por favor, tente novamente"});
            }else if (!user){
                res.status(200).json({status:2, error: 'E-mail não encontrado no banco de dados'});
            }else{
                user.isCorrectPassword(password, async function (err, same){
                    if(err){
                        res.status(200).json({error: "Erro no servidor. Por favor, tente novamente"});
                    }else if(!same){
                        res.status(200).json({status:2, error: "A password não confere"});
                    }else{
                        const payload = { email };
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '24h'
                        })
                        res.cookie('token', token, {httpOnly: true});
                        res.status(200).json({status:1, auth:true, token:token,id_client: user._id,user_name:user.name_user,user_type:user.type_user});
                    }
                })
               
            }
        })
    },
    async checkToken(req,res){
        const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
        if(!token){
            res.json({status:401,msg:'Não autorizado: Token inexistente!'});
        }else{
            jwt.verify(token, secret, function(err, decoded){
                if(err){
                    res.json({status:401,msg:'Não autorizado: Token inválido!'});
                }else{
                    res.json({status:200})
                }
            })
        }
    },
    async destroyToken(req,res){
        const token = req.headers.token;
        if(token){
            res.cookie('token',null,{httpOnly:true});
        }else{
            res.status(401).send("Logout não autorizado!")
        }
        res.send("Sessão finalizada com sucesso!");
    }
}