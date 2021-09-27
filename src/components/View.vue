<template>
<div>
<nav-bar />
    <b-table striped hover :items="items" :fields="fields"></b-table>
<Footer />
</div>
</template>
<script>

  export default{

  }
</script>
<script>
import Footer from './Footer';
import NavBar from './NavBar';
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['College_name', 'Student_name', 'Request_For''Request_Date', 'Response', 'Response_Date'],
        items: [
          { isActive: true, College_name: INDUS, Student_name: 'PONUTHIRAVSAGAM', Request_For: 'RESULT' Request_Date: 13-Aug-2021, Response: 'Not Found', Response_Date: '13-Aug-2021' },

        ]
      }
    },
		components:{
		NavBar,
		Footer,
	},
  }
</script>