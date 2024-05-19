<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
     <button  @click="getProjectHealthCheck" class="styled-button btn btn-primary">Backend Service Health Check Point</button> 
     <div>&nbsp;</div>
    <div class="grid-header"><div v-if="healthCheck"><h3>Backend Service Status:</h3> {{healthCheck}}</div></div>
   
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      healthCheck: null

    };
  },
   methods: {

    async getProjectHealthCheck() {
      try {
        const response = await axios.get('api/health');
          this.healthCheck = response.data;
      } catch (error) {
        console.error('Error fetching project health check :', error);
      }
    },

   }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn {
  display: inline-block;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

/* Primary button styles */
.btn-primary {
  background-color: #007bff;
  color: #fff;
}

/* Hover styles for primary button */
.btn-primary:hover {
  background-color: #0056b3;
}
</style>
