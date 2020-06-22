import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayList: [],
      viewAdd: false,
      name: "",
      qty: 0,
    };
  }

  componentDidMount() {
    let arrayList = [];
    arrayList.push(
      {
        name: "Pisang Hijau",
        qty: 3,
      },
      {
        name: "Apel Merah",
        qty: 2,
      }
    );
    this.setState({ arrayList });
  }

  tambahProduk() {
    let arrayList = this.state.arrayList;
    let indexId = arrayList.findIndex((value) => value.name == this.state.name);
    if (indexId == -1) {
      arrayList.push({
        name: this.state.name,
        qty: this.state.qty,
      });
      this.setState({ arrayList });
    } else {
      var arrayListCopy = arrayList.slice();
      arrayListCopy[indexId] = Object.assign({}, arrayListCopy[indexId]);
      arrayListCopy[indexId].qty =
        parseInt(arrayListCopy[indexId].qty) + parseInt(this.state.qty);
      this.setState({ arrayList: arrayListCopy });
    }

    this.setState({ viewAdd: false, name: "", qty: 0 });
  }

  hapusProduk() {
    let arrayList = this.state.arrayList;
    let indexId = arrayList.findIndex((value) => value.name == this.state.name);
    arrayList.splice(indexId, 1);
    this.setState({ arrayList });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "300px",
          justifyContent: "center",
        }}
      >
        <div>
          <h2>List Item</h2>

          <div>
            {this.state.arrayList.map((item, index) => {
              return (
                <div>
                  <label> {item.name} </label>
                  <label> {item.qty} </label>
                  <button
                    style={{ marginLeft: 20 }}
                    onClick={() => this.hapusProduk()}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 10 }}>
            <button onClick={() => this.setState({ viewAdd: true })}>+</button>
          </div>
          {this.state.viewAdd && (
            <div style={{ marginTop: 10 }}>
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    style={{ marginLeft: 30 }}
                    value={this.state.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Kuantitas:
                  <input
                    type="number"
                    style={{ marginLeft: 7 }}
                    value={this.state.qty}
                    onChange={(event) =>
                      this.setState({ qty: event.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <button style={{marginTop: 10}} onClick={() => this.tambahProduk()}>Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
