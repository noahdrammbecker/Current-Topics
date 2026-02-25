/**
 * The Gilded Goose - Cocktail Quiz
 * "Mason and Wilson will handle the rest."
 */

(function() {
    'use strict';

    var cocktails = [
        // ─── Gin ──────────────────────────────────────────────
        { name: "Martini", tagline: "Not shaken, not stirred\u2026", page: "cocktails/gin.html", tags: ["strong","spirit-forward","classic","clean","neat","dry"] },
        { name: "Vesper", tagline: "Bond's order. Gin, vodka, and Kina Lillet in cold harmony.", page: "cocktails/gin.html", tags: ["strong","spirit-forward","classic","clean","neat","citrus"] },
        { name: "The Last Word", tagline: "Equal parts everything. Herbal, tart, and unforgettable.", page: "cocktails/gin.html", tags: ["herbal","sour","complex","citrus","bright","clean","neat"] },
        { name: "Bijou", tagline: "A jewel of a cocktail. Gin, chartreuse, and sweet vermouth.", page: "cocktails/gin.html", tags: ["herbal","spirit-forward","complex","sweet","classic","clean","neat"] },
        { name: "Negroni", tagline: "Bitter, bold, and Italian to its core.", page: "cocktails/gin.html", tags: ["bitter","spirit-forward","classic","strong","clean","neat"] },
        { name: "Water Lily", tagline: "Floral and bright. Violet and Cointreau in bloom.", page: "cocktails/gin.html", tags: ["floral","sweet","citrus","bright","clean","neat"] },
        { name: "Aviation", tagline: "Sky blue and soaring. Violet and maraschino take flight.", page: "cocktails/gin.html", tags: ["floral","sour","citrus","bright","clean","neat"] },
        { name: "White Negroni", tagline: "The Negroni\u2019s pale cousin. Lighter, but no less cunning.", page: "cocktails/gin.html", tags: ["bitter","floral","spirit-forward","clean","neat","herbal"] },
        { name: "Ramos Gin Fizz", tagline: "Creamy, citrus, ethereal. Worth every shake.", page: "cocktails/gin.html", tags: ["creamy","citrus","sweet","foam","egg-white","light","refreshing"] },
        { name: "Martinez", tagline: "The Martini\u2019s ancestor. Sweeter, richer, and shrouded in history.", page: "cocktails/gin.html", tags: ["sweet","spirit-forward","classic","clean","neat"] },
        { name: "Tom Collins", tagline: "Long, tall, and cool. Gin\u2019s answer to lemonade.", page: "cocktails/gin.html", tags: ["refreshing","citrus","light","sweet","bright","sparkling","bubbly"] },
        { name: "Gimlet", tagline: "Gin and lime, sharp as a sailor\u2019s wit.", page: "cocktails/gin.html", tags: ["sour","citrus","refreshing","clean","neat","bright","light"] },
        { name: "Bee\u2019s Knees", tagline: "Honey, lemon, and gin. Prohibition\u2019s sweetest secret.", page: "cocktails/gin.html", tags: ["sweet","citrus","bright","light","refreshing","clean","neat"] },
        { name: "White Lady", tagline: "Elegant, citrus-forward, with a silky finish.", page: "cocktails/gin.html", tags: ["citrus","sour","foam","egg-white","bright","clean","neat"] },
        { name: "Pink Lady", tagline: "Blushing pink and deceptively strong.", page: "cocktails/gin.html", tags: ["sweet","sour","foam","egg-white","fruity","light"] },
        { name: "Bramble", tagline: "Blackberry and gin, tangled in thorns.", page: "cocktails/gin.html", tags: ["fruity","sour","sweet","bright","citrus"] },

        // ─── Whiskey & Bourbon ────────────────────────────────
        { name: "Manhattan", tagline: "Rye, vermouth, and bitters. The city in a glass.", page: "cocktails/whiskey.html", tags: ["spirit-forward","classic","strong","sweet","clean","neat"] },
        { name: "Old Fashioned", tagline: "The original cocktail. Nothing more, nothing less.", page: "cocktails/whiskey.html", tags: ["spirit-forward","classic","strong","clean","neat"] },
        { name: "Boulevardier", tagline: "A Negroni in a wool coat. Bitter and warming.", page: "cocktails/whiskey.html", tags: ["bitter","spirit-forward","classic","strong","clean","neat"] },
        { name: "Revolver", tagline: "Rye and coffee liqueur. A late-night classic.", page: "cocktails/whiskey.html", tags: ["coffee","spirit-forward","strong","clean","neat","chocolate"] },
        { name: "Amaretto Sour", tagline: "Nutty, tart, with a crown of foam.", page: "cocktails/whiskey.html", tags: ["sweet","sour","foam","egg-white","citrus","fruity"] },
        { name: "Whiskey Sour", tagline: "Tart, balanced, timeless.", page: "cocktails/whiskey.html", tags: ["sour","citrus","foam","egg-white","classic","bright"] },
        { name: "Autumn Old Fashioned", tagline: "Maple and amaretto warm the bones.", page: "cocktails/whiskey.html", tags: ["sweet","spirit-forward","strong","clean","neat","dessert"] },
        { name: "Paper Plane", tagline: "Equal parts, folded perfectly. Bourbon takes flight.", page: "cocktails/whiskey.html", tags: ["bitter","sour","citrus","complex","bright","clean","neat"] },
        { name: "Flying Fox", tagline: "Bourbon and Aperol, bright and bold.", page: "cocktails/whiskey.html", tags: ["bitter","citrus","bright","clean","neat"] },
        { name: "Scofflaw", tagline: "A lawbreaker\u2019s drink. Dry, tart, and rebellious.", page: "cocktails/whiskey.html", tags: ["sour","citrus","classic","clean","neat","bright"] },
        { name: "Mint Julep", tagline: "Southern hospitality in a silver cup.", page: "cocktails/whiskey.html", tags: ["refreshing","sweet","herbal","light","clean","neat"] },

        // ─── Vodka ────────────────────────────────────────────
        { name: "Cosmopolitan", tagline: "Pink, sharp, and unapologetic.", page: "cocktails/vodka.html", tags: ["sweet","citrus","fruity","bright","light","clean","neat"] },
        { name: "Espresso Martini", tagline: "Coffee meets cocktail. Wide awake and well-dressed.", page: "cocktails/vodka.html", tags: ["coffee","sweet","strong","spirit-forward","clean","neat","chocolate"] },
        { name: "Dirty Martini", tagline: "Olive brine and vice. As murky as your intentions.", page: "cocktails/vodka.html", tags: ["spirit-forward","strong","clean","neat"] },
        { name: "Moscow Mule", tagline: "Ginger, lime, and copper. Cold and crackling.", page: "cocktails/vodka.html", tags: ["refreshing","citrus","light","bright","sparkling"] },

        // ─── Rum ──────────────────────────────────────────────
        { name: "Daiquiri", tagline: "Three ingredients, perfect balance.", page: "cocktails/rum.html", tags: ["sour","citrus","refreshing","bright","clean","neat","light"] },
        { name: "Hemingway Daiquiri", tagline: "Papa\u2019s preference. Grapefruit and maraschino.", page: "cocktails/rum.html", tags: ["sour","citrus","bright","refreshing","clean","neat"] },
        { name: "Mai Tai", tagline: "Tiki royalty. Orgeat, rum, and paradise.", page: "cocktails/rum.html", tags: ["tropical","sweet","fruity","complex","refreshing"] },
        { name: "Dirty Banana", tagline: "Creamy, caffeinated, and sinfully smooth.", page: "cocktails/rum.html", tags: ["creamy","coffee","sweet","dessert","tropical","chocolate"] },
        { name: "Pi\u00f1a Colada", tagline: "Creamy, tropical, unashamed.", page: "cocktails/rum.html", tags: ["creamy","tropical","sweet","fruity","dessert","light"] },
        { name: "Jungle Bird", tagline: "Bitter meets tropical. A tiki drink with edge.", page: "cocktails/rum.html", tags: ["bitter","tropical","complex","fruity","sweet"] },
        { name: "Dark \u2019n\u2019 Stormy", tagline: "Dark rum clouds rolling over ginger waves.", page: "cocktails/rum.html", tags: ["refreshing","light","bright","sparkling"] },
        { name: "Cuba Libre", tagline: "Freedom in a glass. Rum, cola, and rebellion.", page: "cocktails/rum.html", tags: ["refreshing","sweet","light","simple"] },
        { name: "Mary Pickford", tagline: "Pink, pretty, and stronger than she looks.", page: "cocktails/rum.html", tags: ["sweet","tropical","fruity","light","clean","neat"] },
        { name: "Mojito", tagline: "Havana in a glass. Mint, lime, and summer.", page: "cocktails/rum.html", tags: ["refreshing","herbal","citrus","light","bright","sweet"] },

        // ─── Tequila & Mezcal ─────────────────────────────────
        { name: "Margarita", tagline: "Salt, lime, and tequila. The holy trinity.", page: "cocktails/tequila.html", tags: ["sour","citrus","refreshing","bright","clean","neat"] },
        { name: "Prickly Pear Margarita", tagline: "Desert pink and dangerously smooth.", page: "cocktails/tequila.html", tags: ["sweet","fruity","citrus","bright","refreshing"] },
        { name: "Salt Air Margarita", tagline: "A cloud of sea salt floats above the glass.", page: "cocktails/tequila.html", tags: ["sour","citrus","foam","refreshing","bright","clean","neat"] },
        { name: "Oaxacan Old Fashioned", tagline: "Smoke and agave in perfect harmony.", page: "cocktails/tequila.html", tags: ["smoky","spirit-forward","strong","clean","neat","complex"] },
        { name: "Naked and Famous", tagline: "Equal parts courage. Mezcal meets chartreuse.", page: "cocktails/tequila.html", tags: ["smoky","bitter","herbal","complex","clean","neat","sour"] },
        { name: "Paloma", tagline: "Grapefruit and tequila under the Mexican sun.", page: "cocktails/tequila.html", tags: ["refreshing","citrus","light","bright","sparkling","bubbly"] },

        // ─── Brandy & Cognac ──────────────────────────────────
        { name: "Sidecar", tagline: "Cognac, citrus, and class.", page: "cocktails/brandy.html", tags: ["citrus","sour","classic","spirit-forward","bright","clean","neat"] },
        { name: "Brandy Alexander", tagline: "Velvety, chocolate-kissed, dangerously drinkable.", page: "cocktails/brandy.html", tags: ["creamy","sweet","dessert","chocolate","smooth"] },
        { name: "Corpse Reviver No. 1", tagline: "The morning-after remedy.", page: "cocktails/brandy.html", tags: ["spirit-forward","classic","strong","clean","neat"] },
        { name: "Jack Rose", tagline: "American apple brandy goes pink.", page: "cocktails/brandy.html", tags: ["sour","fruity","citrus","bright","sweet","clean","neat"] },

        // ─── Scotch ───────────────────────────────────────────
        { name: "Old Sport", tagline: "Scotch and brandy, united. Ambition in a glass.", page: "cocktails/scotch.html", tags: ["smoky","spirit-forward","strong","complex","clean","neat"] },
        { name: "The Sentimental Gentleman", tagline: "Scotch, nocino, and amaro. For the contemplative.", page: "cocktails/scotch.html", tags: ["herbal","spirit-forward","complex","strong","clean","neat","bitter"] },
        { name: "Penicillin", tagline: "Modern medicine in a glass. Ginger, honey, and smoke.", page: "cocktails/scotch.html", tags: ["smoky","sweet","citrus","sour","bright"] },

        // ─── Pisco & Cachaça ──────────────────────────────────
        { name: "Pisco Sour", tagline: "South America\u2019s gift to the cocktail world.", page: "cocktails/pisco.html", tags: ["sour","citrus","foam","egg-white","bright","classic"] },
        { name: "Caipirinha", tagline: "Lime, sugar, and cacha\u00e7a. Brazil in a rocks glass.", page: "cocktails/pisco.html", tags: ["sour","citrus","refreshing","bright","light","clean","neat"] },

        // ─── Absinthe ─────────────────────────────────────────
        { name: "Death in the Afternoon", tagline: "Absinthe and champagne. Hemingway\u2019s afternoon poison.", page: "cocktails/absinthe.html", tags: ["herbal","bubbly","sparkling","strong","spirit-forward","floral"] },
        { name: "Sazerac", tagline: "Absinthe-rinsed and steeped in history.", page: "cocktails/absinthe.html", tags: ["spirit-forward","herbal","classic","strong","clean","neat"] },
        { name: "Corpse Reviver No. 2", tagline: "Gin, Lillet, absinthe. Resurrection in equal parts.", page: "cocktails/absinthe.html", tags: ["herbal","citrus","complex","bright","sour","clean","neat"] },
        { name: "Necromancer", tagline: "Elderflower and absinthe raise the dead.", page: "cocktails/absinthe.html", tags: ["herbal","floral","complex","light","clean","neat"] },
        { name: "Millionaire", tagline: "Bourbon, absinthe, and egg white. Rich in every sense.", page: "cocktails/absinthe.html", tags: ["sweet","sour","foam","egg-white","strong","complex"] },

        // ─── Bubbly ───────────────────────────────────────────
        { name: "French 75", tagline: "Gin, lemon, and champagne. Celebratory artillery.", page: "cocktails/bubbly.html", tags: ["bubbly","sparkling","citrus","light","bright","sweet","refreshing"] },
        { name: "Aperol Spritz", tagline: "Bitter, bubbly, and the color of sunset.", page: "cocktails/bubbly.html", tags: ["bitter","bubbly","sparkling","refreshing","light","bright"] },
        { name: "Pimm\u2019s Cup", tagline: "A garden party in a glass.", page: "cocktails/bubbly.html", tags: ["fruity","refreshing","herbal","light","sweet","sparkling","bubbly"] },
        { name: "Kir Royale", tagline: "Champagne blushing with cassis.", page: "cocktails/bubbly.html", tags: ["bubbly","sparkling","sweet","fruity","light"] },

        // ─── Cream & Dessert ──────────────────────────────────
        { name: "Grasshopper", tagline: "Mint, chocolate, and cream. A liquid after-dinner mint.", page: "cocktails/cream.html", tags: ["creamy","sweet","dessert","herbal"] },
        { name: "Pink Squirrel", tagline: "Nutty, pink, and impossibly smooth.", page: "cocktails/cream.html", tags: ["creamy","sweet","dessert","fruity"] },
        { name: "Key Lime Martini", tagline: "Key lime pie, hold the fork.", page: "cocktails/cream.html", tags: ["creamy","sweet","citrus","dessert"] },
        { name: "White Russian", tagline: "The Dude abides. Coffee, cream, and vodka.", page: "cocktails/cream.html", tags: ["creamy","coffee","sweet","dessert","chocolate"] },
        { name: "Gin Alexander", tagline: "The Alexander\u2019s botanical cousin.", page: "cocktails/cream.html", tags: ["creamy","sweet","dessert","chocolate"] },
        { name: "Chocolate Flip", tagline: "Chartreuse, cocoa, and a whole egg. Dare you.", page: "cocktails/cream.html", tags: ["creamy","chocolate","dessert","herbal","foam","egg-white","complex"] }
    ];

    var quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    var steps = quizContainer.querySelectorAll('.quiz-step');
    var result = document.getElementById('quizResult');
    var selectedTags = [];
    var isSurprise = false;

    // Handle option clicks
    quizContainer.addEventListener('click', function(e) {
        var btn = e.target.closest('.quiz-option');
        if (!btn) return;

        var tags = btn.getAttribute('data-tags').split(',');

        if (tags.indexOf('surprise') !== -1) {
            isSurprise = true;
        } else {
            selectedTags = selectedTags.concat(tags);
        }

        var currentStep = btn.closest('.quiz-step');
        var stepNum = parseInt(currentStep.getAttribute('data-step'));

        currentStep.classList.remove('active');
        currentStep.classList.add('done');

        if (stepNum < steps.length) {
            steps[stepNum].classList.add('active');
        } else {
            showResult();
        }
    });

    function showResult() {
        var pick;

        if (isSurprise && selectedTags.length < 3) {
            pick = cocktails[Math.floor(Math.random() * cocktails.length)];
        } else {
            var scored = cocktails.map(function(c) {
                var score = 0;
                selectedTags.forEach(function(tag) {
                    if (c.tags.indexOf(tag) !== -1) score++;
                });
                return { cocktail: c, score: score };
            });

            scored.sort(function(a, b) { return b.score - a.score; });

            var topScore = scored[0].score;
            var topPicks = scored.filter(function(s) { return s.score === topScore; });
            pick = topPicks[Math.floor(Math.random() * topPicks.length)].cocktail;
        }

        document.getElementById('resultName').textContent = pick.name;
        document.getElementById('resultTagline').textContent = pick.tagline;
        document.getElementById('resultPage').innerHTML = '<a href="' + pick.page + '">Find the recipe &rarr;</a>';

        result.classList.add('active');
    }

    // Restart
    document.getElementById('quizRestart').addEventListener('click', function() {
        selectedTags = [];
        isSurprise = false;
        result.classList.remove('active');
        steps.forEach(function(step) {
            step.classList.remove('active');
            step.classList.remove('done');
        });
        steps[0].classList.add('active');
    });

})();
