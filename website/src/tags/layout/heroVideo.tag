<hero-video class="hero-video">
  <script>
  const cloudinary = require('../../scripts/cloudinary')
  this.on('mount', () => {
    this.video = cloudinary.videoTag('792677592_lrivm8', {autoplay: true, muted: true, loop: true, controls: false, quality: 60, audio_codec: 'none', width: window.innerWidth, crop: 'scale'}).toHtml()
    this.root.innerHTML = this.root.innerHTML + this.video
    console.log(this.video)
  })
  </script>
</hero-video>
