import ItemPanel from '../../../components/itempanel/index'
import { bus } from '../../../main'

export default {
  name: 'carpenter',
  components: {
    'item-panel': ItemPanel
  },
  props: [],
  data () {
    return {
      carpenterservicetype: 'property',
      buildwindows: '',
      builddoorways: '',
      buildwall: '',
      cleaningarea: '',
      extraService: [
        {
          id: 0,
          image: 'damage-floor.jpg',
          name: 'Damaged Flooring',
          price: 10.00,
          haveQuanity: false
        },
        {
          id: 1,
          image: 'door-jams.jpg',
          name: 'Door Jams',
          price: 10.00,
          haveQuanity: true
        }
      ]
    }
  },
  computed: {

  },
  mounted () { 
     bus.$emit('servicename', 'Carpenter Service')
  },
  methods: {

  }
}
