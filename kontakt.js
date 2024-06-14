document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const payload = {
        content: `# Nowa Wiadomość!/n**Imię:**\n\`\`\`${name}\`\`\`\n**Wiadomość:**\n\`\`\`${message}\`\`\``
    };

    try {
        const response = await fetch('https://discord.com/api/webhooks/1251125259428560927/8K7Ep2wzlYr87ZbDWhjcQmsOoMJmf1xbyhymwg1Ju8awqEbY3XaZ5f04SV1ZbZlNpaIc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('Wiadomość została wysłana!');
            document.getElementById('form').reset();
        } else {
            alert('Błąd przy wysyłaniu wiadomości.');
        }
    } catch (error) {
        alert('Błąd przy wysyłaniu wiadomości.');
    }
});
