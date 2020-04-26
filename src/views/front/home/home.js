import FrontHeader from '../../../components/frontheader/index'
import VueMaterialDateTimePicker from 'vue-material-date-time-picker'
import LoginForm from '../../../components/loginform/index'
import RegisterForm from '../../../components/registerform/index'
import GuestForm from '../../../components/guestform/index'
import CardPayment from '../../../components/cardpayment/index'
import BookingSummary from '../../../components/bookingsummary/index'
import { ValidationProvider, ValidationObserver } from 'vee-validate';


import { bus } from '../../../main';

export default {
  name: 'home',
  components: {
    'front-header': FrontHeader,
    VueMaterialDateTimePicker,
    'existing': LoginForm,
    'newuser': RegisterForm,
    'guestuser': GuestForm,
    'card-info': CardPayment,
    'book-summary': BookingSummary,
    ValidationProvider,
    ValidationObserver
  },
  props: [],
  data () {
    return {
      zipcode: '',
      serviceduration: '',
      datacalendar: '',
      calendarData: {},
      time: '',
      userinfo: '',
      paymentmethod: '',
      terms: '',
      promocode: '',
      subService: {},
      serialcounter: 0,
      totalTime: 0,
      subTotalPrice: '',
      discount: 0,
      token: localStorage.getItem('u') || ''
    }
  },
  computed: {
    getInfo: function(){
      
    }
  },
  mounted () {
    bus.$on('extraservice', (data) => {
      
      this.serialcounter++;

      return this.subService = data;
    }),

    bus.$on('sendTotalTime', (data) => {
    //  console.log(data)
      return this.totalTime = data;
    }),

    bus.$on('subtotal', (data) => {
      return this.subTotalPrice = data;
    })
  },
  methods: {
    dateClass(ymd, date) {
      // const day = date.getDate()
      // return day >= 10 && day <= 20 ? 'table-info' : ''
    },

    selectedTime: function(){
      if(this.calendarData.selectedHour != undefined || this.calendarData.selectedMinute != undefined){
        return this.calendarData.selectedHour +' hours ' + this.calendarData.selectedMinute + ' minutes';
      }else{
        return undefined;
      }
    },

    discountPrice: function(value){
      this.discount = value;
    }

  },

  filters: {
    getTime: function(obj){
      return obj.selectedHour +'hours' + obj.selectedMinute + 'minutes';
    }
  },

  created(){    
  },

  watch: {
     $route (to, from){
       console.log(to, from)
       this.discount = 0;
       this.subTotalPrice = 0;
       this.subService = [],
       this.totalTime = 0
    }
  }
}
