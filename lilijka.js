let canvas, con, width, height, lilijka;


function init()
{
    canvas = document.getElementById('canvas');
    con = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    bttns = document.getElementsByClassName("lilijkabttn");

    lilijka = document.getElementById('lilijka');

    con.drawImage(lilijka, 0, 0, width, height);
}

function disableAll()
{
    let buttons = document.getElementsByClassName('lilijkabttn');
    
    for(let i = 0; i < 4; i++)
        {
            buttons[i].classList.remove('active');
        }
}

function info1()
{   
    con.reset();
    con.drawImage(lilijka, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn1');
    bttn.classList.add('active');

    

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(177, 275);
    con.stroke();

    // Druga linia

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 180);
    con.stroke();

    // Trzecia linia
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(420, 275);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(150, 450, 300, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Skrót słów: Ojczyzna, Nauka, Cnota', 170, 480);
    con.fillText('- hasła Zgromadzenia Filaretów.', 170, 500)
}
function info2()
{
    con.reset();
    con.drawImage(lilijka, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn2');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(150, 300);
    con.stroke();

    // Druga linia

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 150);
    con.stroke();

    // Trzecia linia
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(450, 300);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(165, 450, 270, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Służba Bogu, ojczyźnie i bliźnim.', 185, 480);
}
function info3()
{
    con.reset();
    con.drawImage(lilijka, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn3');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 150);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(75, 450, 450, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Podążanie w słusznym kierunku, wyznaczonym zgodnie', 95, 480);
    con.fillText('z ideałami Prawa i Przyrzeczenia Harcerskiego', 95, 500)
}
function info4()
{
    con.reset();
    con.drawImage(lilijka, 0, 0, width, height);

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
    con.roundRect(105, 20, 395, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Węzeł płaski, łączący w jedno trzy ramiona lilijki.', 125, 50);
}
