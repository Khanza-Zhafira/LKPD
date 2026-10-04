import { Component } from "./component.js";

export class Navbar extends Component {
  render() {
    const active = this.props.activePage;
    return `
      <nav style="background: #87CEEB; padding: 10px;">
        <a href="#/" style="color: ${active === 'home' ? 'yellow' : 'white'}; margin-right: 15px;">Home</a>
        <a href="#/about" style="color: ${active === 'about' ? 'yellow' : 'white'}; margin-right: 15px;">About</a>
        <a href="#/kontak" style="color: ${active === 'kontak' ? 'yellow' : 'white'}; margin-right: 15px;">Kontak</a>
        <a href="#/ekskul" style="color: ${active === 'ekskul' ? 'yellow' : 'white'};">Ekskul</a>
      </nav>
    `;
  }
}