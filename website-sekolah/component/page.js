import { Component } from "./component.js";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

export class Page extends Component {
	render() {
		const navbar = new Navbar({ activePage: this.props.activePage }).render();
		const footer = new Footer().render();
		return `${navbar}${this.renderContent()}${footer}`;
	}

	renderContent() {
		throw new Error("Method renderContent() harus diimplementasikan oleh halaman turunannya!");
	}
}
