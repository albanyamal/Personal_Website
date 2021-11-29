/**
 * Custom component representing the key buttons attached to the sidebar.
 * Used to select key symbols that are then added to the text areas on the log page.
 * @extends HTMLElement
 */
 class customNavbar extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');

        template.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

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
            <a class="navbar-brand" href="index.html">amalKaduwela</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <form class="d-flex">
                <ul class="navbar-nav d-flex">
                    <li class="nav-item">
                    <a class="nav-link active" href="index.html">About Me</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="links.html">Links</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="">Critique</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="">Non-Written Element</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="">Resume</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="">Music</a>
                    </li>
                </ul>
                </form>
            </div>
            </nav>
          <!-- Navbar End -->
          `;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('custom-navbar', customNavbar);