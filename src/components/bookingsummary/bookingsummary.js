import { bus } from '../../main';

export default {
  name: 'bookingsummary',
  components: {},
  props: {
    serviceTime: String,
    serviceDate: Object,
    duration: String,
    subServiceInfo: Array,
    getTotalTime: Number
  },
  data () {
    return {
      serviceName: '',
      serviceInfo: [],
      serialcounter: 0, 
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
    }
  },
  filters: {
    toUTC: function(val){
    },
    toHours: function(num){
      var hours = Math.floor(num / 60);  
      var minutes = num % 60;
      return hours + ":" + minutes + " hour(s)"; 
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
