// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewPosts from './pages/ViewPosts';  // Для отображения всех постов
import CreatePost from './pages/CreatePost'; // Для создания постов
import UpdatePost from './pages/UpdatePost'; // Для обновления постов
import DeletePost from './pages/DeletePost'; // Для удаления постов

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/posts" element={<ViewPosts />} />  {/* Страница отображения всех постов */}
                    <Route path="/create-post" element={<CreatePost />} />  {/* Страница создания поста */}
                    <Route path="/update-post/:id" element={<UpdatePost />} />  {/* Страница обновления поста */}
                    <Route path="/delete-post/:id" element={<DeletePost />} />  {/* Страница удаления поста */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
