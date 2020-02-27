let myTodos = {
    day: 'monday',
    meetings: '0',
    meetDone: '0',
}


function addMeeting(todo, meet = 0) {
    todo.meetings = todo.meetings + meet;
}

function meetDone(todo, meet = 0) {
    todo.meetDone = todo.meetDone - meet;
}

function resetDay(todo) {
    todo.meetings = 0;
    todo.meetDone = 0;

}

function getSummaryofDay(todo) {
    let meetleft = todo.meetings - todo.meetDone;
    return `you hava${meetleft} meetings today`;
}
addMeeting(myTodos, 2)
meetDone(myTodos, 5);
console.log(myTodos);
console.log(getSummaryofDay(myTodos));