import { Page } from "../component/page.js";

export class EkskulPage extends Page {
  // Menerapkan encapsulation sesuai instruksi soal
  #daftarEkskul = ["Pramuka", "Paskibra", "PMR", "Futsal", "Jurnalistik"];

  get totalEkskul() {
    return this.#daftarEkskul.length;
  }

  renderContent() {
    const listHtml = this.#daftarEkskul.map(e => `<li>${e}</li>`).join("");
    return `
      <main style="padding: 20px;">
        <h1>Kegiatan Ekstrakurikuler</h1>
        <p>Total Ekstrakurikuler Aktif: ${this.totalEkskul}</p>
        <ul>
          ${listHtml}
        </ul>
      </main>
    `;
  }
}