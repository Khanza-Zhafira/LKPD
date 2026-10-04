import { Page } from "../component/page.js";

export class AboutPage extends Page {
  renderContent() {
    return `
      <main style="padding: 20px;">
        <h1>Tentang Sekolah</h1>
        <p>SMK Yadika Soreang berdiri sejak tahun 2013 dan berakreditasi A.</p>
      </main>
    `;
  }
}