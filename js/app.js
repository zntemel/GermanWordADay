document.addEventListener("DOMContentLoaded", function () {
    // Rendom number for wordList array
    //    let randNum = Math.floor(Math.random() * wordList.length);
    //    
    //    wordList.forEach(e => console.log(e.wordDE));
    //    console.log(wordList.length);
    

    // Shows words based on what day of the year it is out of 366 days/year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    
    // Sort array by 'sentence' so it appears in a pretty random word order
    const ordered = wordList.sort((a, b) => a.sentence > b.sentence ? 1 : -1);
    
    // console.table(ordered)
    console.log(`${wordList.length} words available!
    Hey there! Whether you're here by accidentally hitting F12 or on purpose, thank you for checking out GermanWordADay.info! I hope you really enjoy this website and that it helps you a bunch! While surely there are some words you already know, I tried to choose a lot of words too where they aren't as common. For example, you won't find 'Das Mädchen' on this list, because that tends to be one of the first words people learn... however 'schön' is also on this list, so maybe in hindsight it's neither here nor there with consistency. Trotzdem vielen Dank für den Besuch!`);
    
    new Vue({
        el: '#vue-app',
        data: {
            wordDE: wordList[day].wordDE,
            wordEN: wordList[day].wordEN,
            type: wordList[day].type,
            sentence: wordList[day].sentence,
            wordCount: wordList.length,
        },
        methods: {
            // Code for the secret 'Gib mir noch eines' button! Sshhhh!
            refresh: function () {
                randNum = Math.floor(Math.random() * wordList.length);
                this.wordDE = wordList[randNum].wordDE;
                this.wordEN = wordList[randNum].wordEN;
                this.type = wordList[randNum].type;
                this.sentence = wordList[randNum].sentence;
            },
        }
    }); // end vue object
    
    
    // Gets local time for dark mode
    var date = new Date().getHours();
    // Dark mode switch
    const btn = document.getElementById('btn');
    // Apply dark mode based on time of day -- before 5am and after 9pm
    if (date <= 5 || date >= 21) {
        darken();
        btn.checked = true;
    };
    // Apply dark mode to the website on slider check
    btn.addEventListener('click', darken);
    
    // Function to enable dark mode
    function darken() {
        // Apply darkmode to text
        document.querySelectorAll('p, h2, h3, em, strong, a').forEach(e => e.classList.toggle('darkText'));
        
        // Apply dark background color
        document.querySelectorAll('body').forEach(e => e.classList.toggle('darkBG'));
        
        // Off-shade footer
        document.querySelectorAll('footer').forEach(e => e.classList.toggle('darkBGFooter'));
        
        // Strengthens orange colors on the page behind text
        document.querySelectorAll('.orangeBackground, .text-highlight').forEach(e => e.classList.toggle('bannerTextDark'));
    };
    // DARK MODE END

});