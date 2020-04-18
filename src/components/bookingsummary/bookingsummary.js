import { bus } from '../../main';

export default {
  name: 'bookingsummary',
  components: {},
  props: {
    serviceTime: String,
    serviceDate: Object,
    duration: String,
    servicelist: Array
  },
  data () {
    return {
      serviceName: '',

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

   

  },
}
