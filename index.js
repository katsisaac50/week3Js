console.log("script loaded")
let readBooks = ["dale_carnegie_how_to_win_friends_and_influence_people", "obama_dreams_from_my_father", "napoleon_hill_think_big_and_grow_rich", "napoleon_hill_law_of_success", "alice_is_everyone_hanging_out_without me", "celeste_ng_everything_i_never_told_you", "nelson_mandela_long_walk_to_freedom", "nelson_mandela_and_fidel_castro_how_far_we_slaves_have_come", "janet_cherry_spear_of_the_nation", "aime_cesaire_discourseon_colonialism"]
	/*
    function books(read_Books) {
        let book_id = "";
        for (let i = 0; i < readBooks.length; i++) {
            book_id += readBooks[i]
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            document.querySelector("body").appendChild(ul);
            ul.appendChild(li);
            li.innerHTML = readBooks[i];
        }
        return book_id;
    }

    console.log(books(readBooks))*/
let book_s = [{
	book_id: "how_to_win_friends_and_influence_people",
	title: "how to win friends and influence people",
	author: "dale carnegie",
	language: "english",
	bookCover: "img/4865.jpg",
}, {
	book_id: "dreams_from_my_father",
	title: "dreams from my father",
	author: "obama",
	language: "english",
	bookCover: "img/9781921351433.jpg",
}, {
	book_id: "think_big_and_grow_rich",
	title: "think big and grow rich",
	author: "napoleon hill",
	language: "english",
	bookCover: "img/book-think-and-grow-rich.jpg",
}, {
	book_id: "everything_i_never_told_you",
	title: "everything i never told you",
	author: "celeste ng",
	language: "english",
	bookCover: "img/EVERYTHING I NEVER TOLD YOU.jpg",
}, {
	book_id: "everyone_hanging_out_without_me",
	title: "everyone hanging out without me",
	author: "alice",
	language: "english",
	bookCover: "img/10335308.jpg",
}, {
	book_id: "long_walk_to_freedom",
	title: "long walk to freedom",
	author: "nelson madenla",
	language: "english",
	bookCover: "img/Long-Walk-to-Freedom.jpg",
}, {
	book_id: "how_far_we_slaves_have_come",
	title: "how far we slaves have come",
	author: "nelson mandela and fiderocastro",
	language: "english",
	bookCover: "img/How-Far-We-Slaves-Have-Come_FINAL.jpg",
}, {
	book_id: "spear_of_the_nation",
	title: "spear of the nation",
	author: "janet cherry",
	language: "english",
	bookCover: "img/spear_of_the_nation.jpg",
}, {
	book_id: "discourseon_colonialism",
	title: "discourseon colonialism",
	author: "aime_cesaire",
	language: "english",
	bookCover: "img/513+NepPdvL._SX331_BO1204203200_.jpg",
}, {
	book_id: "law_of_success",
	title: "law of success",
	author: "napoleon hill",
	language: "english",
	bookCover: "img/LAW OF SUCCESS.jpeg",
}, ]
let content = document.createElement("div");
document.querySelector("body").appendChild(content);
content.className = "wrapper";
let heading = document.createElement("h1");
heading.style.position = "absolute";
heading.style.top = 0 + 'px';
//heading.style.left = 0 + 'px';
document.querySelector("body").appendChild(heading);
heading.innerHTML = "THE BOOKS I HAVE READ OR TO BE READ";

function books(read_Books) {
	let book_id = "";
	for (let i = 0; i < book_s.length; i++) {
		book_id += book_s[i];
		let container = document.createElement("div");
		container.className = "grid";
		let Title = document.createElement("h3");
		let ul = document.createElement("ul");
		let author = document.createElement("li");
		let lang = document.createElement("li");
		let bookImg = document.createElement("img");
		//document.querySelector("body").appendChild(container);
		content.appendChild(container);
		container.appendChild(bookImg);
		container.appendChild(Title);
		container.appendChild(ul);
		ul.appendChild(author);
		ul.appendChild(lang);
		Title.innerHTML = book_s[i].title;
		author.innerHTML = book_s[i].author;
		lang.innerHTML = book_s[i].language;
		bookImg.src = book_s[i].bookCover;
		bookImg.className = "img";
	}
	return book_id;
}
console.log(books(readBooks))
/*let div = document.createElement("div");
    document.querySelector("body").appendChild(div)
    div.id = "contain";


    function createNewUL() {
        let i = 0;
        while (i < books.length) {
            let books_list = document.createElement("ul");
            document.getElementById("contain").appendChild(books_list)
            books_list.id = books[i].title;
            i++
        }
    }

    createNewUL();

    function newListItems() {
        for (let i = 0; i < books.length; i++) {
            let j = 0;
            while (j < books.length) {
                let bookTitle = document.createElement("h3");
                document.getElementById(books[i].title).appendChild(bookTitle)
                bookTitle.className = "title";
                bookTitle.innerHTML = books[i].title.replace(/_/g, " ");
            }
        }
    }

    newListItems();
    /*
    for (i = 0; i < books.length; i++) {
        //console.log(books[i])
        const body = document.querySelector('body');
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        h1.innerHTML = books[i].title;
        h2.innerHTML = books[i].author;
        p.innerHTML = books[i].language;
        li.innerHTML = "My favorite dish is" + " " + books[i].book_id;
        body.appendChild(div);
        body.appendChild(h1);
        body.appendChild(h2);
        body.appendChild(p);
        body.appendChild(ul);
        ul.appendChild(li);
        div.appendChild(ul);

    }

    let newObject = [{
        "how_to_win_friends_and_influence_people": ".img/4865.jpg",
        "dreams_from_my_father": ".img/9781921351433.jpg",
        "think_big_and_grow_rich": ".img/book-think-and-grow-rich.jpg",
        "everything_i_never_told_you": ".img/EVERYTHING I NEVER TOLD YOU.jpg",
        "everyone_hanging_out_without_me": ".img/10335308.jpg",
        "long_walk_to_freedom": ".img/Long-Walk-to-Freedom.jpg",
        "how_far_we_slaves_have_come": ".img/How-Far-We-Slaves-Have-Come_FINAL.jpg",
        "spear_of_the_nation": ".img/spear_of_the_nation",
        "discourseon_colonialism": ".img/513+NepPdvL._SX331_BO1204203200_.jpg",
        "law_of_success": ".img/LAW OF SUCCESS.jpeg",

    }]*/
