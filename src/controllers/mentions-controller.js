const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//list
//Consulta as menções que foram feitas
exports.listMentions = async(req, res) =>{
    try{
        const data = await Mentions.find({});
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({message:'Falha ao carregar as menções'});
    }
};

//create
//Cria uma menção no database
exports.createMentions = async(req, res) => {
    try{
        const mentions = new Mentions({
            friend: req.body.friend,
            mention: req.body.mention
        });

        console.log(mention);

        await mention.save(); //salva dados no atlas mongo db

        res.status(201).send({message: 'Menção cadstrada com sucesso!'});
    }catch(e){
        res.status(500).send({message: 'Falha ao cadastrar a menção.'});
    }
};
