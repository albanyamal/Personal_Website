/**
 * Custom component representing the key buttons attached to the sidebar.
 * Used to select key symbols that are then added to the text areas on the log page.
 * @extends HTMLElement
 */
 class customNavbar extends HTMLElement {
    constructor() {
        super();

        // const template = document.createElement('template');

        this.innerHTML = `
        
        
          <style>
            .container-fluid {
                padding: 2% 5% 2% 5%;
                color: #fff;
            }
            
            
            
            /* Navigation Bar */
            .navbar {
                /* padding: 0 0 1.5rem; */
            }
            
            .navbar-brand {
                font-family: 'M PLUS Code Latin', sans-serif;;
                font-size: 2.5rem;
                font-weight: bold;
            }
            
            .nav-item {
                padding: 0 18px;
            }
            
            .nav-link {
                font-family:  'Work Sans', sans-serif;
            }   
          </style>
          <!-- Navbar Start -->


          <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="index.html">amal_kaduwela</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <form class="d-flex">
              <ul class="navbar-nav d-flex">
                  <li class="nav-item">
                  <a class="nav-link" href="index.html" onclick="window.open('index.html', '_self');">About Me</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="resume.html" onclick="window.open('resume.html', '_self');">Experience</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="music.html" onclick="window.open('music.html', '_self');">Music</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="projects.html" onclick="window.open('projects.html', '_self');">Projects</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="links.html" onclick="window.open('links.html', '_self');">Links</a>
                  </li>
              </ul>
              </form>
          </div>
          </nav>
          <!-- Navbar End -->

          `;

        // this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

        let title = document.querySelector(".big-heading");
        let navLinks = this.querySelectorAll(".nav-link");
        let navItems = this.querySelectorAll(".nav-item");
        for(let i = 0; i < navLinks.length; i++){
            console.log(i);
            if(navLinks[i].innerHTML === title.innerHTML){
                navItems[i].classList.add("active");
            }
        }
        

    }
}

customElements.define('custom-navbar', customNavbar);