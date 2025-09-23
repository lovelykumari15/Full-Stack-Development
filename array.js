let students = ["Amit, Priya, Lovely, priya"];
let marks = [80, 70, 90, 82];

const studentsBody = document.getElementById('tudentsBody');
const output = document.getElementById('output');
const countE1 = document.getElementById('count');

function renderTable(highlightIndex = -1){
    studentsBody.innerHTML = '';
    for (let i = 0; i < students.length; i++){
        const tr = document.createElement('tr');
        if(i==highlightIndex) tr.classList.add("highlight");
        const tdName=document.createElement('td');
        tdName.textContent=students[i];
        



        


    }
}