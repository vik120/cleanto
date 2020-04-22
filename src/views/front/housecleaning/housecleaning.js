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
          time: 30,
          haveQuanity: true
        },
        {
          id: 1,
          image: 'ovan.jpg',
          name: 'Oven Cleaning',
          price: 5.00,
          time: 30,
          haveQuanity: false
        },
        {
          id: 2,
          image: 'window.jpg',
          name: 'Inside Window Cleaning',
          price: 5.00,
          time: 30,
          haveQuanity: false
        } 
      ],
      getServiceInfo: [],
      getServiceInfoAlpha: [],

      getSpliceItem: '',
      timeSlot: 0,
      SubTotalPrice: ''
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

      let time = 0;
      let price = 0;

      if (!existingIds.includes(obj.servicename)) { 

        this.getServiceInfoAlpha.push(obj);
        this.getServiceInfo = this.getServiceInfoAlpha;
        this.getServiceInfo.forEach((element, index) => {
          time = time + element.serviceTime;
          price = price + element.serviceprice;
        });

        this.timeSlot = time;
        this.SubTotalPrice = price;

        bus.$emit('sendTotalTime', this.timeSlot);
        bus.$emit('extraservice', this.getServiceInfo);
        bus.$emit('subtotal', this.SubTotalPrice);

      //   this.$store.dispatch('serviceListAction', this.getServiceInfo)
      } else {

        this.getServiceInfo.forEach((element, index) => {
          if (element.servicename === obj.servicename) {

            this.getServiceInfo[index] = obj;

            //   this.$store.dispatch('serviceListAction', this.getServiceInfo);

             this.getServiceInfo.forEach((element, index) => {
                time = time + element.serviceTime;
                price = price + element.serviceprice;
              })

             this.timeSlot = time;
             this.SubTotalPrice = price;
             
             bus.$emit('sendTotalTime', this.timeSlot);
             bus.$emit('extraservice', this.getServiceInfo);
             bus.$emit('subtotal', this.SubTotalPrice);
 
          };

        });

      };
    },

    // mergeArray: function(obj){

    //   var existingIds = this.getServiceInfo.map((obj) => obj.servicename);
    //   let time = 0;
    //   let price = 0;

    //   if (!existingIds.includes(obj.servicename)) {

    //    this.getServiceInfo.push(obj);

    //     this.getServiceInfo.forEach((element, index) => {
    //       time = time + element.serviceTime;
    //       price = price + element.serviceprice;
    //     }) 
        
    //     this.timeSlot = time;
    //     this.SubTotalPrice = price;

    //     bus.$emit('sendTotalTime', this.timeSlot);
    //     bus.$emit('extraservice', this.getServiceInfo);
    //     bus.$emit('subtotal', this.SubTotalPrice);
         
    //   } else {
 
    //       this.getServiceInfo.forEach((element, index) => {

    //         if (element.servicename === obj.servicename) {
             
    //           this.getServiceInfo[index] = obj;
    //           bus.$emit('extraservice', this.getServiceInfo);

    //         };
    //       });

    //       this.getServiceInfo.forEach((element, index) => {
    //         time = time + element.serviceTime;
    //         price = price + element.serviceprice;
    //       });

    //      this.timeSlot = time;
    //      this.SubTotalPrice = price;

    //      bus.$emit('sendTotalTime', this.timeSlot);
    //      bus.$emit('subtotal', this.SubTotalPrice);

    //   };
    // },

    getExtraService: function(val){ 
     this.ServiceInfoFun(val);
    },

    spliceFun: function(data){
      let time = 0;
      let price = 0;
      this.getServiceInfo.forEach((element, index) => {

        if (element.servicename === data) {
          this.getServiceInfo.splice(index, 1);
          bus.$emit('extraservice', this.getServiceInfo);

          if(data == 'bedroom'){
        
            this.bedroom = '';
        
          }else if(data == 'bathroom'){
        
            this.bathroom = '';
        
          }else{
        
            this.getSpliceItem = data
        
          }            
        };

      });

     this.getServiceInfo.forEach((element, index) => {
          time = time + element.serviceTime;
          price = price + element.serviceprice;
      });

      this.timeSlot = time;
      this.SubTotalPrice = price;

      bus.$emit('sendTotalTime', this.timeSlot);
      bus.$emit('subtotal', this.SubTotalPrice);
    },

    getBedVal: function(name, price, time){ 
      if(this.bedroom != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.bedroom,
          serviceqty : this.bedroom,
          serviceTime: time * this.bedroom
        }
       
         this.ServiceInfoFun(obj);
      }
    },

    getBathVal: function(name, price, time){ 
     
      
      if(this.bathroom != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.bathroom,
          serviceqty : this.bathroom,
          serviceTime: time * this.bathroom
        }
       
         this.ServiceInfoFun(obj);
      }

    }

  },

  created(){
    bus.$on('splice', (data) => {
      this.spliceFun(data);
    })
  }
}
