let tweets = [];

let likeBtnContent = `
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M512,304.021c0-12.821-5.099-24.768-13.867-33.6c9.963-10.901,15.019-25.536,13.632-40.725
        c-2.475-27.115-26.923-48.363-55.616-48.363H324.395c6.485-19.819,16.939-56.149,16.939-85.333c0-46.272-39.317-85.333-64-85.333
        c-22.165,0-38.016,12.459-38.677,12.992c-2.539,2.048-3.989,5.099-3.989,8.341v72.32l-61.44,133.141l-2.56,1.28v-4.075
        c0-5.888-4.779-10.667-10.667-10.667H53.333C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64
        c23.083,0,42.773-14.72,50.219-35.243c17.749,9.131,41.643,13.931,56.469,13.931H419.84c23.232,0,43.541-15.68,48.32-37.269
        c2.453-11.115,1.024-22.315-3.84-32.043c15.744-7.936,26.347-24.171,26.347-42.688c0-7.552-1.728-14.784-5.013-21.333
        C501.397,338.752,512,322.517,512,304.021z M149.333,448c0,17.643-14.379,32-32,32h-64c-17.664,0-32-14.357-32-32V277.333
        c0-17.643,14.357-32,32-32v0.107h95.957v10.667c0,0.064,0.043,0.107,0.043,0.171V448z M466.987,330.368
        c-4.117,0.469-7.595,3.264-8.896,7.211c-1.301,3.925-0.235,8.277,2.795,11.115c5.44,5.141,8.427,12.011,8.427,19.349
        c0,13.44-10.155,24.768-23.637,26.304c-4.117,0.469-7.595,3.264-8.896,7.211c-1.301,3.925-0.235,8.277,2.795,11.115
        c7.04,6.635,9.856,15.936,7.744,25.472c-2.624,11.883-14.187,20.523-27.499,20.523H224c-15.851,0-41.365-6.848-53.333-15.744
        V262.656l15.381-7.68c2.155-1.088,3.883-2.88,4.907-5.077l64-138.667c0.64-1.387,0.981-2.923,0.981-4.459V37.909
        c4.437-2.453,12.139-5.803,21.333-5.803c11.691,0,42.667,29.077,42.667,64c0,37.525-20.416,91.669-20.629,92.203
        c-1.237,3.264-0.811,6.955,1.195,9.835c2.005,2.88,5.269,4.608,8.789,4.608h146.795c17.792,0,32.896,12.715,34.389,28.971
        c1.131,12.16-4.672,23.723-15.168,30.187c-3.285,2.005-5.205,5.653-5.056,9.493c0.128,3.84,2.347,7.296,5.781,9.067
        c9.003,4.608,14.592,13.653,14.592,23.595C490.603,317.504,480.448,328.832,466.987,330.368z" />
                            </g>
                        </g>
                    </svg>
`;

let retweetBtnContent = `
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 247.235 247.235"
                        style="enable-background:new 0 0 247.235 247.235;" xml:space="preserve">
                        <g>
                            <path d="M204.912,183.175h-165.2v-39.771h21.712c2.196,0,4.216-1.199,5.268-3.127s0.966-4.276-0.224-6.122L38.756,91.133
        c-1.104-1.715-3.004-2.751-5.044-2.751s-3.939,1.036-5.044,2.751L0.956,134.154c-1.189,1.846-1.275,4.194-0.224,6.122
        s3.072,3.127,5.268,3.127h21.712v45.771c0,3.313,2.686,6,6,6h171.2c3.313,0,6-2.687,6-6S208.226,183.175,204.912,183.175z
        M33.712,105.462l16.71,25.941h-33.42L33.712,105.462z" />
                            <path d="M246.502,106.958c-1.052-1.928-3.071-3.127-5.268-3.127h-21.712V58.06c0-3.313-2.687-6-6-6h-171.2c-3.313,0-6,2.687-6,6
        s2.687,6,6,6h165.2v45.771c0,3.313,2.687,6,6,6h16.71l-16.71,25.941l-22.669-35.19c-1.794-2.786-5.506-3.59-8.293-1.795
        c-2.786,1.794-3.59,5.508-1.795,8.293l27.713,43.021c1.104,1.715,3.004,2.751,5.044,2.751s3.939-1.036,5.044-2.751l27.712-43.021
        C247.468,111.234,247.554,108.886,246.502,106.958z" />
                        </g>
                    </svg>
    `;

