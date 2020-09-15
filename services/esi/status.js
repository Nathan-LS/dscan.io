const esi = require('./esi');

async function getStatus(){
    try{
        const response = await esi.get("/status/");
        return {
            "headers": response.headers,
            "body": response.data
        };
    } catch (error){
        console.error(error);
        throw error;
    }
}

module.exports.getStatus = getStatus;
