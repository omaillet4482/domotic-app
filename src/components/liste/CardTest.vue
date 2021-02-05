<template>
 

 <div class="col">
  
<div class="card-header bg-success ">
    <span  >{{idx}}</span>
    
  
      <b-icon icon="x-square"  variant="danger" class="mb float-right"   @click="supp"  ></b-icon>
 
    
  </div>
  <div class="card-body">
    
    <p class="card-text">{{data}}</p>
    
  </div>
  <div class="card-footer text-muted">
    {{date}}
  </div>

 
 </div>


</template>

<script lang="ts">
import { Component,  Prop,  Vue} from 'vue-property-decorator';



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