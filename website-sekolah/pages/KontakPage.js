import { Page } from "../component/page.js";

export class KontakPage extends Page {
  renderContent() {
    return `
      <main style="padding: 20px;">
        <h1>Hubungi Kami</h1>
        <p>Email: info@smkyadikasoreang.sch.id</p>
        <p>Telepon: (022) 1234567</p>
      </main>
    `;
  }
}