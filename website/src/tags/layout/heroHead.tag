<hero-head class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" onclick="{ toggleMenu }" ref="burger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu" ref="menu">
          <div class="navbar-end">
            <a class="navbar-item" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
    <script>
    this.toggleMenu = async () => {
      this.refs.menu.classList.toggle('is-active')
      this.refs.burger.classList.toggle('is-active')
    }
    </script>
</hero-head>
