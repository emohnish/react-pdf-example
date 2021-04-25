import "./styles.css";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet
} from "@react-pdf/renderer";
import { useMemo } from "react";

const styles = StyleSheet.create({
  document: {
    display: "block"
  },
  page: {
    flexDirection: "column"
  },
  section: {
    margin: 10,
    padding: 10
  },
  view: {
    border: "1px solid grey"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexShrink: 0,
    margin: "0 20"
  },
  cell: {
    flex: 1,
    border: "1 solid grey" /* px not supported in pdf generation */,
    padding: 5
  }
});

export default function App() {
  return (
    <div>
      <div>
        <h1>Preview</h1>
        <MyDocument />
      </div>
      <DownloadPdf />
    </div>
  );
}

const DownloadPdf = () => {
  return useMemo(
    () => (
      <PDFDownloadLink document={<MyDocument />} fileName="some-nane.pdf">
        {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
      </PDFDownloadLink>
    ),
    []
  );
};

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Html to pdf test</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <View style={styles.section}>
        <Text>S.No.</Text>
        <Text>Name</Text>
        <Text>Header2</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>1</Text>
        <Text style={styles.cell}>Rijin</Text>
        <Text style={styles.cell}>Value 1</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>2</Text>
        <Text style={styles.cell}>Sandeep</Text>
        <Text style={styles.cell}>Value 2</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>3</Text>
        <Text style={styles.cell}>Sen</Text>
        <Text style={styles.cell}>Value3</Text>
      </View>
    </Page>
  </Document>
);
