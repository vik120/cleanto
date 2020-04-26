import { bus } from '../../main';

export default {
  name: 'bookingsummary',
  components: {},
  props: {
    serviceTime: String,
    serviceDate: Object,
    duration: String,
    subServiceInfo: Array,
    getTotalTime: Number,
    getSubTotal: '',
    getDiscount: Number

  },
  data () {
    return {
      serviceName: '',
      serviceInfo: [],
      serialcounter: 0,
      taxPrice: 10,
      totalDiscountPrice: 0,
      totalTaxPrice: 0
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
    spliceItem(obj){
     // var existingIds = this.serviceInfo.map((obj) => obj.servicename);
     // this.serviceInfo.forEach((element, index) => {
     //    if (element.servicename === obj) {
     //      console.log(element, index);
     //      this.serviceInfo.splice(index, 1);
          
     //    };
     //  });
       this.serialcounter = this.serialcounter - 1;
       bus.$emit('splice', obj);
    },

    calcDiscount: function(subtotal, discount = 0){
      
      let totalDiscount = 0
      
      if(discount > 0){

        totalDiscount = (subtotal * discount)/100;
        
      }else if(discount = 0){

        totalDiscount = 0;         
      }

      this.totalDiscountPrice = totalDiscount;

      return totalDiscount;

    
//      return totalDiscount;
    },

    calTaxes: function(subtotal, discount = 0, taxPercent){
      let totalDiscount = 0
      let tax = 0;
    
      if(discount > 0){
    
        tax = ((subtotal - discount) * taxPercent) / 100;
        
      }else {
    
        tax = (subtotal * taxPercent) / 100;
      }

      this.totalTaxPrice = tax;

      return tax;

    },

    calcTotal: function(subtotal, discount = 0, tax){

      

      let totalprice = 0;
      let discountPrice = 0;
      let taxPrice = 0;

      if(discount > 0){
      
        discountPrice = (subtotal * discount) / 100;
        taxPrice = ((subtotal - discountPrice) * tax) / 100;
        return totalprice = subtotal + taxPrice;
      
      }else if(discount = 0){
        
        taxPrice = (subtotal * tax) / 100;
        return taxPrice;
      
      }
    }

  },
  filters: {
    toUTC: function(val){

    },

    toHours: function(num){
     
      var hours = (num / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + " hour(s) " + rminutes + " minute(s)."; 
    },

    convertToCurrency: function(monetary_value){
     let i = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2
            }).format(monetary_value); 

      return i;
    }
  },

  watch: {

  },
  created(){

    bus.$on('servicename', (data) => {
        this.serviceName = data;
    });

    bus.$on('extraservice', (data) => {
        this.serviceInfo = data;
        this.serialcounter++;
    });
  },

  updated() {
     
  },

  watch:{    
  }
}
