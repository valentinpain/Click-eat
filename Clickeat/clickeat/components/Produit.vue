<template>
    <div class="card text-white bg-dark mb-3" style="max-width:18rem;">
          <div class="card-header">{{nom}}</div>
          <div class="card-body">
            <p class="card-text">Prix: {{prix}}</p>
        </div>
      </div>
</template>

<script>
export default {
    name: "ProduitComponent",
    props: ['nom','prix']
}
</script>
