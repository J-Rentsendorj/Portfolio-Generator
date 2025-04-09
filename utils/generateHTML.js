function generateHTML(data) 
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Portfolio for ${data.name}</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <header>
        <h1>Portfolio</h1>
        </header>
        <main>
        <section class="basic-info">
            <h2>Name: ${data.name}</h2>
            <h3>Location: ${data.location}</h3>
            <p class="bio">${data.bio}</p>
        </section>
        <section class="links">
            <p>LinkedIn: <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>
            <p>GitHub: <a href="${data.github}" target="_blank">${data.github}</a></p>
        </section>
        </main>
    </body>
    </html>
    `;
}

module.exports = generateHTML;
