var nome = prompt ('qual seu nome?')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
if (hora >0 && hora < 12){
    alert('bom dia, ${nome}! agora são ${hora} horas e ${min} minutos...')
} else if (hora <18){
    alert('boa tarde, ${nome}! agora são ${hora} horas e ${min} minutos')
}