export const phone = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 15
    let value = e.currentTarget.value

    value = value.replace(/\D/g, "")
    if (value.length > 10) {
        value = value.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 5) {
        value = value.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (value.length > 1) {
        value = value.replace(/^(\d*)/, "($1");
    }
    e.currentTarget.value = value
    return e
} 

export const cpf = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 14
    let value = e.currentTarget.value

    value = value.replace(/\D/g, "")
    value = value.replace(/\D/g,"")
    value = value.replace(/(\d{3})(\d)/,"$1.$2")
    value = value.replace(/(\d{3})(\d)/,"$1.$2")
    value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    e.currentTarget.value = value
    return e
}