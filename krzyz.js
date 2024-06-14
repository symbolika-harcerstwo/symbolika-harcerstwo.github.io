let canvas, con, width, height, krzyz;


function init()
{
    canvas = document.getElementById('canvas');
    con = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    bttns = document.getElementsByClassName("krzyzbttn");

    krzyz = document.getElementById('krzyz');

    con.drawImage(krzyz, 0, 0, width, height);
}

function disableAll()
{
    let buttons = document.getElementsByClassName('krzyzbttn');
    
    for(let i = 0; i < 8; i++)
        {
            buttons[i].classList.remove('active');
        }
}

function info1()
{   
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn1');
    bttn.classList.add('active');

    

    // linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.moveTo(225, 225);
    con.lineTo(145, 70);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(20, 20, 200, 50, 20);
    con.fill();


    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Symbol Doskonałości.', 40, 50);
}
function info2()
{
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn2');
    bttn.classList.add('active');

    //linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.moveTo(270, 230);
    con.lineTo(300, 70);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(20, 20, 560, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Obejmowanie jak najszerszych kręgów społecznych przez harcerstwo,', 40, 50);
    con.fillText('jak największą liczbę dzieci i młodzieży.', 40, 70)
}
function info3()
{
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn3');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 280);
    con.lineTo(200, 150);
    con.stroke();

    // Druga linia

    con.beginPath();
    con.moveTo(300, 280);
    con.lineTo(400, 150);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(65, 275, 470, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Cele do zdobycia: siłę, umiejętności, sprawność i wiedzę.', 85, 305);
    con.fillText('Dąb jednocześnie symbolizuje męstwo a laur zwycięstwo.', 85, 325)
}
function info4()
{
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn4');
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
    con.lineTo(450, 300);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(125, 450, 350, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Wezwanie harcerzy do nieustannej służby', 145, 480);
}
function info5()
{
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn5');
    bttn.classList.add('active');

    // linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 280);
    con.lineTo(280, 170);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(55, 275, 485, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Ogromna liczba członków naszego ruchu na całym świecie.', 75, 305);

}
function info6()
{
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn6');
    bttn.classList.add('active');

    // linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 280);
    con.lineTo(280, 128);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(95, 275, 410, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Stale pozostawione miejsce dla nowych harcerzy.', 115, 305);

}
function info7()
{
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn7');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(250, 275);
    con.stroke();

    // Druga linia

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(343, 272);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(150, 450, 295, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Czujne oczy harcerza', 170, 480);
    con.fillText('(Prawo i Przyrzeczenie harcerskie).', 170, 500)
}
function info8()
{
    con.reset();
    con.drawImage(krzyz, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn8');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 300);
    con.lineTo(185, 500);
    con.stroke();

    // Druga linia
    con.beginPath();
    con.moveTo(300, 300);
    con.lineTo(120, 410);
    con.stroke();

    // Trzecia linia
    con.beginPath();
    con.moveTo(300, 300);
    con.lineTo(130, 150);
    con.stroke();

    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(210, 275, 180, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Trzy rozbiory Polski.', 230, 305);

}