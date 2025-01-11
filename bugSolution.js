useEffect(() => {
  const intervalId = setInterval(() => {
    setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
  }, 1000);

  return () => clearInterval(intervalId);
}, []);