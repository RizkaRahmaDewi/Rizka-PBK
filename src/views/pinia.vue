<template>
    <div>
      <div class="navbar">
        <h1>Perpustakaan Online</h1>
      </div>
  
      <div class="library-container">
        <div class="library-form">
          <h2>Peminjaman Buku Online</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="book">Judul Buku:</label>
              <input type="text" id="book" v-model="book" required />
            </div>
            <div class="form-group">
              <label for="borrower">Peminjam:</label>
              <input type="text" id="borrower" v-model="borrower" required />
            </div>
            <div class="form-group">
              <label for="duration">Durasi Peminjaman (hari):</label>
              <input class="duration-input" type="number" id="duration" v-model="duration" required />
            </div>
            <button type="submit" class="submit-button">Pinjam Buku</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useLibraryStore } from '../store/library';
  
  const library = useLibraryStore();
  
  let book = '';
  let borrower = '';
  let duration = 0;
  
  const submitForm = () => {
    if (book === '' || borrower === '' || duration <= 0) {
      alert('Mohon lengkapi semua field dengan benar.');
      return;
    }
  
    const loanData = {
      book: book,
      borrower: borrower,
      duration: duration,
    };
  
    library.addLoan(loanData);
  
    book = '';
    borrower = '';
    duration = 0;
  
    alert('Peminjaman berhasil!');
  };
  </script>
  
  <style>
  /* ... kode gaya lainnya ... */
  
  .library-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .library-form {
    max-width: 400px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #00fff2;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .duration-input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
  }
  
  .submit-button {
    padding: 0.5rem 1rem;
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  