 

export default {
  name: 'cardpayment',
  components: { 
  },
  props: [],
  data () {
    return {
      cardNumber: '',
      cardName: '',
      expireDate: '',
      expireYear: '',
      cardCVV: '',
      card: ''
    }
  },
  computed: {

  },
  mounted () {
    
  },
  methods: {
    creditInfoChanged(values) {
        console.log('Credit card fields', values); 
    }
  }
}
