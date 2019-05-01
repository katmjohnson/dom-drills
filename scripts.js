document.addEventListener("DOMContentLoaded", function() {
    let someDiv = document.createElement('header-container');
    
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    h1.className = 'h1';
     h1.appendChild(h1Text);
    someDiv.appendChild(h1);
    document.body.appendChild(someDiv);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");
    h2.className = 'h2';
    h2.appendChild(h2Text);
    someDiv.appendChild(h2);
    document.body.appendChild(someDiv);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    h3.className = 'h3'
    h3.appendChild(h3Text);
    someDiv.appendChild(h3);
    document.body.appendChild(someDiv);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    h4.className = 'h4';
    h4.appendChild(h4Text);
    someDiv.appendChild(h4);
    document.body.appendChild(someDiv);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    h5.className = 'h5'
    h5.appendChild(h5Text);
    someDiv.appendChild(h5);
    document.body.appendChild(someDiv);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    h6.className = 'h6'
    h6.appendChild(h6Text);
    someDiv.appendChild(h6);
    document.body.appendChild(someDiv);

    let colors = ["pink", "orange", "green", "red", "blue", "yellow","brown", "grey"];
    function getRandomColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    };

    h1.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add a new list');
    button.className = 'listButton';
    button.appendChild(btnText);
    someDiv.appendChild(button);
    document.body.appendChild(someDiv);

    let list = document.createElement('list');
    someDiv.appendChild(list);
    document.body.appendChild(someDiv);


    let l = 1;
    function addToList() {
        let li = document.createElement('li');
        list.appendChild(li);
        let liText = document.createTextNode(`This is list item ${(l)}`);
        li.appendChild(liText);
        l = (l + 1);

        li.addEventListener("click", function(){
            let randomColor = getRandomColor();
            li.style.color = randomColor;
        });

        li.addEventListener("dblclick", function(){
            this.remove();
          
        });
    };

    button.addEventListener("click", addToList);
         
})

