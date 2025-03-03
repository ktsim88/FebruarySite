//popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//quote generator

function generateQuote() {
    let randomQuote = Math.floor(Math.random() * 5)
    let quote = ''
    if (randomQuote === 0) {
    quote = `"I pledge you, I pledge myself, to a New Deal for the American People."`
    } else if (randomQuote === 1) {
        quote = `"More than an end to war, we want an end to the beginnings of all wars."`
    } else if (randomQuote === 2) {
        quote = `"The only thing we have to fear is fear itself."`
    } else if (randomQuote === 3) {
        quote = `"Freedom of speech...Freedom of worship...Freedom from want...Freedom from fear."`
    } else {
        quote = `"I have seen war. I have seen war on land and sea. I have seen blood running from the wounded...I have seen the dead in the mud. I have seen cities destroyed...I have seen children starving. I have seen the agony of mothers and wives. I hate war."`
    }
    
    document.getElementById('quote').textContent = quote;
}
