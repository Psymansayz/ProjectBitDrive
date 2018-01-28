<page-router>
  <router>
    <route path="/">
      <home></home>
    </route>
    <route path="/aboutUs">
      <aboutUs></aboutUs>
    </route>
    <route path="/search">
      <search></search>
    </route>
    <route path="*">
      <notFound></notFound>
    </route>
    <route path="*/*">
      <notFound></notFound>
    </route>
  </router>
</page-router>
