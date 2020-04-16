import { bus } from '../../../main'

export default {
  name: 'plumbing',
  components: {},
  props: [],
  data () {
    return {
      plumbingservicetype: 'residential',
      waterline: '',
      leakpipe: ''
    }
  },
  computed: {

  },
  mounted () {
    bus.$emit('servicename', 'Plumbing')
  },
  methods: {

  }
}
