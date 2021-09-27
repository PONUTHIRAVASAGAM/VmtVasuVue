<template>
<div>
<nav-bar />
<div Container>
  <b-jumbotron>
    <template #header>Faculty Management</template>
    <hr class="my-4">
<div>
  <b-button v-b-modal.modal-1 variant="primary">Add Faculty</b-button>

  <b-modal id="modal-2" title="Add Faculty">
    <p class="my-4"></p>
<AddFaculty />
  </b-modal>
</div>
  </b-jumbotron>
  </div><br><br><br>
  <div Container>
  <b-jumbotron>

<div>
  <b-button v-b-modal.modal-1 variant="danger">Update Faculty</b-button>

  <b-modal id="modal-1" title="Update Faculty">
    <p class="my-4"></p>
<UpdateFaculty />
  </b-modal>
</div>
  </b-jumbotron>
  </div>
  <br><br><br>
 <Footer />
</div>
</template>

<script>
import UpdateFaculty from './UpdateFaculty';
import AddFaculty from './AddFaculty';
import Footer from './Footer';
import NavBar from './NavBar';
  export default {
		components:{
		NavBar,
		Footer,
		AddFaculty,
		UpdateFaculty,

	},
  }
</script>
