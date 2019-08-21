class DateConverter {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada!");
    }

    static toDate(string) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(string)) {
            throw new Error('data não está no formato aaaa-mm-dd');
        }
        return new Date(...string.split('-')
            .map((item, indice) => item - indice % 2)
        );
    }

    static toText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}