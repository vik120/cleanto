import ItemPanel from '../../../components/itempanel/index'
import { bus } from '../../../main'

export default {
  name: 'officecleaningr',
  components: {
    'item-panel': ItemPanel
  },
  props: [],
  data () {
    return {
      officeservice: 'property',
      officearea: '',
      windowclean: '',
      deskcleaning: '',
      extraService: [
        {
          id: 0,
          image: 'parking.jpg',
          name: 'Parking Cleaning',
          price: 20.00,
          haveQuanity: false
        },
        {
          id: 1,
          image: 'storeroom.jpg',
          name: 'Storeroom Cleaning',
          price: 10.00,
          haveQuanity: true
        }
      ]
    }
  },
  computed: {

  },
  mounted () {
    bus.$emit('servicename', 'Office Cleaning')
  },
  methods: {

  }
}
