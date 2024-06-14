let canvas, con, width, height, waggs;


function init()
{
    canvas = document.getElementById('canvas');
    con = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    bttns = document.getElementsByClassName("waggsbttn");

    waggs = document.getElementById('waggs');

    con.drawImage(waggs, 0, 0, width, height);
}

function disableAll()
{
    let buttons = document.getElementsByClassName('waggsbttn');
    
    for(let i = 0; i < 5; i++)
        {
            buttons[i].classList.remove('active');
        }
}

function info1()
{   
    con.reset();
    con.drawImage(waggs, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn1');
    bttn.classList.add('active');


    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(177, 300);
    con.stroke();

    // Druga linia

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 180);
    con.stroke();

    // Trzecia linia
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(420, 300);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(95, 450, 410, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Trzy zobowiązania: wobec Boga, bliźnich i ojczyzny', 115, 480);
    con.fillText('zawarte w Przyrzeczeniu Skautowym', 115, 500)
}
function info2()
{
    con.reset();
    con.drawImage(waggs, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn2');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(215, 310);
    con.stroke();

    // Druga linia
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(385, 310);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(65, 450, 470, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Prawo i Przyrzeczenie, a ich 10 ramion - 10 punktów Prawa.', 85, 480);
}
function info3()
{
    con.reset();
    con.drawImage(waggs, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn3');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 300);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(132, 450, 335, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Igła kompasu, która pokazuje skautkom', 152, 480);
    con.fillText('i przewodniczkom dobrą drogę.', 152, 500)
}
function info4()
{
    con.reset();
    con.drawImage(waggs, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn4');
    bttn.classList.add('active');

    //linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.moveTo(300, 70);
    con.lineTo(300, 350);
    con.stroke();
    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(165, 20, 275, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Płomień miłości międzyludzkiej.', 185, 50);
}
function info5()
{
    con.reset();
    con.drawImage(waggs, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn5');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(150, 250);
    con.stroke();

    // Druga linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(335, 300);
    con.stroke();
    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(115, 450, 375, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Słońce świecące dzieciom na całym świecie.', 135, 480);
}

