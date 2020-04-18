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
      serviceObj: {}
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

    add(value){
      if(this.counter < value){
        this.counter++;
      }
    },

    minus(value){
      if(this.counter > value){
        this.counter--;
      }
    },

    getServiceInfo(val, price, qty = 1){
      console.log(val, price, qty);
    }

  },
  created() {

  }
}
