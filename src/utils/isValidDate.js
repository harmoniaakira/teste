import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(customParseFormat)

export const isValidDate = (value) => {
    if (!value) return ""
    const regex = /\//g;
    let aux = value.replace(regex, "-");

    aux = aux.split('-').reverse().join('-')

    if (aux.length !== 10) return ""

    const date = dayjs(aux, 'YYYY-MM-DD', true)
    const now = dayjs(new Date());

    if (date.diff(now) > 0) return "Data informada maior que a data atual."
    if (now.diff(date, 'year') < 18) return "Idade não permitida para proposta."
    if (!date.isValid()) return "Data de Nascimento inválida."

    return ""
}