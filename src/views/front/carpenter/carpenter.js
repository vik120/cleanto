import ItemPanel from '../../../components/itempanel/index'
import { bus } from '../../../main'

export default {
  name: 'carpenter',
  components: {
    'item-panel': ItemPanel
  },
  props: [],
  data () {
    return {
      carpenterservicetype: 'property',
      buildwindows: '',
      builddoorways: '',
      buildwall: '',
      cleaningarea: 200,
      extraService: [
        {
          id: 0,
          image: 'damage-floor.jpg',
          name: 'Damaged Flooring',
          price: 10.00,
          haveQuanity: false,
          time: 30,
        },
        {
          id: 1,
          image: 'door-jams.jpg',
          name: 'Door Jams',
          price: 10.00,
          time: 30,
          haveQuanity: true
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
     bus.$emit('servicename', 'Carpenter Service')
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

    getExtraService: function(val){ 
     this.ServiceInfoFun(val);
    },

    getbuildwindowsVal: function(name, price, time){ 
      if(this.buildwindows != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.buildwindows,
          serviceqty : this.buildwindows,
          serviceTime: time * this.buildwindows
        }
       
         this.ServiceInfoFun(obj);
      }
    },

    getbuilddoorwaysVal: function(name, price, time){ 
     
      
      if(this.builddoorways != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.builddoorways,
          serviceqty : this.builddoorways,
          serviceTime: time * this.builddoorways
        }
       
         this.ServiceInfoFun(obj);
      }

    },
    
    getbuildwallVal: function(name, price, time){ 
      if(this.buildwall != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.buildwall,
          serviceqty : this.buildwall,
          serviceTime: time * this.buildwall
        }
       
         this.ServiceInfoFun(obj);
      }
    },

    getcleaningareaVal: function(name, price, time){ 
      if(this.cleaningarea != '' && this.cleaningarea > 99){
        var obj = {
          servicename: name,
          serviceprice: price * this.cleaningarea,
          serviceqty : this.cleaningarea,
          serviceTime: time * this.cleaningarea
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
