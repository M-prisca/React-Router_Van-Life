# VanLife Dashboard

A React web app for VanLife rentals with a public site and host dashboard. Built with **React Router v6** and **Tailwind CSS**.

---

## Features

- **Public Pages:** Home, About, Vans, Van Detail
- **Host Dashboard:** Dashboard, Income, Reviews (nested routes with `Outlet`)
- **Navigation:** NavLinks with hover effects (red text + underline)
- **Responsive Design:** Fully styled with Tailwind CSS

---

## Tech Stack

- React + React Router v6
- Tailwind CSS
- JavaScript (ES6+)

---

## Folder Structure

```
vanlife-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Nav.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Vans.js
│   │   ├── VanDetail.js
│   │   ├── Dashboard.js
```

## Installation

```bash
git clone https://github.com/M-prisca/React-Router_Van-Life
cd React-Router
npm install
npm run dev
```

## Contributing

- Fork the repository.
- Create a feature branch (git checkout -b feature/YourFeature).
- Commit your changes (git commit -m 'Add feature').
- Push to the branch (git push origin feature/YourFeature).
- Open a Pull Request.
