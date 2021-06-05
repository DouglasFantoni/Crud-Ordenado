


const listSkeleton = {
    'nome': '',
    'idade': null
}
let list = []

const savePeople = () => {

}

const filterList = () => {

}
const  deletePeople = () => {

}

const _getElements = () => {
    let item = document.createElement('li');
    let button = document.createElement('a');
    let text = document.createElement('label');
    button.className = 'btn-delete';
    button.onclick = deletePeople;
    button.innerText = 'X'
    return [item, button, text]
}
const generateList = (list = null) => {
    $('#list >').remove();
    list.map(e => {
        [listItem, button, text ] = _getElements()
        text.innerText = e.nome + ' | '+e.idade + ' anos';
        listItem.appendChild(button)
        listItem.appendChild(text)
        $('#list').append(listItem)
    })
}

init()
function init(){
    list = [{
        'nome': 'andré',
        'idade': 22
    },]

    generateList(list)
}

