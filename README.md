# 📚 Book Notes App

A full-stack web application to track, organize, and reflect on books I’ve read. I can add books, write summaries and detailed notes, rate them, and explore my collection with search and sorting features.

---

## 🚀 Features

* 📖 Add, edit, and delete books (CRUD)
* 🧠 Write **short summaries** and **detailed notes**
* ⭐ Rate books (1–5 scale)
* 🔍 Search by title or author (case-insensitive)
* 🔄 Sort by:

  * Newest / Oldest
  * Highest / Lowest rating
* 📄 Dedicated **book details page**
* 🖼️ Automatic book cover fetching via Open Library Covers API
* ⚠️ Robust error handling (API + database + server)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS, JavaScript
* **Database:** PostgreSQL
* **API:** Open Library Covers API
* **HTTP Client:** Axios

---

## 🧱 Database Schema

```sql
books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  isbn TEXT,
  summary TEXT,
  notes TEXT,
  rating INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

---

## ⚙️ Installation

```bash
git clone https://github.com/EbrerRamen/book_notes.git
cd book-notes
npm install
```

---

## ▶️ Run the App

```bash
node app.js
```

Then open:

```
http://localhost:3000
```

---

## 💡 How It Works

* Book data is stored in PostgreSQL
* Cover images are dynamically loaded using ISBN via Open Library API
* Axios is used to validate API responses
* Server-side rendering is handled using EJS templates

---

## 📌 Future Improvements

* 🔐 User authentication (login/signup)
* ⭐ Star-based rating UI
* 📊 Reading analytics dashboard
* ❤️ Favorites / reading list
* 🧠 AI-generated summaries
* 🌐 Deployment (Render / Railway / Vercel)

---

## 🙌 Acknowledgements

* Open Library Covers API for book images

---

## 📷 Preview

![Home Page](https://imgur.com/kU5qrbS.png)
![Book Details](https://imgur.com/nTaIi2Z.png)
![Add Book Form](https://imgur.com/KYB60Fl.png)

---
