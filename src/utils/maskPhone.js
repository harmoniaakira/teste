export const maskPhone = (value) => {
    if (!value) return ""
    let phonenumber = value.replace(/\D/g, "");
    phonenumber = phonenumber.replace(/^0/, "");
    if (phonenumber.length > 10) {
        phonenumber = phonenumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (phonenumber.length > 5) {
        phonenumber = phonenumber.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (phonenumber.length > 2) {
        phonenumber = phonenumber.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        phonenumber = phonenumber.replace(/^(\d*)/, "($1");
    }
    return phonenumber;
}