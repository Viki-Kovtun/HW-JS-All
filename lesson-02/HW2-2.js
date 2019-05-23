function fun(mama) {
    if (typeof(mama)==="number"){
        return new Date()
    } else {
        return "Неверный тип данных"
    }
}
// fun(1);
fun('papa')