// requires
const fs = require('fs');
const colors = require('colors/safe');


let listarTabla = (base, limite) => {

    if (!Number(base)) {
        console.log(colors.red(`El valor indtroducido - ${base} - no es válido`))
        return
    }

    console.log('=================================');
    console.log(`Tabla del ${base} con límite de ${limite}`);
    console.log('=================================');
    
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(colors.red(`El valor indtroducido - ${base} - no es válido`));
            return;
        }
        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        const dataFile = new Uint8Array(Buffer.from(data));
        fs.writeFile(`./tablas/tabla-del-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-del-${base}-limite-${limite}.txt`)
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}