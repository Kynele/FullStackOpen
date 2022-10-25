const successStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};
const failureStyle = {
  color: "red",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = ({ successMessage, failureMessage }) => {
  if (!successMessage && !failureMessage) {
    return null;
  } else if (successMessage) {
    return <div style={successStyle}>{successMessage}</div>;
  }
  return <div style={failureStyle}>{failureMessage}</div>;
};
export default Notification;
