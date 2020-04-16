import FrontHeader from '../../../components/frontheader/index'
import VueMaterialDateTimePicker from 'vue-material-date-time-picker'
import LoginForm from '../../../components/loginform/index'
import RegisterForm from '../../../components/registerform/index'
import GuestForm from '../../../components/guestform/index'
import CardPayment from '../../../components/cardpayment/index'
import BookingSummary from '../../../components/bookingsummary/index'
import { ValidationProvider, ValidationObserver } from 'vee-validate';

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
      promocode: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    dateClass(ymd, date) {
      // const day = date.getDate()
      // return day >= 10 && day <= 20 ? 'table-info' : ''
    }
  }
}
