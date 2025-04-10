const hiTrainer =  async (req,res)=>{
    try {
        console.log("Controller")
        res.status(200).send("Hola desde el controlador")
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
const createPokemon = async(req,res)=>{
    console.log("create pokemon",req.body)
    res.status(201).send("pokemon created")
}
export default {hiTrainer,createPokemon}