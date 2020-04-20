import $ from 'jquery';
import { bus } from '../../main.js';

export default {
  name: 'itempanel',
  components: {},
  props: {
    itemcontent: Object,
    
  },

  data () {
    return {
      counter: 1,
      extraservice: false,
      serviceObj: {},
      itemExtraServiceInfo: [],
      spliceItem: ''
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace(',', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    add(value, name, time, price){
      if(this.counter < value){
        this.counter++;
        this.sendExtraService( name, price, this.counter, time);

      }
    },

    minus(value,  name, time, price){
      if(this.counter > value){
        this.counter--;
        this.sendExtraService( name, price, this.counter, time);
      }
    },

    sendExtraService(val, price, qty = 1, time){
      
      if(this.extraservice){

        var obj = {
          servicename: val,
          serviceprice: price * qty,
          serviceqty : qty,
          serviceTime: time * qty
        }

        this.itemExtraServiceInfo = obj;
        this.$emit('sendExtraService', this.itemExtraServiceInfo);
      
      }
    }

  },
  created() {
     bus.$on('splice', (data) => {
        this.spliceItem = data;

        if(this.itemcontent.name == data){
          this.extraservice = false;

          if(this.itemcontent.haveQuanity){ 
            this.counter = 1;
          }

        }
    })
  }
}
