const Qcms = require('./qcms');


const qcms1 = new Qcms({id:1, title:'JavaScript', theme:'Create a function'});

let qcms = [qcms1];


const addQcm = (rawObject) =>{

    // preparing my id

    let maxId = 0;
    qcms.forEach((qcm)=>{
        if(maxId < qcm.id){
            maxId = qcm.id
        }
    });

    const qcm = new Qcms(
        {
            id: maxId +1,
            title: rawObject.title,
        }
    );
    qcms.push(qcm);                       
}


module.exports = {qcms, addQcm}