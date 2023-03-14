/*
@node_command.js
Copyright ( 2021 Jalasoft 2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft, Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/

const { exec } = require('child_process');
const { stdout, stderr } = require('process');

class ExecuteCommandWindows {
    executeCommand(command, callback = () => {}){
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve(callback(stdout, stderr));
            });
        });
    }
}
module.exports = ExecuteCommandWindows;
