const { exec } = require('child_process');
const createShortcut = require('create-desktop-shortcuts');

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
            console.log(`Disco ${unidade}: excluído com sucesso`)
        })
    }, 1000)
}

mapear("p", "eletroeletronico", "Projetos Eletronicos")
// deleteMap("p", "Projetos Eletronicos")

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