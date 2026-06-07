import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", course: "" });
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = "http://localhost:8081/api/students";

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_URL}`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add or Update student
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateStudent(e);
    } else {
      try {
        await fetch(`${API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Number(form.id),
            name: form.name,
            course: form.course,
          }),
        });

        setForm({ id: "", name: "", course: "" });
        fetchStudents();
      } catch (err) {
        console.error("Error adding student:", err);
      }
    }
  };

  // Edit student
  const handleEdit = (student) => {
    setForm({ id: student.id, name: student.name, course: student.course });
    setIsEditing(true);
  };

  // Cancel edit
  const handleCancel = () => {
    setForm({ id: "", name: "", course: "" });
    setIsEditing(false);
  };

  // Delete student
const deleteStudent = async (id) => {
  try {
    await fetch(`${API_URL}/delete/${id}`, {
      method: "DELETE",
    });

    fetchStudents(); // refresh list
  } catch (err) {
    console.error("Error deleting student:", err);
  }
};
//update student
const updateStudent = async (e) => {
  e.preventDefault();

  try {
    await fetch(`${API_URL}/${form.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Number(form.id),
        name: form.name,
        course: form.course,
      }),
    });

    setForm({ id: "", name: "", course: "" });
    setIsEditing(false);
    fetchStudents();

  } catch (err) {
    console.error("Error updating student:", err);
  }
};
  return (
    <div style={styles.container}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body, #root {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
        input:focus {
          border-color: #667eea !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15) !important;
        }
        button:active {
          transform: translateY(0);
        }
        div[style*="card"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.12) !important;
        }
      `}</style>
      <h1 style={styles.title}>🎓 Student Management System</h1>

      {/* Form */}
      <div style={styles.card}>
        <h2 style={styles.subtitle}>{isEditing ? "✏️ Edit Student" : "➕ Add Student"}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="number"
            placeholder="ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            required
          />
          <div style={styles.buttonGroup}>
            <button style={styles.button}>
              {isEditing ? "Update Student" : "Add Student"}
            </button>
            {isEditing && (
              <button
                type="button"
                style={styles.cancelButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Student List */}
      <div style={styles.card}>
        <h2 style={styles.subtitle}>👥 Student List</h2>
        <div style={styles.grid}>
          {students.length > 0 ? (
            students.map((s) => (
            <div key={s.id} style={styles.studentCard}>
              <p style={styles.name}>{s.name}</p>
              <p style={styles.cardInfo}>📱 ID: <strong>{s.id}</strong></p>
              <p style={styles.cardInfo}>📚 Course: <strong>{s.course}</strong></p>

              {/* BUTTON GROUP */}
              <div style={styles.cardButtonGroup}>
                <button
                  style={styles.editButton}
                  onClick={() => handleEdit(s)}
                >
                  Edit
                </button>
                <button
                  style={styles.deleteButton}
                  onClick={() => deleteStudent(s.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            ))
          ) : (
            <div style={styles.emptyState}>
              <p style={styles.emptyText}>📭 No students yet. Add one to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// CSS-in-JS Styles
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    width: "100%",
    margin: "0",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#fff",
    fontSize: "2.5em",
    fontWeight: "700",
    textShadow: "0 2px 10px rgba(0,0,0,0.2)",
    letterSpacing: "1px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    margin: "25px auto",
    borderRadius: "15px",
    maxWidth: "1200px",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#333",
    fontSize: "1.5em",
    fontWeight: "600",
    borderBottom: "3px solid #667eea",
    paddingBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "14px 16px",
    borderRadius: "8px",
    border: "2px solid #e0e0e0",
    fontSize: "1em",
    fontFamily: "inherit",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    outline: "none",
  },
  button: {
    padding: "14px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#667eea",
    color: "white",
    cursor: "pointer",
    fontSize: "1em",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  studentCard: {
    padding: "20px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#f8f9fa",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  name: {
    fontWeight: "700",
    color: "#333",
    fontSize: "1.2em",
    marginBottom: "8px",
  },
  cardInfo: {
    color: "#555",
    fontSize: "0.95em",
    margin: "5px 0",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
  },
  cancelButton: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#6c757d",
    color: "white",
    cursor: "pointer",
    flex: 1,
    fontSize: "0.95em",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(108, 117, 125, 0.3)",
  },
  cardButtonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  editButton: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9em",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(40, 167, 69, 0.3)",
  },
  deleteButton: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9em",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(220, 53, 69, 0.3)",
  },
  emptyState: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: "40px 20px",
  },
  emptyText: {
    color: "#999",
    fontSize: "1.1em",
    fontWeight: "500",
  },
};