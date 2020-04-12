import FrontHeader from '../../../components/frontheader/index'
import VueMaterialDateTimePicker from 'vue-material-date-time-picker'
import LoginForm from '../../../components/loginform/index'
import RegisterForm from '../../../components/registerform/index'
import GuestForm from '../../../components/guestform/index'
import CardPayment from '../../../components/cardpayment/index'

export default {
  name: 'home',
  components: {
    'front-header': FrontHeader,
    VueMaterialDateTimePicker,
    'login': LoginForm,
    'register': RegisterForm,
    'guest': GuestForm,
    'card-info': CardPayment
  },
  props: [],
  data () {
    return {
      zipcode: '',
      serviceduration: 'Monthly',
      datacalendar: '',
      calendarData: {},
      time: '',
      userinfo: 'existing',
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
