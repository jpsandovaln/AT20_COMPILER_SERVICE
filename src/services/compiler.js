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

class Compiler{

    #language;
    #ext;

    constructor(language, ext){
        this.#language = language;
        this.#ext = ext;
    }

    get ext(){
        return this.#ext;
    }

    get language(){
        return this.#language;
    }

    run(/*file_path*/){
        //abstrac class
        throw new Error('Abstract class you must implement this method');
    }


}

module.exports = Compiler;