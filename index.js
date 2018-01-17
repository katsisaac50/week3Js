console.log("script loaded")
let readBooks = ["dale carnegie how to win friends and influence people", "obama dreams from my father", "napoleon hill think big and grow rich", "napoleon hill law of success", "alice is everyone hanging out without me", "celeste ng everything i never told you", "nelson mandela long walk to freedom", "nelson mandela and fidel castro how far we slaves have come", "janet cherry spear of the nation", "aime cesaire discourseon colonialism"]


let books = [{
        book_id: "how_to_win_friends_and_influence_people",
        title: "how to win friends and influence people",
        author: "dale carnegie",
        language: "english",


    },
    {
        book_id: "dreams_from_my_father",
        title: "dreams from my father",
        author: "obama",
        language: "english",


    },
    {
        book_id: "think_big_and_grow_rich",
        title: "think big and grow rich",
        author: "napoleon hill",
        language: "english",


    },
    {
        book_id: "everything_i_never_told_you",
        title: "everything i never told you",
        author: "celeste ng",
        language: "english",


    },
    {
        book_id: "everyone_hanging_out_without_me",
        title: "everyone hanging out without me",
        author: "alice",
        language: "english",


    },
    {
        book_id: "long_walk_to_freedom",
        title: "long walk to freedom",
        author: "nelson madenla",
        language: "english",


    },
    {
        book_id: "how_far_we_slaves_have_come",
        title: "how far we slaves have come",
        author: "nelson mandela and fiderocastro",
        language: "english",


    },
    {
        book_id: "spear_of_the_nation",
        title: "spear of the nation",
        author: "janet cherry",
        language: "english",


    },
    {
        book_id: "discourseon_colonialism",
        title: "discourseon colonialism",
        author: "aime_cesaire",
        language: "english",


    },
    {
        book_id: "law_of_success",
        title: "law of success",
        author: "napoleon hill",
        language: "english",


    },

]



for (i = 0; i < books.length; i++) {
    //console.log(books[i])
    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    h1.innerHTML = books[i].title;
    h2.innerHTML = books[i].author;
    p.innerHTML = books[i].language;
    li.innerHTML = "My favorite dish is" + " " + books[i].book_id;
    body.appendChild(h1);
    body.appendChild(h2);
    body.appendChild(p);
    body.appendChild(ul);
    ul.appendChild(li);
}

let newObject = [{
    "how_to_win_friends_and_influence_people": ".4865.jpg",
    "dreams_from_my_father": ".9781921351433.jpg",
    "think_big_and_grow_rich": "book-think-and-grow-rich.jpg",
    "everything_i_never_told_you": "EVERYTHING I NEVER TOLD YOU.jpg",
    "everyone_hanging_out_without_me": "10335308.jpg",
    "long_walk_to_freedom": "Long-Walk-to-Freedom.jpg",
    "how_far_we_slaves_have_come": "How-Far-We-Slaves-Have-Come_FINAL.jpg",
    "spear_of_the_nation": "spear_of_the_nation",
    "discourseon_colonialism": "513+NepPdvL._SX331_BO1204203200_.jpg",
    "law_of_success": "LAW OF SUCCESS.jpeg",

}]
let ul = document.createElement("ul");


for (i = 0; i < newObject.length; i++) {
    console.log(newObject[i])

    li.innerHTML = "My favorite dish is" + " " + newObject[i];

}



//console.log(Object.getOwnPropertyNames(newObject));

let img = document.createElement("img");

img.src = "4865.jpg";
let src = document.querySelector("h1");


src.appendChild(img);
books