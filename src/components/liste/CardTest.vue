<template>
 

 <div class="col">
  <b-card 
    
    :footer="date"
    footer-tag="footer"
    style="col"
     

  >
    <template #header class="bg-variant: success">
  
    <span  >{{idx}}</span><b-button @click='supp' >X</b-button>
    </template>
    <b-card-text>{{data}}</b-card-text>
     
  </b-card>
 </div>


</template>

<script lang="ts">
import { Component,  Prop,  Vue,  } from 'vue-property-decorator';



@Component
export default class CardTest extends Vue {

    @Prop()
    private idx!:String;

      @Prop()
    private data!:String;

      @Prop()
    private date!:String;
  
    public add() {
      //this.items.push({ id: this.counter++ })
    }
  
    public supp() {
      console.log(" Action supprimer" + this.idx)
      this.$emit('supp', this.idx);
    }
 
    
  
  }
  

</script>

<style scoped>


.card {
  text-align: left;

}


</style>