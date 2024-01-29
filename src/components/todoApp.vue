<template>
  <div class="container">
    <h2 class="text-center mt-5">ToDo App</h2>
    <div class="d-flex mt-5">
      <input type="text" placeholder="Enter Your Task" class="w-100 form-control" v_model="task">
       <button class="btn btn-warning" @click="submitTask">Add</button>
    </div>
  

    <table class="table mt-5 table-bordered">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">#</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task,index) in tasks" :key="index">
          <th scope="row">{{task.name}}</th>


          <td>
            <span @click="changesStatus(index)">

                 {{task.status}}
            </span>
          </td>

          <td>
            <div @click="deleteTask(index)">
              <span class="fa fa-trash"></span>

            </div>

          </td>
          
          <td>
             <div @click="editTask(index)">
                <span class="fa fa-pen"></span>

              </div>
          </td>
          
        </tr>
   
        
      
      </tbody>
    </table>
  </div>
</template>

<script>
export default(await import('vue')).defineComponent({

  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){ 
    return {
      task: '',
      editedtask: null,
      availableStatus:['todo','inprogress','finished'],
      tasks: [
        {
          name: 'study english',
          status: 'todo'
        },
        {
          name: 'study vuejs',
          status: 'Inprogress'
        }

      ]
    }
    
  },
  methods: {
    submitTask(){ 
      if (this.task==0) return ;
      if (this.edittask == null) {
        this.tasks.push({
          name:this.task,
          status: 'todo'
        })

      }
      else { 
        this.tasks[this.editedtask].name = this.task
        this.editedtask = null;
      }
      this.task = '';
     

    },

    deleteTask(index) { 
      this.tasks.splice(index,1)
    },
    editTask(index) { 
      this.task = this.tasks[index].name ;
      this.editedtask = index;

    },
    changesStatus(index) {
      // eslint-disable-next-line no-unused-vars
      let newIndex = this.availableStatus.indexOf(this.tasks[index].status) 
      if (++newIndex > 2) newIndex = 0
      this.tasks[index].status = this.availableStatus[newIndex]
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

