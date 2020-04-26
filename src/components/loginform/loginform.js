import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'


export default {
  name: 'loginform',
  components: {
   
  },
  props: [],
  mixins: [validationMixin],
  data () {
    return {
      password: null,
      email: null,
      messageClass: 'md-invalid'
    }
  },
  validations: {

    password: { 
      required
    },

    email: {  
      email,
      required
    }
    
  },
  computed: {

  },
  mounted () {

  },
  methods: {

    validateUser (data) {
      
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('loginAction', { email: this.email, password: this.password })
      }
    }
  }
}
