import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });
    //fetch('http://localhost:8080/parts')
    //.then(response => console.log(response.json()))
    //.then(response => {console.log('http://localhost:8080/parts',response)})
    //.catch(error => {console.log(error)})
    
    fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": 2,
        "description": desc,
        "date": date,
      })
    }).then(response => console.log(response.json()))
    .catch(error => {console.log(error)})


    setDesc("");
    setDate("");



  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
