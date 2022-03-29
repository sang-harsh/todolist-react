import React from 'react'

function CardContainer() {
  return (
    <div class="projectFlex">
        <div class="project">
          <a href="https://sang-harsh.github.io/rentomojo/#/" target="_blank">
            <img src="./images/Blog-Website.png" class="projectImage" />
            <div class="projectInfo">
              <div class="projectTitle">Rentomojo</div>
              <div class="date">Jan 2022</div>
            </div>
            <span class="projectText">
              This a Simple Blog website created using React with the use of
              different Hooks, React Router for for basic linking of pages,
              React Bootstrap to create a table on the homepage and basic
              styling and an open source API
              "https://jsonplaceholder.typicode.com/"
            </span>
            <div class="teckStack">
              <div class="stack">React</div>
              <div class="stack" style="background-color: rgb(215, 250, 242)">
                React Router
              </div>
              <div class="stack">React Bootstrap</div>
              <div class="stack" style="background-color: rgb(215, 250, 242)">
                GitHub Pages
              </div>
            </div>
          </a>
        </div>

        <div class="project">
          <img src="./images/a.png" class="projectImage"/>
          <div class="projectInfo">
            <div class="projectTitle">Buy Fresh</div>
            <div class="date">Dec 2021</div>
          </div>
          <span class="projectText">
            A Travel Guide website created using React JS , Rapid API , Google Maps Cloud platform,etc.
            This provides information on Restaurants , Hotels and Attractions of a perticular place.
            Also provides a basic map view of a perticular location and renders the details accordingly.
          </span>
          <div class="teckStack">
            <div class="stack">React</div>
            <div class="stack" style="background-color: rgb(215, 250, 242)">
              Rapid API
            </div>
            <div class="stack">Material UI</div>
            <div class="stack" style="background-color: rgb(215, 250, 242)">
              Google Maps
            </div>
          </div>
        </div>
        </div>
  )
}

export default CardContainer;