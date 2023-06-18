<template>
  <div class="about">
    <div class="about-container">
      <h1 class="about-title">Rizka Rahma Dewi</h1>
      <div class="about-info">
        <div class="about-item">
          <span class="about-label">NIM:</span>
          <span class="about-value">213510496</span>
        </div>
        <div class="about-item">
          <span class="about-label">Jurusan :</span>
          <span class="about-value">Teknik Informatika</span>
        </div>
        <div class="about-item">
          <span class="about-label">Universitas :</span>
          <span class="about-value">Universitas Islam Riau</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.about-container {
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #47d1d3;
}

.about-title {
  text-align: center;
  margin-bottom: 1rem;
}

.about-info {
  display: grid;
  gap: 1rem;
}

.about-item {
  display: grid;
  grid-template-columns: auto 1fr;
}

.about-label {
  font-weight: bold;
}

.about-value {
  margin-left: 1rem;
}
</style>
