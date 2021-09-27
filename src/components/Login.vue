<template>
    <div>
        <b-modal id="modal-1" title="LOGIN" ref="modal" hide-footer>
   <b-form ref="form" @submit.stop.prevent="onSubmit" >
      <div>
    <b-form-group>
               <b-form-radio-group  v-model="selected"
        >
                 <b-container>
                   <b-row>
                     <b-col>
                       <b-form-radio  id="admin" v-model="selected" v-bind:value="1" >Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio  id="college" v-model="selected" v-bind:value="2" >College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="student" v-model="selected" v-bind:value="3" >Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
              </b-form-group>
  </div>
       <b-form-group id="log-grp-2" label="User Name" label-for="un">
          <b-form-input id="un"
          name="un"
          v-model="$v.form.uname.$model"
          :state="validateState('uname')">
           </b-form-input>
          <b-form-invalid-feedback
          id="unameerr" >
          This is a required field and must be at least 3 characters.
          </b-form-invalid-feedback>
          <!-- <span  id="unameerr"></span> -->
       </b-form-group>
          <b-form-group id="log-grp-2" label="Password" label-for="pw">
          <b-form-input id="pw"
          name="pw"
          v-model="$v.form.pass.$model"
          :state="validateState('pass')">
           </b-form-input>
          <b-form-invalid-feedback
          id="passerr" >
          This is a required field and must be at least 3 characters.
          </b-form-invalid-feedback>
          <!-- <span  id="passerr"></span> -->
       </b-form-group>
          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit" type="submit" variant="outline-success">Submit</b-button>
          <b-button class="mx-3" size="sm" id="cancel" @click="resetForm()"  variant="outline-danger">Reset</b-button>
          </div>
      </b-form>
  </b-modal>
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  mixins: [validationMixin],
  data() {
      return {
          selected: '1',
          role:'',
          form: {
          uname:null,
          pass:null,
         }
      };
    },
    validations: {
    form: {
      uname: {
        required,
      },
      pass: {
        required,
      },
  }
    },
  methods: {
    validateState(uname) {
      const { $dirty, $error } = this.$v.form[uname];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        uname:null,
        pass:null,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  onSubmit() {
      this.$v.form.$touch();
if (this.selected==1) {
    if (this.$v.form.$anyError) {
        return;
      }
        alert("Admin Form submitted!");
       location.reload();
}
else if (this.selected==2) {
if (this.$v.form.$anyError) {
        return;
      }
        alert("college Form submitted!");
       location.reload();
}
else if (this.selected==3) {
if (this.$v.form.$anyError) {
        return;
      }
        alert("student Form submitted!");
       location.reload();
}
    }
  }
};
</script>
