export default function data(params) {
    const now = new Date();

    const date = now.toLocaleDateString("pt-BR");
    const time = now.toLocaleTimeString("pt-BR");


    return {date, time}
}