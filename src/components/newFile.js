/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'HelloWorld',
props: {
msg: String
},
data() {
return {
task: '',
editedtask: null,
availableStatus: ['todo', 'inprogress', 'finished'],
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
};

},
methods: {
submitTask() {
if (this.task == 0) return;
if (this.edittask == null) {
this.tasks.push({
name: this.task,
status: 'todo'
});

}
else {
this.tasks[this.editedtask].name = this.task;
this.editedtask = null;
}
this.task = '';


},

deleteTask(index) {
this.tasks.splice(index, 1);
},
editTask(index) {
this.task = this.tasks[index].name;
this.editedtask = index;

},
changeStatus(index) {
let MewIndex = this.availableStatus.indexOf(this.tasks[index].status);


},
},
});
