<template>
<div>
<nav-bar />
    <b-table striped hover :items="items" :fields="fields"></b-table>
 <Footer />
</div>
</template>

<script>
import Footer from './Footer';
import NavBar from './NavBar';
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['College_ID', 'College_name', 'Action'],
        items: [
          { isActive: true, College_ID: 7109, College_name: 'INDUS', Action: 'View/ Delete' },
          { isActive: true, College_ID: 7733, College_name: 'SRIT', Action: 'View/ Delete' },
          { isActive: true, College_ID: 7966, College_name: 'KARUNYA', Action: 'View/ Delete' },
          { isActive: true, College_ID: 7988, College_name: 'PSG', Action: 'View/ Delete' }
        ]
      }
    },
		components:{
		NavBar,
		Footer,
	},
  }
</script>
