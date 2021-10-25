export const maskDate = (value) => {
    if (!value) return ""
    
    let date = value.replace(/\D/g, "")

    date = date.replace(/(\d{2})(\d)/,"$1/$2");

    date = date.replace(/(\d{2})(\d)/,"$1/$2")

    return date
}
