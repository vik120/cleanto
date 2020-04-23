import { bus } from '../../../main'

export default {
  name: 'plumbing',
  components: {},
  props: [],
  data () {
    return {
      plumbingservicetype: 'residential',
      waterline: '',
      leakpipe: '',
      cloggedDrain: '',
      waterHeater: '',

      getServiceInfo: [],
      getServiceInfoAlpha: [],
      getSpliceItem: '',
      timeSlot: 0
    }
  },
  computed: {

  },
  mounted () {
    bus.$emit('servicename', 'Plumbing')
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

    

    spliceFun: function(data){
      let time = 0;
      let price = 0;

      this.getServiceInfo.forEach((element, index) => {

        if (element.servicename === data) {
          
          this.getServiceInfo.splice(index, 1);
          bus.$emit('extraservice', this.getServiceInfo);

          if(data == 'leak pipe'){
        
            this.leakpipe = '';
        
          }else if(data == 'waterline'){
        
            this.waterline = '';
        
          } else if(data == 'Clogged Drain'){
        
            this.cloggedDrain = '';
        
          }else if(data == 'water heater'){
        
            this.waterHeater = '';
        
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

    getwaterlineVal: function(name, price, time){ 
      if(this.waterline != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.waterline,
          serviceqty : this.waterline,
          serviceTime: time * this.waterline
        }
       
         this.ServiceInfoFun(obj);
      }
    },

    getleakpipeVal: function(name, price, time){ 
     
      
      if(this.bathroom != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.leakpipe,
          serviceqty : this.leakpipe,
          serviceTime: time * this.leakpipe
        }
       
         this.ServiceInfoFun(obj);
      }

    },
    getCloggedDrainVal: function(name, price, time){ 
      if(this.cloggedDrain != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.cloggedDrain,
          serviceqty : this.cloggedDrain,
          serviceTime: time * this.cloggedDrain
        }
       
         this.ServiceInfoFun(obj);
      }
    },
    getWaterHeaterVal: function(name, price, time){ 
      if(this.waterHeater != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.waterHeater,
          serviceqty : this.waterHeater,
          serviceTime: time * this.waterHeater
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
