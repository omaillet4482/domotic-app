<template>
 
<div class="cols-4">
 <b-card-group class="row row-cols-1"> 
  <CardTest v-for="item in items" :key="item.id"
     :idx="item.id" :data="item.data" :date="item.date"
     @supp="supp"
  ></CardTest>
 </b-card-group>
</div>

</template>

<script lang="ts">
import { Component,  Vue,  } from 'vue-property-decorator';
import CardTest from './liste/CardTest.vue';
import domoticService from '../services/DomoticService';


@Component({
  components: {CardTest}})
export default class ListeTest extends Vue {

  
    public add() {
      //this.items.push({ id: this.counter++ })
    }
  
    public supp(idx:number){
      console.log('  parent component '+idx);

      let pIndex = -1;
          for(let [index, status] of this.items.entries()) {
             
              if(status.id === idx) {
                  pIndex = index;
                  break;
              }
          }
          this.items.splice(pIndex, 1);
    }
 
    public mounted () {
      console.log(" mount ");
      domoticService.initElement(this.items);
    }

    items:Array<any> = [];
    
    
    
   
  
  }
  

</script>

