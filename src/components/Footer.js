import React, { Component } from "react";
import '../App.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">made by</span><a href="https://github.com/Shivam-ops841" id="Name">Shivam Chawla</a> Click HERE!!
          </div>
        </footer>
      </div>
    );
  }
}
