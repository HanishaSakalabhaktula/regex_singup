const input_fields = document.querySelectorAll('input')
const patterns = {
    telephone: /^[0-9]{10}$/, 
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    profile_slug: /^[a-z\d-]{8,20}$/
}

const validate = (field, regex) => {
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

input_fields.forEach(element => {
    element.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
});