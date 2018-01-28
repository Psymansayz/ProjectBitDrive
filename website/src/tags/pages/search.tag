<search>
  <p class="title is-1 has-text-centered">Search</p>
  <div class="columns is-tablet">
    <div class="column is-one-quarter">
      <div class="field">
        <label class="label">Search</label>
        <div class="control">
          <input class="input" type="text" placeholder="Search...">
        </div>
      </div>
      <div class="field">
        <label class="label">Category</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Added By</th>
            <th>Category</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr each="{ searchItems }">
            <th>{ name }</th>
            <th>{ author }</th>
            <th>{ category }</th>
            <th>{ type }</th>
            <th>{ date }</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <script>
    this.on('mount', async () => {
      const res = await fetch('http://localhost:3001/blocks')
      this.searchItems = await res.json()
      this.searchItems = this.searchItems.map((item) => {
        let out = {}
        try {
          out = JSON.parse(item.data)
        } catch (e) {
          out = {}
        }
        return out
      })
      console.log(this.searchItems)
      this.update()
    })
  </script>
</search>
