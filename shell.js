const { exec } = require('child_process');
const createShortcut = require('create-desktop-shortcuts');
const readLine = require('readline');

const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const requireMapDrive = () => {
    return new Promise((resolve, reject) => {
        interface.question('Unidade a ser mapeada: ', (answer) => {
            const driveMap = answer
            console.log(`Mapeando: ${driveMap} `);
            resolve();    
        });
    })
}

const requireFolder = () => {
    return new Promise((resolve, reject) => {
        interface.question('Nome da pasta na rede: ', (answer) => {
            const folder = answer
            console.log(`Mapeando pasta: ${folder} `);
            resolve();    
        });
    })
}

const requireFolderName = () => {
    return new Promise((resolve, reject) => {
        interface.question('Nome a ser mapeado: ', (answer) => {
            const mapName = answer
            console.log(`Mapeando como: ${mapName} `);
            resolve();    
        });
    })
}

const main = async () => {
    await requireMapDrive()
    await requireFolder()
    await requireFolderName()
    interface.close()
}

main()

const mapear = (unidade, pasta, nomeSetor) => {
    console.log(`Mapeando ${unidade} no setor: ${nomeSetor}`)
    
    exec(`net use ${unidade}: "\\\\fs\\${pasta}"`, (err, stdout) => {
        if(err) {
            console.error(`err: ${err}`);
        }
        console.log(`stdout: ${stdout}`);
        console.log("Mapeado com sucesso")
    })
    
    setTimeout(() => {
        createShortcut({
            windows:{
                filePath: `${unidade}:\\`,
                outputPath: `"%userprofile%\\desktop\\${nomeSetor}.lnk"`,
                name: `${nomeSetor}`,
            }
        })
    }, 1000)
}

const deleteMap = (unidade, nomeSetor) => {
    console.log(`Excluindo mapeamento do disco: ${unidade}`)
    
    exec(`del "%userprofile%\\desktop\\${nomeSetor}.lnk"`, (err, stdout) => {
        if(err) {
            console.error(err)
        }
        console.log(`stdout: ${stdout}`)
    })
    
    setTimeout(() => {
        exec(`net use ${unidade}: /delete`, (err, stdout) => {
            if(err) {
                console.error(err)
            }
            console.log(`stdout: ${stdout}`)
            console.log(`Disco ${unidade} excluído com sucesso`)
        })
    }, 1000)
}

// mapear("g", "area_publica", "Area Publica")
deleteMap("g", "Area Publica")

// exec("net use g: \\\\fs\\area_pessoal", (err, stdout) => {
    //     if(err) {
        //         console.error(`err: ${err}`);
        //     }
        //     console.log(`stdout: ${stdout}`);
        //     console.log("Mapeado com sucesso")
        // })
        
        // exec("net use r: \\\\fs\\compras", (err, stdout) => {
            //     if(err) {
                //         console.error(`err: ${err}`);
                //     }
//     console.log(`stdout: ${stdout}`);
//     console.log("Mapeado com sucesso")
// })