console.log('Event Listeners');

const favoritePies = [
    {pieName: 'Apple Pie',
    pieImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZ5aRL169TfbM-wAYaKnb_Mm_RJezzZNWtK9yUHndXpgx3DGT3A',
    instructor: 'zoe'},
    {pieName: 'Chocolate Pie',
    pieImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfL-x8m6cFbg0XdmvRQwEjdcQJrNjVG2_N3KI76s2X5u_m9dO1',
    instructor: 'michael'},
    {pieName: 'Cherry Pie',
    pieImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98hRidPOTYV_ZRozFwBtrYOwSK1F5-NMdhYkjTAn98qrdewGh',
    instructor: 'callan'},
    {pieName: 'Key Lime Pie',
    pieImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDlhPBY2eZsIcCnyKqEVvZbdbsCM7A1kVHl_EoPeiR5oDE0jA',
    instructor: 'michael'},
    {pieName: 'Pecan Pie',
    pieImage: 'https://images-gmi-pmc.edge-generalmills.com/00399072-5112-4da9-8327-c89db4da8e76.jpg',
    instructor: 'zoe'}
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const printFavPies = (pieArr) => {
        let domString = ''
    for (let i = 0; i < pieArr.length; i++){
        const pie = pieArr[i];
         domString += `
        <div class="card">
            <h2>${pie.pieName}</h2>
            <img src=${pie.pieImage} alt='Image of ${pie.pieName}'
        </div>`
    }
    printToDom(domString, 'pie-stuff')
}

const buttonClick = (e) => {
    //figure out who the instructor is for the button we clicked
    const instructor = e.target.id
    const selectedPies = []
    //then figure out how to only get those pies from the list of all the pies
    for (let i = 0; i < favoritePies.length; i++) {
        const pie = favoritePies[i]
        if (pie.instructor === instructor) {
            selectedPies.push(pie)
        }
    }  
    //then pass small list of pies back into the pie builder
    printFavPies(selectedPies);
    }
    

document.getElementById('zoe').addEventListener('click', buttonClick) 

document.getElementById('michael').addEventListener('click', buttonClick)


document.getElementById('callan').addEventListener('click', buttonClick)



    // this is the original call before event listeners --> printFavPies(favoritePies)