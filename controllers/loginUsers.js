import { v4 as uuidv4 } from 'uuid';


let loginUsers = []


export const getUsers = (req, res) =>{

    res.send(loginUsers);
}


export const createUser = (req, res) =>{

    const loginUser = req.body;

    loginUsers.push({ ...loginUser, id: uuidv4() });

    res.send(`Utilizador com o nome ${loginUser.nome} adicionado à base de dados!`);
}


export const getUser = (req, res) => {
    
    const { id } = req.params;

    const foundLoginUser = loginUsers.find((loginUser) => loginUser.id == id);

    res.send(foundLoginUser);
}


export const deleteUser = (req, res) => {

    const { id } = req.params;
  
    loginUsers = loginUsers.filter((loginUser) => loginUser.id != id);

    res.send(`Utilizador com o nome ${id} deletado da base de dados!`);
}


export const updateUser = (req, res) => {

    const { id } = req.params;

    const { nome, sobrenome, idade } = req.body;

    const userToBeUpdated = loginUsers.find((loginUser) => loginUser.id === id);

    if(nome) userToBeUpdated.nome = nome;
    if(sobrenome) userToBeUpdated.sobrenome = sobrenome;
    if(idade) userToBeUpdated.idade = idade;
  
    res.send(`Utilizador com o ID ${id} ATUALIZADO na base de dados!`);
}