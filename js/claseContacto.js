class Contacto {
    #id;
    #nombre;
    #apellido;
    #email;
    #telefono;

    constructor( nombre, apellido, email, telefono) {
        this.#id = crypto.randomUUID();
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
        this.#telefono = telefono;
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get apellido() {
        return this.#apellido;
    }

    get email() {
        return this.#email;
    }

    get telefono() {
        return this.#telefono;
    }
}