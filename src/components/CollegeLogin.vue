<template>
<div>
<nav-bar />
<h1> College Login</h1> <br> <b-button variant="danger">Logout</b-button>
<b-list-group>
  <b-list-group-item variant="primary"><h2>Upload Articles</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>Faculty Management</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>Update College Profile</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>Send Response</h2></b-list-group-item>
    <b-list-group-item variant="primary"><h2>View students Request</h2></b-list-group-item>
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