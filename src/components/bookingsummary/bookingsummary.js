import { bus } from '../../main';

export default {
  name: 'bookingsummary',
  components: {},
  props: {
    serviceTime: String,
    serviceDate: Object,
    duration: String, 
  },
  data () {
    return {
      serviceName: '',
      serviceInfo: []
    }
  },
  computed: {
   
  },
  mounted () {
     
  },
  methods: {
    

  },
  filters: {
    toUTC: function(val){
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
        console.log(this.serviceInfo);
    });
  },

  updated() {
     
  },

  watch:{
     
  }
}
