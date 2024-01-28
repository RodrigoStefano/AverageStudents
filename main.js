const student01 = {
    "name": "Tiago",
    "nota01": 5,
    "note02": 6
}

const student02 = {
    "name": "Ana",
    "nota01": 6,
    "note02": 10
}

const student03 = {
    "name": "Pedro",
    "nota01": 4,
    "note02": 2
}

const student04 = {
    "name": "Bruna",
    "nota01": 10,
    "note02": 9
}
const listOfStudents = [student01, student02, student03, student04];

function ShowResultTest(){
    for(let i = 0; i < listOfStudents.length; i++){
        function Mensage(){
            let mensageToStudent;
            let result = CalculateAverage(listOfStudents[i].nota01, listOfStudents[i].note02);
            if(result >= 7){
                mensageToStudent = `Parabéns ${listOfStudents[i].name}. Você foi aprovado(a) no concurso.`
            }
            else{
                mensageToStudent = `Não foi dessa vez ${listOfStudents[i].name}. Tente novamente.`
            }
            return mensageToStudent;
        }
        alert(`A média do(a) aluno(a) ${listOfStudents[i].name} foi: ${CalculateAverage(listOfStudents[i].nota01, listOfStudents[i].note02)}
${Mensage()}`);
    }
}

function CalculateAverage(nota01, nota02){

    let result = (nota01 + nota02) / 2;
    return result;
}

ShowResultTest()