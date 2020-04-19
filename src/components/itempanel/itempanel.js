import $ from 'jquery';

export default {
  name: 'itempanel',
  components: {},
  props: {
    itemcontent: Object
  },

  data () {
    return {
      counter: 1,
      extraservice: false,
      serviceObj: {},
      itemExtraServiceInfo: []
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

    add(value, name, price){
      if(this.counter < value){
        this.counter++;
        this.sendExtraService( name, price, this.counter);

      }
    },

    minus(value,  name, price){
      if(this.counter > value){
        this.counter--;
        this.sendExtraService( name, price, this.counter);
      }
    },

    sendExtraService(val, price, qty = 1){
      var obj = {
        servicename: val,
        serviceprice: price,
        serviceqty : qty
      } 

       this.itemExtraServiceInfo.push(obj);
      console.log(this.itemExtraServiceInfo);
      this.$emit('sendExtraService', this.itemExtraServiceInfo);
    }

  },
  created() {

  }
}
