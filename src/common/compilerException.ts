class CompilerException extends Error {
    #_status: number;
    #_errorCode: string;

    constructor(message: string, status: number, errorCode: string) {
        super(message);
        this.#_status = status;
        this.#_errorCode = errorCode;
    }

    get getStatus(): number {
        return this.#_status;
    }

    get getErrorCode(): string {
        return this.#_errorCode;
    }
}

export default CompilerException;