const readLine = require('readline');

const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
        interface.question('Unidade a ser mapeada: ', (answer) => {
            const driveMap = answer
            console.log(`Mapeando: ${driveMap} `);
            resolve();    
        });
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        interface.question('Nome da pasta na rede: ', (answer) => {
            const folder = answer
            console.log(`Mapeando pasta: ${folder} `);
            resolve();    
        });
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        interface.question('Nome a ser mapeado: ', (answer) => {
            const mapName = answer
            console.log(`Mapeando como: ${mapName} `);
            resolve();    
        });
    })
}

const main = async () => {
    await question1()
    await question2()
    await question3()
    interface.close()
}

main()

// interface.question('Unidade a ser mapeada: ', (answer) => {
//     const driveMap = answer
//     console.log(`Mapeando: ${driveMap} `);
//     interface.close();    
// });

// interface.question('Nome da pasta na rede: ', (answer) => {
//     const folder = answer
//     console.log(`Mapeando pasta: ${folder} `);
//     interface.close();
// });

// const questionsArray = [
    //     {
        //         toQuestion: 'Unidade a ser Mapeada: ',
        //         keepAnswer: '',
        //         toReturn: `Mapeando: ${keepAnswer}`
        //     },
        //     {
            //         toQuestion: 'Nome da pasta na rede: ',
            //         keepAnswer: '',
            //         toReturn: `Pasta ${keepAnswer} Localizada`
//     },
//     {
//         toQuestion: 'Nome do mapeamento: ',
//         keepAnswer: '',
//         toReturn: `Nomeado como ${keepAnswer}`
//     }
// ]

// while() {
//     interface.question(questionsArray.toQuestion, (answer) => {
//         const  = answer
//         console.log(`Mapeando: ${driveMap} `);
//         interface.close();
//     });
// }

// function doQuestion (toDo, toReturn) {
//     return interface.question(toDo, (answer) => {
//         let answerReturn = answer
//         console.log(`${toReturn}: ${answerReturn} `);
//         interface.close();
//     });
// }

