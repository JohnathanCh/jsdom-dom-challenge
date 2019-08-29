window.onload = () => {
    let counter = document.querySelector("#counter");
    let decrement = document.querySelector("#dec");
    let increment = document.querySelector("#inc");
    let heart_button = document.querySelector("#heart");
    let pause = document.querySelector("#pause");
    let likes = document.querySelector(".likes");
    let comment_form = document.getElementById("comment-form")
    console.log("comment_form", comment_form)


    // console.log("likes", likes);
    setInterval(increment_value, 1000);

    increment.addEventListener('click', increment_value);
    decrement.addEventListener('click', decrement_value);
    heart_button.addEventListener('click', like_number);
    pause.addEventListener('click', pause_and_start);

    comment_form.addEventListener('submit', submitComment);

    function submitComment(e) {
        e.preventDefault()
        console.log("submitted", e.target)
    }


    function increment_value() {
        let num = parseInt(counter.innerText)
        counter.innerHTML = num + 1
    };

    function decrement_value() {
        let num = parseInt(counter.innerText)
        if (num != 0) {
            counter.innerHTML = num - 1
        };
    };

    function like_number() {
        let num = parseInt(counter.innerText);
        let count = 1;

        if (document.querySelector('[data-num="' + num + '"]')) {
            count += 1;
            let old_li = document.querySelector('[data-num="' + num + '"]');
            old_li.innerText = `${num} has been liked ${count} times.`;
        } else {
            let li = document.createElement('li');
            li.setAttribute("data-num", num);
            li.innerHTML = `${num} has been liked 1 time.`;
            likes.appendChild(li);
        }

        // console.log(likes.innerHTML);
        // li.innerText = "Yep";
        // likes.appendChild(li);
    };

    function pause_and_start() {
        console.log("pause and start");
    };
};