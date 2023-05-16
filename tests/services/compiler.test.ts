/**
@compiler.test.ts Copyright(c) 2023 Jalasoft
2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft,ConfidentialInformation"). You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
**/

import CompilerException from "../../src/common/compilerException";
import Compiler from "../../src/services/Compiler";

describe('Test Compiler', () => {

    /* This is a test case for the `run()` method of the `Compiler` class. It creates a new instance
    of the `Compiler` class, calls the `run()` method with an empty string as input, and expects it
    to throw a `CompilerException`. The `console.log()` statement is used to print the output of
    the `run()` method to the console for debugging purposes. */
    test('Executing the run() method of the compiler', () => {
        expect(() => {
            const compiler = new Compiler();
            compiler.run('');
            console.log(compiler.run(''));
        }).toThrow(CompilerException);
    });

    /* This is a test case for the `executeCommand()` method of the `Compiler` class. It creates a new
    instance of the `Compiler` class, calls the `executeCommand()` method with an empty string as
    input, and expects it to throw a `CompilerException`. The `console.log()` statement is used to
    print the output of the `executeCommand()` method to the console for debugging purposes. */
    test('Executing the executeCommand() method of the compiler with empty command', () => {
        expect(() => {
            const compiler = new Compiler();
            compiler.executeCommand('');
            console.log(compiler.executeCommand(''));
        }).toThrow(CompilerException);
    });

    /* This is a test case for the `executeCommand()` method of the `Compiler` class, where the input
    command is a single space character. It expects the method to throw a `CompilerException`. The
    `console.log()` statement is used to print the output of the `executeCommand()` method to the
    console for debugging purposes. */
    test('Executing the executeCommand() method of the compiler with a space as command', () => {
        expect(() => {
            const compiler = new Compiler();
            compiler.executeCommand(' ');
            console.log(compiler.executeCommand(' '));
        }).toThrow(CompilerException);
    });

});