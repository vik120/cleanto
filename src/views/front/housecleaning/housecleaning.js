import ItemPanel from '../../../components/itempanel/index';
import { bus } from '../../../main';
import $ from 'jquery';

export default {
  name: 'housecleaning',
  components: {
    'item-panel': ItemPanel
  },
  props: [],
  data () {
    return {
      bedroom: '',
      bathroom: '',
      extraService: [
        {
          id: 0,
          image: 'fridge.jpg',
          name: 'Fridge Cleaning',
          price: 5.00,
          haveQuanity: true
        },
        {
          id: 1,
          image: 'ovan.jpg',
          name: 'Oven Cleaning',
          price: 5.00,
          haveQuanity: false
        },
        {
          id: 2,
          image: 'window.jpg',
          name: 'Inside Window Cleaning',
          price: 5.00,
          haveQuanity: false
        } 
      ],
      getServiceInfo: []
    }
  },
  computed: {
    
  },
  mounted () {
    bus.$emit('servicename', 'House Cleaning')
  },
  methods: {

    ServiceInfoFun: function(obj){

      var existingIds = this.getServiceInfo.map((obj) => obj.servicename);

      if (!existingIds.includes(obj.servicename)) {

        this.getServiceInfo.push(obj);
         bus.$emit('extraservice', this.getServiceInfo);

          debugger;

      } else {
        
        this.getServiceInfo.forEach((element, index) => {

          if (element.servicename === obj.servicename) {
            this.getServiceInfo[index] = obj;
             bus.$emit('extraservice', this.getServiceInfo);
             debugger;
          };

        });

      };

     
    },


    getBedVal: function(name, price, qty){ 

      var obj = {
        servicename: name,
        serviceprice: price * this.bedroom,
        serviceqty : this.bedroom
      }
     
       this.ServiceInfoFun(obj);
    },

    getBathVal: function(name, price, qty){ 
      var obj = {
        servicename: name,
        serviceprice: price * this.bathroom,
        serviceqty : this.bathroom
      }

      this.ServiceInfoFun(obj);
    }
  }
}
