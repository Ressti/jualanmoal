<template>
<main>
  <div class="container">
    <div>
      <div class="jumbotron">
        <h2>product</h2>
      </div>
        <div class="row">
          <div class="col-md-4" v-for="produk in products" :key="produk.id">
            <div class="card mb-3">
              <div class="card-header">
                <img :src="produk.foto" width="100%"> 
              </div>
              <div class="card-body">
                <h4>{{ produk.nama }}</h4>
                <h4>Rp{{ produk.harga }}</h4>
                <a href="produk.link_eksternal" class="btn btn-success btn-block">beli di WA</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  data() {
    return {
      products: '',
    }
  },
  mounted() {
    this.ambilData()
  },
  methods: {
    async ambilData() {
      const { data, error } = await this.$supabase
        .from('tb_produk')
        .select()
      if(data) this.products = data
      if(error) console.log(error)
    }
  }
}
</script>