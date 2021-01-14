// VIDEOS IN THE VIDEOS PART #################

let videos_d_cont = document.getElementById('videos_d_cont');

// information objects
let info = [
    {
      title: "How to make diya using HTML CSS",
      views: 588,
      comments: 24,
      likes: 39
    },
    {
      title: "CSS Grid masterclass",
      views: 348,
      comments: 13,
      likes: 9
    },
    {
      title: "Top 10 Javascript Effects for begginers",
      views: 86,
      comments: 4,
      likes: 6
    },
  ];

let eachVideo;
for(let i=0; i<3; i++){
    //mockup for Videos
    eachVideo = `
        <div class="videos_d_eachVideo">
          <div class="videos_d_thumbnail"></div>
          <div class="videos_d_info">
            <p>${info[i].title}</p>
            <div>
              <div>
                <i class="fas fa-chart-bar"></i>
                <p>${info[i].views}</p>
              </div>
              <div>
                <i class="fas fa-comment-alt"></i>
                <p>${info[i].comments}</p>
              </div>
              <div>
                <i class="fas fa-thumbs-up"></i>
                <p>${info[i].likes}</p>
              </div>
            </div>
            <div>
              <i class="fas fa-globe-asia" style="color: dodgerblue"></i>
            </div>
          </div>
        </div>
    `;
    videos_d_cont.innerHTML += eachVideo;
}