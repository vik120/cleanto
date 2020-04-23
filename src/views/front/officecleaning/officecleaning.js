import ItemPanel from '../../../components/itempanel/index'
import { bus } from '../../../main'

export default {
  name: 'officecleaningr',
  components: {
    'item-panel': ItemPanel
  },
  props: [],
  data () {
    return {
      officeservice: 'property',
      officearea: '',
      windowclean: '',
      deskcleaning: '',
      extraService: [
        {
          id: 0,
          image: 'parking.jpg',
          name: 'Parking Cleaning',
          price: 20.00,
          time: 30,
          haveQuanity: false
        },
        {
          id: 1,
          image: 'storeroom.jpg',
          name: 'Storeroom Cleaning',
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
    bus.$emit('servicename', 'Office Cleaning')
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

    getWindowCleanVal: function(name, price, time){ 
      if(this.windowclean != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.windowclean,
          serviceqty : this.windowclean,
          serviceTime: time * this.windowclean
        }
       
         this.ServiceInfoFun(obj);
      }
    },

    getDiskCleanVal: function(name, price, time){ 
     
      
      if(this.deskcleaning != ''){
        var obj = {
          servicename: name,
          serviceprice: price * this.deskcleaning,
          serviceqty : this.deskcleaning,
          serviceTime: time * this.deskcleaning
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
