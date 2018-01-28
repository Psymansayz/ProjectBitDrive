<logo-image>

  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img ref="image">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <span class="icon is-medium">
          <i class="material-icons">thumb_up</i>
        </span>
        <span class="icon is-medium">
          <i class="material-icons">thumb_down</i>
        </span>
      </div>
    </div>
  </div>

  <script>
    this.on('mount', async () => {
      this.refs.image.src = URL.createObjectURL(this.opts.attachment[Object.keys(this.opts.attachment)[0]].data)
    })
  </script>
</logo-image>
