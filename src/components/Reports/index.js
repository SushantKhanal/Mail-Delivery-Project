import * as React from "react";
import { jsPDF } from "jspdf";
import { Button } from "@mui/material";

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generatePDF = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, "This is the first title.");
    doc.addFont("helvetica", "normal");
    doc.text(20, 60, "This is the second title.");
    doc.text(20, 100, "This is the thrid title.");

    doc.save("reports.pdf");
  };

  render() {
    return (
      <div>
        <Button onClick={this.generatePDF}>Download PDF</Button>
      </div>
    );
  }
}

export default Reports;
