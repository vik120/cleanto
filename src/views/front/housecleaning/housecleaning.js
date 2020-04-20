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
      timeSlot: 0
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

      if (!existingIds.includes(obj.servicename)) { 

        this.getServiceInfoAlpha.push(obj);
        this.getServiceInfo = this.getServiceInfoAlpha;
        this.getServiceInfo.forEach((element, index) => {
          time = time + element.serviceTime;
        })

        this.timeSlot = time;

        bus.$emit('sendTotalTime', this.timeSlot);
        bus.$emit('extraservice', this.getServiceInfo);
      //   this.$store.dispatch('serviceListAction', this.getServiceInfo)
      } else {
        

        this.getServiceInfo.forEach((element, index) => {
          if (element.servicename === obj.servicename) {
              
            this.getServiceInfo[index] = obj;

            //   this.$store.dispatch('serviceListAction', this.getServiceInfo);

             this.getServiceInfo.forEach((element, index) => {
                time = time + element.serviceTime;
               
              })

             this.timeSlot = time;

             bus.$emit('sendTotalTime', this.timeSlot);
            bus.$emit('extraservice', this.getServiceInfo);
 
          };

        });

      };
    },

    mergeArray: function(obj){

      var existingIds = this.getServiceInfo.map((obj) => obj.servicename);
      let time = 0;

      if (!existingIds.includes(obj.servicename)) {

       this.getServiceInfo.push(obj);

        this.getServiceInfo.forEach((element, index) => {
          time = time + element.serviceTime;
         
        })

        console.log(time);
        
        this.timeSlot = time;

        bus.$emit('sendTotalTime', this.timeSlot);
        bus.$emit('extraservice', this.getServiceInfo);
         
      } else {
 
         this.getServiceInfo.forEach((element, index) => {

          if (element.servicename === obj.servicename) {
            this.getServiceInfo[index] = obj;
            bus.$emit('extraservice', this.getServiceInfo);
          };
        
          time = time + element.serviceTime;
            
          console.log(time);

        });

         this.timeSlot = time;
         bus.$emit('sendTotalTime', this.timeSlot);

      };


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

    },

    getExtraService: function(val){ 
     this.mergeArray(val);
    },

    spliceFun: function(data){
      let time = 0;
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
        
        time = this.timeSlot - element.serviceTime;       
      });
      this.timeSlot = time;
      bus.$emit('sendTotalTime', this.timeSlot);
    }


  },

  created(){
    bus.$on('splice', (data) => {
      this.spliceFun(data);
    })
  }
}
