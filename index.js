export class Iterator {
    #input;
    #pointer;
    #max;

    /**
     * @param {Array<any>} input
     * The array that we will iterate
     */
    constructor(input) {
        this.#input = input;
        this.#pointer = 0;
        this.#max = this.#input.length;
    }

    /**
     * @returns {any}
     * Returns a reference of the next value
     */
    peek() {
        return this.#input[this.#pointer + 1];
    }

    /**
     * @returns {this | void}
     * Returns `this` if there's a value and `undefined` if it's there's no value
     */
    peekable() {
        if (typeof this.peek() !== 'undefined') return this;
        return;
    }

    /**
     * @returns {any}
     * Returns the next value and increase the pointer
     */
    next() {
        const value = this.peek();
        this.#pointer += 1;

        return value;
    }

    /**
     * @return {any}
     * Returns the current value of the pointer
     */
    now() {
        return this.#input[this.#pointer];
    }
}