import { Component } from "./component.js";

export class Footer extends Component {
  render() {
    const namaSekolah = this.props.namaSekolah || "SMK Yadika Soreang";
    return `
      <footer style="background: #87CEEB; color: #fffefe; padding: 10px; text-align: center; margin-top: 20px;">
        <p>&copy; 2026 ${namaSekolah}. All rights reserved.</p>
      </footer>
    `;
  }
}