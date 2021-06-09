


const listSkeleton = {
    'nome': '',
    'idade': null
}
let list = []

const savePeople = (form) => {
    console.log('aaa')

    const nome = $(form).find('#inp1').val();
    const idade = $(form).find('#inp2').val();
    let newList = {nome, idade};

    // console.log(newList)

    list.push(newList);
    shellSort(list);
    generateList(list)
}

const filterList = () => {

}
const  deletePeople = (event) => {
    delete list[event.target.parentElement.value]
    generateList(list)
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
    list.map((e, index) => {
        [listItem, button, text ] = _getElements()
        text.innerText = e.nome + ' | '+e.idade + ' anos';
        listItem.value = index;
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

function shellSort(lista) {
    var tamanhoSecao = Math.floor(lista.length / 2);
    while (tamanhoSecao > 0) {
        for (i = tamanhoSecao; i < lista.length; i++) {
            var j = i;
            var temp = lista[i];
            console.log(i,temp)

            while (j >= tamanhoSecao && lista[j-tamanhoSecao].idade > temp.idade) {
                lista[j] = lista[j-tamanhoSecao];
                j = j - tamanhoSecao;
            }
            lista[j] = temp;
        }

        if (tamanhoSecao == 2) {
            tamanhoSecao = 1;
        } else {
            tamanhoSecao = parseInt(tamanhoSecao*5 / 11);
        }
    }


    list = lista;
}