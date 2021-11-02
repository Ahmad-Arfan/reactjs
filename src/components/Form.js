import React from "react";
import PDF from "./PDF";

class Form extends React.Component {
  state = {
    content: "",
    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submitPost = (e) => {
    if (!this.state.content) {
      alert("Field masih kosong");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        {!this.state.postSubmitted ? (
          <section className="form mt-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="well well-sm">
                    <form className="form-horizontal" method="post">
                      <fieldset>
                        <legend className="text-center header">Masukan Teks</legend>
                        <div className="form-grup">
                          <span className="col-md-1 col-md-offset-2 text center">
                            <i className="fa fa-pencil-square-o bigicon"></i>
                          </span>
                          <textarea onChange={this.onChange("content")} name="content" type="text" placeholder="Masukkan text" className="form-control" />
                        </div>
                        <div className="form-grup">
                          <button onClick={this.submitPost}>Submit</button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <PDF content={this.state.content} />
        )}
      </>
    );
  }
}

export default Form;