let newsfeed = document.getElementById("newsfeed");


document.getElementById("tweetFrom").onsubmit = function (ev) {
    ev.preventDefault();
    ev.stopPropagation();

    let username = document.getElementById("username").value;
    let tweet = document.getElementById("tweet").value;

    if (username == "") {
        alert("Username Filed Required");
    } else if (tweet == "") {
        alert("Tweet Filed Required");
    } else {

        let newTweet = {
            username: username,
            tweet: tweet
        };

        let newItem = document.createElement('div');
        newItem.classList.add('item');

        let newItemUsername = document.createElement('h3');
        newItemUsername.innerHTML = username;

        let newItemTweet = document.createElement('p');
        newItemTweet.innerHTML = tweet;

        let newItemBtnDiv = document.createElement('div');
        newItemBtnDiv.classList.add('btn-group');

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.addEventListener("click", function (ev) {
            let item = ev.target.closest(".item");
            item.getElementsByTagName("p")[0].classList.add("liked");
            // ev.target.classList.add("clicked");
        });
        likeBtn.innerHTML = likeBtnContent;

        let retweetBtn = document.createElement('button');
        retweetBtn.classList.add('retweet-btn');
        retweetBtn.addEventListener("click", function (ev) {
            let parent = ev.target.closest(".item");
            retweet(parent);
        });
        retweetBtn.innerHTML = retweetBtnContent;

        newItemBtnDiv.appendChild(likeBtn);
        newItemBtnDiv.appendChild(retweetBtn);

        newItem.appendChild(newItemUsername);
        newItem.appendChild(newItemTweet);
        newItem.appendChild(newItemBtnDiv);

        newsfeed.prepend(newItem);

        tweets.push(newTweet);

        if (tweets.length > 0) {
            document.getElementById("noTweets").style.display = 'none';
        }

    }
};

function retweet(item) {
    let username = item.getElementsByTagName("h3")[0].textContent;
    let tweet = item.getElementsByTagName("p")[0].textContent;

    let newTweet = {
        username: username,
        tweet: tweet
    };

    let newItem = document.createElement('div');
    newItem.classList.add('item');

    let newItemUsername = document.createElement('h3');
    newItemUsername.innerHTML = username;

    let newItemTweet = document.createElement('p');
    newItemTweet.innerHTML = tweet;

    let newItemBtnDiv = document.createElement('div');
    newItemBtnDiv.classList.add('btn-group');

    let likeBtn = document.createElement('button');
    likeBtn.classList.add('like-btn');
    likeBtn.addEventListener("click", function (ev) {
        let item = ev.target.closest(".item");
        item.getElementsByTagName("p")[0].classList.add("liked");
        // ev.target.classList.add("clicked");
    });
    likeBtn.innerHTML = likeBtnContent;

    let retweetBtn = document.createElement('button');
    retweetBtn.classList.add('retweet-btn');
    retweetBtn.addEventListener("click", function (ev) {
        let parent = ev.target.closest(".item");
        retweet(parent);
    });
    retweetBtn.innerHTML = retweetBtnContent;

    newItemBtnDiv.appendChild(likeBtn);
    newItemBtnDiv.appendChild(retweetBtn);

    newItem.appendChild(newItemUsername);
    newItem.appendChild(newItemTweet);
    newItem.appendChild(newItemBtnDiv);

    newsfeed.prepend(newItem);

    tweets.push(newTweet);

}