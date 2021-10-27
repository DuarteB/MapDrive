const { exec } = require('child_process');
const path = require('path');

console.log('|Exibindo Echo|')

exec("echo Deu certo ", (err, stdout) => {
    if(err) {
        console.error(`err: ${err}`);
    }
    console.log(`stdout: ${stdout}`);
    console.log("|Echo exibido com sucesso|")
})