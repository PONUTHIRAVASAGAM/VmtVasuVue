<template>
<div>
<nav-bar />
<h1> Student Login</h1> <br> <b-button variant="danger">Logout</b-button>
<b-list-group Container>
  <b-list-group-item variant="primary"><h2>Download Articles</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>Update Profile</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>Send Request to college</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>View Response</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>Send Feedback</h2></b-list-group-item>
</b-list-group>
<Footer />
</div>
</template>

<script>
import Footer from './Footer';
import NavBar from './NavBar';
  export default{
	components:{
		NavBar,
		Footer,
	},
  }
</script>