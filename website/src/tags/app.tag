<app>

  <router>
    <route path="/">
      <section class="hero is-primary is-fullheight video">
        <hero-video></hero-video>

        <hero-head></hero-head>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-1">
              Project Data Shield
            </h1>
            <h2 class="subtitle">
              <a class="button is-large is-success" href="/search">Search Data</a>
            </h2>
          </div>
        </div>
        <hero-foot></hero-foot>
      </section>
    </route>
    <route path="/search">
      <section class="hero is-primary">

        <hero-head></hero-head>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-1">
              Project Data Shield
            </h1>
          </div>
        </div>
        <hero-foot></hero-foot>
      </section>
    </route>
    <route path="*">
      <section class="hero is-primary">

        <hero-head></hero-head>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-1">
              Project Data Shield
            </h1>
            <h2 class="subtitle">
              <a class="button is-large is-success" href="/search">Search Data</a>
            </h2>
          </div>
        </div>
        <hero-foot></hero-foot>
      </section>
    </route>
  </router>

  <div class="container">
    <page-router></page-router>
  </div>
  <script>
  this.genImages = () => {
    document.querySelector('generator')._tag.trigger('mount')
  }
  </script>
</app>
