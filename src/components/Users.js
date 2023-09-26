import React, { useState, useEffect, useRef } from "react";

export const Users = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  const nameInput = useRef(null);

  let [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const res = await fetch(
        `https://emiliocodon.pythonanywhere.com/users`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      await res.json();
    } else {
      const res = await fetch(
        `https://emiliocodon.pythonanywhere.com/user/${id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getUsers();

    setName("");
    setEmail("");
    setPassword("");
    nameInput.current.focus();
  };

     const getUsers = async () => {
    const res = await fetch(`https://emiliocodon.pythonanywhere.com/users`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setUsers(data);
  }; 


  const deleteUser = async (id) => {
    const userResponse = window.confirm("Are you sure you want to delete it?");
    if (userResponse) {
      const res = await fetch(
        `https://emiliocodon.pythonanywhere.com/user/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);
      await getUsers();
    }
  };

  /* const editUser = async (id) => {
    const res = await fetch(`http://localhost:5000/user/${id}`, {
      method: "PUT",
      credentials: "include"
    });
    const data = await res.json();

    setEditing(true);
    setId(id);

    // Reset
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
    nameInput.current.focus();
  }; */

  /*    const editUser = async (id) => {
    const userResponse = window.confirm("Are you sure you want to edit it?");
    if (userResponse) {
      const userToUpdate = {
        name,
        email,
        password,
      };
  
      const res = await fetch(`http://localhost:5000/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userToUpdate),
      });
  
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setEditing(true);
        setId(id);
        // Reset
        setName("");
        setEmail("");
        setPassword("");
        
        await getUsers();
      } else {
        console.error(`Error: Could not edit user with ID ${id}`);
      }
    }
  }; */

  const editUser = async (id) => {
    const resp = await fetch(
      `https://emiliocodon.pythonanywhere.com/user/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await resp.json();

    setEditing(true);
    setId(id);
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
    nameInput.current.focus();

    /* const userResponse = window.confirm(
      "Are you sure you want to edit this user?"
    );
    if (userResponse) {
      const userToUpdate = {
        name,
        email,
        password,
      };

      const res = await fetch(`http://localhost:5000/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userToUpdate),
      });

      if (res.status === 200) {
        const data = await res.json();
        console.log(data);

        // Reset
        setName("");
        setEmail("");
        setPassword("");
        await getUsers();
      } else {
        console.error(`Error: Could not edit user with ID ${id}`);
      }
    } */
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="azul3">
      <h3 className="custom-title2">Leave your visit here</h3>
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit} className="card card-body">
            <div className="form-group">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-control"
                placeholder="Name"
                ref={nameInput}
                autoFocus
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                placeholder="User's Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
                placeholder="User's Enterprise"
              />
            </div>
            <button className="button3">{editing ? "Update" : "Create"}</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="table-wrapper ">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Enterprise</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button
                        className="button2"
                        onClick={(e) => editUser(user._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="button2"
                        onClick={(e) => deleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
