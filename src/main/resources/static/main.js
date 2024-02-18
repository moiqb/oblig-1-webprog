
let tickets = [];


const form = document.getElementById('ticketForm');
const ticketList = document.getElementById('ticketList');
const deleteAllButton = document.getElementById('deleteAll');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer standard skjema-innsending


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;
    const movie = document.getElementById('movie').value;


    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || quantity.trim() === '') {
        alert('Vennligst fyll ut alle feltene');
        return;
    }


    const ticket = {
        name: name,
        email: email,
        phone: phone,
        quantity: quantity,
        movie: movie
    };


    tickets.push(ticket);

    // Vis billetter
    displayTickets();


    form.reset();
});


deleteAllButton.addEventListener('click', function() {
    tickets = [];
    displayTickets();
});


function displayTickets() {
    ticketList.innerHTML = ''; // Tøm listen


    tickets.forEach(function(ticket) {
        const li = document.createElement('li');
        li.textContent = `
            Navn: ${ticket.name}, 
            E-post: ${ticket.email}, 
            Telefon: ${ticket.phone}, 
            Antall billetter: ${ticket.quantity},
            Film: ${ticket.movie} // Vis filmen
        `;
        ticketList.appendChild(li);
    });
}