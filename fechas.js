const hoy = new Date()

const nacimiento = new Date(1998, 9, 08)

const comparacion = hoy > nacimiento

const diaNacimiento = nacimiento.getDate()
const mesNacimiento = nacimiento.getMonth() + 1
const anyoNacimiento = nacimiento.getFullYear()

