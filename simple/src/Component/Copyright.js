const Copyright = (props) => {
  return (
    <>
      {props.copyright.length < 10 ? "all rights reserved":
      <p className="text-center text-muted">{props.copyright} </p>}
    </>
  )
};

export default Copyright;