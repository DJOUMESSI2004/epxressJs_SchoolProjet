class Qcms {
    #id;
    #title;
    #theme;

    constructor(createQcms) {
        this.#id = createQcms.id;
        this.#title = createQcms.title;
        this.#theme = createQcms.theme;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get theme() {
        return this.#theme;
    }

    // converting the data into json data
    
    toJSON(key){

        console.log(key);

        return {id: this.#id, title: this.title}
    }

}

// const qcMs = new Qcms(
//     {
//     id: 1,
//     title: 'Javascript',
//     theme: 'How to create variables'
// }
// );

module.exports = Qcms;

// export default qcMs;
