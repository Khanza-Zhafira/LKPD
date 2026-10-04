export class Component {
  constructor(props = {}) {
    this.props = props;
  }

  render() {
    throw new Error("Method render() harus diimplementasikan!");
  }
}