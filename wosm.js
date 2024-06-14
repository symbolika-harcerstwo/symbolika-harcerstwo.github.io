let canvas, con, width, height, wosm;


function init()
{
    canvas = document.getElementById('canvas');
    con = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    bttns = document.getElementsByClassName("waggsbttn");

    wosm = document.getElementById('wosm');

    con.drawImage(wosm, 0, 0, width, height);
}

function disableAll()
{
    let buttons = document.getElementsByClassName('wosmbttn');
    
    for(let i = 0; i < 7; i++)
        {
            buttons[i].classList.remove('active');
        }
}

function info1()
{   
    con.reset();
    con.drawImage(wosm, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn1');
    bttn.classList.add('active');


    // linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 300);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(25, 450, 565, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Symbol przypisany przez Baden-Powella zwiadowcom armii brytyjskiej,', 45, 480);
    con.fillText('który następnie został zmodyfikowany dla skautingu.', 45, 500)
}
function info2()
{
    con.reset();
    con.drawImage(wosm, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn2');
    bttn.classList.add('active');

    // linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 250);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(110, 450, 380, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Igła kompasu wskazująca północ, rozumiana', 130, 480);
    con.fillText('jako symbol służby i jedności.', 130, 500)
}
function info3()
{
    con.reset();
    con.drawImage(wosm, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn3');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(220, 280);
    con.stroke();

    // Druga linia

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(300, 200);
    con.stroke();

    // Trzecia linia
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(380, 280);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(135, 450, 335, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Obowiązki wobec Boga, bliźnich i siebie.', 155, 480);
}
function info4()
{
    con.reset();
    con.drawImage(wosm, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn4');
    bttn.classList.add('active');

    // Pierwsza linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;

    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(185, 275);
    con.stroke();

    // Druga linia
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(410, 275);
    con.stroke();

    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(135, 450, 330, 70, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Prawda i wiedza, a ich dziesięć ramion', 155, 480);
    con.fillText('- punkty prawa skautowego.', 155, 500);
}
function info5()
{
    con.reset();
    con.drawImage(wosm, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn5');
    bttn.classList.add('active');

    // linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(250, 300);
    con.stroke();
    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(245, 450, 110, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Czystość.', 265, 480);
}
function info6()
{
    con.reset();
    con.drawImage(wosm, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn6');
    bttn.classList.add('active');

    // linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.beginPath();
    con.moveTo(300, 450);
    con.lineTo(175, 375);
    con.stroke();
    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(150, 450, 300, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Odpowiedzialność i pomoc bliźnim.', 170, 480);
}
function info7()
{
    con.reset();
    con.drawImage(wosm, 0, 0, width, height);

    disableAll();
    let bttn = document.getElementById('bttn7');
    bttn.classList.add('active');

    //linia
    con.strokeStyle = '#ff0000';
    con.lineWidth = 3;
    con.moveTo(300, 70);
    con.lineTo(300, 500);
    con.stroke();
    
    // obramowanie
    con.fillStyle = '#cfdf70';
    con.beginPath();
    con.roundRect(165, 50, 275, 50, 20);
    con.fill();

    // tekst
    con.fillStyle = '#000000';
    con.font = '15px Poppins';
    con.fillText('Jedność i braterstwo skautów.', 185, 80);
}