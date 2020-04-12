import FrontHeader from '../../../components/frontheader/index'
import VueMaterialDateTimePicker from 'vue-material-date-time-picker'
import LoginForm from '../../../components/loginform/index'

export default {
  name: 'home',
  components: {
    'front-header': FrontHeader,
    VueMaterialDateTimePicker,
    'login': LoginForm
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
      terms: ''
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
