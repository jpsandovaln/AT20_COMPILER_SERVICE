/**
@compilerException.test.ts Copyright(c) 2023 Jalasoft
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

describe('Test Compiler Exception', () => {

    /* This test is checking if the `getErrorCode` method of the `CompilerException` class returns the
    expected error code value. It creates a new instance of the `CompilerException` class with a
    message, status code, and error code, then calls the `getErrorCode` method and compares the
    result with the expected error code value using the `toStrictEqual` matcher. */
    test('Get error code of the Compiler Exception success', () => {
        const compilerException = new CompilerException('New Exception', 405, 'AT20-CompilerException()');
        const expected =  compilerException.getErrorCode;
        const result = 'AT20-CompilerException()';
        expect(expected).toStrictEqual(result);
    });

    /* This test is checking if the `getStatus` method of the `CompilerException` class returns the
    expected status code value. It creates a new instance of the `CompilerException` class with a
    message, status code, and error code, then calls the `getStatus` method and compares the result
    with the expected status code value using the `toStrictEqual` matcher. */
    test('Get status of the Compiler Exception success', () => {
        const compilerException = new CompilerException('New Exception', 405, 'AT20-CompilerException()');
        const expected =  compilerException.getStatus;
        const result = 405;
        expect(expected).toStrictEqual(result);
    });
});
