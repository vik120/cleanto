import ItemPanel from '../../../components/itempanel/index'
export default {
  name: 'housecleaning',
  components: {
    'item-panel': ItemPanel
  },
  props: [],
  data () {
    return {
      bedroom: '',
      bathroom: '',
      extraService: [
        {
          id: 0,
          image: 'fridge.jpg',
          name: 'Fridge Cleaning',
          price: 5.00,
          haveQuanity: true
        },
        {
          id: 1,
          image: 'ovan.jpg',
          name: 'Oven Cleaning',
          price: 5.00,
          haveQuanity: false
        },
        {
          id: 2,
          image: 'window.jpg',
          name: 'Inside Window Cleaning',
          price: 5.00,
          haveQuanity: false
        } 
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
