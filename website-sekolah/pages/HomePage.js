import { Page } from "../component/page.js";

export class HomePage extends Page {
  renderContent() {
    return `
      <main style="padding: 20px;">
        <h1>Selamat Datang di Website Sekolah</h1>
        <p>Ini adalah halaman utama SMK Yadika Soreang.</p>
      </main>
    `;
  }
}